import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../../data/siteContent';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../ui/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll detection for backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key & focus management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }

      // Simple focus trap
      if (isOpen && e.key === 'Tab' && mobileMenuRef.current) {
        const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Skip to Content accessible landmark link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-white font-bold rounded shadow-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A1428]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10 h-20'
            : 'bg-[#0A1428]/60 backdrop-blur-sm border-b border-white/5 h-24'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo with slight scale & soft glow hover effect */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="group flex items-center transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] rounded-lg p-1 -m-1"
                aria-label="Letsving Hybrid Technology — Home"
              >
                <Logo variant="full" size="md" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-7 lg:space-x-8 items-center" aria-label="Main Navigation">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `min-h-[44px] inline-flex items-center text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] rounded px-1 ${
                      isActive ? 'text-[#38BDF8] font-extrabold' : 'text-slate-300 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/contact?purpose=project"
                className="ml-4 min-h-[44px] inline-flex items-center px-6 py-2 border border-white/25 text-[11px] font-bold tracking-widest uppercase text-white hover:bg-white hover:text-[#050B18] hover:border-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Menu Hamburger Button (Min 44x44px touch target) */}
            <div className="md:hidden flex items-center">
              <button
                ref={menuButtonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] flex items-center justify-center transition-colors"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Backdrop */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Dimmed backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 top-[80px] bg-black/60 backdrop-blur-sm z-40 md:hidden"
                aria-hidden="true"
              />

              {/* Mobile Drawer */}
              <motion.div
                id="mobile-navigation"
                ref={mobileMenuRef}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="md:hidden fixed left-0 right-0 top-[80px] bg-[#0A1428] border-b border-white/15 shadow-2xl z-50 max-h-[calc(100dvh-80px)] overflow-y-auto"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation Menu"
              >
                <div className="px-6 pt-6 pb-8 space-y-4">
                  {/* Logo inside mobile menu */}
                  <div className="pb-4 mb-2 border-b border-white/10">
                    <Logo variant="full" size="sm" />
                  </div>

                  <nav className="space-y-1">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `min-h-[44px] flex items-center px-4 py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-colors ${
                            isActive
                              ? 'bg-white/10 text-[#38BDF8]'
                              : 'text-slate-200 hover:bg-white/5 hover:text-white'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      to="/contact?purpose=project"
                      onClick={() => setIsOpen(false)}
                      className="min-h-[44px] w-full flex items-center justify-center px-6 py-3 border border-[#1E6FE0] bg-[#1E6FE0] text-xs font-bold tracking-widest uppercase text-white hover:bg-[#1555B0] transition-colors rounded"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

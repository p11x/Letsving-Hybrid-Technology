import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../../data/siteContent';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../ui/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A1428]/90 backdrop-blur-md shadow-sm border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3.5 group">
              <Logo size="md" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-lg font-black tracking-tight uppercase leading-none">
                  <span className="text-white">LETSVING</span>
                  <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">HYBRID</span>
                </div>
                <div className="text-[9px] font-bold tracking-[0.25em] text-primary uppercase mt-1">
                  TECHNOLOGY
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors hover:text-primary ${
                    isActive ? 'text-primary opacity-100' : 'text-white opacity-70'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link to="/contact" className="ml-4 px-6 py-2 border border-white/20 text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-[#050B18] transition-all">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F1E38] border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-[11px] font-bold tracking-widest uppercase ${
                      isActive
                        ? 'bg-white/5 text-primary'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

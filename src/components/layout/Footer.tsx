import { Link } from 'react-router-dom';
import { navigation } from '../../data/siteContent';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#050B18] text-[#F5F5F5] py-16 border-t border-white/10 relative overflow-hidden" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6 group focus:outline-none focus:ring-2 focus:ring-[#38BDF8] rounded p-1 -m-1" aria-label="Letsving Hybrid Technology — Home">
              <Logo variant="full" size="lg" />
            </Link>
            <p className="max-w-md mb-6 text-sm text-slate-300 font-light leading-relaxed">
              Letsving Hybrid Technology is a technology-driven software company delivering innovative and reliable solutions that help businesses grow and transform.
            </p>
            <div className="flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-300 mb-8">
              <span className="text-[#8B7CFF]">AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] inline-block"></span>
              <span className="text-[#8B7CFF]">HYBRID CLOUD</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] inline-block"></span>
              <span className="text-[#8B7CFF]">INNOVATION</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[11px] font-bold tracking-widest text-[#38BDF8] uppercase">Core Offerings</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-medium text-slate-200">Software Development</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-medium text-slate-200">IT Services</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-medium text-slate-200">Hybrid Cloud</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-medium text-slate-200">Digital Innovation</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#38BDF8] uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="min-h-[44px] inline-flex items-center text-xs font-medium text-slate-300 hover:text-[#38BDF8] transition-colors tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-[#38BDF8] rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#38BDF8] uppercase mb-4">Contact</h3>
            <address className="not-italic space-y-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Address:</span>
                <span className="text-xs text-slate-200 mt-1 block leading-relaxed">
                  13th Main Rd, Gayathri Nagar, 3rd Block,<br/>
                  Rajajinagar, Bengaluru,<br/>
                  Karnataka 560010
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Email:</span>
                <a 
                  href="mailto:connect@letsving.com" 
                  className="min-h-[44px] inline-flex items-center hover:text-[#38BDF8] transition-colors text-xs text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#38BDF8] rounded"
                >
                  CONNECT@LETSVING.COM
                </a>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Phone:</span>
                <a 
                  href="tel:+917090592257" 
                  className="min-h-[44px] inline-flex items-center hover:text-[#38BDF8] transition-colors text-xs text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#38BDF8] rounded"
                >
                  +91 70905 92257
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-mono text-slate-400 flex flex-wrap items-center gap-4 sm:gap-6">
            <span>&copy; {new Date().getFullYear()} LETSVING HYBRID TECHNOLOGY PRIVATE LIMITED.</span>
            <Link to="/privacy-policy" className="hover:text-[#38BDF8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#38BDF8] rounded">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#38BDF8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#38BDF8] rounded">
              Terms of Service
            </Link>
          </div>
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
            Smart Technology | Shaping the business
          </div>
        </div>
      </div>
      
      {/* Decorative gradient aura */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#1E6FE0]/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
    </footer>
  );
}

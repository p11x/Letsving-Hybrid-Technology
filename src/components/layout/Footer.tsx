import { Link } from 'react-router-dom';
import { navigation } from '../../data/siteContent';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#050B18] text-[#F5F5F5] py-16 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-4 mb-6 group">
              <Logo size="lg" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-2xl font-black tracking-tight uppercase leading-none">
                  <span className="text-white">LETSVING</span>
                  <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">HYBRID</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-primary uppercase mt-1.5">
                  <span>TECHNOLOGY</span>
                  <span className="text-white/40">|</span>
                  <span className="text-white/50 text-[9px]">PRIVATE LIMITED</span>
                </div>
              </div>
            </Link>
            <p className="max-w-md mb-6 text-sm text-white/60 font-light leading-relaxed">
              Letsving Hybrid Technology is a technology-driven software company delivering innovative and reliable solutions that help businesses grow and transform.
            </p>
            <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-8">
              <span>AI</span>
              <span className="w-1 h-1 rounded-full bg-primary inline-block"></span>
              <span>HYBRID CLOUD</span>
              <span className="w-1 h-1 rounded-full bg-primary inline-block"></span>
              <span>INNOVATION</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[10px] font-bold tracking-widest text-primary uppercase">Core Offerings</div>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-medium text-white/80">Software Development</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-medium text-white/80">IT Services</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-medium text-white/80">Cloud</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-medium text-white/80">Digital Innovation</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold tracking-widest text-primary uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-[11px] font-medium text-white/70 hover:text-primary transition-colors tracking-widest uppercase">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold tracking-widest text-primary uppercase mb-4">Contact</h3>
            <address className="not-italic space-y-3">
              <p className="text-[11px] font-medium text-white/70 tracking-wider">Address: <br/><span className="text-white mt-1 block leading-relaxed">13th Main Rd, Gayathri Nagar, 3rd Block,<br/>Rajajinagar, Bengaluru,<br/>Karnataka 560010</span></p>
              <p className="text-[11px] font-medium text-white/70 tracking-wider">Email: <br/><a href="mailto:connect@letsving.com" className="hover:text-primary transition-colors text-white mt-1 block">CONNECT@LETSVING.COM</a></p>
              <p className="text-[11px] font-medium text-white/70 tracking-wider">Phone: <br/><a href="tel:+917090592257" className="hover:text-primary transition-colors text-white mt-1 block">+91 70905 92257</a></p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-mono opacity-50 flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} LETSVING HYBRID TECHNOLOGY PRIVATE LIMITED.</span>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
            Smart Technology | Shaping the business
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blur */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#38BDF8]/5 rounded-full blur-[120px] pointer-events-none"></div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import Logo from '../components/ui/Logo';
import SEO from '../components/ui/SEO';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-[#0A1428]">
      <SEO 
        title="404 — Page Not Found" 
        description="The page you are looking for may have moved, been renamed, or is no longer available."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-lg mx-auto flex flex-col items-center"
      >
        <div className="mb-6">
          <Logo variant="symbol" size="xl" animated={true} />
        </div>
        
        <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#38BDF8] uppercase mb-2">
          HTTP 404 // RESOURCE NOT LOCATED
        </span>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-4">
          Page Not Found
        </h1>
        <p className="text-base text-slate-300 mb-8 max-w-md mx-auto font-light leading-relaxed">
          The requested system node or route does not exist on the network. Check the URL or return to safety.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2 min-h-[44px]">
            <Home size={18} />
            <span>Return to Home</span>
          </Link>
          <button 
            type="button"
            onClick={() => window.history.back()} 
            className="btn-secondary inline-flex items-center justify-center gap-2 min-h-[44px]"
          >
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

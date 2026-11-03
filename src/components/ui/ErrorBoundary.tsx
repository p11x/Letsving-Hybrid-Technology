import { useRouteError, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';
import Logo from './Logo';
import SEO from './SEO';

export default function ErrorBoundary() {
  const error: any = useRouteError();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-[#0A1428]">
      <SEO 
        title="Application Error" 
        description="An unexpected error occurred while rendering this page."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md mx-auto flex flex-col items-center"
      >
        <div className="mb-6">
          <Logo variant="symbol" size="lg" animated={false} />
        </div>

        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-4">
          <AlertTriangle size={24} />
        </div>

        <span className="text-xs font-mono font-bold tracking-[0.25em] text-red-400 uppercase mb-2">
          SYSTEM FAULT // EXCEPTION
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-4">
          Unexpected Error
        </h1>
        <p className="text-sm text-slate-300 mb-8 max-w-sm mx-auto font-light leading-relaxed">
          {error?.statusText || error?.message || "An unexpected runtime error occurred. Our engineers have been alerted."}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button 
            type="button"
            onClick={() => window.location.reload()}
            className="btn-primary inline-flex items-center justify-center gap-2 min-h-[44px]"
          >
            <RefreshCw size={18} />
            <span>Reload View</span>
          </button>
          <Link to="/" className="btn-secondary inline-flex items-center justify-center gap-2 min-h-[44px]">
            <Home size={18} />
            <span>Home System</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

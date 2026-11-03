import { useRouteError } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, RefreshCw } from 'lucide-react';
import SEO from './SEO';

export default function ErrorBoundary() {
  const error: any = useRouteError();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#0A1428]">
      <SEO 
        title="Error" 
        description="Something went wrong."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg text-white/60 mb-8 max-w-md mx-auto font-light leading-relaxed">
          {error?.statusText || error?.message || "An unexpected error occurred."}
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => window.location.reload()}
            className="btn-primary inline-flex items-center gap-2"
          >
            <RefreshCw size={20} />
            Try Again
          </button>
          <a href="/" className="btn-secondary inline-flex items-center gap-2">
            <Home size={20} />
            Back to Home
          </a>
        </div>
      </motion.div>
    </div>
  );
}

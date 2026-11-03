export default function ITServicesIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full bg-[#0A1428] relative overflow-hidden flex items-center justify-center ${className}`}>
      {/* Network Infrastructure */}
      <div className="w-[80%] h-[80%] relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#0F1E38] border-2 border-[#38BDF8] rounded-xl flex items-center justify-center z-20 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
          <svg className="w-8 h-8 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
        </div>
        
        {/* Nodes */}
        <div className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#050B18] border border-white/20 rounded-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#050B18] border border-white/20 rounded-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-[75%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#050B18] border border-white/20 rounded-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-[80%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#050B18] border border-white/20 rounded-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full -z-10" style={{ pointerEvents: 'none' }}>
          <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="rgba(56,189,248,0.3)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="rgba(56,189,248,0.3)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="rgba(56,189,248,0.3)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="rgba(56,189,248,0.3)" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Uptime metric */}
        <div className="absolute top-4 right-4 bg-[#050B18] border border-white/10 px-3 py-1.5 rounded flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
          <span className="text-[10px] font-mono text-white/70">99.99% UP</span>
        </div>
      </div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-pink-500/10 rounded-full blur-[60px] pointer-events-none"></div>
    </div>
  );
}

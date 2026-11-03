export default function CloudTechIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full bg-[#0A1428] relative overflow-hidden flex items-center justify-center ${className}`}>
      <div className="w-[80%] h-[70%] relative z-10 flex flex-col items-center justify-center">
        {/* Main Cloud */}
        <div className="relative z-20 bg-[#050B18] border border-[#38BDF8]/40 p-6 rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.15)] flex flex-col items-center justify-center mb-10">
          <svg className="w-16 h-16 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
          <div className="absolute -bottom-3 bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#38BDF8] text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider">AWS / Azure / GCP</div>
        </div>

        {/* Containers/Services below */}
        <div className="flex gap-6 w-full justify-center">
          {[1,2,3].map(i => (
            <div key={i} className="flex flex-col items-center">
              {/* Lines connecting up to cloud */}
              <div className="w-px h-10 bg-gradient-to-t from-[#38BDF8]/40 to-transparent relative">
                {/* Upward arrows */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-t border-l border-[#38BDF8] rotate-45"></div>
              </div>
              
              {/* Server Box */}
              <div className="w-12 h-14 bg-[#0F1E38] border border-white/10 rounded-lg flex items-center justify-center -mt-px z-10 relative">
                <div className="w-6 h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-[80px] pointer-events-none"></div>
    </div>
  );
}

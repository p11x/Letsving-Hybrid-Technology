export default function DigitalTransformIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full bg-[#0A1428] relative overflow-hidden flex items-center justify-center ${className}`}>
      <div className="w-[85%] h-[60%] flex items-center justify-between relative z-10">
        {/* Legacy block */}
        <div className="w-[30%] aspect-square bg-[#050B18] border-2 border-white/10 rounded border-dashed flex items-center justify-center flex-col opacity-60">
          <div className="w-1/2 h-2 bg-white/20 mb-2"></div>
          <div className="w-2/3 h-2 bg-white/20 mb-2"></div>
          <div className="w-1/2 h-2 bg-white/20"></div>
          <div className="text-[10px] font-mono text-white/40 mt-4 uppercase">Legacy</div>
        </div>

        {/* Arrow / transformation */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-full h-0.5 bg-gradient-to-r from-white/10 via-[#38BDF8] to-[#ec4899]"></div>
          <div className="absolute right-4 w-3 h-3 border-t-2 border-r-2 border-[#ec4899] rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A1428] px-2 text-[#38BDF8]">
            <svg className="w-6 h-6 animate-[spin_4s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          </div>
        </div>

        {/* Modern block */}
        <div className="w-[30%] aspect-square bg-gradient-to-br from-[#0F1E38] to-[#1a1025] border border-[#ec4899]/30 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.15)] flex items-center justify-center flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#ec4899]/20 blur-xl"></div>
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-[#38BDF8]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ec4899]"></div>
          </div>
          <div className="w-1/2 h-2 bg-white/60 rounded-full mb-2"></div>
          <div className="w-2/3 h-2 bg-white/40 rounded-full"></div>
          <div className="text-[10px] font-mono text-[#ec4899] mt-4 uppercase font-bold">Modern</div>
        </div>
      </div>
    </div>
  );
}

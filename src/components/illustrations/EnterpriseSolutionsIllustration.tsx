export default function EnterpriseSolutionsIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full bg-[#0A1428] relative overflow-hidden flex items-center justify-center ${className}`}>
      <div className="w-[75%] h-[75%] relative z-10 flex flex-col gap-4">
        {/* Top row */}
        <div className="flex gap-4 h-1/3">
          <div className="flex-1 bg-gradient-to-br from-[#0F1E38] to-[#050B18] border border-white/10 rounded-lg p-3 flex flex-col justify-between">
            <div className="text-[9px] text-white/50 font-mono uppercase">ERP Module</div>
            <div className="w-full h-1/2 flex items-end gap-1">
              <div className="w-1/3 h-[40%] bg-[#38BDF8]/40 rounded-t-sm"></div>
              <div className="w-1/3 h-[80%] bg-[#38BDF8]/60 rounded-t-sm"></div>
              <div className="w-1/3 h-[60%] bg-[#38BDF8]/80 rounded-t-sm"></div>
            </div>
          </div>
          <div className="flex-[1.5] bg-[#050B18] border border-[#ec4899]/30 rounded-lg p-3 flex flex-col relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#ec4899]/20 blur-xl"></div>
             <div className="text-[9px] text-[#ec4899] font-mono uppercase mb-2">Central Hub</div>
             <div className="flex gap-2 h-full items-center">
               <div className="w-8 h-8 rounded-full border-2 border-[#ec4899]/40 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-[#ec4899]"></div></div>
               <div className="flex-1 space-y-1.5">
                 <div className="w-full h-1.5 bg-white/10 rounded-full"></div>
                 <div className="w-4/5 h-1.5 bg-white/10 rounded-full"></div>
               </div>
             </div>
          </div>
        </div>
        {/* Bottom row */}
        <div className="flex gap-4 h-1/3">
          <div className="flex-[1.5] bg-[#0F1E38] border border-[#38BDF8]/20 rounded-lg p-3 flex justify-between items-center">
            <div className="space-y-2 w-1/2">
              <div className="text-[9px] text-[#38BDF8] font-mono uppercase">Data Stream</div>
              <div className="w-full h-1 bg-gradient-to-r from-[#38BDF8] to-transparent rounded-full"></div>
              <div className="w-3/4 h-1 bg-gradient-to-r from-[#38BDF8] to-transparent rounded-full opacity-60"></div>
            </div>
            <svg className="w-6 h-6 text-[#38BDF8]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          </div>
          <div className="flex-1 bg-[#050B18] border border-white/10 rounded-lg p-3 flex flex-col justify-center gap-2">
             <div className="flex justify-between items-center">
               <div className="w-1/2 h-2 bg-white/20 rounded"></div>
               <div className="w-2 h-2 rounded-full bg-green-400"></div>
             </div>
             <div className="flex justify-between items-center">
               <div className="w-2/3 h-2 bg-white/10 rounded"></div>
               <div className="w-2 h-2 rounded-full bg-green-400"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

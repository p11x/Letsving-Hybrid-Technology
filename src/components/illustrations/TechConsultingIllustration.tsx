export default function TechConsultingIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full bg-[#0A1428] relative overflow-hidden flex items-center justify-center ${className}`}>
      <div className="w-[85%] h-[60%] relative z-10 flex flex-col justify-center">
        {/* Roadmap Path */}
        <div className="relative h-16 flex items-center">
          {/* Base line */}
          <div className="absolute left-0 right-0 h-0.5 bg-white/10"></div>
          {/* Active line */}
          <div className="absolute left-0 w-2/3 h-0.5 bg-gradient-to-r from-[#38BDF8] to-[#ec4899]"></div>
          
          {/* Checkpoints */}
          <div className="absolute left-[10%] flex flex-col items-center gap-3 -mt-3">
             <div className="w-6 h-6 rounded-full bg-[#0A1428] border-2 border-[#38BDF8] flex items-center justify-center z-10">
               <div className="w-2 h-2 rounded-full bg-[#38BDF8]"></div>
             </div>
             <div className="text-[9px] font-mono text-[#38BDF8] uppercase tracking-wider">Audit</div>
          </div>

          <div className="absolute left-[40%] flex flex-col items-center gap-3 -mt-3">
             <div className="w-6 h-6 rounded-full bg-[#0A1428] border-2 border-[#818cf8] flex items-center justify-center z-10">
               <div className="w-2 h-2 rounded-full bg-[#818cf8]"></div>
             </div>
             <div className="text-[9px] font-mono text-[#818cf8] uppercase tracking-wider">Strategy</div>
          </div>

          <div className="absolute left-[70%] flex flex-col items-center gap-3 -mt-3">
             <div className="w-6 h-6 rounded-full bg-[#0A1428] border-2 border-[#ec4899] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(236,72,153,0.4)]">
               <div className="w-3 h-3 rounded-full bg-[#ec4899] animate-pulse"></div>
             </div>
             <div className="text-[9px] font-mono text-[#ec4899] uppercase tracking-wider font-bold">Execution</div>
          </div>

          <div className="absolute left-[95%] flex flex-col items-center gap-3 -mt-3">
             <div className="w-6 h-6 rounded-full bg-[#0A1428] border-2 border-white/20 flex items-center justify-center z-10">
             </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-[#ec4899]/5 rounded-full blur-[80px] pointer-events-none"></div>
    </div>
  );
}

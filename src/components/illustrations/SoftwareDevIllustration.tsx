export default function SoftwareDevIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full bg-[#0A1428] relative overflow-hidden flex items-center justify-center ${className}`}>
      {/* Code Editor Mockup */}
      <div className="w-[80%] h-[70%] bg-[#050B18] border border-white/10 rounded-lg shadow-2xl flex flex-col relative z-10">
        <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <div className="p-4 flex-1 flex flex-col gap-3 opacity-80 font-mono text-xs">
          <div className="flex gap-4"><span className="text-white/30">1</span><div className="w-3/4 h-2 bg-[#38BDF8]/40 rounded"></div></div>
          <div className="flex gap-4"><span className="text-white/30">2</span><div className="w-1/2 h-2 bg-pink-500/40 rounded ml-4"></div></div>
          <div className="flex gap-4"><span className="text-white/30">3</span><div className="w-2/3 h-2 bg-white/20 rounded ml-4"></div></div>
          <div className="flex gap-4"><span className="text-white/30">4</span><div className="w-1/3 h-2 bg-[#38BDF8]/40 rounded"></div></div>
          <div className="flex gap-4"><span className="text-white/30">5</span><div className="w-4/5 h-2 bg-white/20 rounded ml-4"></div></div>
        </div>
        <div className="absolute bottom-4 right-4 bg-green-500/20 text-green-400 text-[10px] px-2 py-1 rounded border border-green-500/30 font-mono uppercase">Build Passing</div>
      </div>
      <div className="absolute top-1/4 -right-12 w-48 h-48 bg-[#38BDF8]/20 rounded-full blur-[60px] pointer-events-none"></div>
    </div>
  );
}

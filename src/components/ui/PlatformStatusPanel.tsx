import React, { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion, useSpring, useTransform, useMotionValue } from 'motion/react';
import { platformStatusList } from '../../data/platformStatus';

const Sparkline = ({ seed, active, reducedMotion, isVisible }: { seed: number; active: boolean; reducedMotion: boolean; isVisible: boolean }) => {
  const paths = [
    "M0,10 Q5,15 10,10 T20,10 T30,12 T40,8 T50,10",
    "M0,12 L10,8 L15,14 L25,5 L35,12 L45,8 L50,10",
    "M0,10 C10,10 10,2 20,8 C30,14 30,6 40,10 S45,12 50,10",
    "M0,8 L8,12 L16,8 L24,14 L32,6 L40,12 L50,10",
    "M0,10 Q12,5 25,10 T50,8"
  ];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  return (
    <div className="w-12 h-4 relative flex items-center justify-center opacity-85" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 50 20" fill="none" className="overflow-visible">
        <motion.path
          d={paths[seed % paths.length]}
          stroke="#38BDF8"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reducedMotion ? "visible" : "hidden"}
          animate={reducedMotion || (active && isVisible) ? "visible" : "hidden"}
          variants={pathVariants}
        />
      </svg>
      {!reducedMotion && active && isVisible && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1428] to-transparent mix-blend-overlay"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2.5 + seed * 0.3, ease: "linear" }}
        />
      )}
    </div>
  );
};

const UptimeCounter = ({ reducedMotion, isVisible }: { reducedMotion: boolean; isVisible: boolean }) => {
  const [uptime, setUptime] = useState(reducedMotion ? "99.99" : "00.00");
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    let startTime: number;
    let animationFrame: number;
    const duration = 800;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = (99.99 * easeProgress).toFixed(2);
      
      setUptime(current.padStart(5, '0'));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setUptime("99.99");
      }
    };

    animationFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !isVisible) return;
    const interval = setInterval(() => {
      if (Math.random() > 0.75) {
        setFlicker(true);
        setTimeout(() => setFlicker(false), 150);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [reducedMotion, isVisible]);

  return <span className="font-mono text-white font-bold">{flicker ? "99.98" : uptime}%</span>;
};

export default function PlatformStatusPanel() {
  const reducedMotion = useReducedMotion();
  const [sparklinesActive, setSparklinesActive] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2.5deg", "-2.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2.5deg", "2.5deg"]);

  // Pause animations when browser tab is inactive
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSparklinesActive(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    if (reducedMotion) return;
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={panelRef}
      className="relative w-full max-w-md mx-auto [perspective:1000px] select-none"
      aria-label="Platform Realtime Operational Status"
    >
      <motion.div
        style={!reducedMotion ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full relative group transition-transform duration-300"
      >
        {/* Card Shell */}
        <div className="relative bg-gradient-to-b from-[#0F1E38] to-[#050B18] border border-white/15 rounded-xl shadow-[0_0_30px_rgba(56,189,248,0.06)] group-hover:shadow-[0_0_50px_rgba(56,189,248,0.12)] transition-shadow duration-500 overflow-hidden flex flex-col justify-between p-6 sm:p-7 min-h-[420px]">
          
          {/* Animated Background Subtle Grid */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] flex items-center justify-center overflow-hidden" aria-hidden="true">
            <div 
              className="w-full h-full"
              style={{ 
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
              }}
            />
          </div>

          {/* Ambient Cyber Scanning Laser Line */}
          {!reducedMotion && isTabVisible && (
            <motion.div 
              animate={{ top: ["-10%", "110%"] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent blur-[1px] shadow-[0_0_10px_rgba(56,189,248,0.6)] z-0 pointer-events-none"
              aria-hidden="true"
            />
          )}

          {/* Crisp Corner Brackets */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#38BDF8]/60 z-20 pointer-events-none" aria-hidden="true"></div>
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#38BDF8]/60 z-20 pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#38BDF8]/60 z-20 pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#38BDF8]/60 z-20 pointer-events-none" aria-hidden="true"></div>

          {/* Header */}
          <div className="flex justify-between items-center relative z-10 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
                PLATFORM STATUS // OPERATIONAL
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>LIVE</span>
            </div>
          </div>

          {/* Service Rows with Even Spacing */}
          <ul 
            className="space-y-3.5 w-full relative z-10 my-4"
            aria-live="polite"
            aria-atomic="true"
          >
            {platformStatusList.map((item, index) => (
              <li 
                key={item.label}
                className="flex justify-between items-center text-xs font-mono text-slate-200 px-3 py-2 rounded bg-white/[0.03] border-l-2 border-[#38BDF8]/40 hover:bg-white/[0.06] hover:border-[#38BDF8] transition-colors"
              >
                <span className="tracking-wider uppercase font-medium">{item.label}</span>
                <div className="flex items-center gap-3">
                  <Sparkline 
                    seed={index} 
                    active={sparklinesActive} 
                    reducedMotion={!!reducedMotion}
                    isVisible={isTabVisible}
                  />
                  <div className="flex items-center gap-2 min-w-[75px] justify-end">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{item.status}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" aria-hidden="true"></span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Footer Telemetry Stats */}
          <div className="text-xs font-mono leading-relaxed text-slate-300 relative z-10 border-t border-white/10 pt-4 space-y-1.5">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">UPTIME:</span>
              <UptimeCounter reducedMotion={!!reducedMotion} isVisible={isTabVisible} />
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">REGION:</span>
              <span className="text-white font-bold">GLOBAL // ASIA-PACIFIC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">LATENCY:</span>
              <span className="text-emerald-400 font-bold">&lt; 14ms (P99)</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

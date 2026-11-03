import React, { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion, useSpring, useTransform, useMotionValue } from 'motion/react';
import { platformStatusList } from '../../data/platformStatus';

const Sparkline = ({ seed, active, reducedMotion }: { seed: number, active: boolean, reducedMotion: boolean }) => {
  // 5 visually distinct base paths for the 5 rows
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
    <div className="w-12 h-4 relative flex items-center justify-center opacity-70">
      <svg width="100%" height="100%" viewBox="0 0 50 20" fill="none" className="overflow-visible">
        <motion.path
          d={paths[seed % paths.length]}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
          initial={reducedMotion ? "visible" : "hidden"}
          animate={reducedMotion ? "visible" : (active ? "visible" : "hidden")}
          variants={pathVariants}
        />
      </svg>
      {/* Fluctuating opacity for non-reduced motion */}
      {!reducedMotion && active && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1428] to-transparent mix-blend-overlay"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2 + seed * 0.3, ease: "linear" }}
        />
      )}
    </div>
  );
};

const UptimeCounter = ({ reducedMotion }: { reducedMotion: boolean }) => {
  const [uptime, setUptime] = useState(reducedMotion ? "99.99" : "00.00");
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    let startTime: number;
    let animationFrame: number;
    const duration = 800; // 800ms

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
    if (reducedMotion) return;
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setFlicker(true);
        setTimeout(() => setFlicker(false), 150);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return <span>{flicker ? "99.98" : uptime}%</span>;
};

const TypewriterText = ({ text, reducedMotion }: { text: string, reducedMotion: boolean }) => {
  const [displayed, setDisplayed] = useState(reducedMotion ? text : "");

  useEffect(() => {
    if (reducedMotion) return;
    
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i === text.length) clearInterval(interval);
    }, 15);
    
    return () => clearInterval(interval);
  }, [text, reducedMotion]);

  return (
    <span>
      {displayed}
      {!reducedMotion && displayed.length < text.length && <span className="animate-pulse">_</span>}
    </span>
  );
};

export default function PlatformStatusPanel() {
  const reducedMotion = useReducedMotion();
  const [sparklinesActive, setSparklinesActive] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  useEffect(() => {
    // Delay sparklines until list stagger is mostly done
    const timer = setTimeout(() => {
      setSparklinesActive(true);
    }, 1000);
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
    <div className="relative w-full aspect-[4/5] [perspective:1000px]">
      <motion.div
        style={!reducedMotion ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full relative group"
      >
        {/* Card Shell */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1428] to-[#050B18] border border-white/10 shadow-[0_0_30px_rgba(56,189,248,0.03)] group-hover:shadow-[0_0_50px_rgba(56,189,248,0.08)] transition-shadow duration-700 overflow-hidden flex flex-col justify-between p-6 z-10">
          
          {/* Animated Background Grid */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
            <motion.div 
              animate={!reducedMotion ? { backgroundPosition: ["0px 0px", "24px 24px"] } : {}}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="w-[200%] h-[200%]"
              style={{ 
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
              }}
            />
          </div>

          {/* Ambient Scanning Line */}
          {!reducedMotion && (
            <motion.div 
              animate={{ top: ["-10%", "110%"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-primary/20 blur-[1px] shadow-[0_0_8px_rgba(56,189,248,0.4)] z-0 pointer-events-none"
            />
          )}

          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30 z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30 z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30 z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30 z-20 pointer-events-none"></div>

          {/* Header */}
          <div className="flex justify-between items-start relative z-10">
            <span className="text-[10px] font-mono opacity-50 text-[#F5F5F5]">
              <TypewriterText text="PLATFORM STATUS // OPERATIONAL" reducedMotion={!!reducedMotion} />
            </span>
            <div className="relative flex items-center justify-center w-3 h-3 mt-0.5">
              <span className="absolute w-2 h-2 rounded-full bg-primary z-10"></span>
              {!reducedMotion ? (
                <motion.span 
                  animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                  className="absolute w-2 h-2 rounded-full border border-primary z-0"
                ></motion.span>
              ) : (
                <span className="absolute w-2 h-2 rounded-full bg-primary animate-pulse z-0"></span>
              )}
            </div>
          </div>

          {/* Service Rows */}
          <motion.ul 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: reducedMotion ? 0 : 0.6 } }
            }}
            initial="hidden"
            animate="visible"
            className="space-y-3 w-full relative z-10"
          >
            {platformStatusList.map((item, index) => (
              <motion.li 
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: reducedMotion ? 0 : 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
                className="flex justify-between items-center text-[10px] font-mono text-[#F5F5F5] group/row relative px-3 py-2 -mx-3 hover:bg-white/[0.02] border-l-2 border-transparent hover:border-primary/40 transition-colors duration-300"
              >
                <span className="opacity-80 tracking-wider uppercase">{item.label}</span>
                <div className="flex items-center gap-4">
                  <Sparkline seed={index} active={sparklinesActive} reducedMotion={!!reducedMotion} />
                  <div className="flex items-center gap-2 min-w-[70px] justify-end">
                    <span className="opacity-90 tracking-widest uppercase">{item.status}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'operational' ? 'bg-primary/80 shadow-[0_0_5px_rgba(56,189,248,0.5)]' : item.status === 'degraded' ? 'bg-yellow-400' : 'bg-red-500'}`}></span>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Footer Stats */}
          <div className="text-[10px] font-mono leading-relaxed opacity-60 text-[#F5F5F5] relative z-10 border-t border-white/5 pt-4">
            <div className="flex justify-between">
              <span>UPTIME:</span>
              <UptimeCounter reducedMotion={!!reducedMotion} />
            </div>
            <div className="flex justify-between">
              <span>REGION:</span>
              <span>GLOBAL</span>
            </div>
            <div className="flex justify-between">
              <span>ENV:</span>
              <span>PROD</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

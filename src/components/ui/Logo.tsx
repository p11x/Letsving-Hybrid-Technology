import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'mark' | 'horizontal' | 'full' | 'card';
  theme?: 'dark' | 'light' | 'auto';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  withBox?: boolean;
}

export default function Logo({ 
  className = "", 
  variant = "mark",
  theme = "dark",
  size = "md",
  withBox = true
}: LogoProps) {
  // Size presets for emblem box
  const boxSizes = {
    xs: "w-7 h-7 p-1 rounded-lg",
    sm: "w-9 h-9 p-1.5 rounded-xl",
    md: "w-11 h-11 p-2 rounded-xl",
    lg: "w-14 h-14 p-2.5 rounded-2xl",
    xl: "w-20 h-20 p-3 rounded-2xl",
    '2xl': "w-32 h-32 p-4 rounded-3xl",
    custom: ""
  };

  // Size presets for bare emblem SVG
  const svgSizes = {
    xs: "w-5 h-5",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-16 h-16",
    '2xl': "w-24 h-24",
    custom: ""
  };

  const currentBoxClass = boxSizes[size];
  const currentSvgClass = svgSizes[size];

  // Advanced Futuristic Seamless Integration SVG Mark
  // Represents Letsving Hybrid Technology: interlocking deep indigo & vibrant electric blue convergence loops
  const LogoMark = ({ customClass = "" }: { customClass?: string }) => (
    <svg 
      className={`${customClass || currentSvgClass} transition-transform duration-300 group-hover:scale-105`}
      viewBox="0 0 500 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Core Electric Radial Aura */}
        <radialGradient id="lhtAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.32" />
          <stop offset="50%" stopColor="#312E81" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0" />
        </radialGradient>

        {/* Deep Indigo Facet Gradients */}
        <linearGradient id="lhtIndigoPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4338CA" />
          <stop offset="40%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </linearGradient>

        <linearGradient id="lhtIndigoShade" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="70%" stopColor="#2E1065" />
          <stop offset="100%" stopColor="#3730A3" />
        </linearGradient>

        {/* Vibrant Electric Blue Facet Gradients */}
        <linearGradient id="lhtElectricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="40%" stopColor="#00A3FF" />
          <stop offset="85%" stopColor="#0055FF" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        <linearGradient id="lhtElectricAccent" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="30%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Hybrid Interlocking Bridge Gradient (Indigo merging into Electric Blue) */}
        <linearGradient id="lhtBridgeGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="25%" stopColor="#312E81" />
          <stop offset="55%" stopColor="#4F46E5" />
          <stop offset="80%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>

        {/* Dynamic Shadow Filter */}
        <filter id="lhtShadow" x="-20%" y="-20%" width="140%" height="145%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Ambient center aura */}
      <ellipse cx="250" cy="205" rx="180" ry="70" fill="url(#lhtAura)" />

      <g filter="url(#lhtShadow)">
        {/* BACK INTEGRATION CONNECTOR (Deep Indigo loop wrapping through behind) */}
        <path 
          d="M 175 145 C 130 95 85 140 85 195 C 85 255 145 285 205 270 C 255 258 290 205 330 170 C 375 130 425 150 420 205" 
          fill="none" 
          stroke="url(#lhtIndigoShade)" 
          strokeWidth="28" 
          strokeLinecap="round" 
        />

        {/* FUTURISTIC FACETED 'L' HYBRID WING (Letsving Vector in Deep Indigo) */}
        {/* Left vertical pillar facet */}
        <polygon points="120,95 155,70 155,270 120,290" fill="url(#lhtIndigoShade)" />
        <polygon points="155,70 195,90 195,250 155,270" fill="url(#lhtIndigoPrimary)" />
        <polygon points="120,95 155,70 195,90 160,110" fill="#6366F1" />

        {/* Horizontal base arm connecting seamlessly into the center nexus */}
        <polygon points="155,270 195,250 280,270 240,295" fill="url(#lhtIndigoPrimary)" />

        {/* SEAMLESS CONVERGENCE NODE - INTERSECTING HYBRID MÖBIUS BANDS */}
        <path 
          d="M 125 160 C 175 90 270 110 320 180 C 365 240 420 260 415 190 C 410 135 345 130 285 175 C 235 210 185 280 120 230" 
          fill="none" 
          stroke="url(#lhtBridgeGrad)" 
          strokeWidth="26" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* VIBRANT ELECTRIC BLUE ASCENDING LOOP (Hybrid Tech Conduit) */}
        <path 
          d="M 195 240 C 235 285 300 290 350 260 C 415 220 425 145 365 105 C 315 70 245 110 205 170 C 170 220 190 265 240 280" 
          fill="none" 
          stroke="url(#lhtElectricGrad)" 
          strokeWidth="24" 
          strokeLinecap="round" 
        />

        {/* RIGHT ELECTRIC FACETED PILLAR (The 'H' Right Arm in Electric Blue) */}
        <polygon points="310,110 345,85 345,285 310,305" fill="url(#lhtElectricAccent)" />
        <polygon points="345,85 380,100 380,265 345,285" fill="url(#lhtElectricGrad)" />
        <polygon points="310,110 345,85 380,100 345,120" fill="#E0F2FE" />

        {/* HYBRID CROSS-INTEGRATION CONDUIT */}
        <polygon points="195,170 310,170 310,205 195,205" fill="#1E1B4B" />
        <polygon points="195,175 310,175 310,195 195,195" fill="url(#lhtElectricAccent)" opacity="0.85" />

        {/* CENTRAL QUANTUM ENERGY CORE (The convergence diamond nexus) */}
        <polygon points="250,155 275,185 250,215 225,185" fill="#00F0FF" />
        <polygon points="250,165 267,185 250,205 233,185" fill="#FFFFFF" opacity="0.9" />

        {/* SPECULAR GLOSSY LIGHT WAVEGUIDE */}
        <path 
          d="M 140 135 C 180 85 260 100 310 165 C 345 210 395 240 405 190" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeOpacity="0.85" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />

        {/* FUTURE TECH CIRCUIT DATA NODES (Electric Blue & Indigo Photonic Cascade) */}
        <rect x="385" y="80" width="16" height="16" rx="3" fill="#00F0FF" />
        <rect x="410" y="65" width="18" height="18" rx="3" fill="#38BDF8" />
        <rect x="395" y="40" width="14" height="14" rx="2.5" fill="#00A3FF" />
        <rect x="424" y="32" width="12" height="12" rx="2" fill="#0066FF" />
        <rect x="444" y="24" width="10" height="10" rx="2" fill="#38BDF8" />
        <rect x="438" y="52" width="15" height="15" rx="3" fill="#6366F1" />
        <rect x="412" y="95" width="12" height="12" rx="2" fill="#0284C7" />
        <rect x="398" y="120" width="14" height="14" rx="2.5" fill="#0055FF" />
        <rect x="385" y="105" width="12" height="12" rx="2" fill="#7DD3FC" />

        {/* Left Side Subtle Indigo-Electric Data Nodes */}
        <circle cx="85" cy="195" r="5" fill="#6366F1" />
        <circle cx="95" cy="225" r="4" fill="#00F0FF" />
        <circle cx="115" cy="265" r="3.5" fill="#38BDF8" />
      </g>
    </svg>
  );

  // When boxed mark is requested
  const BoxedLogoMark = ({ boxClass = "", customSvgClass = "" }: { boxClass?: string; customSvgClass?: string }) => (
    <div className={`bg-white shadow-md shadow-black/10 border border-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${boxClass || currentBoxClass} ${className}`}>
      <LogoMark customClass={customSvgClass || currentSvgClass} />
    </div>
  );

  if (variant === 'mark') {
    return withBox ? <BoxedLogoMark /> : <LogoMark customClass={className} />;
  }

  const isLight = theme === 'light';
  const textColorHigh = isLight ? 'text-slate-900' : 'text-white';
  const textColorSub = isLight ? 'text-slate-600' : 'text-slate-300';
  const textMuted = isLight ? 'text-slate-400' : 'text-white/40';

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 group ${className}`}>
        {withBox ? (
          <BoxedLogoMark boxClass="w-11 h-11 p-2 rounded-xl" customSvgClass="w-full h-full" />
        ) : (
          <LogoMark customClass="w-10 h-10 flex-shrink-0" />
        )}
        <div className="flex flex-col justify-center select-none">
          <div className="flex items-center gap-1.5 font-black tracking-tight text-lg leading-tight uppercase">
            <span className={textColorHigh}>LETSVING</span>
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              HYBRID
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.25em] uppercase text-primary">
            <span>TECHNOLOGY</span>
          </div>
        </div>
      </div>
    );
  }

  // Full Card Lockup on a white rounded square box
  if (variant === 'card' || (variant === 'full' && withBox)) {
    return (
      <div className={`bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/25 border border-slate-100/90 flex flex-col items-center text-center select-none max-w-sm mx-auto group ${className}`}>
        {/* 3D Futuristic Emblem with subtle breathing scale on group hover */}
        <div className="w-44 h-36 flex items-center justify-center mb-4">
          <LogoMark customClass="w-full h-full" />
        </div>
        
        {/* LETSVING HYBRID */}
        <div className="flex items-center gap-2 font-black text-2xl sm:text-3xl tracking-tight uppercase leading-none">
          <span className="text-slate-900">LETSVING</span>
          <span className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            HYBRID
          </span>
        </div>

        {/* — TECHNOLOGY — */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0284C7] mt-3 uppercase w-full justify-center">
          <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full inline-block"></span>
          <span>TECHNOLOGY</span>
          <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-l from-indigo-600 to-cyan-400 rounded-full inline-block"></span>
        </div>

        {/* PRIVATE LIMITED */}
        <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] uppercase text-slate-500 mt-2">
          PRIVATE LIMITED
        </div>

        {/* AI • HYBRID CLOUD • INNOVATION */}
        <div className="flex items-center gap-2.5 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-slate-700 mt-4 pt-3 border-t border-slate-100 w-full justify-center">
          <span>AI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] inline-block"></span>
          <span>HYBRID CLOUD</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] inline-block"></span>
          <span>INNOVATION</span>
        </div>
      </div>
    );
  }

  // Full stacked lockup without card wrapper
  return (
    <div className={`flex flex-col items-center text-center select-none group ${className}`}>
      <BoxedLogoMark boxClass="w-28 h-28 p-3 rounded-2xl mb-4" customSvgClass="w-full h-full" />
      
      {/* LETSVING HYBRID */}
      <div className="flex items-center gap-2 font-black text-2xl md:text-3xl tracking-tight uppercase leading-none">
        <span className={textColorHigh}>LETSVING</span>
        <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          HYBRID
        </span>
      </div>

      {/* — TECHNOLOGY — */}
      <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.25em] text-primary mt-2 uppercase">
        <span className="h-[1.5px] w-6 md:w-8 bg-gradient-to-r from-transparent to-primary inline-block"></span>
        <span>TECHNOLOGY</span>
        <span className="h-[1.5px] w-6 md:w-8 bg-gradient-to-l from-transparent to-primary inline-block"></span>
      </div>

      {/* PRIVATE LIMITED */}
      <div className={`text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase ${textMuted} mt-1.5`}>
        PRIVATE LIMITED
      </div>

      {/* AI • HYBRID CLOUD • INNOVATION */}
      <div className={`flex items-center gap-3 text-[9px] md:text-[10px] font-semibold tracking-[0.2em] uppercase ${textColorSub} mt-3`}>
        <span>AI</span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
        <span>HYBRID CLOUD</span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
        <span>INNOVATION</span>
      </div>
    </div>
  );
}

import React from 'react';

export interface LogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'mono';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  theme?: 'dark' | 'light';
  animated?: boolean;
}

export default function Logo({
  className = '',
  variant = 'full',
  size = 'md',
  theme = 'dark',
  animated = true,
}: LogoProps) {
  const isLight = theme === 'light';
  const isMono = variant === 'mono';

  // Sizing definitions for symbol & full layout
  const symbolDimensions: Record<string, { width: number; height: number; boxClass: string }> = {
    sm: { width: 28, height: 28, boxClass: 'w-7 h-7' },
    md: { width: 36, height: 36, boxClass: 'w-9 h-9' },
    lg: { width: 48, height: 48, boxClass: 'w-12 h-12' },
    xl: { width: 64, height: 64, boxClass: 'w-16 h-16' },
    custom: { width: 40, height: 40, boxClass: '' },
  };

  const dim = symbolDimensions[size] || symbolDimensions.md;

  // Unique IDs for SVG filters and gradients to prevent DOM collisions
  const gradId = `lhtGrad-${theme}-${variant}`;
  const glowId = `lhtGlow-${theme}-${variant}`;
  const textGradId = `lhtTextGrad-${theme}-${variant}`;

  // Primary colors
  const strokeColor = isMono
    ? (isLight ? '#0A1428' : '#FFFFFF')
    : `url(#${gradId})`;

  const nodeColorA = isMono ? (isLight ? '#0A1428' : '#FFFFFF') : '#38BDF8';
  const nodeColorB = isMono ? (isLight ? '#0A1428' : '#FFFFFF') : '#8B7CFF';
  const nodeColorC = isMono ? (isLight ? '#0A1428' : '#FFFFFF') : '#1E6FE0';

  const textColorPrimary = isLight ? 'text-[#0A1428]' : 'text-white';
  const textColorSecondary = isMono
    ? (isLight ? 'text-[#0A1428]/70' : 'text-white/70')
    : 'bg-gradient-to-r from-[#1E6FE0] via-[#38BDF8] to-[#8B7CFF] bg-clip-text text-transparent';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Inline styles for CSS-only draw-on and node pulse animation */}
      {animated && (
        <style>{`
          @keyframes lhtDrawStroke {
            0% {
              stroke-dashoffset: 240;
              opacity: 0.2;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 1;
            }
          }
          @keyframes lhtPulseGlow {
            0%, 100% {
              transform: scale(1);
              opacity: 0.95;
            }
            50% {
              transform: scale(1.18);
              opacity: 1;
              filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.9));
            }
          }
          .lht-stroke-animated {
            stroke-dasharray: 240;
            stroke-dashoffset: 0;
            animation: lhtDrawStroke 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .lht-node-pulse {
            transform-origin: center;
            animation: lhtPulseGlow 3.5s ease-in-out infinite;
          }
          .lht-node-pulse-delayed {
            transform-origin: center;
            animation: lhtPulseGlow 3.5s ease-in-out infinite 1.2s;
          }
          @media (prefers-reduced-motion: reduce) {
            .lht-stroke-animated,
            .lht-node-pulse,
            .lht-node-pulse-delayed {
              animation: none !important;
            }
          }
        `}</style>
      )}

      {/* Scalable SVG Symbol */}
      <svg
        width={dim.width}
        height={dim.height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E6FE0" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#8B7CFF" />
          </linearGradient>

          <linearGradient id={textGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E6FE0" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#8B7CFF" />
          </linearGradient>

          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#38BDF8" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Ambient background container for crispness on all sizes */}
        <rect
          width="64"
          height="64"
          rx="14"
          fill={isLight ? '#F8FAFC' : '#0F1E38'}
          stroke={isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'}
          strokeWidth="1.5"
        />

        {/* The Geometric L-H Hybrid Circuit Monogram */}
        <g filter={isMono ? undefined : `url(#${glowId})`}>
          {/* Main 'L' and 'H' interwoven circuit pathways */}
          <path
            d="M 18 14 L 18 46 L 36 46"
            stroke={strokeColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animated ? 'lht-stroke-animated' : undefined}
          />

          <path
            d="M 46 18 L 46 50"
            stroke={strokeColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animated ? 'lht-stroke-animated' : undefined}
          />

          {/* Cross integration conduit */}
          <path
            d="M 18 32 L 46 32"
            stroke={strokeColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animated ? 'lht-stroke-animated' : undefined}
          />

          {/* Dynamic data bus connection */}
          <path
            d="M 36 46 L 46 32"
            stroke={isMono ? strokeColor : '#38BDF8'}
            strokeWidth="3.5"
            strokeDasharray="2 3"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* 3 Interactive Network Node Dots */}
          <circle
            cx="18"
            cy="14"
            r="4"
            fill={nodeColorA}
            className={animated ? 'lht-node-pulse' : undefined}
          />
          <circle cx="18" cy="14" r="1.8" fill="#FFFFFF" />

          <circle
            cx="32"
            cy="32"
            r="3.5"
            fill={nodeColorB}
            className={animated ? 'lht-node-pulse-delayed' : undefined}
          />
          <circle cx="32" cy="32" r="1.5" fill="#FFFFFF" />

          <circle
            cx="46"
            cy="50"
            r="4"
            fill={nodeColorC}
            className={animated ? 'lht-node-pulse' : undefined}
          />
          <circle cx="46" cy="50" r="1.8" fill="#FFFFFF" />
        </g>
      </svg>

      {/* Wordmark (rendered when variant is 'full' or 'mono') */}
      {variant !== 'symbol' && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-1.5 font-black tracking-tight uppercase text-[17px] sm:text-[18px]">
            <span className={textColorPrimary}>LETSVING</span>
            <span className={textColorSecondary}>HYBRID</span>
          </div>
          <div
            className={`text-[9px] font-mono font-bold tracking-[0.28em] uppercase mt-1 ${
              isLight ? 'text-slate-600' : 'text-[#38BDF8]'
            }`}
          >
            TECHNOLOGY
          </div>
        </div>
      )}
    </div>
  );
}

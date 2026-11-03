import React from 'react';

const BaseIllustration = ({ className = "", children }: { className?: string, children: React.ReactNode }) => (
  <div className={`w-full h-full bg-[#0A1428] relative overflow-hidden flex items-center justify-center ${className}`}>
    <div className="w-[80%] h-[80%] relative z-10 flex items-center justify-center">
      {children}
    </div>
    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-[60px] pointer-events-none"></div>
  </div>
);

export const FinanceIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <div className="flex items-end gap-2 h-24">
      {[40, 70, 50, 90, 65, 100].map((h, i) => (
        <div key={i} className="w-4 bg-gradient-to-t from-[#1E6FE0] to-[#38BDF8] rounded-t-sm" style={{ height: `${h}%` }}></div>
      ))}
    </div>
    <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full border-2 border-[#38BDF8] flex items-center justify-center text-[#38BDF8] font-bold text-xs shadow-[0_0_15px_rgba(56,189,248,0.4)]">
      $
    </div>
  </BaseIllustration>
);

export const InsuranceIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <svg className="w-24 h-24 text-[#38BDF8]/80 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
    <div className="absolute bottom-1/4 right-1/4 bg-[#0F1E38] border border-white/20 p-2 rounded shadow-lg">
      <div className="w-6 h-1 bg-[#38BDF8]/50 rounded mb-1"></div>
      <div className="w-4 h-1 bg-white/20 rounded"></div>
    </div>
  </BaseIllustration>
);

export const EducationIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <svg className="w-24 h-24 text-[#38BDF8]/80 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 14v7" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </BaseIllustration>
);

export const HealthcareIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <svg className="w-24 h-24 text-[#38BDF8]/80 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
    <div className="absolute flex items-center justify-center inset-0 pointer-events-none">
       <svg className="w-10 h-10 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
       </svg>
    </div>
  </BaseIllustration>
);

export const MediaIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <svg className="w-24 h-24 text-[#38BDF8]/80 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  </BaseIllustration>
);

export const OilGasIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <div className="relative w-20 h-24 border-b-2 border-[#1E6FE0] flex items-end justify-center">
       <div className="w-12 h-16 border-2 border-[#38BDF8]/80 relative flex justify-center">
         <div className="w-6 h-8 border-2 border-[#38BDF8]/50 absolute bottom-0"></div>
         <div className="w-full h-px bg-[#38BDF8]/50 absolute top-4"></div>
         <div className="w-full h-px bg-[#38BDF8]/50 absolute top-8"></div>
       </div>
    </div>
  </BaseIllustration>
);

export const RetailIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <svg className="w-24 h-24 text-[#38BDF8]/80 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  </BaseIllustration>
);

export const LogisticsIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <svg className="w-24 h-24 text-[#38BDF8]/80 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </BaseIllustration>
);

export const TravelIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <svg className="w-24 h-24 text-[#38BDF8]/80 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </BaseIllustration>
);

export const PublicSectorIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <div className="flex flex-col items-center">
      <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[20px] border-[#38BDF8]/80"></div>
      <div className="w-20 h-2 bg-[#38BDF8]/80 mt-1 mb-2"></div>
      <div className="flex gap-3 px-2">
        {[1,2,3,4].map(i => <div key={i} className="w-2 h-16 border-x border-[#38BDF8]/50"></div>)}
      </div>
      <div className="w-24 h-2 bg-[#38BDF8]/80 mt-2"></div>
    </div>
  </BaseIllustration>
);

export const EnergyIllustration = ({ className = "" }: { className?: string }) => (
  <BaseIllustration className={className}>
    <svg className="w-24 h-24 text-[#38BDF8]/80 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </BaseIllustration>
);

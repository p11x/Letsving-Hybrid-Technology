import { motion } from 'motion/react';
import { ShieldCheck, Users, Zap, CheckCircle2 } from 'lucide-react';
import Logo from '../components/ui/Logo';
import SEO from '../components/ui/SEO';

export default function AboutPage() {
  return (
    <div className="w-full">
      <SEO 
        title="About Us — Vision & Leadership" 
        description="Learn more about Letsving Hybrid Technology, our 16+ years of industry experience, and our architectural commitment to digital transformation."
        canonicalUrl="/about"
      />

      <section className="bg-[#050B18] py-24 sm:py-32 text-center border-b border-white/5 relative overflow-hidden" aria-label="About Us Header">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#1E6FE0]/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter uppercase text-[#F5F5F5] mb-4">
              About Us
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Letsving Hybrid Technology is a technology-driven software company delivering innovative and reliable solutions that help businesses grow and transform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#0A1428]" aria-label="Company Vision and Pillars">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-20">
            
            {/* Brand Logo Showcase Card */}
            <div className="flex justify-center items-center py-6">
              <div className="bg-[#0F1E38] border border-white/15 p-8 sm:p-12 rounded-2xl shadow-2xl flex flex-col items-center text-center max-w-md w-full">
                <Logo variant="symbol" size="xl" animated={true} />
                <div className="mt-6 flex flex-col items-center">
                  <div className="flex items-center gap-1.5 font-black tracking-tight uppercase text-2xl">
                    <span className="text-white">LETSVING</span>
                    <span className="bg-gradient-to-r from-[#1E6FE0] via-[#38BDF8] to-[#8B7CFF] bg-clip-text text-transparent">HYBRID</span>
                  </div>
                  <div className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#38BDF8] mt-1">
                    TECHNOLOGY
                  </div>
                  <div className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase mt-2">
                    PRIVATE LIMITED
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-3 text-xs font-mono text-slate-300">
                  <span>ENTERPRISE GRADE</span>
                  <span className="text-[#38BDF8]">&bull;</span>
                  <span>HYBRID CLOUD</span>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-[#1E6FE0] pl-6 sm:pl-8 py-2">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-3 block">Our Vision</span>
              <p className="text-xl sm:text-2xl md:text-3xl text-[#F5F5F5] font-light leading-relaxed">
                To become a trusted technology partner for businesses worldwide by delivering scalable, intelligent, and future-ready digital solutions that simplify business processes, improve efficiency, and create measurable value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-[#0F1E38] border border-white/10 p-8 rounded-xl hover:border-[#38BDF8]/40 transition-colors group">
                <ShieldCheck className="w-10 h-10 text-[#38BDF8] mb-6 group-hover:scale-105 transition-transform" />
                <h2 className="text-lg font-bold tracking-tight uppercase text-[#F5F5F5] mb-3">16+ Years Experience</h2>
                <p className="text-slate-300 font-light leading-relaxed text-sm">
                  Deep industry expertise delivering robust and reliable technology solutions that stand the test of time.
                </p>
              </div>
              <div className="bg-[#0F1E38] border border-white/10 p-8 rounded-xl hover:border-[#38BDF8]/40 transition-colors group">
                <Users className="w-10 h-10 text-[#38BDF8] mb-6 group-hover:scale-105 transition-transform" />
                <h2 className="text-lg font-bold tracking-tight uppercase text-[#F5F5F5] mb-3">Customer-Focused</h2>
                <p className="text-slate-300 font-light leading-relaxed text-sm">
                  We combine technology with a human-centric approach to build platforms that solve real business challenges.
                </p>
              </div>
              <div className="bg-[#0F1E38] border border-white/10 p-8 rounded-xl hover:border-[#38BDF8]/40 transition-colors group">
                <Zap className="w-10 h-10 text-[#38BDF8] mb-6 group-hover:scale-105 transition-transform" />
                <h2 className="text-lg font-bold tracking-tight uppercase text-[#F5F5F5] mb-3">Digital Transformation</h2>
                <p className="text-slate-300 font-light leading-relaxed text-sm">
                  Iterative delivery, agile methodologies, and seamless cloud integration to keep you ahead of the curve.
                </p>
              </div>
            </div>

            {/* Core Values List */}
            <div className="bg-[#0F1E38] border border-white/10 p-8 sm:p-10 rounded-xl">
              <h2 className="text-xl font-bold uppercase tracking-tight text-white mb-6">Our Operating Standards</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#38BDF8] flex-shrink-0" />
                  <span>Zero-Trust Security Architecture by default</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#38BDF8] flex-shrink-0" />
                  <span>99.99% Availability SLAs for production workloads</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#38BDF8] flex-shrink-0" />
                  <span>Transparent iterative delivery cycles</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#38BDF8] flex-shrink-0" />
                  <span>Cross-functional engineering squads</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

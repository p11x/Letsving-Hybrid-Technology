import { motion } from 'motion/react';
import { ShieldCheck, Users, Zap } from 'lucide-react';
import Logo from '../components/ui/Logo';
import SEO from '../components/ui/SEO';

export default function AboutPage() {
  return (
    <div className="w-full">
      <SEO 
        title="About Us" 
        description="Learn more about Letsving Hybrid Technology, our 16+ years of experience, and our vision for digital transformation."
        canonicalUrl="/about"
      />
      <section className="bg-[#050B18] py-32 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[50px] md:text-[80px] font-black tracking-tighter uppercase text-[#F5F5F5] mb-6">About Us</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Letsving Hybrid Technology is a technology-driven software company delivering innovative and reliable solutions that help businesses grow and transform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0A1428]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-24">
            
            {/* Brand Logo Showcase Card with White Background Rounded Box */}
            <div className="flex justify-center items-center py-4">
              <Logo variant="card" />
            </div>

            <div className="border-l-2 border-primary pl-8 py-4">
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4">Our Vision</h2>
              <p className="text-2xl md:text-3xl text-[#F5F5F5] font-light leading-relaxed">
                To become a trusted technology partner for businesses worldwide by delivering scalable, intelligent, and future-ready digital solutions that simplify business processes, improve efficiency, and create measurable value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0F1E38] border border-white/5 p-10 hover:border-white/20 transition-all group">
                <ShieldCheck className="w-10 h-10 text-primary mb-8" />
                <h3 className="text-xl font-bold tracking-tight uppercase text-[#F5F5F5] mb-4">16+ Years Experience</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm">Deep industry expertise delivering robust and reliable technology solutions that stand the test of time.</p>
              </div>
              <div className="bg-[#0F1E38] border border-white/5 p-10 hover:border-white/20 transition-all group">
                <Users className="w-10 h-10 text-primary mb-8" />
                <h3 className="text-xl font-bold tracking-tight uppercase text-[#F5F5F5] mb-4">Customer-Focused</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm">We combine technology with a human-centric approach to build platforms that solve real business challenges.</p>
              </div>
              <div className="bg-[#0F1E38] border border-white/5 p-10 hover:border-white/20 transition-all group">
                <Zap className="w-10 h-10 text-primary mb-8" />
                <h3 className="text-xl font-bold tracking-tight uppercase text-[#F5F5F5] mb-4">Digital Transformation</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm">Iterative delivery, agile methodologies, and seamless cloud integration to keep you ahead of the curve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

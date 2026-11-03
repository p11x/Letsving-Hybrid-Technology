import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { industries } from '../data/industries';
import SEO from '../components/ui/SEO';

export default function IndustriesPage() {
  return (
    <div className="w-full bg-[#0A1428] min-h-[100dvh]">
      <SEO 
        title="Industries We Serve | Letsving Hybrid Technology" 
        description="Tailored software solutions designed for unique challenges in Finance, Healthcare, Education, Insurance, and more."
        canonicalUrl="/industries"
      />
      <section className="bg-[#050B18] pt-32 pb-24 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-widest text-[#38BDF8] border border-white/10 bg-[#0F1E38] uppercase mb-6">
              DOMAINS & VERTICALS
            </div>
            <h1 className="text-[40px] md:text-[64px] font-black tracking-tighter uppercase text-[#F5F5F5] mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Tailored software engineering, cloud architecture, and compliance-aware systems designed for the unique operational demands of your sector.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1428] border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-[#0F1E38] overflow-hidden border border-white/5 hover:border-primary/50 transition-all flex flex-col group relative"
              >
                <div className="h-56 relative overflow-hidden bg-[#0A1428] border-b border-white/5 flex items-center justify-center">
                  <industry.illustration className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E38] via-[#0F1E38]/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 text-[10px] font-mono opacity-50 text-white mix-blend-difference group-hover:opacity-100 transition-opacity">
                    IND-{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-4 z-10">
                    <div className="w-10 h-10 border border-white/10 bg-[#0F1E38]/80 backdrop-blur-sm flex items-center justify-center text-primary">
                      <industry.icon size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-[#F5F5F5] uppercase tracking-wide">{industry.title}</h2>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-white/60 font-light leading-relaxed text-sm mb-6 flex-grow">
                    {industry.description}
                  </p>
                  <Link 
                    to={`/industries/${industry.slug}`} 
                    className="btn-primary inline-flex items-center gap-2 self-start mt-auto text-xs py-2.5 px-4"
                    aria-label={`Learn more about ${industry.title} solutions`}
                  >
                    Learn more
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#050B18]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <h2 className="text-xs font-mono tracking-widest text-[#38BDF8] uppercase mb-4">
            BESPOKE ARCHITECTURE // CROSS-SECTOR EXPERTISE
          </h2>
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
            Need a Custom Solution for Your Industry?
          </h3>
          <p className="text-white/60 leading-relaxed font-light mb-8">
            Our engineers build specialized, compliant digital solutions tailored to the strict compliance and high-performance requirements of modern enterprises.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


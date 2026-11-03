import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, RefreshCw, Zap } from 'lucide-react';
import { services } from '../data/services';
import SEO from '../components/ui/SEO';

export default function ServicesPage() {
  const workflowSteps = [
    {
      num: "01",
      title: "Strategic Discovery",
      desc: "Comprehensive operational audits, technical debt assessments, and technical architecture roadmaps."
    },
    {
      num: "02",
      title: "Architecture & Prototyping",
      desc: "Declarative infrastructure blueprints, database schemas, and microservice boundary definitions."
    },
    {
      num: "03",
      title: "Agile Engineering",
      desc: "Bi-weekly sprint cadences with automated CI/CD pipelines, strict code reviews, and live previews."
    },
    {
      num: "04",
      title: "Continuous Observability",
      desc: "Zero-downtime releases backed by round-the-clock telemetry, automated backups, and 99.99% SLAs."
    }
  ];

  return (
    <div className="w-full bg-[#0A1428] min-h-[100dvh]">
      <SEO 
        title="Enterprise Services | Letsving Hybrid Technology" 
        description="Comprehensive technical capabilities: Software Development, IT Services & Support, Cloud Solutions, Digital Innovation, and Enterprise Platforms."
        canonicalUrl="/services"
      />

      {/* Hero Section */}
      <section className="bg-[#050B18] pt-32 pb-24 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-widest text-[#38BDF8] border border-white/10 bg-[#0F1E38] uppercase mb-6">
              CAPABILITIES & SPECIALIZATIONS
            </div>
            <h1 className="text-[40px] md:text-[64px] font-black tracking-tighter uppercase text-[#F5F5F5] mb-6">
              Enterprise Services
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              We design, build, and operate resilient digital systems engineered for uncompromising reliability, elastic scale, and rapid business velocity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-[#0A1428] border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="bg-[#0F1E38] overflow-hidden border border-white/5 hover:border-primary/50 transition-all flex flex-col group relative"
                >
                  <div className="h-56 relative overflow-hidden bg-[#0A1428] border-b border-white/5 flex items-center justify-center">
                    <service.illustration className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E38] via-[#0F1E38]/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 text-[10px] font-mono opacity-50 text-white mix-blend-difference group-hover:opacity-100 transition-opacity">
                      SRV-{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-4 z-10">
                      <div className="w-10 h-10 border border-white/10 bg-[#0F1E38]/80 backdrop-blur-sm flex items-center justify-center text-primary">
                        <Icon size={20} />
                      </div>
                      <h2 className="text-xl font-bold text-[#F5F5F5] uppercase tracking-wide">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-white/60 font-light leading-relaxed text-sm mb-6 flex-grow">
                      {service.shortDescription}
                    </p>

                    <div className="mb-6 space-y-2">
                      {service.keyFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 size={13} className="text-[#38BDF8] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={`/services/${service.slug}`} 
                      className="btn-primary inline-flex items-center gap-2 self-start mt-auto text-xs py-2.5 px-4"
                      aria-label={`Explore ${service.title} services`}
                    >
                      Learn more
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Process Strip */}
      <section className="py-24 bg-[#050B18] border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-3 block">
              EXECUTION DISCIPLINE
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#F5F5F5]">
              How We Deliver Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#0A1428] border border-white/5 p-6 hover:border-primary/40 transition-colors relative"
              >
                <div className="text-2xl font-mono font-bold text-[#38BDF8] mb-4">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-[#F5F5F5] uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact CTA Band */}
      <section className="py-24 bg-[#0A1428]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <h2 className="text-xs font-mono tracking-widest text-[#38BDF8] uppercase mb-4">
            LET'S ARCHITECT YOUR PLATFORM
          </h2>
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
            Have a Specific Project in Mind?
          </h3>
          <p className="text-white/60 leading-relaxed font-light mb-8">
            Speak directly with our senior cloud architects and software engineers. We offer complimentary technical consultations to evaluate your architecture.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
            <Link to="/industries" className="btn-secondary">
              View Industry Verticals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

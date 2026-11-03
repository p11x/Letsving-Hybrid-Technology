import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  Plus, 
  Minus,
  Sparkles 
} from 'lucide-react';
import { services } from '../data/services';
import SEO from '../components/ui/SEO';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="w-full bg-[#0A1428] min-h-[100dvh] pt-32 pb-24 flex items-center justify-center">
        <SEO 
          title="Service Not Found | Letsving Hybrid Technology" 
          description="The requested enterprise service could not be located."
        />
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 border border-white/10 bg-[#0F1E38] text-[#38BDF8] mb-6">
            <AlertTriangle size={28} />
          </div>
          <div className="text-xs font-mono tracking-widest text-[#38BDF8] uppercase mb-2">
            ERROR 404 // SERVICE_NOT_FOUND
          </div>
          <h1 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-white/60 mb-8 leading-relaxed font-light">
            The capability <code className="text-[#38BDF8] bg-white/5 px-2 py-1 font-mono text-sm">{slug}</code> is not in our active directory or has been restructured.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              EXPLORE ALL SERVICES
            </Link>
            <Link to="/contact" className="btn-secondary">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 3);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full bg-[#0A1428] min-h-screen pt-24">
      <SEO 
        title={`${service.title} | Enterprise Services | Letsving Hybrid Technology`}
        description={service.shortDescription}
        canonicalUrl={`/services/${service.slug}`}
      />

      {/* Hero Section */}
      <section className="pt-12 pb-24 bg-[#050B18] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 mb-12">
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 border border-white/10 bg-[#0F1E38] text-primary mb-8">
                <Icon size={28} />
              </div>
              <h1 className="text-[40px] md:text-[60px] leading-[1.08] font-black tracking-tighter uppercase mb-6 text-[#F5F5F5]">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light mb-8">
                {service.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={`/contact?service=${service.slug}`} className="btn-primary">
                  Discuss Your Project
                </Link>
                <a href="#process" className="btn-secondary">
                  Review Process
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] lg:aspect-square w-full border border-white/10 bg-[#0F1E38] shadow-2xl"
            >
              <service.illustration className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 text-[10px] font-mono opacity-50 text-white mix-blend-difference">
                SYS_VISUAL // {service.slug.substring(0, 8).toUpperCase()}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-4 block">
              ENGINEERING FOUNDATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#F5F5F5]">
              Core Capabilities & Features
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.keyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#0F1E38] border border-white/5 p-8 hover:border-primary/50 transition-colors flex items-start gap-4 group"
              >
                <div className="text-primary/70 mt-1 group-hover:text-primary transition-colors shrink-0">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F5F5F5] tracking-tight">{feature}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology & Process Timeline */}
      <section id="process" className="py-24 bg-[#050B18] border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-4 block">
              DISCIPLINED PHASES
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#F5F5F5]">
              Our Delivery Methodology
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {service.process.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="hidden md:block w-1/2"></div>
                  
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-[#050B18] border-2 border-primary text-primary flex items-center justify-center font-bold text-xs font-mono -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                    {i + 1}
                  </div>
                  
                  <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className="bg-[#0F1E38] border border-white/5 p-6 shadow-xl hover:border-white/20 transition-colors">
                      <h3 className="text-lg font-black tracking-tighter uppercase text-[#F5F5F5] mb-2">{step.step}</h3>
                      <p className="text-white/60 font-light text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Benefits Dual Strip */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-4 block">
              STACK & TOOLCHAIN
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6">
              Technologies We Deploy
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="border border-white/10 bg-[#0F1E38] text-slate-200 px-4 py-2 font-mono text-xs uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-4 block">
              MEASURABLE IMPACT
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6">
              Strategic Advantages
            </h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#0F1E38] border border-white/5 p-4">
                  <Sparkles size={18} className="text-[#38BDF8] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 font-light leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessible FAQ Accordion */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-24 bg-[#050B18] border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-4 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white">
                Service Inquiries & Answers
              </h2>
            </div>

            <div className="space-y-4">
              {service.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-white/10 bg-[#0A1428] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                    >
                      <span className="text-base font-bold text-white pr-4">{item.question}</span>
                      <span className="text-[#38BDF8] shrink-0">
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-2 block">
                COMPLEMENTARY DISCIPLINES
              </span>
              <h2 className="text-2xl font-black tracking-tighter uppercase text-[#F5F5F5]">
                Other Capabilities
              </h2>
            </div>
            <Link to="/services" className="text-primary text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">
              View All Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rs, i) => {
              const RelIcon = rs.icon;
              return (
                <Link 
                  key={i} 
                  to={`/services/${rs.slug}`}
                  className="group bg-[#0F1E38] border border-white/5 p-6 hover:border-primary/50 transition-all flex flex-col h-full"
                >
                  <div className="text-primary mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                    <RelIcon size={28} />
                  </div>
                  <h3 className="text-lg font-black tracking-tighter uppercase text-[#F5F5F5] mb-2 group-hover:text-primary transition-colors">
                    {rs.title}
                  </h3>
                  <p className="text-white/50 text-xs font-light line-clamp-2 mt-auto">
                    {rs.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact CTA Band */}
      <section className="py-24 bg-[#050B18]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <h2 className="text-xs font-mono tracking-widest text-[#38BDF8] uppercase mb-4">
            INITIATE ENGAGEMENT
          </h2>
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
            Ready to Accelerate Your Platform?
          </h3>
          <p className="text-white/60 leading-relaxed font-light mb-8">
            Tell us about your technical challenges and timelines. Our engineering pod will provide an architectural assessment within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={`/contact?service=${service.slug}`} className="btn-primary inline-flex items-center gap-2">
              Discuss {service.title}
              <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

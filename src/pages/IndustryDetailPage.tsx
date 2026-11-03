import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { industries, services } from '../data/siteContent';
import SEO from '../components/ui/SEO';

export default function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find(i => i.slug === slug);

  if (!industry) {
    return (
      <div className="w-full bg-[#0A1428] min-h-[100dvh] pt-32 pb-24 flex items-center justify-center">
        <SEO 
          title="Industry Not Found | Letsving Hybrid Technology"
          description="The requested industry vertical could not be found."
        />
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 border border-white/10 bg-[#0F1E38] text-[#38BDF8] mb-6">
            <AlertTriangle size={28} />
          </div>
          <div className="text-xs font-mono tracking-widest text-[#38BDF8] uppercase mb-2">
            ERROR 404 // SECTOR_NOT_FOUND
          </div>
          <h1 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
            Industry Not Found
          </h1>
          <p className="text-white/60 mb-8 leading-relaxed font-light">
            The industry vertical <code className="text-[#38BDF8] bg-white/5 px-2 py-1 font-mono text-sm">{slug}</code> does not exist or has been restructured.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/industries" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              BACK TO INDUSTRIES
            </Link>
            <Link to="/contact" className="btn-secondary">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get relevant services
  const relatedServices = services.filter(s => industry.relevantServices.includes(s.slug));

  // Get other industries for the bottom strip
  const otherIndustries = industries
    .filter(i => i.slug !== industry.slug)
    .slice(0, 3);

  return (
    <div className="w-full bg-[#0A1428] min-h-screen pt-24">
      <SEO 
        title={`${industry.title} Solutions`}
        description={industry.description}
        canonicalUrl={`/industries/${industry.slug}`}
      />
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <Link to="/industries" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 text-sm font-medium tracking-wide transition-colors">
            <ArrowLeft size={16} />
            BACK TO INDUSTRIES
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 border border-white/10 bg-[#0F1E38] text-primary mb-8">
                <industry.icon size={28} />
              </div>
              <h1 className="text-[40px] md:text-[60px] leading-[1.1] font-black tracking-tighter uppercase mb-6 text-[#F5F5F5]">
                {industry.title}
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light mb-8">
                {industry.fullDescription}
              </p>
              <Link to={`/contact?industry=${industry.slug}`} className="btn-primary">
                Discuss Your Project
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] lg:aspect-square w-full border border-white/10 bg-[#0F1E38] shadow-2xl"
            >
              <industry.illustration className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 text-[10px] font-mono opacity-50 text-white mix-blend-difference">
                IND_VISUAL // {industry.slug.substring(0, 8).toUpperCase()}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-[#050B18] border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#F87171] uppercase mb-4">The Challenge</h2>
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#F5F5F5]">
              What Makes {industry.title} Hard Right Now
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.challenges.map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#0A1428] border border-white/5 p-8 hover:border-[#F87171]/50 transition-colors flex items-start gap-4 group"
              >
                <div className="text-[#F87171]/50 mt-1 group-hover:text-[#F87171] transition-colors">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F5F5F5] tracking-tight">{challenge}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4">The Solution</h2>
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#F5F5F5]">
              How We Solve It
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#0F1E38] border border-white/5 p-8 hover:border-primary/50 transition-colors flex items-start gap-4 group"
              >
                <div className="text-primary/50 mt-1 group-hover:text-primary transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F5F5F5] tracking-tight">{solution}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services & CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-8">
              Relevant Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServices.map((rs, i) => (
                <Link
                  key={i}
                  to={`/services/${rs.slug}`}
                  className="group bg-[#0F1E38] border border-white/5 p-6 hover:border-primary/50 transition-all flex flex-col h-full"
                >
                  <div className="text-primary mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    <rs.icon size={24} />
                  </div>
                  <h4 className="text-base font-black tracking-tighter uppercase text-[#F5F5F5] group-hover:text-primary transition-colors">
                    {rs.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/20 to-[#050B18] border border-primary/30 p-12 text-center rounded-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-4">
                Talk to us about {industry.title}
              </h3>
              <p className="text-white/70 mb-8 font-light">
                Ready to tackle your industry's specific challenges? Let's discuss your next project.
              </p>
              <Link to={`/contact?industry=${industry.slug}`} className="btn-primary inline-flex items-center gap-2">
                Start a conversation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-24 bg-[#050B18] border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-2xl font-black tracking-tighter uppercase text-[#F5F5F5]">
              Other Industries
            </h3>
            <Link to="/industries" className="text-primary text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherIndustries.map((oi, i) => (
              <Link 
                key={i} 
                to={`/industries/${oi.slug}`}
                className="group bg-[#0F1E38] border border-white/5 p-6 hover:border-primary/50 transition-all flex flex-col h-full"
              >
                <div className="text-primary mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                  <oi.icon size={32} />
                </div>
                <h4 className="text-lg font-black tracking-tighter uppercase text-[#F5F5F5] mb-2 group-hover:text-primary transition-colors">
                  {oi.title}
                </h4>
                <p className="text-white/50 text-sm font-light line-clamp-2 mt-auto">
                  {oi.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

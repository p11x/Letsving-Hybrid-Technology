import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { services, industries } from '../data/siteContent';
import PlatformStatusPanel from '../components/ui/PlatformStatusPanel';
import TopClientsSection from '../components/ui/TopClientsSection';
import SEO from '../components/ui/SEO';

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Letsving Hybrid Technology",
    "url": "https://letsvinghybridtechnology.com",
    "logo": "https://letsvinghybridtechnology.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-70905-92257",
      "contactType": "customer service",
      "email": "connect@letsving.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13th Main Rd, Gayathri Nagar, 3rd Block, Rajajinagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560010",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="w-full">
      <SEO 
        title="Smart Technology & Smart Business" 
        description="Letsving Hybrid Technology — Smart Technology | Shaping the business. Delivering Software Development, IT Services, Cloud Technologies, and Digital Innovation."
        canonicalUrl="/"
      />
      {/* Inject JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A1428]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-1.jpg" 
            alt="Letsving Hybrid Technology skyline" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/80 to-transparent"></div>
          {/* Decorative blur */}
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#38BDF8]/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-[100px] pointer-events-none"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8"
          >
            {/* Tagline / Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-primary uppercase mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Smart Technology | Shaping the business
            </div>

            <h1 className="text-[52px] sm:text-[70px] md:text-[84px] lg:text-[98px] leading-[0.92] font-black tracking-tighter uppercase mb-4 text-[#F5F5F5]">
              Smart Technology <br className="hidden md:block" />
              <span className="text-white/80">&</span> Smart <span className="text-primary">Business.</span>
            </h1>

            {/* Core Offerings Bar */}
            <div className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-[#38BDF8] uppercase mb-6 opacity-90 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Software Development</span>
              <span className="text-white/30">|</span>
              <span>IT Services</span>
              <span className="text-white/30">|</span>
              <span>Cloud</span>
              <span className="text-white/30">|</span>
              <span>Digital Innovation</span>
            </div>

            <p className="max-w-xl text-lg text-white/60 leading-relaxed font-light mb-10 border-l-2 border-primary pl-6">
              Letsving Hybrid Technology is a technology-driven software company delivering innovative and reliable solutions that help businesses grow, transform, and stay ahead.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 md:mb-0">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Let's Talk
              </Link>
              <Link to="/services" className="btn-secondary w-full sm:w-auto">
                Explore Services
              </Link>
            </div>
            
            <div className="hidden md:flex gap-12 mt-16">
              <div>
                <div className="text-4xl font-mono font-bold tracking-tighter text-[#F5F5F5]">16+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold mt-1 text-[#F5F5F5]">Years Exp</div>
              </div>
              <div>
                <div className="text-4xl font-mono font-bold tracking-tighter text-[#F5F5F5]">100%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold mt-1 text-[#F5F5F5]">Delivery Rate</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4 relative hidden md:block"
          >
            <PlatformStatusPanel />
          </motion.div>
        </div>
      </section>

      {/* Our Top Clients Section */}
      <TopClientsSection />

      {/* About Section Snippet */}
      <section className="py-32 bg-[#050B18]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4">About Letsving Hybrid Technology</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-[#F5F5F5] leading-tight">
                Build Your Future <br/> With <span className="text-primary">Letsving Hybrid Technology</span>
              </h3>
              <p className="text-lg text-white/60 mb-8 leading-relaxed font-light border-l-2 border-white/10 pl-6">
                Letsving Hybrid Technology is a technology-driven software company with 16 years of industry experience. We combine technology, industry expertise, and a customer-focused approach to build solutions that simplify business processes, improve efficiency, and create measurable value.
              </p>
              <Link to="/about" className="btn-primary">
                Learn more
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden border border-white/10 bg-[#0F1E38]">
                <img 
                  src="/assets/about-dronez-fly.jpg" 
                  alt="About Letsving Hybrid Technology" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000';
                  }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#0F1E38] border border-white/10 p-6 shadow-2xl hidden md:block">
                <p className="text-4xl font-mono font-bold text-primary tracking-tighter mb-1">16+</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-white/50">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[#0A1428] border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4">Our Services</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#F5F5F5]">
                Solutions that scale
              </h3>
            </div>
            <Link to="/services" className="btn-primary flex-shrink-0 self-start md:self-auto">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0F1E38] p-8 border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-8 border border-white/10 group-hover:border-primary transition-colors">
                  <service.icon size={20} />
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-tight text-[#F5F5F5] uppercase">{service.title}</h4>
                <p className="text-white/60 font-light text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 bg-[#050B18] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl mb-16 border-l-2 border-primary pl-6">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4">Industries</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#F5F5F5]">
              Expertise Across Sectors
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.slice(0, 6).map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center text-center p-6 bg-[#0F1E38] border border-white/5 hover:border-white/20 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 flex items-center justify-center text-white/50 group-hover:text-primary transition-colors mb-4">
                  <industry.icon size={24} />
                </div>
                <h4 className="font-bold tracking-tight text-[#F5F5F5] text-sm uppercase">{industry.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

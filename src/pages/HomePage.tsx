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
      {/* Inject JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#0A1428] py-16 lg:py-24" aria-label="Hero Introduction">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-1.jpg" 
            alt="Letsving Hybrid Technology skyline" 
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/80 to-transparent"></div>
          {/* Decorative aura */}
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#38BDF8]/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-[100px] pointer-events-none" aria-hidden="true"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 lg:col-span-8"
          >
            {/* Tagline / Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E6FE0]/15 border border-[#38BDF8]/30 text-xs font-mono font-medium tracking-wider text-[#38BDF8] uppercase mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
              Smart Technology | Shaping the business
            </div>

            {/* Fluid Headline clamp() with tightened line-height */}
            <h1 className="text-[clamp(2.5rem,6.8vw,5.5rem)] leading-[1.04] font-black tracking-tighter uppercase mb-6 text-[#F5F5F5]">
              Smart Technology <br className="hidden sm:block" />
              <span className="text-white/80">&amp;</span> Smart <span className="bg-gradient-to-r from-[#1E6FE0] via-[#38BDF8] to-[#8B7CFF] bg-clip-text text-transparent">Business.</span>
            </h1>

            {/* Core Offerings Bar */}
            <div className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#38BDF8] uppercase mb-6 flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span>Software Development</span>
              <span className="text-white/40">|</span>
              <span>IT Services</span>
              <span className="text-white/40">|</span>
              <span>Hybrid Cloud</span>
              <span className="text-white/40">|</span>
              <span>Digital Innovation</span>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-10 border-l-2 border-[#1E6FE0] pl-6">
              Letsving Hybrid Technology is a technology-driven software company delivering innovative and reliable solutions that help businesses grow, transform, and stay ahead.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 md:mb-0">
              <Link to="/contact" className="btn-primary w-full sm:w-auto min-h-[44px]">
                Let's Talk
              </Link>
              <Link to="/services" className="btn-secondary w-full sm:w-auto min-h-[44px]">
                Explore Services
              </Link>
            </div>
            
            <div className="flex gap-10 mt-12 sm:mt-16">
              <div>
                <div className="text-3xl sm:text-4xl font-mono font-bold tracking-tighter text-[#F5F5F5]">16+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1">Years Exp</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-mono font-bold tracking-tighter text-[#F5F5F5]">100%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1">Delivery Rate</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-mono font-bold tracking-tighter text-[#F5F5F5]">50+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1">Global Deployments</div>
              </div>
            </div>
          </motion.div>
          
          {/* Realtime Platform Status Panel (Visible and gracefully stacked on tablet/mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5 lg:col-span-4 relative mt-8 md:mt-0 w-full flex justify-center"
          >
            <PlatformStatusPanel />
          </motion.div>
        </div>
      </section>

      {/* Our Top Clients Section */}
      <TopClientsSection />

      {/* About Section Snippet */}
      <section className="py-24 sm:py-32 bg-[#050B18]" aria-label="About Company Preview">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-4">About Letsving Hybrid Technology</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-[#F5F5F5] leading-tight">
                Build Your Future <br/> With <span className="bg-gradient-to-r from-[#1E6FE0] via-[#38BDF8] to-[#8B7CFF] bg-clip-text text-transparent">Letsving Hybrid Technology</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-light border-l-2 border-white/20 pl-6">
                Letsving Hybrid Technology is a technology-driven software company with 16 years of industry experience. We combine technology, industry expertise, and a customer-focused approach to build solutions that simplify business processes, improve efficiency, and create measurable value.
              </p>
              <Link to="/about" className="btn-primary min-h-[44px]">
                Learn more
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden border border-white/10 bg-[#0F1E38] rounded-lg">
                <img 
                  src="/assets/about-dronez-fly.jpg" 
                  alt="About Letsving Hybrid Technology team and operations" 
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0F1E38] border border-white/15 p-6 shadow-2xl hidden sm:block rounded">
                <p className="text-4xl font-mono font-bold text-[#38BDF8] tracking-tighter mb-1">16+</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-slate-300">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 bg-[#0A1428] border-t border-white/5" aria-label="Services Overview">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-4">Our Services</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#F5F5F5]">
                Solutions that scale
              </h2>
            </div>
            <Link to="/services" className="btn-secondary self-start md:self-end min-h-[44px]">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0F1E38] border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-[#38BDF8]/50 transition-colors group rounded-lg"
              >
                <div>
                  <div className="w-14 h-14 border border-white/10 bg-[#0A1428] flex items-center justify-center text-[#38BDF8] mb-8 group-hover:border-[#38BDF8] transition-colors rounded">
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight uppercase mb-4 text-[#F5F5F5]">{service.title}</h3>
                  <p className="text-slate-300 font-light text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                <Link to={`/services/${service.slug}`} className="text-xs font-bold tracking-widest uppercase text-[#38BDF8] group-hover:underline inline-flex items-center gap-2">
                  <span>Explore service</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 sm:py-32 bg-[#050B18] border-t border-white/5" aria-label="Industries Served">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-4">Industries We Serve</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#F5F5F5]">
                Tailored for your sector
              </h2>
            </div>
            <Link to="/industries" className="btn-secondary self-start md:self-end min-h-[44px]">
              View All Industries
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {industries.slice(0, 8).map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#0A1428] border border-white/10 p-6 flex flex-col items-center text-center justify-center min-h-[160px] hover:border-[#38BDF8]/40 transition-colors group rounded"
              >
                <industry.icon size={28} className="text-[#38BDF8] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">{industry.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-24 bg-gradient-to-r from-[#0F1E38] via-[#0A1428] to-[#0F1E38] border-t border-b border-white/10 text-center relative overflow-hidden" aria-label="Get in Touch CTA">
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-6">
            Ready to shape your digital future?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light mb-10 max-w-xl mx-auto">
            Get in touch with our engineering team for a personalized architectural review and project quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary min-h-[44px]">
              Get a Quote
            </Link>
            <Link to="/careers" className="btn-secondary min-h-[44px]">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

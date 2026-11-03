import { motion } from 'motion/react';
import SEO from '../components/ui/SEO';

export default function TermsOfServicePage() {
  return (
    <div className="w-full">
      <SEO 
        title="Terms of Service" 
        description="Terms of Service for Letsving Hybrid Technology"
        canonicalUrl="/terms-of-service"
      />
      <section className="bg-[#050B18] py-24 text-center border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase text-[#F5F5F5] mb-6">Terms of Service</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1428]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl text-white/80 font-light leading-relaxed space-y-8">
          <p>
            Welcome to the Letsving Hybrid Technology website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Use of the Site</h2>
          <p>
            The content provided on this website is for informational purposes only. You may use this site to learn about our services, read our content, and contact us. You agree not to use the site for any unlawful purpose or in any way that might harm, damage, or disparage any other party.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of Letsving Hybrid Technology or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without explicit permission.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Limitation of Liability</h2>
          <p>
            Letsving Hybrid Technology shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the site. The information on the site is provided "as is" without any warranties of any kind.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Links to Third-Party Sites</h2>
          <p>
            Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting to the site. Your continued use of the site signifies your acceptance of the updated terms.
          </p>

          <p className="pt-8 text-sm text-white/50">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </div>
  );
}

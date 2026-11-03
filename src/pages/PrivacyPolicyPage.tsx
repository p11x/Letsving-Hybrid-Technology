import { motion } from 'motion/react';
import SEO from '../components/ui/SEO';

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for Letsving Hybrid Technology"
        canonicalUrl="/privacy-policy"
      />
      <section className="bg-[#050B18] py-24 text-center border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase text-[#F5F5F5] mb-6">Privacy Policy</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1428]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl text-white/80 font-light leading-relaxed space-y-8">
          <p>
            At Letsving Hybrid Technology, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our website and services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>
            When you contact us or submit an application through our website, we may collect personal information such as your name, email address, phone number, company name, and any other details you provide in your message or resume.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information you provide solely to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and communicate with you about your projects or career applications.</li>
            <li>Improve our website and services based on user feedback.</li>
            <li>Maintain internal records for customer service and hiring purposes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Sharing and Protection</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your data is stored securely and is only accessible to authorized personnel who require it to perform their duties. We implement standard security measures to safeguard your data against unauthorized access.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Cookies and Analytics</h2>
          <p>
            Our website uses basic, privacy-respecting analytics to understand traffic patterns. We do not use third-party advertising trackers that collect personally identifiable information across other websites.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal data stored by us. To exercise these rights, please contact us at <a href="mailto:connect@letsving.com" className="text-primary hover:underline">connect@letsving.com</a>.
          </p>

          <p className="pt-8 text-sm text-white/50">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </div>
  );
}

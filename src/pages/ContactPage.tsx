import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/ui/SEO';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  purpose: z.string().min(1, 'Please select a purpose'),
  message: z.string().min(10, 'Please provide more details'),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
      setErrorMessage('There was an error sending your message. Please try again or contact us directly at connect@letsving.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Letsving Hybrid Technology. Let's talk about your next project or digital transformation."
        canonicalUrl="/contact"
      />
      <section className="bg-[#050B18] py-32 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[50px] md:text-[80px] font-black tracking-tighter uppercase text-[#F5F5F5] mb-6">Contact Us</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Let's Talk About Your Next Project. We're here to help you build smart solutions for a stronger future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0A1428]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-black tracking-tighter uppercase mb-12 text-[#F5F5F5]">Contact Options</h2>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border border-white/10 bg-[#0F1E38] flex items-center justify-center text-primary flex-shrink-0 group-hover:border-primary transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase mb-2 text-[#F5F5F5]">Email Us</h3>
                    <p className="text-white/60 font-light mb-2">For general inquiries and project discussions.</p>
                    <a href="mailto:connect@letsving.com" className="text-primary font-medium hover:underline tracking-wider">CONNECT@LETSVING.COM</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border border-white/10 bg-[#0F1E38] flex items-center justify-center text-primary flex-shrink-0 group-hover:border-primary transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase mb-2 text-[#F5F5F5]">Call Us</h3>
                    <p className="text-white/60 font-light mb-2">Mon-Fri from 9am to 6pm.</p>
                    <a href="tel:+917090592257" className="text-primary font-medium hover:underline tracking-wider">+91 70905 92257</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border border-white/10 bg-[#0F1E38] flex items-center justify-center text-primary flex-shrink-0 group-hover:border-primary transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase mb-2 text-[#F5F5F5]">Visit Us</h3>
                    <p className="text-white/60 font-light leading-relaxed">
                      Letsving Hybrid Technology Private Limited<br />
                      13th Main Rd, Gayathri Nagar, 3rd Block, Rajajinagar<br />
                      Bengaluru, Karnataka 560010
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-[#0F1E38] border border-white/5 group hover:border-white/20 transition-colors">
                <h3 className="text-sm font-bold tracking-widest uppercase text-[#F5F5F5] mb-2">Looking for a job?</h3>
                <p className="text-white/60 font-light text-sm mb-6">We are always looking for talented people to join our team.</p>
                <a href="/careers" className="btn-secondary">View open positions</a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#0F1E38] border border-white/10 p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block"></span>
                </div>
                <h3 className="text-2xl font-black tracking-tighter uppercase text-[#F5F5F5] mb-10">Send a Message</h3>
                
                {isSuccess ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 border border-primary/30 text-primary flex items-center justify-center mx-auto mb-6">
                      <Send size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-[#F5F5F5] uppercase tracking-tighter mb-4">Message Sent</h4>
                    <p className="text-white/60 font-light mb-10">Thank you for reaching out. Our team will get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="btn-secondary"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <div>
                    {errorMessage && (
                      <div className="mb-6 p-4 bg-red-950/40 border border-red-500/30 text-red-200 text-xs rounded">
                        {errorMessage}
                      </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    
                    {/* Honeypot field for spam prevention */}
                    <div style={{ position: 'absolute', opacity: 0, top: 0, left: 0, zIndex: -1 }}>
                      <label htmlFor="honeypot">Leave this field empty</label>
                      <input 
                        type="text" 
                        id="honeypot" 
                        {...register('honeypot' as any)} 
                        tabIndex={-1} 
                        autoComplete="off"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Full Name <span className="text-primary">*</span></label>
                      <input 
                        {...register('name')}
                        className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors"
                      />
                      {errors.name && <p className="text-primary text-xs mt-2">{errors.name.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Email <span className="text-primary">*</span></label>
                        <input 
                          {...register('email')}
                          type="email"
                          className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors"
                        />
                        {errors.email && <p className="text-primary text-xs mt-2">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Phone</label>
                        <input 
                          {...register('phone')}
                          type="tel"
                          className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Company</label>
                        <input 
                          {...register('company')}
                          className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Purpose of Visit <span className="text-primary">*</span></label>
                        <select 
                          {...register('purpose')}
                          className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors appearance-none"
                        >
                          <option value="">Select purpose</option>
                          <option value="project">Project enquiry</option>
                          <option value="service">Service information</option>
                          <option value="career">Career enquiry</option>
                          <option value="partnership">Partnership</option>
                          <option value="support">Support</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.purpose && <p className="text-primary text-xs mt-2">{errors.purpose.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Message <span className="text-primary">*</span></label>
                      <textarea 
                        {...register('message')}
                        rows={4}
                        className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                      />
                      {errors.message && <p className="text-primary text-xs mt-2">{errors.message.message}</p>}
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 mt-4"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

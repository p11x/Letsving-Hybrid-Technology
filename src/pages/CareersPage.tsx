import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload, Send } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/ui/SEO';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  role: z.string().min(1, 'Please select a role'),
  credentials: z.string().min(10, 'Please provide more details about your skills'),
  message: z.string().optional(),
});

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send application');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert('There was an error sending your application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <SEO 
        title="Careers" 
        description="Join Letsving Hybrid Technology and build intelligent software solutions for real business needs."
        canonicalUrl="/careers"
      />
      <section className="bg-[#050B18] py-32 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[50px] md:text-[80px] font-black tracking-tighter uppercase text-[#F5F5F5] mb-6">Careers</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Build Your Future With Letsving Hybrid Technology. Join a team that builds intelligent software solutions for real business needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0A1428]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black tracking-tighter uppercase mb-6 text-[#F5F5F5]">Open Paths</h2>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                Share your credentials and resume. Our team will review your profile and contact you when there is a match.
              </p>
              
              <div className="space-y-4 mb-12">
                {['Engineering', 'Cloud & DevOps', 'Consulting', 'UI/UX Design', 'Business Development'].map((role) => (
                  <div key={role} className="p-6 border border-white/5 bg-[#0F1E38] hover:border-white/20 transition-all text-sm font-bold tracking-widest uppercase text-[#F5F5F5]">
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-[#0F1E38] border border-white/10 p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block"></span>
                </div>
                <div className="mb-10 border-b border-white/10 pb-6">
                  <h3 className="text-2xl font-black tracking-tighter uppercase text-[#F5F5F5]">Start Your Journey</h3>
                  <p className="text-white/60 font-light mt-2">Fill the details below. Keep your skills clear and attach your latest resume.</p>
                </div>

                {isSuccess ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 border border-primary/30 text-primary flex items-center justify-center mx-auto mb-6">
                      <Send size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-[#F5F5F5] uppercase tracking-tighter mb-4">Application Sent</h4>
                    <p className="text-white/60 font-light mb-10">We've received your application and will be in touch soon if there's a match.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="btn-secondary"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    
                    {/* Honeypot field for spam prevention */}
                    <div style={{ position: 'absolute', opacity: 0, top: 0, left: 0, zIndex: -1 }}>
                      <label htmlFor="honeypot_career">Leave this field empty</label>
                      <input 
                        type="text" 
                        id="honeypot_career" 
                        {...register('honeypot' as any)} 
                        tabIndex={-1} 
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Full Name <span className="text-primary">*</span></label>
                        <input 
                          {...register('name')}
                          className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-primary text-xs mt-2">{errors.name.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Email <span className="text-primary">*</span></label>
                        <input 
                          {...register('email')}
                          type="email"
                          className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-primary text-xs mt-2">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Phone (Optional)</label>
                        <input 
                          {...register('phone')}
                          type="tel"
                          className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors"
                          placeholder="+91 70905 92257"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Role Applying For <span className="text-primary">*</span></label>
                        <select 
                          {...register('role')}
                          className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors appearance-none"
                        >
                          <option value="">Select role</option>
                          <option value="engineering">Engineering</option>
                          <option value="cloud-devops">Cloud & DevOps</option>
                          <option value="consulting">Consulting</option>
                          <option value="ui-ux">UI/UX Design</option>
                          <option value="business">Business Development</option>
                        </select>
                        {errors.role && <p className="text-primary text-xs mt-2">{errors.role.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Credentials / Skills <span className="text-primary">*</span></label>
                      <textarea 
                        {...register('credentials')}
                        rows={4}
                        className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your skills, tools, projects, and experience."
                      />
                      {errors.credentials && <p className="text-primary text-xs mt-2">{errors.credentials.message}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Resume <span className="text-primary">*</span></label>
                      <div className="border border-dashed border-white/20 p-8 text-center bg-[#0A1428] hover:bg-white/5 transition-colors cursor-pointer relative">
                        <Upload className="w-8 h-8 mx-auto text-primary mb-4" />
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F5F5F5] mb-2">Upload resume</p>
                        <p className="text-xs text-white/40">PDF, DOC, or DOCX up to 8 MB</p>
                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">Additional Message</label>
                      <textarea 
                        {...register('message')}
                        rows={3}
                        className="w-full bg-[#0A1428] border border-white/10 px-4 py-4 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Anything else you want our hiring team to know?"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 mt-4 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/ui/SEO';

const formSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .regex(/^$|^[+]?[\d\s\-().]{7,20}$/, 'Please enter a valid phone number or leave blank')
    .optional(),
  role: z.string().min(1, 'Please select the position you are applying for'),
  credentials: z.string().trim().min(10, 'Please provide at least 10 characters detailing your skills or background'),
  message: z.string().trim().optional(),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      honeypot: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (data.honeypot && data.honeypot.length > 0) {
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          purpose: `Career Application: ${data.role}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send application');
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Career application submission error:', error);
      setErrorMessage('There was an error sending your application. Please reach us at careers@letsving.com or connect@letsving.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <SEO 
        title="Careers & Engineering Opportunities" 
        description="Join Letsving Hybrid Technology and build intelligent software solutions for real business needs. Explore engineering, cloud, and consulting roles."
        canonicalUrl="/careers"
      />

      <section className="bg-[#050B18] py-24 sm:py-32 text-center border-b border-white/5 relative overflow-hidden" aria-label="Careers Header">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#1E6FE0]/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter uppercase text-[#F5F5F5] mb-4">Careers</h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Build Your Future With Letsving Hybrid Technology. Join a team that builds intelligent software solutions for real business needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#0A1428]" aria-label="Careers Open Roles and Application">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase mb-6 text-[#F5F5F5]">Open Paths</h2>
              <p className="text-slate-300 font-light leading-relaxed mb-8">
                Share your credentials and background. Our engineering and talent partners review incoming profiles weekly.
              </p>
              
              <div className="space-y-3.5 mb-12">
                {[
                  { title: 'Engineering', desc: 'Distributed systems, TypeScript, Go & React' },
                  { title: 'Cloud & DevOps', desc: 'Kubernetes, Terraform, AWS & GCP architecture' },
                  { title: 'Technology Consulting', desc: 'Enterprise architecture & roadmap advisory' },
                  { title: 'UI/UX Design', desc: 'Design systems, accessibility & design engineering' },
                  { title: 'Business Solutions', desc: 'Product ownership & enterprise client advisory' }
                ].map((item) => (
                  <div key={item.title} className="p-5 border border-white/10 bg-[#0F1E38] hover:border-[#38BDF8]/40 transition-colors rounded-lg group">
                    <h3 className="text-sm font-bold tracking-widest uppercase text-[#F5F5F5] group-hover:text-[#38BDF8] transition-colors">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-[#0F1E38] border border-white/15 p-8 sm:p-12 rounded-xl relative shadow-2xl">
                <div className="mb-8 border-b border-white/10 pb-6">
                  <h3 className="text-2xl font-black tracking-tighter uppercase text-[#F5F5F5]">Start Your Application</h3>
                  <p className="text-slate-300 font-light text-sm mt-2">Fill out the details below. We value clean code and curiosity.</p>
                </div>

                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-950/60 border border-red-500/40 rounded-lg flex items-start gap-3 text-red-200 text-sm" role="alert">
                    <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                {isSuccess ? (
                  <div className="text-center py-16" role="status" aria-live="polite">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="text-2xl font-bold text-[#F5F5F5] uppercase tracking-tight mb-3">Application Submitted</h4>
                    <p className="text-slate-300 font-light max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                      Thank you for your interest in Letsving Hybrid Technology. Our recruitment team will review your profile and reach out if there is a match.
                    </p>
                    <button 
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="btn-secondary min-h-[44px]"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    {/* Honeypot field */}
                    <div className="sr-only" aria-hidden="true">
                      <label htmlFor="career-honeypot">Leave empty</label>
                      <input 
                        type="text" 
                        id="career-honeypot" 
                        tabIndex={-1} 
                        autoComplete="off"
                        {...register('honeypot')} 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="career-name" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                          Full Name <span className="text-[#38BDF8]">*</span>
                        </label>
                        <input 
                          id="career-name"
                          type="text"
                          autoComplete="name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'career-name-error' : undefined}
                          className={`w-full bg-[#0A1428] border ${errors.name ? 'border-red-500' : 'border-white/15'} rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors`}
                          placeholder="John Doe"
                          {...register('name')}
                        />
                        {errors.name && (
                          <p id="career-name-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle size={14} /> {errors.name.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="career-email" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                          Email Address <span className="text-[#38BDF8]">*</span>
                        </label>
                        <input 
                          id="career-email"
                          type="email"
                          autoComplete="email"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'career-email-error' : undefined}
                          className={`w-full bg-[#0A1428] border ${errors.email ? 'border-red-500' : 'border-white/15'} rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors`}
                          placeholder="john@example.com"
                          {...register('email')}
                        />
                        {errors.email && (
                          <p id="career-email-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle size={14} /> {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="career-phone" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                          Phone Number (Optional)
                        </label>
                        <input 
                          id="career-phone"
                          type="tel"
                          autoComplete="tel"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'career-phone-error' : undefined}
                          className={`w-full bg-[#0A1428] border ${errors.phone ? 'border-red-500' : 'border-white/15'} rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors`}
                          placeholder="+91 70905 92257"
                          {...register('phone')}
                        />
                        {errors.phone && (
                          <p id="career-phone-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle size={14} /> {errors.phone.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="career-role" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                          Role Applying For <span className="text-[#38BDF8]">*</span>
                        </label>
                        <select 
                          id="career-role"
                          aria-invalid={!!errors.role}
                          aria-describedby={errors.role ? 'career-role-error' : undefined}
                          className={`w-full bg-[#0A1428] border ${errors.role ? 'border-red-500' : 'border-white/15'} rounded-lg px-4 py-3.5 text-white focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors`}
                          {...register('role')}
                        >
                          <option value="">Select role</option>
                          <option value="Engineering">Engineering (Frontend / Backend / Fullstack)</option>
                          <option value="Cloud & DevOps">Cloud &amp; DevOps Engineering</option>
                          <option value="Technology Consulting">Technology Consulting &amp; Advisory</option>
                          <option value="UI/UX Design">UI/UX Design &amp; Systems</option>
                          <option value="Business Development">Business Solutions &amp; Growth</option>
                        </select>
                        {errors.role && (
                          <p id="career-role-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle size={14} /> {errors.role.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="career-credentials" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                        Credentials, GitHub / Portfolio &amp; Skills <span className="text-[#38BDF8]">*</span>
                      </label>
                      <textarea 
                        id="career-credentials"
                        rows={4}
                        aria-invalid={!!errors.credentials}
                        aria-describedby={errors.credentials ? 'career-credentials-error' : undefined}
                        className={`w-full bg-[#0A1428] border ${errors.credentials ? 'border-red-500' : 'border-white/15'} rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors resize-y`}
                        placeholder="Highlight your stack (e.g. React, Node, Kubernetes, Python), GitHub URL, or portfolio links."
                        {...register('credentials')}
                      />
                      {errors.credentials && (
                        <p id="career-credentials-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.credentials.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <span className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                        Resume / CV Attachment
                      </span>
                      <div className="border-2 border-dashed border-white/20 p-6 text-center bg-[#0A1428] hover:border-[#38BDF8]/60 transition-colors rounded-lg cursor-pointer relative">
                        <Upload className="w-8 h-8 mx-auto text-[#38BDF8] mb-2" aria-hidden="true" />
                        <p className="text-xs font-bold tracking-widest uppercase text-white mb-1">Upload resume or drop file</p>
                        <p className="text-[11px] text-slate-400">PDF, DOC, or DOCX up to 10 MB</p>
                        <input 
                          type="file" 
                          id="career-file"
                          aria-label="Upload resume file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                          accept=".pdf,.doc,.docx" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="career-message" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                        Additional Information
                      </label>
                      <textarea 
                        id="career-message"
                        rows={3}
                        className="w-full bg-[#0A1428] border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors resize-y"
                        placeholder="Tell us what excites you or your preferred start date..."
                        {...register('message')}
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 min-h-[48px] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Transmitting Application...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Submit Application</span>
                        </>
                      )}
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

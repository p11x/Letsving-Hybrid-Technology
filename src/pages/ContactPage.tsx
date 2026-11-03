import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/ui/SEO';

const formSchema = z.object({
  name: z.string().trim().min(2, 'Full name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().trim().email('Please enter a valid business email address'),
  phone: z
    .string()
    .trim()
    .regex(/^$|^[+]?[\d\s\-().]{7,20}$/, 'Please enter a valid phone number or leave blank')
    .optional(),
  company: z.string().trim().max(100, 'Company name is too long').optional(),
  purpose: z.string().min(1, 'Please select the purpose of your enquiry'),
  message: z.string().trim().min(10, 'Please provide at least 10 characters in your message').max(2000, 'Message cannot exceed 2000 characters'),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const defaultPurpose = searchParams.get('purpose') || '';

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purpose: defaultPurpose,
      honeypot: '',
    },
  });

  useEffect(() => {
    if (defaultPurpose) {
      setValue('purpose', defaultPurpose);
    }
  }, [defaultPurpose, setValue]);

  const onSubmit = async (data: FormValues) => {
    // Honeypot bot protection
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
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Server returned an error status.');
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Contact submission error:', error);
      setErrorMessage(
        'Unable to send message right now. Please reach out to us directly at connect@letsving.com or call +91 70905 92257.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <SEO
        title="Contact Us & Get a Quote"
        description="Get in touch with Letsving Hybrid Technology. Request a project quote, discuss digital transformation, or consult our engineering team."
        canonicalUrl="/contact"
      />

      {/* Header Banner */}
      <section className="bg-[#050B18] py-24 sm:py-32 text-center border-b border-white/5 relative overflow-hidden" aria-label="Contact Header">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#1E6FE0]/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter uppercase text-[#F5F5F5] mb-4">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Let&apos;s talk about your next project, architectural roadmap, or hybrid cloud migration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-20 sm:py-28 bg-[#0A1428]" aria-label="Contact Details and Form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-10"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase mb-6 text-[#F5F5F5]">
                  Direct Channels
                </h2>
                <p className="text-slate-300 font-light leading-relaxed">
                  Our solution architects and support engineers respond within 24 business hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border border-white/15 bg-[#0F1E38] flex items-center justify-center text-[#38BDF8] flex-shrink-0 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-400 block mb-1">Email Inquiries</span>
                    <a
                      href="mailto:connect@letsving.com"
                      className="text-sm font-semibold text-white hover:text-[#38BDF8] transition-colors min-h-[44px] inline-flex items-center"
                    >
                      CONNECT@LETSVING.COM
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border border-white/15 bg-[#0F1E38] flex items-center justify-center text-[#38BDF8] flex-shrink-0 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-400 block mb-1">Direct Line</span>
                    <a
                      href="tel:+917090592257"
                      className="text-sm font-semibold text-white hover:text-[#38BDF8] transition-colors min-h-[44px] inline-flex items-center"
                    >
                      +91 70905 92257
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Monday to Friday, 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border border-white/15 bg-[#0F1E38] flex items-center justify-center text-[#38BDF8] flex-shrink-0 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-400 block mb-1">Headquarters</span>
                    <address className="not-italic text-sm text-slate-200 leading-relaxed">
                      Letsving Hybrid Technology Private Limited<br />
                      13th Main Rd, Gayathri Nagar, 3rd Block, Rajajinagar<br />
                      Bengaluru, Karnataka 560010
                    </address>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#0F1E38] border border-white/10 rounded-lg">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#38BDF8] mb-2">Looking for a Career?</h3>
                <p className="text-xs text-slate-300 font-light mb-4 leading-relaxed">
                  We are hiring across Cloud, DevOps, Full-Stack Engineering, and AI.
                </p>
                <a href="/careers" className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#38BDF8] inline-flex items-center gap-1.5 min-h-[44px]">
                  <span>Explore open positions</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="bg-[#0F1E38] border border-white/15 p-8 sm:p-12 rounded-xl relative shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-black tracking-tight uppercase text-[#F5F5F5]">
                    {defaultPurpose === 'project' ? 'Request a Project Quote' : 'Send an Enquiry'}
                  </h2>
                  <span className="text-xs text-slate-400">
                    <span className="text-[#38BDF8]">*</span> Required
                  </span>
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
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-3">
                      Enquiry Received
                    </h3>
                    <p className="text-slate-300 font-light max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                      Thank you for contacting Letsving Hybrid Technology. A dedicated specialist will follow up with you within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="btn-secondary min-h-[44px]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    {/* Honeypot Field (Invisible to screen readers & bots) */}
                    <div className="sr-only" aria-hidden="true">
                      <label htmlFor="contact-honeypot">Do not fill this</label>
                      <input
                        id="contact-honeypot"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register('honeypot')}
                      />
                    </div>

                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                        Full Name <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={`w-full bg-[#0A1428] border ${
                          errors.name ? 'border-red-500' : 'border-white/15'
                        } rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors`}
                        placeholder="e.g. Sarah Jenkins"
                        {...register('name')}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                          Business Email <span className="text-[#38BDF8]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          autoComplete="email"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          className={`w-full bg-[#0A1428] border ${
                            errors.email ? 'border-red-500' : 'border-white/15'
                          } rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors`}
                          placeholder="sarah@company.com"
                          {...register('email')}
                        />
                        {errors.email && (
                          <p id="contact-email-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle size={14} /> {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          autoComplete="tel"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                          className={`w-full bg-[#0A1428] border ${
                            errors.phone ? 'border-red-500' : 'border-white/15'
                          } rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors`}
                          placeholder="+1 (555) 000-0000"
                          {...register('phone')}
                        />
                        {errors.phone && (
                          <p id="contact-phone-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle size={14} /> {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company & Purpose Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-company" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                          Organization / Company
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          autoComplete="organization"
                          className="w-full bg-[#0A1428] border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                          placeholder="Acme Global Inc."
                          {...register('company')}
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-purpose" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                          Purpose of Enquiry <span className="text-[#38BDF8]">*</span>
                        </label>
                        <select
                          id="contact-purpose"
                          aria-invalid={!!errors.purpose}
                          aria-describedby={errors.purpose ? 'contact-purpose-error' : undefined}
                          className={`w-full bg-[#0A1428] border ${
                            errors.purpose ? 'border-red-500' : 'border-white/15'
                          } rounded-lg px-4 py-3.5 text-white focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors`}
                          {...register('purpose')}
                        >
                          <option value="">Select purpose</option>
                          <option value="project">Project Quote / Scope Discussion</option>
                          <option value="service">Cloud &amp; IT Service Consultation</option>
                          <option value="career">Talent &amp; Career Opportunities</option>
                          <option value="partnership">Technology Partnership</option>
                          <option value="support">Enterprise Support &amp; SLA</option>
                          <option value="other">General Inquiries</option>
                        </select>
                        {errors.purpose && (
                          <p id="contact-purpose-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle size={14} /> {errors.purpose.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-2">
                        Message / Project Brief <span className="text-[#38BDF8]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        className={`w-full bg-[#0A1428] border ${
                          errors.message ? 'border-red-500' : 'border-white/15'
                        } rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-colors resize-y`}
                        placeholder="Describe your project requirements, current technical stack, or goals..."
                        {...register('message')}
                      />
                      {errors.message && (
                        <p id="contact-message-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button with Loading State & Disabled Double-Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-sm tracking-widest min-h-[48px] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Dispatching Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

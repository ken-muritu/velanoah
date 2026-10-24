import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2, Mail, Users, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!supabase) {
      setStatus('error');
      setErrorMsg('The waitlist is not available right now.');
      return;
    }

    setStatus('loading');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({ email: email.trim().toLowerCase() });

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setErrorMsg('This email is already on the waitlist.');
        } else {
          setStatus('error');
          setErrorMsg('Something went wrong. Please try again.');
        }
        return;
      }

      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Connection error. Please try again.');
    }
  };

  return (
    <section id="waitlist" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
              Early Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              Get on the waitlist
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
              We're onboarding 50 beta users from Nairobi and beyond. 
              Drop your email and be first to catch every thought.
            </p>
          </div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-vela-md"
          >
            {/* Green top line */}
            <div
              className="absolute top-0 left-6 right-6 h-px"
              style={{ background: 'var(--gradient-green)' }}
            />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    You're on the list
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                    We'll reach out when your spot opens up. 
                    In the meantime, follow us on{' '}
                    <a
                      href="https://x.com/velaos_ke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      X
                    </a>{' '}
                    for updates.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Email input row */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        placeholder="you@email.com"
                        className="w-full h-12 pl-10 pr-4 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                        disabled={status === 'loading'}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading' || !email.trim()}
                      className="h-12 px-6 rounded-lg bg-foreground text-background font-medium text-sm flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all hover:shadow-vela-md disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto w-full"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-destructive text-xs font-medium"
                      >
                        {errorMsg}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Trust signals */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
                    <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                      <Users size={12} />
                      50 beta spots
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                      <Sparkles size={12} />
                      Free to start
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                      <Mail size={12} />
                      No spam, ever
                    </span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
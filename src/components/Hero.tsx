import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-abstract.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
      />

      {/* Decorative circles */}
      <div className="absolute top-32 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-primary text-xs font-semibold tracking-wide mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
                Now in Private Beta
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
            >
              Catch every thought.{' '}
              <span className="text-primary">Push every action.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              VELA is an AI layer on your phone that reads what you capture across any app, 
              extracts intent, and automatically routes actions to your calendar, email, 
              notes, and reminders. No switching apps. No manual entry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-all hover:shadow-vela-lg hover:-translate-y-0.5"
              >
                Get Early Access
                <ArrowRight size={16} />
              </a>
              <a
                href="https://youtube.com/@vela_os"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary transition-all"
              >
                <Play size={16} />
                Watch Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Flutter + Solana
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary" />
                AI-Powered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary" />
                M-Pesa & USDC
              </span>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-vela-lg border border-border">
              <img
                src={heroImage}
                alt="VELA productivity layer"
                className="w-full h-auto"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md rounded-xl border border-border p-4 shadow-vela-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">V</span>
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">Event created</p>
                    <p className="text-muted-foreground text-xs">
                      "Meeting with Fatuma on Friday 2pm" → Google Calendar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

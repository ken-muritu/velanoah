import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center p-10 lg:p-16 rounded-2xl bg-foreground"
        >
          {/* Decorative green line */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
            style={{ background: 'var(--gradient-green)' }}
          />

          <h2 className="text-3xl sm:text-4xl font-bold text-background tracking-tight mb-4">
            Stop losing your best ideas
          </h2>
          <p className="text-background/60 text-lg mb-8 max-w-lg mx-auto">
            VELA turns every thought into an action — automatically. 
            Join the private beta or download the APK now.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-background text-foreground font-medium text-sm hover:bg-background/90 transition-all hover:shadow-vela-lg"
            >
              Join Waitlist
              <ArrowRight size={16} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg border border-background/20 text-background font-medium text-sm hover:bg-background/10 transition-all"
            >
              <Download size={16} />
              Download APK
            </a>
          </div>

          <p className="text-background/40 text-xs mt-6">
            Available on Android. iOS coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

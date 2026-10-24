import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: 'Mobile',
    items: ['Flutter / Dart', 'AccessibilityService (Android)', 'Keyboard Extension (iOS)', 'GitHub Actions CI/CD'],
  },
  {
    label: 'AI Pipeline',
    items: ['Claude API (Intent)', 'ElevenLabs (STT)', 'Google Vision (OCR)', 'On-device preprocessing'],
  },
  {
    label: 'Solana',
    items: ['Anchor Framework', 'Solana Pay', 'Mobile Wallet Adapter', 'Devnet → Mainnet'],
  },
  {
    label: 'Integrations',
    items: ['Google Calendar', 'Gmail API', 'Notion API', 'Apple CalDAV (roadmap)'],
  },
  {
    label: 'Backend',
    items: ['Node.js + FastAPI', 'PostgreSQL', 'Redis', 'pgvector (semantic search)'],
  },
  {
    label: 'Payments',
    items: ['Solana Pay (USDC)', 'M-Pesa Daraja API', 'Stripe (roadmap)'],
  },
];

const TechStack = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
            Under the Hood
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Built with the best
          </h2>
          <p className="text-muted-foreground text-lg">
            A modern stack designed for speed, intelligence, and reliability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 rounded-xl bg-card border border-border shadow-vela-sm"
            >
              <h3 className="text-foreground font-semibold text-sm mb-3">{cat.label}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

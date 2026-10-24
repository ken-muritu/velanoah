import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Zap, Calendar } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Share2,
    title: 'Share to VELA',
    desc: 'From any app — text, voice notes, screenshots, links. Use the share sheet, overlay, or open VELA directly.',
  },
  {
    num: '02',
    icon: Zap,
    title: 'AI classifies intent',
    desc: 'Claude-powered pipeline identifies what you want: create event, set reminder, draft email, log expense, and more.',
  },
  {
    num: '03',
    icon: Calendar,
    title: 'Action routed',
    desc: 'VELA fires the action in the right app — Google Calendar, Gmail, Notion, reminders. Done. One tap.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Three steps. Zero friction.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="relative mx-auto w-16 h-16 rounded-2xl bg-card border border-border shadow-vela-sm flex items-center justify-center mb-6">
                <step.icon size={24} className="text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-[10px] font-bold flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
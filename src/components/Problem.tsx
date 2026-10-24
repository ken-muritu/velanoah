import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Camera, FileText, ArrowDown, Zap } from 'lucide-react';

const blackHoles = [
  { icon: MessageSquare, label: 'Chat messages', desc: 'Links and reminders buried in conversations' },
  { icon: Camera, label: 'Camera roll', desc: 'Screenshots and flyers never acted on' },
  { icon: FileText, label: 'Notes app', desc: 'Ideas captured but never converted to actions' },
];

const Problem = () => {
  return (
    <section id="problem" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Your intentions are dying in black holes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every day you save links, voice notes, screenshots, and ideas to yourself. 
            Almost none of it ever gets acted on. The gap between capturing a thought 
            and acting on it is where most productivity dies.
          </p>
        </motion.div>

        {/* Black holes grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {blackHoles.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-xl bg-card border border-border shadow-vela-sm hover:shadow-vela-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-destructive" />
              </div>
              <h3 className="text-foreground font-semibold mb-1">{item.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              {/* Red indicator */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-destructive/40" />
            </motion.div>
          ))}
        </div>

        {/* Arrow transition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 mb-16"
        >
          <ArrowDown size={24} className="text-muted-foreground" />
          <span className="text-muted-foreground text-sm font-medium">
            Existing solutions require app-switching and manual input
          </span>
          <ArrowDown size={24} className="text-primary" />
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center p-8 lg:p-12 rounded-2xl bg-card border border-primary/20 shadow-vela-green"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Zap size={24} className="text-primary" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            VELA intercepts at the OS level
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Share anything to VELA from any app. The AI classifies intent, extracts entities, 
            and fires the right action — calendar event, email draft, task, or expense log. 
            No copy-paste. No switching apps.
          </p>
          {/* Decorative dots */}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-primary/20" />
          <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-primary/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
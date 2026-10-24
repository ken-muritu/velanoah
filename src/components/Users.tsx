import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Building, Users as UsersIcon } from 'lucide-react';

const personas = [
  {
    icon: BookOpen,
    title: 'Campus Student',
    age: '18-25',
    desc: 'Saves assignment deadlines and lecture links, forgets 60% within 48 hours. VELA auto-creates calendar events from their messages.',
  },
  {
    icon: Briefcase,
    title: 'Freelancer / SME Owner',
    age: '26-40',
    desc: 'Mixes client requests and personal notes in one place. VELA drafts emails and logs invoices automatically.',
  },
  {
    icon: Building,
    title: 'Corporate Professional',
    age: '28-45',
    desc: 'Captures meeting action items verbally, never converts them. VELA routes voice notes to structured task lists.',
  },
  {
    icon: UsersIcon,
    title: 'Community Organiser',
    age: '30-50',
    desc: 'Forwards event info from WhatsApp groups, loses it. VELA surfaces it at the right moment.',
  },
];

const Users = () => {
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
            Who It's For
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Built for people who capture everything and act on nothing
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border shadow-vela-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <p.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">{p.title}</h3>
                  <span className="text-muted-foreground text-xs">Age {p.age}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;
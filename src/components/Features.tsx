import React from 'react';
import { motion } from 'framer-motion';
import {
  Share2,
  Lightbulb,
  Mic,
  Image,
  Send,
  Database,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: Share2,
    title: 'Universal Input',
    desc: 'Share sheet, floating overlay, keyboard extension, or direct capture. Text, links, voice notes, images — all supported.',
    tag: 'Android + iOS',
  },
  {
    icon: Lightbulb,
    title: 'Intent Classification',
    desc: 'AI classifies every input: create event, set reminder, draft email, save note, log expense — 9 action types and growing.',
    tag: 'Claude AI',
  },
  {
    icon: Sparkles,
    title: 'Entity Extraction',
    desc: 'Dates, times, people, locations, amounts (KES/USDC/USD), phone numbers, emails, URLs, and priority signals — extracted automatically.',
    tag: 'Smart parsing',
  },
  {
    icon: Mic,
    title: 'Voice Intelligence',
    desc: 'ElevenLabs transcription supporting African English and Swahili. Voice note → intent → action, with one-tap undo.',
    tag: 'ElevenLabs',
  },
  {
    icon: Image,
    title: 'Image Processing',
    desc: 'OCR via Google Vision. Event flyers become calendar events. M-Pesa receipts become expense logs. Whiteboards become searchable notes.',
    tag: 'Google Vision',
  },
  {
    icon: Send,
    title: 'Action Routing',
    desc: 'Actions land in Google Calendar, Gmail, Notion, Apple Calendar, system alarms — wherever they belong. Automatically.',
    tag: '6 integrations',
  },
  {
    icon: Database,
    title: 'VELA Memory',
    desc: 'Vector database stores semantic embeddings. Ask "what did I save about Mombasa?" and get instant results. Morning briefing digest included.',
    tag: 'pgvector',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Everything between thought and action
          </h2>
          <p className="text-muted-foreground text-lg">
            Seven layers of intelligence that turn raw captures into real outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative p-6 rounded-xl bg-card border border-border shadow-vela-sm hover:shadow-vela-md hover:border-primary/20 transition-all ${
                i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <f.icon size={20} className="text-primary" />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                  {f.tag}
                </span>
              </div>
              <h3 className="text-foreground font-semibold mb-1.5">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

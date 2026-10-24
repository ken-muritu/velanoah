import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'VELA Free',
    price: 'KES 0',
    priceNote: 'forever',
    desc: 'Get started with core productivity automation.',
    features: [
      '50 actions per month',
      'Google Calendar + Google Tasks',
      'Text input only',
      '7-day history',
      'Intent classification',
      'Entity extraction',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'VELA Pro',
    price: 'KES 599',
    priceNote: '/month',
    desc: 'Unlimited power. Every integration. Full intelligence.',
    features: [
      'Unlimited actions',
      'All integrations (Gmail, Notion, Apple)',
      'Voice note intelligence (ElevenLabs)',
      'Image & screenshot processing',
      'Unlimited history + VELA Memory',
      'Morning briefing digest',
      'Priority support',
      'Pay via M-Pesa or USDC on Solana',
    ],
    cta: 'Get Pro',
    highlighted: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free. Upgrade when you need the full stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-6 lg:p-8 rounded-2xl border transition-all ${
                tier.highlighted
                  ? 'bg-foreground text-background border-foreground shadow-vela-lg'
                  : 'bg-card border-border shadow-vela-sm'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold mb-1 ${
                    tier.highlighted ? 'text-background' : 'text-foreground'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    tier.highlighted ? 'text-background/60' : 'text-muted-foreground'
                  }`}
                >
                  {tier.desc}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl font-bold ${
                      tier.highlighted ? 'text-background' : 'text-foreground'
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.highlighted ? 'text-background/50' : 'text-muted-foreground'
                    }`}
                  >
                    {tier.priceNote}
                  </span>
                </div>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? 'text-primary' : 'text-primary'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.highlighted ? 'text-background/80' : 'text-muted-foreground'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg font-medium text-sm transition-all ${
                  tier.highlighted
                    ? 'bg-background text-foreground hover:bg-background/90'
                    : 'bg-foreground text-background hover:bg-foreground/90'
                }`}
              >
                {tier.cta}
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

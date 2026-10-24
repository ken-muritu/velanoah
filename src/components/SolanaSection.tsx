import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileText, Target, Shield } from 'lucide-react';

const solanaFeatures = [
  {
    icon: CreditCard,
    title: 'VELA Pay',
    desc: 'Activate Pro by paying in USDC on Solana. No credit card needed. Solana Pay generates payment requests inside the Flutter app. Works natively in Kenya alongside M-Pesa.',
    detail: 'USDC + M-Pesa',
  },
  {
    icon: FileText,
    title: 'VELA Log',
    desc: 'Every action VELA routes generates a lightweight on-chain record. User pubkey, action type, timestamp, and content hash. You own your productivity data — verifiably.',
    detail: 'On-chain records',
  },
  {
    icon: Target,
    title: 'VELA Stakes',
    desc: 'Stake SOL against any task. Anchor smart contract holds escrow. Complete by deadline — stake returned. Miss it — stake flows to community productivity pool.',
    detail: 'Financial accountability',
  },
];

const SolanaSection = () => {
  return (
    <section id="solana" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
            Solana-Native
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Proof of Productivity
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            VELA is built on Solana — not as a gimmick, but because on-chain payments 
            and verifiable productivity records solve real problems in East Africa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {solanaFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group p-6 lg:p-8 rounded-xl bg-card border border-border shadow-vela-sm hover:shadow-vela-md hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon size={20} className="text-primary" />
                </div>
                <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {f.detail}
                </span>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Anchor contract info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-card border border-border">
            <Shield size={18} className="text-primary" />
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-medium">Anchor Programs:</span>{' '}
              pay_subscription.rs · log_action.rs · stake_task.rs · resolve_stake.rs — Deployed on devnet
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolanaSection;

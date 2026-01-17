import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Activity, Database, FileCheck, Search, Award } from 'lucide-react';

const STEPS = [
    { icon: Search, title: 'Sourcing', desc: 'Vetted dealer network' },
    { icon: Eye, title: 'Visual Inspection', desc: 'Case, dial, hands check' },
    { icon: Activity, title: 'Movement', desc: 'Timegrapher analysis' },
    { icon: Database, title: 'Serial Check', desc: 'Stolen registry verify' },
    { icon: ShieldCheck, title: 'Water Resistance', desc: 'Pressure testing' },
    { icon: FileCheck, title: 'Documentation', desc: 'Paperwork verification' },
    { icon: Award, title: 'Certification', desc: 'Vault Guarantee issued' },
];

export const AuthenticationTimeline: React.FC = () => {
  return (
    <section id="authentication" className="py-24 bg-luxury-card relative overflow-hidden">
        {/* Decorative Grid Line */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <span className="text-luxury-gold font-mono text-xs tracking-[0.3em] uppercase">Trust Protocol</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">Certified Authenticity</h2>
                <p className="text-luxury-muted max-w-2xl mx-auto">
                    Every timepiece in The Vault passes our rigorous 7-point authentication protocol before reaching your wrist.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="p-6 border border-white/5 bg-white/[0.02] backdrop-blur hover:bg-white/[0.05] transition-colors group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <step.icon className="text-luxury-muted group-hover:text-luxury-gold transition-colors" size={24} strokeWidth={1.5} />
                            <span className="font-mono text-xl text-white/10 group-hover:text-white/20">0{index + 1}</span>
                        </div>
                        <h3 className="text-white font-serif text-lg mb-2">{step.title}</h3>
                        <p className="text-xs text-luxury-muted uppercase tracking-wider">{step.desc}</p>
                    </motion.div>
                ))}
                
                {/* Final Call to Action Card */}
                 <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="p-6 border border-luxury-gold/30 bg-luxury-gold/5 flex flex-col justify-center items-center text-center"
                    >
                       <h3 className="text-luxury-gold font-serif text-lg mb-2">100% Guaranteed</h3>
                       <p className="text-xs text-luxury-muted mb-4">Lifetime authenticity warranty.</p>
                       <button className="text-[10px] uppercase font-bold text-white border-b border-white pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-colors">
                           Download Sample Report
                       </button>
                    </motion.div>
            </div>
        </div>
    </section>
  );
};

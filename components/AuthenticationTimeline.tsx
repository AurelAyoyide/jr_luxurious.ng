import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Activity, Gem, FileCheck, Sparkles, Award } from 'lucide-react';

const STEPS = [
    { icon: Gem, title: 'Matériaux', desc: 'Acier 904L & Saphir' },
    { icon: Eye, title: 'Inspection Visuelle', desc: 'Cadran, boîtier, aiguilles' },
    { icon: Activity, title: 'Mouvement', desc: 'Calibrage précis' },
    { icon: Sparkles, title: 'Finitions', desc: 'Polissage premium' },
    { icon: ShieldCheck, title: 'Étanchéité', desc: 'Test de pression' },
    { icon: FileCheck, title: 'Emballage', desc: 'Écrin luxe inclus' },
    { icon: Award, title: 'Validation', desc: 'Garantie 2 ans' },
];

export const AuthenticationTimeline: React.FC = () => {
  return (
    <section id="authentication" className="py-24 bg-luxury-card relative overflow-hidden">
        {/* Decorative Grid Line */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <span className="text-luxury-gold font-mono text-xs tracking-[0.3em] uppercase">Contrôle Qualité</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">Excellence Garantie</h2>
                <p className="text-luxury-muted max-w-2xl mx-auto">
                    Chaque garde-temps passe par notre protocole de contrôle qualité en 7 étapes avant de vous être livré.
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
                       <h3 className="text-luxury-gold font-serif text-lg mb-2">Garantie 2 Ans</h3>
                       <p className="text-xs text-luxury-muted mb-4">Qualité certifiée, satisfaction assurée.</p>
                       <button className="text-[10px] uppercase font-bold text-white border-b border-white pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-colors">
                           Voir les Conditions
                       </button>
                    </motion.div>
            </div>
        </div>
    </section>
  );
};

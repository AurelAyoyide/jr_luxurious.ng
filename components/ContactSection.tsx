import React, { useState } from 'react';
import { MessageCircle, Send, ShieldCheck, Globe, Clock9 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', phone: '', watch: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormState({ name: '', phone: '', watch: '' });
    };

    return (
        <section id="contact" className="py-32 bg-[#050508] relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left Side: Brand & Value Prop */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-luxury-gold font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">Concierge Division</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
                                Secure Your <br />
                                <span className="italic">Legacy.</span>
                            </h2>
                            <p className="text-luxury-muted text-lg mb-12 leading-relaxed max-w-lg">
                                Access our global network of prestige timepieces. Our specialists provide
                                discreet, white-glove service for the world's most demanding collectors.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-luxury-gold">
                                        <Globe size={18} />
                                        <span className="text-[10px] uppercase tracking-widest font-bold">Global Sourcing</span>
                                    </div>
                                    <p className="text-xs text-luxury-muted">Finding rare pieces across 47 countries.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-luxury-gold">
                                        <ShieldCheck size={18} />
                                        <span className="text-[10px] uppercase tracking-widest font-bold">Guaranteed Origin</span>
                                    </div>
                                    <p className="text-xs text-luxury-muted">Every piece fully authenticated by our masters.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] uppercase tracking-widest text-white/50">Online Now</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock9 size={14} className="text-white/30" />
                                    <span className="text-[10px] uppercase tracking-widest text-white/50">Awaiting Your Call</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0c0c10] border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl relative z-10"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-serif text-white mb-2">Private Inquiry</h3>
                                <p className="text-xs text-luxury-muted uppercase tracking-widest">Connect with a Head Specialist</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-4">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={e => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-luxury-gold outline-none transition-all placeholder:text-white/10"
                                            placeholder="Your Full Name"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            required
                                            value={formState.phone}
                                            onChange={e => setFormState({ ...formState, phone: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-luxury-gold outline-none transition-all placeholder:text-white/10"
                                            placeholder="WhatsApp Number"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            required
                                            value={formState.watch}
                                            onChange={e => setFormState({ ...formState, watch: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-luxury-gold outline-none transition-all placeholder:text-white/10"
                                            placeholder="Model of Interest"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitted}
                                    className="w-full bg-luxury-gold text-black py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitted ? 'Inquiry Sent' : 'Initiate Contact'}
                                    {!isSubmitted && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                            </form>

                            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <p className="text-[10px] text-luxury-muted uppercase tracking-widest">Prefer Direct Messaging?</p>
                                <a href="#" className="flex items-center gap-2 text-[#25D366] hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                                    <MessageCircle size={18} /> WhatsApp Direct
                                </a>
                            </div>
                        </motion.div>

                        {/* Decorative background frame */}
                        <div className="absolute -top-4 -right-4 w-full h-full border border-luxury-gold/10 -z-0" />
                    </div>

                </div>
            </div>
        </section>
    );
};

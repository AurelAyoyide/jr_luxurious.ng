import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', phone: '', watch: '' });
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Inquiry sent to concierge!');
        setFormState({ name: '', phone: '', watch: '' });
    };

    return (
        <section id="contact" className="py-24 bg-luxury-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-luxury-card border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                    
                    {/* Background Shine */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-luxury-gold/5 rounded-full blur-[80px] pointer-events-none" />

                    {/* Left: WhatsApp CTA */}
                    <div className="flex flex-col justify-center">
                        <span className="text-luxury-gold font-mono text-xs tracking-[0.3em] uppercase mb-4">Concierge Service</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Secure Your Piece</h2>
                        <p className="text-luxury-muted mb-8 text-lg">
                            The fastest way to reserve a timepiece or request a specific model is to speak directly with our team.
                        </p>
                        
                        <a href="#" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#1db854] transition-colors w-fit">
                            <MessageCircle size={20} /> Chat on WhatsApp
                        </a>

                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-xs text-luxury-muted uppercase tracking-wider mb-2">Availability</p>
                            <p className="text-white font-mono text-sm">Mon-Sat: 9AM - 10PM EST</p>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="relative z-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-luxury-muted mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    value={formState.name}
                                    onChange={e => setFormState({...formState, name: e.target.value})}
                                    className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-luxury-gold outline-none transition-colors rounded-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-luxury-muted mb-2">WhatsApp Number</label>
                                <input 
                                    type="tel" 
                                    value={formState.phone}
                                    onChange={e => setFormState({...formState, phone: e.target.value})}
                                    className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-luxury-gold outline-none transition-colors rounded-sm"
                                    placeholder="+1 ..."
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-luxury-muted mb-2">Desired Timepiece</label>
                                <input 
                                    type="text" 
                                    value={formState.watch}
                                    onChange={e => setFormState({...formState, watch: e.target.value})}
                                    className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-luxury-gold outline-none transition-colors rounded-sm"
                                    placeholder="e.g. Rolex Daytona"
                                />
                            </div>
                            
                            <button type="submit" className="w-full bg-luxury-gold text-black py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                                Submit Inquiry <Send size={16} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

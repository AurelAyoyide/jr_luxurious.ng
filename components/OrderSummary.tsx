import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, MessageCircle, ShieldCheck, Clock, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { CartItem } from '../types';

interface OrderSummaryProps {
    items: CartItem[];
    onBack: () => void;
    onFinalize: (name: string) => void;
}

const WHATSAPP_NUMBER = '2349072900500';

const formatCartForWhatsApp = (items: CartItem[], name: string, total: number, t: any): string => {
    let message = `🛍️ *NEW ORDER - Luxurious.ng* 🛍️\n\n`;
    message += `👤 *${t('order.name')}:* ${name || 'Guest'}\n`;
    message += `📅 *Date:* ${new Date().toLocaleDateString()}\n\n`;
    message += `━━━━━━━━━━━━━━━━\n`;
    message += `📦 *ORDER DETAILS*\n`;
    message += `━━━━━━━━━━━━━━━━\n\n`;
    
    items.forEach((item, index) => {
        message += `${index + 1}. ⌚ *${item.brand} ${item.model}*\n`;
        message += `   📋 Ref: ${item.reference}\n`;
        message += `   💰 Price: ₦${item.price.toLocaleString()}\n`;
        message += `   🔢 Qty: ${item.quantity}\n`;
        message += `   💵 Subtotal: ₦${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━\n`;
    message += `🚚 *Shipping:* FREE ✅\n`;
    message += `💎 *TOTAL:* ₦${total.toLocaleString()}\n`;
    message += `━━━━━━━━━━━━━━━━\n\n`;
    message += `✨ Thank you for choosing Luxurious.ng!\n`;
    message += `📞 We will contact you shortly to confirm your order.`;
    
    return encodeURIComponent(message);
};

export const OrderSummary: React.FC<OrderSummaryProps> = ({ items, onBack, onFinalize }) => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // ...
    const date = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="flex h-screen w-full bg-[#050508] text-white selection:bg-luxury-gold selection:text-black font-sans overflow-hidden relative">

            {/* LEFT SIDE: Cinematic Visual (60%) */}
            <div className="hidden lg:block w-[60%] h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 z-10" />

                {/* Dynamic Background */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=2000"
                        alt="Horology Art"
                        className="w-full h-full object-cover blur-[6px] grayscale transition-all duration-[2000ms] ease-in-out group-hover:blur-0 group-hover:grayscale-0 group-hover:scale-110"
                    />
                </motion.div>

                {/* Ambient Lighting Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent z-10 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/50 via-transparent to-transparent z-10" />

                {/* Decorative Elements */}
                <div className="absolute top-12 left-12 z-20">
                    <div className="w-16 h-[1px] bg-white/30 mb-2" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/80 font-light">Luxurious.ng</span>
                </div>

                {/* Central Focus Quote */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-3/4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <h2 className="text-4xl xl:text-5xl font-serif text-white leading-tight italic opacity-90 mix-blend-overlay">
                            "Time is the only true luxury."
                        </h2>
                    </motion.div>
                </div>

                {/* Bottom Editorial Content */}
                <div className="absolute bottom-16 left-16 z-20 max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 border border-white/20 rounded-full text-[9px] uppercase tracking-widest text-white backdrop-blur-md">Secure Channel</span>
                            <span className="px-3 py-1 border border-white/20 rounded-full text-[9px] uppercase tracking-widest text-white backdrop-blur-md">Priority Access</span>
                        </div>
                        <h2 className="text-6xl font-serif text-white mb-4">
                            Finalize Your <br />
                            <span className="text-luxury-gold italic">Acquisition.</span>
                        </h2>
                        <div className="h-[1px] w-24 bg-luxury-gold mb-6" />
                        <p className="text-white/80 text-sm font-light leading-relaxed backdrop-blur-sm p-4 rounded-sm border-l border-white/10 bg-white/5">
                            You are communicating directly with our Head of Sales.
                            This reservation guarantees a 24-hour hold on your selected references.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* RIGHT SIDE: Details Panel (40%) */}
            <div className="w-full lg:w-[40%] h-full bg-[#050508]/95 backdrop-blur-2xl border-l border-white/5 flex flex-col relative z-30">
                {/* Navigation Header */}
                <header className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-[#050508]">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-luxury-muted hover:text-white transition-colors group"
                    >
                        <div className="p-2 border border-white/10 rounded-full group-hover:border-white transition-colors">
                            <ArrowLeft size={14} />
                        </div>
                        Return
                    </button>

                    <div className="text-right">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold">Private Lounge</p>
                        <p className="font-serif text-sm">Secure Checkout</p>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 lg:p-12 scrollbar-hide">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-10">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-luxury-gold/10 text-luxury-gold text-[9px] uppercase tracking-widest rounded-full mb-4">
                                <CheckCircle2 size={12} /> Verification Complete
                            </span>
                            <h3 className="text-3xl font-serif text-white mb-2">Reservation Summary</h3>
                            <p className="text-sm text-luxury-muted">Ref: {Math.random().toString(36).substr(2, 9).toUpperCase()} • {date}</p>
                        </div>

                        {/* Items List */}
                        <div className="space-y-6 mb-12">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 bg-white/5 rounded-sm border border-white/5 hover:border-luxury-gold/30 transition-colors group">
                                    <div className="w-20 aspect-[3/4] bg-black overflow-hidden rounded-sm relative selection:bg-none">
                                        <img src={item.image} alt={item.model} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <p className="text-[9px] uppercase tracking-widest text-luxury-gold mb-1">{item.brand}</p>
                                            <h4 className="font-serif text-lg leading-none mb-1">{item.model}</h4>
                                            <p className="text-xs text-luxury-muted">Ref. {item.reference}</p>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] text-luxury-muted">Qty: {item.quantity}</span>
                                            <span className="font-mono text-white">₦{(item.price * item.quantity).toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Financials */}
                        <div className="space-y-4 mb-10 pb-10 border-b border-white/5">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-luxury-muted uppercase tracking-wider">Subtotal</span>
                                <span className="font-mono text-white">₦{total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-luxury-muted uppercase tracking-wider">Concierge Fee</span>
                                <span className="text-luxury-gold">Complimentary</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-luxury-muted uppercase tracking-wider">Secure Shipping</span>
                                <span className="text-luxury-gold">Included</span>
                            </div>
                            <div className="flex justify-between items-center pt-4 mt-4 border-t border-white/10">
                                <span className="font-serif text-lg text-white">Total Estimated</span>
                                <span className="font-mono text-2xl text-luxury-gold">₦{total.toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Name Input - Identity */}
                        <div className="mb-10">
                            <label className="block text-[9px] uppercase tracking-widest text-luxury-muted mb-2">Reservation Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-serif placeholder:font-sans placeholder:text-white/20 focus:outline-none focus:border-luxury-gold transition-colors"
                            />
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-sm">
                                <ShieldCheck className="text-luxury-gold" size={18} />
                                <div>
                                    <p className="text-[9px] uppercase font-bold text-white">Authenticity</p>
                                    <p className="text-[8px] text-luxury-muted">Double-Verified</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-sm">
                                <Star className="text-luxury-gold" size={18} />
                                <div>
                                    <p className="text-[9px] uppercase font-bold text-white">Warranty</p>
                                    <p className="text-[8px] text-luxury-muted">24 Months Global</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sticky Footer */}
                <div className="p-8 border-t border-white/10 bg-[#050508] mt-auto relative z-30">
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${formatCartForWhatsApp(items, name, total, t)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onFinalize(name)}
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
                    >
                        <MessageCircle size={18} /> {t('order.confirm')} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-[8px] text-center text-luxury-muted mt-4 opacity-70">
                        Luxurious.ng • {t('order.terms')}
                    </p>
                </div>
            </div>
        </div >
    );
};

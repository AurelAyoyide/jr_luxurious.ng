import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (id: string, delta: number) => void;
    onRemove: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
    isOpen,
    onClose,
    items,
    onUpdateQuantity,
    onRemove
}) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-luxury-black border-l border-white/5 z-[101] flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-luxury-gold" size={20} />
                                <h2 className="text-xl font-serif text-white uppercase tracking-widest">Your Vault</h2>
                                <span className="text-[10px] font-mono text-luxury-muted bg-white/5 px-2 py-0.5 rounded-full">
                                    {items.length}
                                </span>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                                        <ShoppingBag size={32} className="text-white/20" />
                                    </div>
                                    <div>
                                        <p className="text-white font-serif text-lg mb-2">The vault is empty</p>
                                        <p className="text-luxury-muted text-sm px-8">Discover our collection of rare timepieces to begin your legacy.</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="text-luxury-gold uppercase text-[10px] tracking-widest hover:underline underline-offset-8"
                                    >
                                        Explore Collection
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-6 group">
                                        <div className="w-24 aspect-[3/4] bg-white/5 overflow-hidden">
                                            <img src={item.image} alt={item.model} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-[9px] uppercase tracking-widest text-luxury-gold">{item.brand}</span>
                                                    <button onClick={() => onRemove(item.id)} className="text-white/20 hover:text-luxury-red transition-colors">
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                                <h3 className="text-sm font-serif text-white leading-tight">{item.model}</h3>
                                                <p className="text-[10px] text-luxury-muted font-mono mt-1">Ref. {item.reference}</p>
                                            </div>

                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center border border-white/10 rounded-sm">
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.id, -1)}
                                                        className="p-1 hover:bg-white/5 text-white disabled:opacity-20"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="w-8 text-center text-[10px] font-mono text-white">{item.quantity}</span>
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.id, 1)}
                                                        className="p-1 hover:bg-white/5 text-white"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                                <span className="text-sm font-mono text-luxury-gold">
                                                    ₦{(item.price * item.quantity).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-8 bg-black/40 border-t border-white/5 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-luxury-muted text-[10px] uppercase tracking-widest">
                                        <span>Subtotal</span>
                                        <span className="font-mono">₦{total.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-luxury-muted text-[10px] uppercase tracking-widest">
                                        <span>Global Shipping</span>
                                        <span>Complimentary</span>
                                    </div>
                                    <div className="flex justify-between text-white text-lg font-serif pt-4 border-t border-white/10">
                                        <span>Total</span>
                                        <span className="text-luxury-gold">₦{total.toLocaleString()}</span>
                                    </div>
                                </div>

                                <button className="w-full py-6 bg-white hover:bg-luxury-gold text-black font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-3">
                                    Secure Checkout <ArrowRight size={16} />
                                </button>
                                <p className="text-[8px] text-center text-luxury-muted uppercase tracking-widest opacity-50">
                                    Secured by 256-bit SSL Encryption
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

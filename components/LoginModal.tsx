import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldCheck, X, ChevronRight, Loader2 } from 'lucide-react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !code) {
            setError('Please provide full specialist credentials.');
            return;
        }

        setIsLoggingIn(true);
        // Simulate secure authentication
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (code === '1234') {
            onLogin();
        } else {
            setError('Invalid security code. Access denied.');
            setIsLoggingIn(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-[#121216] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-luxury-muted hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ rotateY: 0 }}
                                animate={{ rotateY: isLoggingIn ? 360 : 0 }}
                                transition={{ repeat: isLoggingIn ? Infinity : 0, duration: 2, ease: "linear" }}
                                className="inline-flex p-4 bg-luxury-gold/10 rounded-full mb-6 border border-luxury-gold/20"
                            >
                                <Lock className="text-luxury-gold" size={32} />
                            </motion.div>
                            <h2 className="text-2xl font-serif text-white mb-2">Concierge Access</h2>
                            <p className="text-luxury-muted text-xs uppercase tracking-[0.2em]">Secure specialist portal</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold ml-1">Specialist ID (Email)</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="specialist@thevault.co"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-sm text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-white/20"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold ml-1">Security Code</label>
                                <input
                                    type="password"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    placeholder="••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-sm text-white tracking-widest focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-white/20"
                                />
                            </div>

                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-red-400 text-[10px] uppercase font-bold tracking-wider text-center"
                                >
                                    {error}
                                </motion.p>
                            )}

                            <button
                                type="submit"
                                disabled={isLoggingIn}
                                className="w-full bg-luxury-gold hover:bg-white text-black py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoggingIn ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Authenticating...
                                    </>
                                ) : (
                                    <>
                                        Unlock Vault <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-10 pt-8 border-t border-white/5 text-center">
                            <div className="flex items-center justify-center gap-2 text-luxury-muted text-[9px] uppercase tracking-[0.1em]">
                                <ShieldCheck size={12} className="text-green-500" />
                                256-bit Encrypted Specialists Only
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

import React from 'react';

interface FooterProps {
    onOpenSeller?: () => void;
    onOpenCatalog?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSeller, onOpenCatalog }) => {
    return (
        <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="md:col-span-1">
                    <button onClick={onOpenCatalog} className="font-serif text-2xl text-white tracking-wide block mb-6 text-left hover:text-luxury-gold transition-colors">
                        THE VAULT
                    </button>
                    <p className="text-luxury-muted text-sm leading-relaxed">
                        The world's premier destination for authenticated luxury timepieces.
                        Serving collectors in 47 countries.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-serif mb-6 underline decoration-luxury-gold/20 underline-offset-8">Collection</h4>
                    <ul className="space-y-4 text-sm text-luxury-muted">
                        <li><button onClick={onOpenCatalog} className="hover:text-luxury-gold transition-colors text-left">Explore Archive</button></li>
                        <li><button onClick={onOpenCatalog} className="hover:text-luxury-gold transition-colors text-left">Investment Pieces</button></li>
                        <li><button onClick={onOpenCatalog} className="hover:text-luxury-gold transition-colors text-left">Curated Selection</button></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-serif mb-6">Services</h4>
                    <ul className="space-y-4 text-sm text-luxury-muted">
                        <li><a href="#" className="hover:text-luxury-gold transition-colors">Authentication</a></li>
                        <li><a href="#" className="hover:text-luxury-gold transition-colors">Sell Your Watch</a></li>
                        <li>
                            <button
                                onClick={onOpenSeller}
                                className="hover:text-luxury-gold transition-colors text-left"
                            >
                                Seller Portal
                            </button>
                        </li>
                        <li><a href="#" className="hover:text-luxury-gold transition-colors">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-serif mb-6">Contact</h4>
                    <p className="text-luxury-muted text-sm mb-4">
                        WhatsApp: <span className="text-white">+1 (555) 0123-4567</span>
                    </p>
                    <p className="text-luxury-muted text-sm">
                        Email: <span className="text-white">concierge@thevault.com</span>
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[10px] uppercase text-luxury-muted tracking-widest">
                    © 2024 The Vault. All Rights Reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-[10px] uppercase text-luxury-muted tracking-widest hover:text-white">Privacy</a>
                    <a href="#" className="text-[10px] uppercase text-luxury-muted tracking-widest hover:text-white">Terms</a>
                </div>
            </div>
        </footer>
    );
};

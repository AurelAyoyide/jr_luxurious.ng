import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-1">
                <a href="#" className="font-serif text-2xl text-white tracking-wide block mb-6">
                  THE VAULT
                </a>
                <p className="text-luxury-muted text-sm leading-relaxed">
                    The world's premier destination for authenticated luxury timepieces. 
                    Serving collectors in 47 countries.
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-serif mb-6">Collection</h4>
                <ul className="space-y-4 text-sm text-luxury-muted">
                    <li><a href="#" className="hover:text-luxury-gold transition-colors">New Arrivals</a></li>
                    <li><a href="#" className="hover:text-luxury-gold transition-colors">Rolex</a></li>
                    <li><a href="#" className="hover:text-luxury-gold transition-colors">Patek Philippe</a></li>
                    <li><a href="#" className="hover:text-luxury-gold transition-colors">Investment Grade</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-serif mb-6">Services</h4>
                <ul className="space-y-4 text-sm text-luxury-muted">
                    <li><a href="#" className="hover:text-luxury-gold transition-colors">Authentication</a></li>
                    <li><a href="#" className="hover:text-luxury-gold transition-colors">Sell Your Watch</a></li>
                    <li><a href="#" className="hover:text-luxury-gold transition-colors">Concierge</a></li>
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

import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Mail, Watch } from 'lucide-react';

interface FooterProps {
    onOpenSeller?: () => void;
    onOpenCatalog?: () => void;
}

const WHATSAPP_NUMBER = '2349072900500';
const EMAIL = 'hmmininyawa7@gmail.com';

export const Footer: React.FC<FooterProps> = ({ onOpenCatalog }) => {
    const { t } = useTranslation();
    
    return (
        <footer className="bg-[#050508] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <button onClick={onOpenCatalog} className="flex items-center gap-3 mb-4 text-left hover:opacity-80 transition-opacity">
                            <Watch className="text-luxury-gold" size={28} />
                            <span className="font-serif text-2xl text-white tracking-wide">Luxurious.ng</span>
                        </button>
                        <p className="text-luxury-muted text-sm leading-relaxed mb-4">
                            {t('footer.description')}
                        </p>
                        <p className="text-luxury-gold text-xs font-mono">{t('brand.since')}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif mb-6 text-lg">{t('footer.collection')}</h4>
                        <ul className="space-y-3 text-sm text-luxury-muted">
                            <li>
                                <button onClick={onOpenCatalog} className="hover:text-luxury-gold transition-colors text-left">
                                    {t('footer.allWatches')}
                                </button>
                            </li>
                            <li>
                                <button onClick={onOpenCatalog} className="hover:text-luxury-gold transition-colors text-left">
                                    {t('footer.newArrivals')}
                                </button>
                            </li>
                            <li>
                                <button onClick={onOpenCatalog} className="hover:text-luxury-gold transition-colors text-left">
                                    {t('footer.bestSellers')}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif mb-6 text-lg">{t('footer.contact')}</h4>
                        <div className="space-y-4">
                            <a 
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-luxury-muted hover:text-[#25D366] transition-colors"
                            >
                                <MessageCircle size={18} className="text-[#25D366]" />
                                <span>+234 907 290 0500</span>
                            </a>
                            <a 
                                href={`mailto:${EMAIL}`}
                                className="flex items-center gap-3 text-sm text-luxury-muted hover:text-luxury-gold transition-colors"
                            >
                                <Mail size={18} className="text-luxury-gold" />
                                <span>{EMAIL}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] uppercase text-luxury-muted tracking-widest">
                        {t('footer.rights')}
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-[10px] uppercase text-luxury-muted tracking-widest hover:text-white transition-colors">
                            {t('footer.privacy')}
                        </a>
                        <a href="#" className="text-[10px] uppercase text-luxury-muted tracking-widest hover:text-white transition-colors">
                            {t('footer.terms')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

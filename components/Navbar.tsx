import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X, Briefcase, Watch, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS } from '../constants';
import { LanguageToggle } from './LanguageToggle';

const WHATSAPP_NUMBER = '2349072900500';

interface NavbarProps {
  onLogoClick?: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSeller: () => void;
  onOpenPortfolio: () => void;
  onOpenCatalog: () => void;
  portfolioCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onLogoClick,
  cartCount,
  onOpenCart,
  onOpenSeller,
  onOpenPortfolio,
  onOpenCatalog,
  portfolioCount
}) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled
          ? 'bg-luxury-black/80 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={onLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity text-left"
          >
            <Watch className="text-luxury-gold" size={28} />
            <div>
              <span className="font-serif text-xl text-white tracking-wide block leading-none">Luxurious.ng</span>
              <span className="block text-[8px] font-sans font-medium tracking-[0.3em] text-luxury-muted uppercase">
                {t('brand.tagline')}
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.label === 'Collection') onOpenCatalog();
                  else window.location.hash = item.href;
                }}
                className="text-[11px] uppercase tracking-[0.2em] text-luxury-muted hover:text-luxury-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="hidden md:block">
              <LanguageToggle />
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white px-4 py-2 rounded-full transition-all duration-300 border border-[#25D366]/20"
            >
              <MessageCircle size={16} />
              <span className="text-xs uppercase tracking-wider font-medium">WhatsApp</span>
            </a>

            {/* My Vault Access */}
            <button
              onClick={onOpenPortfolio}
              className="text-white hover:text-luxury-gold transition-colors relative flex items-center justify-center"
              title="My Asset Vault"
            >
              <Briefcase size={20} strokeWidth={1.5} />
              {portfolioCount > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="text-white hover:text-luxury-gold transition-colors relative"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-luxury-gold rounded-full text-[8px] flex items-center justify-center text-black font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-luxury-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (item.label === 'Collection') onOpenCatalog();
                    else window.location.hash = item.href;
                  }}
                  className="text-2xl font-serif text-white hover:text-luxury-gold transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="w-12 h-[1px] bg-white/10 mx-auto my-4" />
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenPortfolio(); }}
                className="text-luxury-gold font-mono text-sm tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Briefcase size={16} /> {t('nav.myVault')}
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <div className="mt-4">
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

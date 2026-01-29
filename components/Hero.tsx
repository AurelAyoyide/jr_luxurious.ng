import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '2349072900500';

export interface HeroProps {
  onExploreCatalog?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog }) => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Column: Text */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[1px] bg-luxury-gold/50" />
            <span className="text-luxury-gold font-mono text-xs tracking-[0.25em] uppercase">
              {t('hero.tagline')}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-luxury-text leading-[0.9]"
            >
              {t('hero.title')} <br />
              <span className="italic text-luxury-gold/90">{t('hero.titleAccent')}</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-luxury-muted text-lg max-w-md mb-10 font-light leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onExploreCatalog}
              className="group relative px-8 py-4 bg-white/5 border border-white/10 hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-black uppercase tracking-widest text-xs font-bold">
                {t('hero.cta')} <ArrowRight size={16} />
              </span>
            </button>

            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 flex items-center gap-2 text-[#25D366] hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative z-10 hidden lg:block h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="absolute inset-0 bg-metal-gradient border border-white/5 backdrop-blur-sm overflow-hidden"
          >
            {/* Mocking a 3D/High-end visual with an image */}
            <div className="w-full h-full relative">
              <img
                src="https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Luxury Watch"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 p-4 bg-luxury-black/80 backdrop-blur-md border border-white/10"
              >
                <div className="flex justify-between items-start border-b border-white/10 pb-2 mb-2">
                  <span className="text-luxury-gold font-serif text-lg">Patek Philippe</span>
                  <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full uppercase">Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-muted text-xs uppercase">Nautilus 5711</span>
                  <span className="font-mono text-white">₦115,000</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-luxury-muted">{t('hero.scroll')}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>
    </section>
  );
};

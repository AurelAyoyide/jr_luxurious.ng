import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const changeLanguage = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1"
    >
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
          language === 'en' 
            ? 'bg-luxury-gold text-black' 
            : 'text-luxury-muted hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
          language === 'fr' 
            ? 'bg-luxury-gold text-black' 
            : 'text-luxury-muted hover:text-white'
        }`}
      >
        FR
      </button>
    </motion.div>
  );
};

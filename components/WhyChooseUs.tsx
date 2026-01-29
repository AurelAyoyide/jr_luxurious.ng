import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Gem, 
  Truck, 
  HeadphonesIcon, 
  ShieldCheck,
  Award
} from 'lucide-react';

const WHATSAPP_NUMBER = '2349072900500';

const ADVANTAGES = [
  { key: 'premium', icon: Gem },
  { key: 'attention', icon: ShieldCheck },
  { key: 'shipping', icon: Truck },
  { key: 'support', icon: HeadphonesIcon }
];

const STATS = [
  { value: '2010', key: 'since' },
  { value: '5000+', key: 'clients' },
  { value: '47+', key: 'countries' },
  { value: '24/7', key: 'support' }
];

export const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="py-32 bg-[#08080c] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/3 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury-gold font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">
              {t('whyUs.tagline')}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              {t('whyUs.title')} <span className="italic text-luxury-gold">{t('whyUs.titleAccent')}</span>
            </h2>
            <p className="text-luxury-muted max-w-2xl mx-auto text-lg leading-relaxed">
              {t('whyUs.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {STATS.map((stat, i) => (
            <div 
              key={i} 
              className="text-center py-8 px-4 bg-white/[0.02] border border-white/5 backdrop-blur-sm"
            >
              <span className="text-4xl md:text-5xl font-serif text-luxury-gold block mb-2">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-luxury-muted">
                {stat.key === 'since' ? t('brand.since') : 
                 stat.key === 'clients' ? 'Happy Clients' :
                 stat.key === 'countries' ? 'Countries' : t('whyUs.advantages.support.highlight')}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative p-8 bg-[#0c0c10] border border-white/5 hover:border-luxury-gold/30 transition-all duration-500"
              >
                {/* Highlight Badge */}
                <div className="absolute top-6 right-6 text-luxury-gold font-mono text-[10px] tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
                  {t(`whyUs.advantages.${item.key}.highlight`)}
                </div>

                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-sm bg-luxury-gold/5 border border-luxury-gold/20 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/10 group-hover:border-luxury-gold/40 transition-all">
                    <Icon size={24} className="text-luxury-gold" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-serif text-white mb-3">{t(`whyUs.advantages.${item.key}.title`)}</h3>
                  <p className="text-luxury-muted text-sm leading-relaxed flex-grow">{t(`whyUs.advantages.${item.key}.desc`)}</p>
                </div>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-luxury-gold group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-luxury-gold/5 to-transparent border border-luxury-gold/20 rounded-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                <Award className="text-luxury-gold" size={24} />
              </div>
              <div className="text-left">
                <span className="text-white font-serif text-lg block">{t('whyUs.qualityCommitment')}</span>
                <span className="text-luxury-muted text-xs">{t('whyUs.satisfaction')}</span>
              </div>
            </div>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white font-bold uppercase tracking-widest text-[10px] hover:bg-[#128C7E] transition-all flex items-center gap-2"
            >
              {t('whyUs.orderNow')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

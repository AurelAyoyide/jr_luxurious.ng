import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const FeaturedSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="featured" ref={containerRef} className="py-32 overflow-hidden bg-[#08080c] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
        <div>
          <span className="text-luxury-gold text-xs font-mono tracking-widest uppercase mb-2 block">The Vault Reserve</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">Crown Jewels</h2>
        </div>
        <p className="hidden md:block text-luxury-muted text-sm max-w-xs text-right">
          Exceptionally rare pieces for the discerning investor.
        </p>
      </div>

      <div className="relative w-full">
        <motion.div
          style={{ x }}
          className="flex gap-12 px-6 w-max"
        >
          <FeaturedCard
            img="https://images.unsplash.com/photo-1632057396657-695cc7241284?auto=format&fit=crop&q=80&w=1200"
            name="Rolex Daytona 'Paul Newman'"
            desc="The holygrail of vintage chronographs. Ref 6239."
            price="₦225,000"
          />
          <FeaturedCard
            img="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=1200"
            name="Patek Philippe 5740G"
            desc="Nautilus Perpetual Calendar in White Gold."
            price="₦280,000"
          />
          <FeaturedCard
            img="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?auto=format&fit=crop&q=80&w=1200"
            name="Audemars Piguet Royal Oak QP"
            desc="Openworked ceramic perpetual calendar."
            price="₦195,000"
          />
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedCard: React.FC<{ img: string; name: string; desc: string; price: string }> = ({ img, name, desc, price }) => (
  <div className="w-[80vw] md:w-[60vw] lg:w-[40vw] relative group cursor-pointer">
    <div className="aspect-[16/9] overflow-hidden mb-6 relative">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
      <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
    </div>
    <div className="flex justify-between items-start border-t border-white/10 pt-6">
      <div>
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{name}</h3>
        <p className="text-luxury-muted text-sm">{desc}</p>
      </div>
      <div className="text-right">
        <span className="block text-[10px] uppercase text-luxury-gold tracking-widest mb-1">Market Value</span>
        <span className="font-mono text-2xl text-white">{price}</span>
      </div>
    </div>
  </div>
);

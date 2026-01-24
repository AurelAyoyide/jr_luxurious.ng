import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FEATURED_PIECES = [
  {
    img: "https://images.unsplash.com/photo-1632057396657-695cc7241284?auto=format&fit=crop&q=80&w=1200",
    name: "Rolex Daytona 'Paul Newman'",
    desc: "The holy grail of vintage chronographs. Ref 6239 with exotic dial.",
    price: "₦225,000,000",
    year: "1969"
  },
  {
    img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=1200",
    name: "Patek Philippe 5740G",
    desc: "The first Grand Complication in the Nautilus collection.",
    price: "₦280,000,000",
    year: "2024"
  },
  {
    img: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?auto=format&fit=crop&q=80&w=1200",
    name: "AP Royal Oak QP",
    desc: "Openworked ceramic perpetual calendar. A masterpiece of engineering.",
    price: "₦195,000,000",
    year: "2023"
  }
];

export const FeaturedSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      id="featured" 
      ref={containerRef} 
      className="relative bg-luxury-black"
      style={{ height: `${FEATURED_PIECES.length * 150}vh` }} // Increased scroll distance for smoother feel
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col pt-24 pb-12">
        {/* Section Header - Now more structured and static */}
        <div className="px-8 md:px-20 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-luxury-gold"></div>
            <span className="text-luxury-gold text-xs font-mono tracking-[0.5em] uppercase">Private Reserve</span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif text-white tracking-tight"
            >
              Crown Jewels
            </motion.h2>
          </div>
        </div>

        {/* Stacked Cards Container - Below the text */}
        <div className="relative flex-1 flex items-start justify-center px-6 mt-4">
          {FEATURED_PIECES.map((piece, index) => (
            <Card 
              key={index} 
              piece={piece} 
              index={index} 
              total={FEATURED_PIECES.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="h-12 w-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                    style={{ scaleY: scrollYProgress }}
                    className="absolute inset-0 bg-luxury-gold origin-top"
                />
            </div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-luxury-muted">Scroll to Explore</span>
        </div>

        {/* Bottom Transition Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury-black to-transparent z-[5]" />
      </div>
    </section>
  );
};

interface CardProps {
  piece: typeof FEATURED_PIECES[0];
  index: number;
  total: number;
  progress: any;
}

const Card: React.FC<CardProps> = ({ piece, index, total, progress }) => {
  const start = index / total;
  const end = (index + 1) / total;
  
  // Custom scroll response for each card
  // First card is visible at the very start (progress 0)
  // Last card stays visible at the end
  const opacity = useTransform(
    progress, 
    [start, start + 0.1, end - 0.1, end], 
    index === 0 
      ? [1, 1, 1, 0] // First card starts visible
      : index === total - 1 
        ? [0, 1, 1, 1] // Last card stays visible
        : [0, 1, 1, 0] // Middle cards fade in and out
  );
  
  const scale = useTransform(
    progress, 
    [start, start + 0.2, end], 
    index === 0
      ? [1, 1, 1.1]
      : index === total - 1 
        ? [0.8, 1, 1] 
        : [0.8, 1, 1.1]
  );

  const y = useTransform(
    progress, 
    [start, end], 
    index === 0
      ? [0, -100]
      : index === total - 1 
        ? [100, 0] 
        : [100, -100]
  );

  const rotate = useTransform(
    progress, 
    [start, end], 
    [index % 2 === 0 ? -1 : 1, 0]
  );

  return (
    <motion.div
      style={{ opacity, scale, y, rotate, zIndex: total - index }}
      className="absolute w-full max-w-5xl px-4 md:px-0"
    >
      <div className="relative group">
        {/* Shadow layer */}
        <div className="absolute -inset-4 bg-luxury-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="bg-[#0c0c10] border border-white/5 p-4 md:p-6 rounded-sm shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Image Section */}
            <div className="md:col-span-6 aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-black relative">
               <img 
                src={piece.img} 
                alt={piece.name} 
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute top-4 left-4 bg-luxury-gold text-black px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                Reserve № 0{index + 1}
              </div>
            </div>

            {/* Info Section */}
            <div className="md:col-span-6 space-y-6">
              <div>
                <span className="text-luxury-gold/50 font-mono text-[10px] tracking-widest uppercase mb-2 block">{piece.year} Archive</span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 leading-tight">{piece.name}</h3>
                <p className="text-luxury-muted text-[13px] font-light leading-relaxed">
                  {piece.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-luxury-muted mb-1 block">Auction Guidance</span>
                    <span className="text-xl font-mono text-luxury-gold">{piece.price}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-all">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute -top-1 -right-1 w-8 h-8 border-t border-r border-luxury-gold/30 pointer-events-none" />
        <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b border-l border-luxury-gold/30 pointer-events-none" />
      </div>
    </motion.div>
  );
};


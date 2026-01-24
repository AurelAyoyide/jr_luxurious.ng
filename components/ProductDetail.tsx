import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Shield,
    Clock,
    TrendingUp,
    ChevronRight,
    Truck,
    RotateCcw,
    Share2,
    Heart
} from 'lucide-react';
import { Watch } from '../types';
import { WATCHES } from '../constants';

interface ProductDetailProps {
    watch: Watch;
    onClose: () => void;
    onWatchClick: (watch: Watch) => void;
    onAddToCart: (watch: Watch) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ watch, onClose, onWatchClick, onAddToCart }) => {
    const [isLiked, setIsLiked] = React.useState(false);
    const [isReserving, setIsReserving] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(0);
    // Ensure we start at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [watch]);

    // Recommendation Logic: Brand matches first, then random
    const relatedWatches = React.useMemo(() => {
        const brandMatches = WATCHES.filter(w => w.brand === watch.brand && w.id !== watch.id);
        const otherWatches = WATCHES.filter(w => w.brand !== watch.brand && w.id !== watch.id)
            .sort(() => 0.5 - Math.random()); // Shuffle

        return [...brandMatches, ...otherWatches].slice(0, 3);
    }, [watch]);

    const handleReserve = () => {
        setIsReserving(true);
        setTimeout(() => setIsReserving(false), 2000);
    };

    return (
        <div className="bg-luxury-black pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-4 mb-12 text-[10px] uppercase tracking-[0.2em] text-luxury-muted">
                    <button onClick={onClose} className="hover:text-luxury-gold transition-colors">Home</button>
                    <ChevronRight size={10} />
                    <button onClick={onClose} className="hover:text-luxury-gold transition-colors">Collection</button>
                    <ChevronRight size={10} />
                    <span className="text-white">{watch.brand} {watch.model}</span>
                </nav>

                {/* Product Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                    {/* Left Column: Visuals */}
                    <div className="lg:col-span-12 xl:col-span-7 space-y-8">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="aspect-[4/5] bg-[#1a1a20] overflow-hidden relative group rounded-sm border border-white/5"
                            >
                                <img
                                    src={watch.images && watch.images.length > 0 ? watch.images[selectedImage] : watch.image}
                                    alt={watch.model}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-6 left-6 flex flex-col gap-2">
                                    {watch.isNewArrival && (
                                        <span className="bg-luxury-gold text-black px-3 py-1 text-[9px] font-bold uppercase tracking-widest">New Arrival</span>
                                    )}
                                    {watch.isInvestmentGrade && (
                                        <span className="bg-white text-black px-3 py-1 text-[9px] font-bold uppercase tracking-widest">Investment Grade</span>
                                    )}
                                </div>
                                <button
                                    onClick={() => setIsLiked(!isLiked)}
                                    className={`absolute top-6 right-6 p-3 backdrop-blur-md rounded-full border transition-all duration-300 ${isLiked ? 'bg-red-500 border-red-500 text-white' : 'bg-luxury-black/40 border-white/10 text-white hover:text-red-500'}`}
                                >
                                    <Heart size={18} strokeWidth={1.5} fill={isLiked ? "currentColor" : "none"} />
                                </button>
                            </motion.div>

                            {/* Miniatures Gallery */}
                            {watch.images && watch.images.length > 1 && (
                                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                    {watch.images.map((img, idx) => (
                                        <button
                                            key={img}
                                            onClick={() => setSelectedImage(idx)}
                                            className={`relative flex-shrink-0 w-24 aspect-square rounded-sm overflow-hidden border transition-all duration-300 ${
                                                selectedImage === idx 
                                                ? 'border-luxury-gold ring-1 ring-luxury-gold/50' 
                                                : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/30'
                                            }`}
                                        >
                                            <img src={img} alt={`${watch.model} view ${idx + 1}`} className="w-full h-full object-cover" />
                                            {selectedImage === idx && (
                                                <div className="absolute inset-0 bg-luxury-gold/5" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Story */}
                        <div className="py-12 border-t border-white/10">
                            <h3 className="font-serif text-3xl text-white mb-6 underline decoration-luxury-gold/30 underline-offset-8">The Essence of the Piece</h3>
                            <p className="text-luxury-muted leading-relaxed text-lg font-light italic opacity-80 max-w-2xl">
                                {watch.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Info & Purchase */}
                    <div className="lg:col-span-12 xl:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="sticky top-32 space-y-12"
                        >
                            <div>
                                <span className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-medium mb-3 block">{watch.brand}</span>
                                <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight tracking-tight">{watch.model}</h1>
                                <p className="text-luxury-muted font-mono text-xs uppercase tracking-[0.2em]">Ref. {watch.reference}</p>
                            </div>

                            <div className="flex items-baseline gap-4 mb-10 pb-10 border-b border-white/10">
                                <span className="font-mono text-5xl text-luxury-gold">
                                    ₦{watch.price.toLocaleString()}
                                </span>
                                <span className="text-luxury-muted text-[10px] uppercase tracking-widest">Tax Included / Global Shipping</span>
                            </div>

                            {/* Buying Options */}
                            <div className="space-y-8">
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-luxury-muted mb-4 block">Certified Condition</span>
                                    <div className="flex gap-4">
                                        <span className="px-8 py-3 border border-luxury-gold bg-luxury-gold/5 text-white text-xs uppercase tracking-widest">
                                            {watch.condition}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <button
                                        onClick={() => onAddToCart(watch)}
                                        className="w-full py-6 bg-white hover:bg-luxury-gold text-black font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-3"
                                    >
                                        Add to Cart <ChevronRight size={16} />
                                    </button>
                                    <button
                                        onClick={handleReserve}
                                        disabled={isReserving}
                                        className={`w-full py-6 border border-white/10 hover:border-luxury-gold text-white font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-3 ${isReserving ? 'bg-luxury-gold/20 text-luxury-gold' : ''}`}
                                    >
                                        {isReserving ? 'Inquiry Sent' : 'Special Request'} <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 py-10 bg-luxury-card border border-white/5 p-8 rounded-sm">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-luxury-gold/10 rounded-sm">
                                        <Truck className="text-luxury-gold" size={20} />
                                    </div>
                                    <span className="text-[9px] uppercase text-luxury-muted tracking-widest leading-tight">Insured Global<br />Delivery</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-luxury-gold/10 rounded-sm">
                                        <Shield className="text-luxury-gold" size={20} />
                                    </div>
                                    <span className="text-[9px] uppercase text-luxury-muted tracking-widest leading-tight">Authenticity<br />Guaranteed</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-luxury-gold/10 rounded-sm">
                                        <RotateCcw className="text-luxury-gold" size={20} />
                                    </div>
                                    <span className="text-[9px] uppercase text-luxury-muted tracking-widest leading-tight">14-Day Return<br />Policy</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-luxury-gold/10 rounded-sm">
                                        <Clock className="text-luxury-gold" size={20} />
                                    </div>
                                    <span className="text-[9px] uppercase text-luxury-muted tracking-widest leading-tight">24-Month<br />Warranty</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Technical Specifications */}
                <section className="py-24 border-t border-white/10">
                    <div className="mb-16">
                        <h2 className="text-5xl font-serif text-white mb-6">Technical Specifications</h2>
                        <div className="h-1 w-32 bg-luxury-gold/50" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
                        <div className="space-y-4 border-l border-white/10 pl-6">
                            <span className="text-[10px] uppercase text-luxury-muted tracking-[0.3em] block mb-2">Release Year</span>
                            <span className="text-2xl text-white font-light font-serif">{watch.year}</span>
                        </div>
                        {watch.specs.map((spec, i) => (
                            <div key={i} className="space-y-4 border-l border-white/10 pl-6">
                                <span className="text-[10px] uppercase text-luxury-muted tracking-[0.3em] block mb-2">Technical Detail</span>
                                <span className="text-2xl text-white font-light font-serif">{spec}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related Items */}
                {relatedWatches.length > 0 && (
                    <section className="py-24 border-t border-white/10">
                        <div className="flex justify-between items-end mb-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">You May Also Like</h2>
                                <p className="text-luxury-muted text-sm uppercase tracking-widest">Curated recommendations from the vault</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="group flex items-center gap-3 text-[10px] uppercase tracking-widest text-luxury-muted hover:text-luxury-gold transition-colors"
                            >
                                View Collection <ArrowLeft className="rotate-180 group-hover:translate-x-2 transition-transform" size={14} />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {relatedWatches.map((w) => (
                                <div key={w.id} className="group cursor-pointer" onClick={() => onWatchClick(w)}>
                                    <div className="aspect-[4/5] bg-luxury-card mb-4 overflow-hidden relative rounded-sm border border-white/5 group-hover:border-luxury-gold/30 transition-colors">
                                        <img
                                            src={w.image}
                                            alt={w.model}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {w.brand === watch.brand && (
                                            <span className="absolute top-2 right-2 px-2 py-1 bg-white/10 backdrop-blur-md text-[8px] uppercase tracking-widest text-white border border-white/10">Same Brand</span>
                                        )}
                                    </div>
                                    <span className="text-[9px] uppercase text-luxury-muted tracking-[0.3em] block mb-2">{w.brand}</span>
                                    <h4 className="text-xl font-serif text-white group-hover:text-luxury-gold transition-colors tracking-tight mb-2">{w.model}</h4>
                                    <span className="font-mono text-sm text-luxury-gold">₦{w.price.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { WATCHES } from '../constants';
import { Watch } from '../types';

const FILTERS = ['Tout', 'Rolex', 'Patek Philippe', 'Audemars Piguet', 'Omega', 'Nouveautés'];

interface CollectionGridProps {
    onWatchClick?: (watch: Watch) => void;
    onAddToCart?: (watch: Watch) => void;
    onToggleWishlist?: (watch: Watch) => void;
    wishlist?: Watch[];
    onViewAll?: () => void;
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({ onWatchClick, onAddToCart, onToggleWishlist, wishlist, onViewAll }) => {
    const [activeFilter, setActiveFilter] = useState('Tout');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 3;

    const filteredWatches = activeFilter === 'Tout'
        ? WATCHES
        : activeFilter === 'Nouveautés'
            ? WATCHES.filter(w => w.isNewArrival)
            : WATCHES.filter(w => w.brand === activeFilter);

    const totalPages = Math.ceil(filteredWatches.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedWatches = filteredWatches.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="collection" className="py-24 bg-luxury-black relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">La Collection</h2>
                        <p className="text-luxury-muted max-w-lg">Montres de prestige aux finitions impeccables. Qualité contrôlée, livraison rapide et discrète partout dans le monde.</p>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-2">
                        {FILTERS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => handleFilterChange(filter)}
                                className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300 ${activeFilter === filter
                                    ? 'border-luxury-gold bg-luxury-gold/10 text-white'
                                    : 'border-white/10 text-luxury-muted hover:border-white/30'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedWatches.map((watch, index) => (
                        <div key={watch.id} className="flex flex-col">
                            <WatchCard
                                watch={watch}
                                index={index % ITEMS_PER_PAGE}
                                isWishlisted={wishlist?.some(w => w.id === watch.id) || false}
                                onToggleWishlist={() => onToggleWishlist?.(watch)}
                                onClick={() => onWatchClick?.(watch)}
                                onAddToCart={() => onAddToCart?.(watch)}
                            />
                        </div>
                    ))}
                </div>

                {/* Pagination UI */}
                {totalPages > 1 && (
                    <div className="mt-20 flex justify-center items-center gap-8">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] transition-colors ${currentPage === 1 ? 'text-white/10 cursor-not-allowed' : 'text-luxury-muted hover:text-luxury-gold'
                                }`}
                        >
                            <ChevronLeft size={16} /> Prev
                        </button>

                        <div className="flex items-center gap-4">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`w-8 h-8 text-[10px] font-mono border transition-all duration-500 ${currentPage === i + 1
                                        ? 'border-luxury-gold text-luxury-gold bg-luxury-gold/5'
                                        : 'border-white/5 text-luxury-muted hover:border-white/20'
                                        }`}
                                >
                                    {(i + 1).toString().padStart(2, '0')}
                                </button>
                            ))}
                        </div>

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] transition-colors ${currentPage === totalPages ? 'text-white/10 cursor-not-allowed' : 'text-luxury-muted hover:text-luxury-gold'
                                }`}
                        >
                            Next <ChevronRight size={16} />
                        </button>
                    </div>
                )}

                <div className="mt-32">
                    <button
                        onClick={onViewAll}
                        className="w-full relative py-16 px-10 border border-white/5 bg-[#0a0a0c] overflow-hidden group hover:border-luxury-gold/30 transition-all duration-700"
                    >
                        {/* Interactive Background Gradient */}
                        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-luxury-gold/5 blur-[100px] rounded-full group-hover:bg-luxury-gold/10 transition-colors duration-700" />
                        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-luxury-gold/5 blur-[100px] rounded-full group-hover:bg-luxury-gold/10 transition-colors duration-700" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl mx-auto text-left">
                            <div className="flex-1">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-4 block font-medium">Full Archive Access</span>
                                <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 group-hover:text-luxury-gold transition-colors duration-500 tracking-tight">
                                    Explore the Entire Collection
                                </h3>
                                <p className="text-luxury-muted max-w-xl text-base font-light italic opacity-70 leading-relaxed">
                                    Can't find your Grail? Access our complete inventory of rare timepieces, recently acquired assets, and investment-grade pieces.
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center md:items-end gap-5">
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-luxury-gold group-hover:scale-110 transition-all duration-700 bg-white/5">
                                    <ArrowUpRight size={22} className="text-luxury-muted group-hover:text-luxury-gold transition-colors" />
                                </div>
                                <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-luxury-muted group-hover:text-white transition-colors">
                                    Enter the Archive
                                </span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

const WatchCard: React.FC<{
    watch: Watch;
    index: number;
    isWishlisted: boolean;
    onToggleWishlist: () => void;
    onClick: () => void;
    onAddToCart: () => void;
}> = ({ watch, index, isWishlisted, onToggleWishlist, onClick, onAddToCart }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onClick={onClick}
            className="group relative bg-luxury-card border border-white/5 hover:border-luxury-gold/50 transition-colors duration-500 overflow-hidden cursor-pointer"
        >
            {/* Image Container */}
            <div className="aspect-[4/5] relative overflow-hidden bg-[#1a1a20]">
                <img
                    src={watch.image}
                    alt={`${watch.brand} ${watch.model}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-card via-transparent to-transparent opacity-60" />

                {/* Status Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                    {watch.status !== 'AVAILABLE' && (
                        <span className={`px-3 py-1 text-[9px] font-bold uppercase tracking-widest ${watch.status === 'SOLD' ? 'bg-luxury-red text-white' : 'bg-orange-500 text-black'
                            }`}>
                            {watch.status}
                        </span>
                    )}
                    {watch.isInvestmentGrade && (
                        <span className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest bg-luxury-gold text-black">
                            Investment Grade
                        </span>
                    )}
                </div>

                {/* Like Button */}
                <button
                    className={`absolute top-4 left-4 transition-colors z-20 ${isWishlisted ? 'text-red-500' : 'text-white/50 hover:text-white'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist();
                    }}
                >
                    <Heart size={20} strokeWidth={1.5} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
            </div>

            {/* Content */}
            <div className="p-5 relative">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted">{watch.brand}</span>
                    <span className="text-[10px] font-mono text-luxury-muted">{watch.reference}</span>
                </div>

                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-luxury-gold transition-colors">
                    {watch.model}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    {watch.specs.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-[9px] uppercase border border-white/10 px-2 py-1 text-luxury-muted">
                            {spec}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-end pt-3 border-t border-white/5">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-luxury-muted mb-1">Price</span>
                        <span className="font-mono text-lg text-luxury-gold">
                            ₦{watch.price.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onAddToCart();
                            }}
                            className="h-8 px-3 text-[9px] uppercase tracking-widest border border-white/20 hover:border-luxury-gold hover:text-luxury-gold transition-colors"
                        >
                            Add to Cart
                        </button>
                        <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-luxury-gold group-hover:text-black group-hover:border-luxury-gold transition-all duration-500">
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

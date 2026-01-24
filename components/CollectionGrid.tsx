import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { WATCHES } from '../constants';
import { Watch } from '../types';

const FILTERS = ['All', 'Rolex', 'Patek Philippe', 'Audemars Piguet', 'Omega', 'Investment'];

interface CollectionGridProps {
    onWatchClick?: (watch: Watch) => void;
    onAddToCart?: (watch: Watch) => void;
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({ onWatchClick, onAddToCart }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 3;

    const filteredWatches = activeFilter === 'All'
        ? WATCHES
        : activeFilter === 'Investment'
            ? WATCHES.filter(w => w.isInvestmentGrade)
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
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">The Collection</h2>
                        <p className="text-luxury-muted max-w-lg">Curated timepieces from the world's finest watchmakers. Authenticated, serviced, and ready for immediate global delivery.</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[800px]">
                    {paginatedWatches.map((watch, index) => (
                        <WatchCard
                            key={watch.id}
                            watch={watch}
                            index={index % ITEMS_PER_PAGE}
                            onClick={() => onWatchClick?.(watch)}
                            onAddToCart={() => onAddToCart?.(watch)}
                        />
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
            </div>
        </section>
    );
};

const WatchCard: React.FC<{
    watch: Watch;
    index: number;
    onClick: () => void;
    onAddToCart: () => void;
}> = ({ watch, index, onClick, onAddToCart }) => {
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
                    className="absolute top-4 left-4 text-white/50 hover:text-white transition-colors z-20"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Heart size={20} strokeWidth={1.5} />
                </button>
            </div>

            {/* Content */}
            <div className="p-6 relative">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted">{watch.brand}</span>
                    <span className="text-[10px] font-mono text-luxury-muted">{watch.reference}</span>
                </div>

                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-luxury-gold transition-colors">
                    {watch.model}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                    {watch.specs.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-[9px] uppercase border border-white/10 px-2 py-1 text-luxury-muted">
                            {spec}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-end pt-4 border-t border-white/5">
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

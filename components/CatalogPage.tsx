import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, Search, ArrowUpRight } from 'lucide-react';
import { WATCHES } from '../constants';
import { Watch } from '../types';

interface CatalogPageProps {
    onWatchClick: (watch: Watch) => void;
    onAddToCart: (watch: Watch) => void;
}

const BRANDS = ['All Brands', ...Array.from(new Set(WATCHES.map(w => w.brand)))];
const CONDITIONS = ['All Conditions', 'New', 'Like New', 'Excellent', 'Vintage'];
const SORT_OPTIONS = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Recently Released', value: 'newest' },
];

export const CatalogPage: React.FC<CatalogPageProps> = ({ onWatchClick, onAddToCart }) => {
    const [activeBrand, setActiveBrand] = useState('All Brands');
    const [activeCondition, setActiveCondition] = useState('All Conditions');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('featured');
    const [maxPrice, setMaxPrice] = useState(250000);

    // Filter & Sort Logic
    const filteredWatches = WATCHES.filter(watch => {
        const matchesBrand = activeBrand === 'All Brands' || watch.brand === activeBrand;
        const matchesCondition = activeCondition === 'All Conditions' || watch.condition === activeCondition;
        const matchesPrice = watch.price <= maxPrice;
        const matchesSearch = watch.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
            watch.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            watch.reference.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesBrand && matchesSearch && matchesCondition && matchesPrice;
    }).sort((a, b) => {
        switch (sortBy) {
            case 'price_asc': return a.price - b.price;
            case 'price_desc': return b.price - a.price;
            case 'newest': return (b.year || 0) - (a.year || 0);
            default: return 0;
        }
    });

    const resetFilters = () => {
        setActiveBrand('All Brands');
        setActiveCondition('All Conditions');
        setSearchQuery('');
        setMaxPrice(250000);
        setSortBy('featured');
    };

    return (
        <div className="min-h-screen bg-luxury-black text-white pt-28 pb-12 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold mb-2 block">The Vault Access</span>
                        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Complete Catalogue</h1>
                        <p className="text-luxury-muted max-w-lg font-light">
                            Explore our entire inventory of investment-grade timepieces.
                            Each piece is professionally vetted and available for immediate acquisition.
                        </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-3xl font-serif text-white">{filteredWatches.length}</p>
                        <p className="text-[9px] uppercase tracking-widest text-luxury-muted">Timepieces Available</p>
                    </div>
                </div>

                {/* Controls Bar */}
                <div className="sticky top-24 z-30 bg-[#0c0c10]/90 backdrop-blur-xl border border-white/5 p-4 rounded-sm mb-12 flex flex-col gap-6 transition-all">
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center w-full">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-muted" size={16} />
                            <input
                                type="text"
                                placeholder="Search brand, model, reference..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-sm pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-white/20"
                            />
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <div className="relative group">
                                <button className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-[10px] uppercase tracking-wider hover:border-luxury-gold transition-colors whitespace-nowrap">
                                    <span className="text-luxury-muted">Brand:</span> {activeBrand} <ChevronDown size={12} />
                                </button>
                                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a20] border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40 max-h-64 overflow-y-auto">
                                    {BRANDS.map(brand => (
                                        <button
                                            key={brand}
                                            onClick={() => setActiveBrand(brand)}
                                            className={`w-full text-left px-4 py-3 text-xs transition-colors ${activeBrand === brand ? 'text-luxury-gold bg-white/5' : 'text-luxury-muted hover:text-white hover:bg-white/5'}`}
                                        >
                                            {brand}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="relative group">
                                <button className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-[10px] uppercase tracking-wider hover:border-luxury-gold transition-colors whitespace-nowrap">
                                    <span className="text-luxury-muted">Condition:</span> {activeCondition} <ChevronDown size={12} />
                                </button>
                                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a20] border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
                                    {CONDITIONS.map(cond => (
                                        <button
                                            key={cond}
                                            onClick={() => setActiveCondition(cond)}
                                            className={`w-full text-left px-4 py-3 text-xs transition-colors ${activeCondition === cond ? 'text-luxury-gold bg-white/5' : 'text-luxury-muted hover:text-white hover:bg-white/5'}`}
                                        >
                                            {cond}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="relative group">
                                <button className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-[10px] uppercase tracking-wider hover:border-luxury-gold transition-colors whitespace-nowrap">
                                    Sort By <ChevronDown size={12} />
                                </button>
                                <div className="absolute top-full right-0 mt-2 w-48 bg-[#1a1a20] border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
                                    {SORT_OPTIONS.map(opt => (
                                        <button
                                            key={opt.value}
                                            onClick={() => setSortBy(opt.value)}
                                            className={`w-full text-left px-4 py-3 text-xs transition-colors ${sortBy === opt.value ? 'text-luxury-gold bg-white/5' : 'text-luxury-muted hover:text-white hover:bg-white/5'}`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 pt-4 border-t border-white/5">
                        <div className="flex-1 w-full">
                            <div className="flex justify-between mb-2">
                                <span className="text-[10px] uppercase tracking-widest text-luxury-muted">Max Investment</span>
                                <span className="font-mono text-xs text-luxury-gold">₦{maxPrice.toLocaleString()}</span>
                            </div>
                            <input 
                                type="range" 
                                min="10000" 
                                max="500000" 
                                step="5000"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                className="w-full accent-luxury-gold bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                        {(activeBrand !== 'All Brands' || activeCondition !== 'All Conditions' || searchQuery || maxPrice < 500000) && (
                            <button 
                                onClick={resetFilters}
                                className="text-[10px] uppercase tracking-widest text-luxury-gold hover:text-white transition-colors underline underline-offset-4"
                            >
                                Reset All Filters
                            </button>
                        )}
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    <AnimatePresence>
                        {filteredWatches.map((watch, i) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={watch.id}
                                onClick={() => onWatchClick(watch)}
                                className="group bg-[#0c0c10] border border-white/5 hover:border-luxury-gold/30 cursor-pointer transition-colors"
                            >
                                <div className="aspect-[4/5] relative overflow-hidden bg-[#1a1a20]">
                                    <img src={watch.image} alt={watch.model} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                                    {watch.isInvestmentGrade && (
                                        <span className="absolute top-2 right-2 px-2 py-1 bg-luxury-gold text-black text-[8px] font-bold uppercase tracking-widest">Inv. Grade</span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <p className="text-[9px] uppercase tracking-widest text-luxury-muted mb-1">{watch.brand}</p>
                                    <h3 className="font-serif text-white mb-2 truncate">{watch.model}</h3>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-mono text-white/50">{watch.reference}</span>
                                        <span className="font-mono text-luxury-gold">₦{watch.price.toLocaleString()}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredWatches.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-sm">
                        <p className="text-luxury-muted">No timepieces match your specific criteria.</p>
                        <button
                            onClick={() => { setActiveBrand('All Brands'); setSearchQuery(''); }}
                            className="mt-4 text-luxury-gold text-sm hover:underline"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

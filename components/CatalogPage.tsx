import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, Search, ArrowUpRight, Heart, ShoppingBag, Plus, X } from 'lucide-react';
import { WATCHES } from '../constants';
import { Watch } from '../types';

interface CatalogPageProps {
    onWatchClick: (watch: Watch) => void;
    onAddToCart: (watch: Watch) => void;
    onToggleWishlist: (watch: Watch) => void;
    wishlist: Watch[];
}

const BRANDS = ['All Brands', ...Array.from(new Set(WATCHES.map(w => w.brand)))];
const CONDITIONS = ['All Conditions', 'New', 'Like New', 'Excellent', 'Vintage'];
const SORT_OPTIONS = [
    { label: 'Featured Selection', value: 'featured' },
    { label: 'Price: Ascending', value: 'price_asc' },
    { label: 'Price: Descending', value: 'price_desc' },
    { label: 'Recently Added', value: 'newest' },
];

export const CatalogPage: React.FC<CatalogPageProps> = ({ 
    onWatchClick, 
    onAddToCart,
    onToggleWishlist,
    wishlist
}) => {
    const [activeBrand, setActiveBrand] = useState('All Brands');
    const [activeCondition, setActiveCondition] = useState('All Conditions');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('featured');
    const [maxPrice, setMaxPrice] = useState(500000);

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
        setMaxPrice(500000);
        setSortBy('featured');
    };

    return (
        <div className="min-h-screen bg-luxury-black text-white pt-32 pb-24 px-4 md:px-8">
            <style>
                {`
                    input[type='range']::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 16px;
                        height: 16px;
                        background: #D4AF37;
                        border-radius: 50%;
                        cursor: pointer;
                        border: 2px solid #121218;
                        box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
                        transition: all 0.2s ease;
                    }
                    input[type='range']::-webkit-slider-thumb:hover {
                        transform: scale(1.2);
                        background: #ffffff;
                    }
                    input[type='range']::-moz-range-thumb {
                        width: 16px;
                        height: 16px;
                        background: #D4AF37;
                        border: 2px solid #121218;
                        border-radius: 50%;
                        cursor: pointer;
                        box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
                    }
                `}
            </style>
            <div className="max-w-[1600px] mx-auto">

                {/* Immersive Header */}
                <div className="relative mb-16 overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
                        <div className="max-w-2xl">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 mb-4"
                            >
                                <div className="h-[1px] w-8 bg-luxury-gold/50"></div>
                                <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-medium">Global Inventory</span>
                            </motion.div>
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
                            >
                                The <span className="italic text-luxury-gold/90">Curated</span><br />Collection
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-luxury-muted text-lg font-light leading-relaxed max-w-xl"
                            >
                                Peerless authenticity. Expertly vetted. Browse our global vault of investment-grade timepieces available for immediate acquisition.
                            </motion.p>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="hidden lg:flex flex-col items-end border-l border-white/10 pl-10 py-2"
                        >
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-6xl font-serif text-white">{filteredWatches.length}</span>
                                <span className="text-luxury-gold font-mono text-sm">/{WATCHES.length}</span>
                            </div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted">Items Matching Criteria</p>
                        </motion.div>
                    </div>
                </div>

                {/* Control Hub */}
                <div className="sticky top-24 z-[40] mb-12">
                    <div className="bg-[#121218]/80 backdrop-blur-2xl border border-white/5 p-2 rounded-sm shadow-2xl">
                        <div className="flex flex-col lg:flex-row gap-3">
                            {/* Search */}
                            <div className="relative flex-1 group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-muted group-focus-within:text-luxury-gold transition-colors" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search model, brand or reference..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-sm pl-12 pr-10 py-4 text-sm text-white focus:outline-none focus:bg-white/[0.05] focus:border-luxury-gold/30 transition-all placeholder:text-white/20"
                                />
                                {searchQuery && (
                                    <button 
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-muted hover:text-white"
                                    >
                                        <X size={14} />
                                    </button>
                                )}
                            </div>

                            {/* Filters Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:w-auto">
                                <div className="relative group/select min-w-[160px]">
                                    <button className="w-full flex items-center justify-between gap-3 px-4 py-4 bg-white/[0.03] border border-white/5 rounded-sm text-[10px] uppercase tracking-wider hover:bg-white/[0.05] transition-all">
                                        <span className="text-luxury-muted truncate">Brand: <span className="text-white">{activeBrand.split(' ')[0]}</span></span>
                                        <ChevronDown size={12} className="group-hover/select:rotate-180 transition-transform" />
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#181820] border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover/select:opacity-100 group-hover/select:visible transition-all z-[50] py-2">
                                        {BRANDS.map(brand => (
                                            <button
                                                key={brand}
                                                onClick={() => setActiveBrand(brand)}
                                                className={`w-full text-left px-5 py-3 text-[11px] uppercase tracking-wider transition-colors ${activeBrand === brand ? 'text-luxury-gold bg-white/5' : 'text-luxury-muted hover:text-white hover:bg-white/5'}`}
                                            >
                                                {brand}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative group/select min-w-[160px]">
                                    <button className="w-full flex items-center justify-between gap-3 px-4 py-4 bg-white/[0.03] border border-white/5 rounded-sm text-[10px] uppercase tracking-wider hover:bg-white/[0.05] transition-all">
                                        <span className="text-luxury-muted truncate">Cond: <span className="text-white">{activeCondition.split(' ')[0]}</span></span>
                                        <ChevronDown size={12} className="group-hover/select:rotate-180 transition-transform" />
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#181820] border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover/select:opacity-100 group-hover/select:visible transition-all z-[50] py-2">
                                        {CONDITIONS.map(cond => (
                                            <button
                                                key={cond}
                                                onClick={() => setActiveCondition(cond)}
                                                className={`w-full text-left px-5 py-3 text-[11px] uppercase tracking-wider transition-colors ${activeCondition === cond ? 'text-luxury-gold bg-white/5' : 'text-luxury-muted hover:text-white hover:bg-white/5'}`}
                                            >
                                                {cond}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative group/select min-w-[200px] col-span-1">
                                    <button className="w-full flex items-center justify-between gap-3 px-4 py-4 bg-white/[0.03] border border-white/5 rounded-sm text-[10px] uppercase tracking-wider hover:bg-white/[0.05] transition-all">
                                        <span className="text-luxury-muted truncate">Sort: <span className="text-white">{SORT_OPTIONS.find(o => o.value === sortBy)?.label}</span></span>
                                        <ChevronDown size={12} className="group-hover/select:rotate-180 transition-transform" />
                                    </button>
                                    <div className="absolute top-full right-0 mt-2 w-64 bg-[#181820] border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover/select:opacity-100 group-hover/select:visible transition-all z-[50] py-2">
                                        {SORT_OPTIONS.map(opt => (
                                            <button
                                                key={opt.value}
                                                onClick={() => setSortBy(opt.value)}
                                                className={`w-full text-left px-5 py-3 text-[11px] uppercase tracking-wider transition-colors ${sortBy === opt.value ? 'text-luxury-gold bg-white/5' : 'text-luxury-muted hover:text-white hover:bg-white/5'}`}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center p-1">
                                    {(activeBrand !== 'All Brands' || activeCondition !== 'All Conditions' || searchQuery !== '' || maxPrice !== 500000) && (
                                        <button 
                                            onClick={resetFilters}
                                            className="px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-luxury-gold hover:text-white transition-colors"
                                        >
                                            Reset Filters
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Price Slider Section */}
                        <div className="px-6 py-4 border-t border-white/5 flex flex-col md:flex-row items-center gap-6">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-muted whitespace-nowrap">Investment Limit</span>
                            <div className="flex-1 w-full flex items-center gap-6">
                                <span className="font-mono text-[10px] text-white/30">₦0</span>
                                <div className="flex-1 relative h-6 flex items-center">
                                    <input 
                                        type="range" 
                                        min="10000" 
                                        max="500000" 
                                        step="5000"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                        className="w-full h-1 rounded-lg appearance-none cursor-pointer transition-all"
                                        style={{
                                            background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${((maxPrice - 10000) / (500000 - 10000)) * 100}%, rgba(255, 255, 255, 0.1) ${((maxPrice - 10000) / (500000 - 10000)) * 100}%, rgba(255, 255, 255, 0.1) 100%)`
                                        }}
                                    />
                                </div>
                                <span className="font-mono text-sm text-luxury-gold whitespace-nowrap min-w-[100px] text-right">₦{maxPrice.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Refined Results Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredWatches.map((watch) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                key={watch.id}
                                className="group relative"
                            >
                                {/* Watch Card Interior */}
                                <div 
                                    onClick={() => onWatchClick(watch)}
                                    className="bg-[#121218] border border-white/5 hover:border-luxury-gold/20 transition-all duration-500 cursor-pointer overflow-hidden rounded-sm relative"
                                >
                                    {/* Image Section */}
                                    <div className="aspect-[4/5] relative overflow-hidden bg-black/40">
                                        <img 
                                            src={watch.image} 
                                            alt={watch.model} 
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                                        />
                                        
                                        {/* Overlay Controls */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <span className="text-[10px] uppercase tracking-[0.3em] text-white border border-white/30 px-4 py-2 backdrop-blur-md bg-white/5">
                                                    View Details
                                                </span>
                                            </div>
                                        </div>

                                        {/* Quick Action Badges */}
                                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                                            {watch.isInvestmentGrade && (
                                                <span className="px-2 py-1 bg-luxury-gold text-black text-[8px] font-bold uppercase tracking-widest rounded-[2px] shadow-xl">
                                                    INV. GRADE
                                                </span>
                                            )}
                                            {watch.condition === 'New' && (
                                                <span className="px-2 py-1 bg-white text-black text-[8px] font-bold uppercase tracking-widest rounded-[2px] shadow-xl">
                                                    UNWORN
                                                </span>
                                            )}
                                        </div>

                                        {/* Wishlist Toggle */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onToggleWishlist(watch);
                                            }}
                                            className={`absolute top-4 left-4 p-2 rounded-full backdrop-blur-xl border border-white/10 transition-all duration-300 z-20 ${wishlist.some(w => w.id === watch.id) ? 'bg-red-500/20 text-red-500' : 'bg-black/20 text-white/70 hover:text-white'}`}
                                        >
                                            <Heart size={16} strokeWidth={2} fill={wishlist.some(w => w.id === watch.id) ? "currentColor" : "none"} />
                                        </button>
                                    </div>

                                    {/* Data Section */}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold/80 mb-1 font-medium">{watch.brand}</p>
                                                <h3 className="font-serif text-xl text-white group-hover:text-luxury-gold transition-colors duration-300 line-clamp-1">{watch.model}</h3>
                                            </div>
                                            <div className="text-right">
                                                <span className="font-mono text-[10px] text-white/30 block mb-1">{watch.reference}</span>
                                                <span className="font-serif text-sm text-white/60">{watch.year}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] uppercase tracking-widest text-white/30 mb-0.5">Price Acquisition</span>
                                                <span className="font-mono text-lg text-white">₦{watch.price.toLocaleString()}</span>
                                            </div>
                                            
                                            {/* Direct Add to Cart Button */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onAddToCart(watch);
                                                }}
                                                className="h-12 w-12 bg-white/5 hover:bg-luxury-gold hover:text-black border border-white/10 flex items-center justify-center rounded-sm transition-all duration-300 group/cart"
                                                title="Direct Acquisition"
                                            >
                                                <Plus size={20} className="group-hover/cart:rotate-90 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Refined Empty State */}
                {filteredWatches.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 flex flex-col items-center justify-center text-center px-4"
                    >
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                            <Search className="text-luxury-muted" size={24} />
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-2">No results matched your search</h3>
                        <p className="text-luxury-muted max-w-sm mb-8 font-light italic">
                            The timepiece you seek may be in our offline private reserve or recently acquired.
                        </p>
                        <button
                            onClick={resetFilters}
                            className="bg-luxury-gold text-black px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white transition-colors flex items-center gap-3"
                        >
                            Reset Global Search <Plus size={14} />
                        </button>
                    </motion.div>
                )}

            </div>
        </div>
    );
};


import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Clock, Archive, ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ClientPortfolioProps {
    items: PortfolioItem[];
    wishlist: Watch[];
    onWatchClick: (watch: Watch) => void;
    clientName?: string;
}

export const ClientPortfolio: React.FC<ClientPortfolioProps> = ({ items, wishlist, onWatchClick, clientName }) => {
    const totalValue = items.reduce((sum, item) => sum + item.price, 0);
    const totalAppreciation = totalValue * 0.12; // Simulated 12% gain
    const displayName = clientName ? clientName.split(' ')[0] : 'Collector';

    return (
        <div className="min-h-screen bg-[#08080c] text-white pt-28 pb-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <header className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-sm bg-luxury-gold flex items-center justify-center text-black font-serif font-bold">
                                V
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-muted">Private Client Portal</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif text-white mb-2">Welcome, M. {displayName}</h1>
                        <p className="text-luxury-muted text-sm font-light">Your legacy asset overview.</p>
                    </div>
                    <div className="flex w-full md:w-auto justify-between md:justify-end gap-8 text-right bg-white/5 md:bg-transparent p-4 md:p-0 rounded-sm">
                        <div className="flex-1 md:flex-none">
                            <p className="text-[9px] uppercase tracking-widest text-luxury-muted mb-1">Membership Tier</p>
                            <p className="font-mono text-luxury-gold text-sm">Private Collector</p>
                        </div>
                        <div className="flex-1 md:flex-none text-right">
                            <p className="text-[9px] uppercase tracking-widest text-luxury-muted mb-1">Client ID</p>
                            <p className="font-mono text-white/50 text-sm">#8829-VLT</p>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Left Column: Stats & Overview */}
                    <div className="space-y-6">
                        {/* Valuation Card */}
                        <div className="p-6 md:p-8 bg-[#0c0c10] border border-white/5 rounded-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-luxury-gold/10 transition-colors" />
                            <p className="text-xs uppercase tracking-widest text-luxury-muted mb-2">Total Asset Value</p>
                            <p className="text-3xl md:text-4xl font-serif text-white mb-4">₦{totalValue.toLocaleString()}</p>
                            <div className="flex items-center gap-2 text-green-500 text-xs">
                                <TrendingUp size={14} />
                                <span className="font-mono bg-green-500/10 px-2 py-0.5 rounded-sm">+12.4% Past Year</span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 md:p-6 bg-[#0c0c10] border border-white/5 rounded-sm">
                                <Archive className="text-luxury-muted mb-3" size={20} />
                                <p className="text-xl md:text-2xl font-serif text-white">{items.length}</p>
                                <p className="text-[9px] uppercase tracking-widest text-luxury-muted">Acquisitions</p>
                            </div>
                            <div className="p-4 md:p-6 bg-[#0c0c10] border border-white/5 rounded-sm">
                                <ArrowUpRight className="text-luxury-gold mb-3" size={20} />
                                <p className="text-xl md:text-2xl font-serif text-white">₦{totalAppreciation.toLocaleString()}</p>
                                <p className="text-[9px] uppercase tracking-widest text-luxury-muted">Unrealized Gain</p>
                            </div>
                        </div>

                        {/* Advisory */}
                        <div className="p-6 bg-luxury-gold/5 border border-luxury-gold/10 rounded-sm">
                            <h4 className="text-luxury-gold font-serif text-lg mb-2">Concierge Note</h4>
                            <p className="text-sm text-luxury-muted leading-relaxed">
                                Your current allocation is heavily weighted towards sports models. Considering the current market, adding a Dress Complication could diversify your risk profile.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Asset List */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-serif text-2xl text-white">Holdings</h3>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 md:px-4 md:py-2 text-[9px] md:text-[10px] uppercase tracking-widest bg-white/5 text-white rounded-sm hover:bg-white/10 transition-colors">Current</button>
                                <button className="px-3 py-1.5 md:px-4 md:py-2 text-[9px] md:text-[10px] uppercase tracking-widest text-luxury-muted hover:text-white transition-colors">History</button>
                            </div>
                        </div>

                        {items.length === 0 ? (
                            <div className="h-64 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-sm text-center p-8">
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                                    <Clock className="text-white/20" size={24} />
                                </div>
                                <h4 className="font-serif text-lg text-white mb-2">Portfolio is Empty</h4>
                                <p className="text-luxury-muted text-sm max-w-xs">Start your legacy by acquiring your first investment-grade timepiece.</p>
                            </div>
                        ) : (
                            <div className="space-y-4 pb-20 md:pb-0">
                                {items.map((item) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        key={item.id}
                                        className="group bg-[#0c0c10] border border-white/5 rounded-sm overflow-hidden hover:border-luxury-gold/30 transition-all"
                                    >
                                        <div className="flex flex-row p-4 md:p-6 gap-4 md:gap-8">
                                            {/* Precise Image Thumbnail */}
                                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 shrink-0 rounded-sm overflow-hidden border border-white/5">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.model} 
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                                />
                                            </div>

                                            {/* Content Grid */}
                                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                                                <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                                                    <div>
                                                        <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-luxury-gold mb-0.5">{item.brand}</p>
                                                        <h4 className="font-serif text-base md:text-lg text-white leading-tight truncate">{item.model}</h4>
                                                        <p className="text-[9px] font-mono text-luxury-muted mt-1">{item.reference}</p>
                                                    </div>
                                                    <span className="shrink-0 inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/5 text-[8px] uppercase tracking-wider text-white/60 rounded-sm border border-white/5">
                                                        <span className={`w-1 h-1 rounded-full ${item.status === 'Acquired' ? 'bg-green-500' : 'bg-luxury-gold animate-pulse'}`} />
                                                        {item.status}
                                                    </span>
                                                </div>

                                                {/* Price & Valuation - Row on Desktop, Grid on Mobile */}
                                                <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 md:flex md:flex-row md:justify-start gap-4 md:gap-12">
                                                    <div>
                                                        <p className="text-[8px] uppercase tracking-widest text-luxury-muted mb-1">Cost Basis</p>
                                                        <p className="font-mono text-xs md:text-sm text-white/80">₦{item.price.toLocaleString()}</p>
                                                    </div>
                                                    <div className="md:ml-auto md:text-right">
                                                        <p className="text-[8px] uppercase tracking-widest text-luxury-muted mb-1">Market Est.</p>
                                                        <div className="flex items-center gap-2 md:justify-end">
                                                            <p className="font-mono text-xs md:text-sm text-white">₦{(item.price * 1.12).toLocaleString()}</p>
                                                            <span className="text-[8px] text-green-500 font-bold bg-green-500/10 px-1 rounded-sm">+12%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Wishlist Section */}
                        <div className="mt-16 pt-12 border-t border-white/5">
                            <h3 className="font-serif text-2xl text-white mb-8">Desired Acquisitions</h3>
                            {wishlist.length === 0 ? (
                                <div className="p-8 border border-dashed border-white/10 rounded-sm text-center">
                                    <p className="text-luxury-muted text-sm italic">Your wishlist is currently empty. Explore the vault to curate your desired collection.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {wishlist.map((watch) => (
                                        <div 
                                            key={watch.id} 
                                            onClick={() => onWatchClick(watch)}
                                            className="group bg-[#0c0c10] border border-white/5 p-4 rounded-sm flex gap-4 cursor-pointer hover:border-luxury-gold/30 transition-all"
                                        >
                                            <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0">
                                                <img src={watch.image} alt={watch.model} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className="text-[8px] uppercase tracking-widest text-luxury-gold mb-1">{watch.brand}</span>
                                                <h4 className="text-sm font-serif text-white group-hover:text-luxury-gold transition-colors">{watch.model}</h4>
                                                <span className="text-[10px] font-mono text-luxury-muted mt-1 underline decoration-luxury-gold/20">₦{watch.price.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

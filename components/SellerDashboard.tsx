import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Package,
    BarChart3,
    Users,
    Settings,
    LogOut,
    ArrowUpRight,
    ArrowDownRight,
    Search,
    Filter,
    MoreHorizontal,
    Plus,
    Clock,
    Menu,
    X
} from 'lucide-react';
import { WATCHES } from '../constants';

interface SellerDashboardProps {
    onBackToStore: () => void;
    onLogout: () => void;
}

export const SellerDashboard: React.FC<SellerDashboardProps> = ({ onBackToStore, onLogout }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const availableItems = WATCHES.filter(w => w.status === 'AVAILABLE').length;
    const soldItems = WATCHES.filter(w => w.status === 'SOLD').length;

    const stats = [
        { label: 'Total Revenue', value: '₦432,500', trend: '+12.5%', isUp: true, icon: BarChart3 },
        { label: 'Active Inventory', value: availableItems.toString(), trend: '+2', isUp: true, icon: Package },
        { label: 'Client Inquiries', value: '18', trend: '-3', isUp: false, icon: Users },
        { label: 'Total Sales', value: soldItems.toString(), trend: '+1', isUp: true, icon: Clock },
    ];

    const menuItems = [
        { icon: LayoutDashboard, label: 'Overview', active: true },
        { icon: Package, label: 'Inventory', active: false },
        { icon: BarChart3, label: 'Analytics', active: false },
        { icon: Users, label: 'Clients', active: false },
        { icon: Settings, label: 'Settings', active: false },
    ];

    const SidebarContent = () => (
        <>
            <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-8 border border-luxury-gold flex items-center justify-center rounded-sm">
                    <span className="font-serif text-luxury-gold text-lg">V</span>
                </div>
                <div>
                    <span className="font-serif text-xl tracking-wide block leading-none">THE VAULT</span>
                    <span className="text-[7px] font-sans font-medium tracking-[0.3em] text-luxury-gold uppercase">Concierge</span>
                </div>
            </div>

            <nav className="flex-1 space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-all text-sm ${item.active ? 'bg-luxury-gold text-black' : 'text-luxury-muted hover:bg-white/5 hover:text-white'}`}
                    >
                        <item.icon size={18} />
                        {item.label}
                    </button>
                ))}
            </nav>

            <div className="mt-auto space-y-4 pt-8">
                <button
                    onClick={onLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-luxury-muted hover:text-luxury-gold transition-colors"
                >
                    <LogOut size={18} />
                    Logout Specialist
                </button>
                <div className="p-4 bg-luxury-gold/5 border border-luxury-gold/10 rounded-sm">
                    <p className="text-[10px] text-luxury-gold uppercase tracking-widest mb-1">Account Level</p>
                    <p className="text-xs font-serif italic text-white">Master Specialist</p>
                </div>
            </div>
        </>
    );

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-[#0a0a0c] text-white">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-64 border-r border-white/5 flex-col p-6 h-full">
                <SidebarContent />
            </aside>

            {/* Mobile Header */}
            <header className="lg:hidden flex items-center justify-between p-6 border-b border-white/5 bg-[#0a0a0c] z-50">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border border-luxury-gold flex items-center justify-center rounded-sm">
                        <span className="font-serif text-luxury-gold text-xs">V</span>
                    </div>
                    <span className="font-serif text-sm tracking-widest">THE VAULT</span>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-white/70 hover:text-white"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[51] lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 h-full w-72 bg-[#0a0a0c] border-r border-white/5 p-6 z-[52] flex flex-col lg:hidden"
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6 md:p-10">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">Internal Overview</h1>
                        <p className="text-luxury-muted text-sm font-light">Managing the world's most exclusive watch collection.</p>
                    </div>
                    <div className="flex gap-4 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-initial px-6 py-3 border border-white/10 hover:border-luxury-gold text-[10px] uppercase tracking-widest transition-all">
                            Export
                        </button>
                        <button className="flex-1 sm:flex-initial px-6 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-luxury-gold transition-all flex items-center justify-center gap-2">
                            <Plus size={16} /> Asset
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-[#121216] border border-white/5 rounded-sm group hover:border-luxury-gold/30 transition-all"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-luxury-gold/10 rounded-sm">
                                    <stat.icon size={20} className="text-luxury-gold" />
                                </div>
                                <div className={`flex items-center gap-1 text-[10px] ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
                                    {stat.trend}
                                    {stat.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                </div>
                            </div>
                            <p className="text-luxury-muted text-[10px] uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className="text-2xl md:text-3xl font-serif text-white">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
                    {/* Sales Chart */}
                    <div className="xl:col-span-2 p-6 md:p-8 bg-[#121216] border border-white/5 rounded-sm overflow-hidden">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-lg md:text-xl font-serif text-white">Market Performance</h3>
                            <div className="flex gap-4">
                                <span className="text-[10px] text-luxury-gold uppercase tracking-widest pb-1 border-b border-luxury-gold">12m</span>
                                <span className="text-[10px] text-luxury-muted uppercase tracking-widest hover:text-white cursor-pointer">30d</span>
                            </div>
                        </div>
                        <div className="h-64 flex items-end gap-1 md:gap-2 px-2">
                            {[40, 65, 45, 80, 55, 90, 75, 85, 60, 95, 88, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.05 }}
                                    className={`flex-1 bg-luxury-gold/20 hover:bg-luxury-gold/40 transition-all rounded-t-sm relative group ${i < 6 && 'hidden xs:block'}`}
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-luxury-gold text-black text-[8px] md:text-[10px] font-bold px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                                        ₦{h}k
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Events */}
                    <div className="p-6 md:p-8 bg-[#121216] border border-white/5 rounded-sm">
                        <h3 className="text-lg md:text-xl font-serif text-white mb-8">Recent Vault Events</h3>
                        <div className="space-y-6 text-sm">
                            {[
                                { title: 'New Reservation', subtitle: 'Patek Nautilus Ref. 5711', time: '2m', color: 'text-luxury-gold' },
                                { title: 'Asset Sold', subtitle: 'Submariner Date 126610LN', time: '4h', color: 'text-green-500' },
                                { title: 'Price Appraisal', subtitle: 'Royal Oak 15500ST', time: '1d', color: 'text-blue-500' },
                                { title: 'Inquiry', subtitle: 'Specialist: Wei C.', time: '2d', color: 'text-luxury-gold' },
                            ].map((event, i) => (
                                <div key={i} className="flex gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <div className={`w-2 h-2 rounded-full mt-1.5 ${event.color} shrink-0`} />
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <p className="text-[10px] font-bold text-white uppercase tracking-wider truncate">{event.title}</p>
                                            <span className="text-[9px] text-luxury-muted italic shrink-0">{event.time}</span>
                                        </div>
                                        <p className="text-[11px] text-luxury-muted italic font-light truncate">{event.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Inventory Table */}
                <div className="p-6 md:p-8 bg-[#121216] border border-white/5 rounded-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                        <h3 className="text-xl font-serif text-white">Inventory Management</h3>
                        <div className="flex gap-3 w-full md:w-auto">
                            <div className="relative flex-1 md:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-luxury-muted" size={14} />
                                <input
                                    type="text"
                                    placeholder="Search references..."
                                    className="w-full bg-[#1a1a20] border border-white/10 rounded-sm py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-luxury-gold transition-colors"
                                />
                            </div>
                            <button className="p-2 border border-white/10 hover:border-luxury-gold rounded-sm transition-colors">
                                <Filter size={14} />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto -mx-6 md:mx-0">
                        <div className="min-w-[800px] px-6 md:px-0">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/5 text-[9px] uppercase tracking-[0.2em] text-luxury-muted">
                                        <th className="pb-4 font-medium">Asset</th>
                                        <th className="pb-4 font-medium">Reference</th>
                                        <th className="pb-4 font-medium text-right">Valuation</th>
                                        <th className="pb-4 font-medium text-center">Condition</th>
                                        <th className="pb-4 font-medium text-center">Status</th>
                                        <th className="pb-4 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {WATCHES.map((watch) => (
                                        <tr key={watch.id} className="group hover:bg-white/[0.02] transition-colors">
                                            <td className="py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-12 bg-white/5 overflow-hidden shrink-0">
                                                        <img src={watch.image} alt={watch.model} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="overflow-hidden">
                                                        <p className="text-[9px] uppercase text-luxury-gold tracking-widest truncate">{watch.brand}</p>
                                                        <p className="text-xs font-serif truncate">{watch.model}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4">
                                                <span className="text-[10px] font-mono text-luxury-muted uppercase">{watch.reference}</span>
                                            </td>
                                            <td className="py-4 text-right">
                                                <span className="text-xs font-mono text-white">₦{watch.price.toLocaleString()}</span>
                                            </td>
                                            <td className="py-4 text-center">
                                                <span className="text-[9px] uppercase tracking-widest text-luxury-muted border border-white/10 px-2 py-0.5 rounded-sm">
                                                    {watch.condition}
                                                </span>
                                            </td>
                                            <td className="py-4 text-center">
                                                <span className={`text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-1 rounded-sm ${watch.status === 'AVAILABLE' ? 'bg-green-500/10 text-green-500' :
                                                    watch.status === 'RESERVED' ? 'bg-luxury-gold/10 text-luxury-gold' :
                                                        'bg-red-500/10 text-red-500'
                                                    }`}>
                                                    {watch.status}
                                                </span>
                                            </td>
                                            <td className="py-4 text-right">
                                                <button className="p-2 text-luxury-muted hover:text-white transition-colors">
                                                    <MoreHorizontal size={14} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

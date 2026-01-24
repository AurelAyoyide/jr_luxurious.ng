import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, BarChart3, ArrowRight } from 'lucide-react';

const data = [
    { year: '2018', watch: 100, sp500: 100 },
    { year: '2019', watch: 115, sp500: 110 },
    { year: '2020', watch: 140, sp500: 125 },
    { year: '2021', watch: 195, sp500: 145 },
    { year: '2022', watch: 210, sp500: 130 },
    { year: '2023', watch: 225, sp500: 155 },
    { year: '2024', watch: 245, sp500: 175 },
];

export const InvestmentChart: React.FC = () => {
    return (
        <section id="investment" className="py-32 bg-[#08080c] relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    <div className="lg:w-2/5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-luxury-gold font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">Alternative Class</span>
                            <h2 className="text-5xl font-serif text-white mb-8 leading-tight">Tangible Assets. <br /><span className="text-white/40 italic">Global Stability.</span></h2>
                            <p className="text-luxury-muted mb-10 leading-relaxed text-lg">
                                Luxury timepieces represent a fusion of mechanical artistry and resilient financial performance. Historically outperforming traditional indices with lower volatility.
                            </p>

                            <div className="space-y-8 mb-10">
                                {[
                                    { icon: TrendingUp, title: 'Outperforming S&P 500', desc: 'Average 18% annual return on selected references.' },
                                    { icon: Shield, title: 'Inflation Hedge', desc: 'Physical assets with intrinsic value preservation.' },
                                    { icon: BarChart3, title: 'Low Correlation', desc: 'Minimal impact from stock market fluctuations.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold group-hover:border-luxury-gold/50 transition-colors shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                                            <p className="text-luxury-muted text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="flex items-center gap-2 text-luxury-gold text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors group">
                                Download Portfolio Report <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    <div className="lg:w-3/5 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Glass Container */}
                            <div className="absolute inset-0 bg-luxury-gold/5 blur-[100px] pointer-events-none group-hover:bg-luxury-gold/10 transition-colors" />
                            <div className="relative bg-[#0c0c10]/80 backdrop-blur-xl p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl">
                                <div className="flex justify-between items-center mb-10">
                                    <h3 className="text-white font-serif text-xl">Market Performance</h3>
                                    <div className="flex gap-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-luxury-gold" />
                                            <span className="text-[10px] uppercase text-luxury-muted tracking-widest">Vault Index</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-white/20" />
                                            <span className="text-[10px] uppercase text-luxury-muted tracking-widest">S&P 500</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-[350px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={data}>
                                            <defs>
                                                <linearGradient id="colorWatch" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4} />
                                                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                            <XAxis
                                                dataKey="year"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: '#444', fontSize: 10, fontWeight: 700 }}
                                            />
                                            <YAxis hide />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: '#0c0c10',
                                                    border: '1px solid #ffffff10',
                                                    borderRadius: '2px',
                                                    fontSize: '10px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em'
                                                }}
                                                itemStyle={{ color: '#D4AF37' }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="watch"
                                                stroke="#D4AF37"
                                                strokeWidth={3}
                                                fillOpacity={1}
                                                fill="url(#colorWatch)"
                                                name="Vault Index"
                                                animationDuration={2500}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="sp500"
                                                stroke="#ffffff30"
                                                strokeWidth={1}
                                                strokeDasharray="10 10"
                                                fill="transparent"
                                                name="S&P 500"
                                                animationDuration={2500}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="mt-8 flex justify-between items-center text-luxury-muted">
                                    <div className="text-[10px] uppercase tracking-widest font-bold">Base Value: 100 PTS</div>
                                    <div className="text-[10px] uppercase tracking-widest font-bold">Curated Asset Index</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

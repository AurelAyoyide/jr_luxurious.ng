import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
    <section id="investment" className="py-24 bg-luxury-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                
                <div className="lg:col-span-1">
                    <span className="text-luxury-gold font-mono text-xs tracking-[0.3em] uppercase">Tangible Assets</span>
                    <h2 className="text-4xl font-serif text-white mt-4 mb-6">Outperforming the Market</h2>
                    <p className="text-luxury-muted mb-8 leading-relaxed">
                        Fine timepieces have historically outperformed traditional investment vehicles. Low volatility, high liquidity, and the joy of ownership make them the perfect alternative asset class.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold font-bold">
                                +145%
                            </div>
                            <div>
                                <h4 className="text-white text-sm font-medium">5-Year Growth</h4>
                                <p className="text-luxury-muted text-xs">Selected blue-chip models</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white font-bold">
                                0%
                            </div>
                            <div>
                                <h4 className="text-white text-sm font-medium">Inflation Impact</h4>
                                <p className="text-luxury-muted text-xs">Real asset protection</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 h-[400px] bg-luxury-card/50 p-6 rounded-lg border border-white/5">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorWatch" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis 
                                dataKey="year" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#666', fontSize: 12 }} 
                            />
                            <YAxis 
                                hide 
                            />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#121218', borderColor: '#333' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="watch" 
                                stroke="#D4AF37" 
                                strokeWidth={2}
                                fillOpacity={1} 
                                fill="url(#colorWatch)" 
                                name="Luxury Watch Index"
                            />
                             <Area 
                                type="monotone" 
                                dataKey="sp500" 
                                stroke="#444" 
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                fill="transparent" 
                                name="S&P 500"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center gap-8 mt-4">
                         <div className="flex items-center gap-2">
                             <div className="w-3 h-3 bg-luxury-gold rounded-full" />
                             <span className="text-xs text-luxury-muted">Luxury Watch Index</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-3 h-1 bg-[#444] rounded-full" />
                             <span className="text-xs text-luxury-muted">S&P 500</span>
                         </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

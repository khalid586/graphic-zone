'use client';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { PORTFOLIO } from '../../data/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => (
    <section id="portfolio" className="py-24 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Case Studies</h2>
                    <p className="text-4xl font-black text-slate-900">Proven Results.</p>
                </div>
                <button className="text-slate-400 font-bold text-xs uppercase tracking-widest border-b-2 border-slate-200 pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                    View All Work
                </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PORTFOLIO.map((item) => (
                    <Link key={item.id} href={`/project/${item.id}`}>
                        <Card className="group overflow-hidden shadow-sm hover:shadow-xl transition-all rounded-3xl border-0 p-0 gap-0">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.img}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt={item.title}
                                />
                            </div>
                            <CardContent className="p-8">
                                <Badge className="bg-transparent border-0 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-2 p-0 h-auto">
                                    {item.cat}
                                </Badge>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-slate-400 group-hover:text-indigo-600 transition-colors">
                                        <ArrowRight className="w-5 h-5" />
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    </section>
);

export default Portfolio;

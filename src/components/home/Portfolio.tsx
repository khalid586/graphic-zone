'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { PORTFOLIO } from '@/data/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => (
    <section id="portfolio" className="py-24 px-6 sm:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">কেস স্টাডি</h2>
                    <p className="text-4xl font-black text-slate-900">প্রমাণিত ফলাফল।</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PORTFOLIO.map((item) => (
                    <Card key={item.id} className="group overflow-hidden shadow-sm hover:shadow-xl transition-all rounded-3xl border-0 p-0 gap-0">
                        <div className="aspect-[4/3] overflow-hidden">
                            <Image
                                src={item.img}
                                width={800}
                                height={600}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                alt={item.title}
                            />
                        </div>
                        <CardContent className="p-8">
                            <Badge className="bg-transparent border-0 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-2 p-0 h-auto">
                                {item.cat}
                            </Badge>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export { Portfolio };

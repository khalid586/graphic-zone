'use client';

import Image from 'next/image';
import { PORTFOLIO } from '@/data/constants';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => (
    <section id="portfolio" className="py-16 px-6 sm:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
            <div className="mb-12">
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3">কেস স্টাডি</h2>
                <p className="text-3xl sm:text-4xl font-black text-foreground">পোর্টফলিও</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PORTFOLIO.map((item) => (
                    <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-shadow rounded-2xl border p-0 gap-0">
                        <div className="aspect-[4/3] overflow-hidden">
                            <Image
                                src={item.img}
                                width={800}
                                height={600}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                alt={item.title}
                            />
                        </div>
                        <CardContent className="p-5">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                                {item.cat}
                            </p>
                            <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export { Portfolio };

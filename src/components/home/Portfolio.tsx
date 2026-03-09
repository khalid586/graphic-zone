'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO } from '@/data/constants';

const Portfolio = () => (
    <section id="portfolio" className="py-24 px-6 sm:px-8 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="max-w-7xl mx-auto">
            <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block bg-primary/10 text-primary font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-2 rounded-full mb-4">
                    কেস স্টাডি
                </span>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-foreground">সরবরাহকৃত সেবাসমূহ</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mt-4 rounded-full" />
                    </div>
                    <p className="text-muted-foreground max-w-xs text-sm">আমাদের সেরা কাজের কিছু নমুনা দেখুন</p>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PORTFOLIO.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                        className="group relative overflow-hidden rounded-3xl bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-400"
                    >
                        {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden">
                            <Image
                                src={item.img}
                                width={800}
                                height={600}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt={item.title}
                            />
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end">
                            <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-primary/90 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                    {item.cat}
                                </span>
                                <h3 className="text-lg font-bold text-white mt-2 mb-1">{item.title}</h3>
                                <p className="text-white/80 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
                                <div className="flex items-center gap-1 mt-3 text-white/70 text-xs font-bold">
                                    <ExternalLink className="w-3 h-3" /> বিস্তারিত দেখুন
                                </div>
                            </div>
                        </div>

                        {/* Normal state bottom info */}
                        <div className="p-5 group-hover:opacity-0 transition-opacity duration-300">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                                {item.cat}
                            </p>
                            <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export { Portfolio };

'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import SectionLabel from '../ui/SectionLabel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '../../types';

interface RelatedProjectsProps {
    projects: Project[];
}

const RelatedProjects = ({ projects }: RelatedProjectsProps) => (
    <section id="related" className="py-16 md:py-24 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <SectionLabel>More Work</SectionLabel>
                        <p className="text-3xl sm:text-4xl font-black text-slate-900">Related Projects</p>
                    </div>
                    <Link
                        href="/"
                        className="text-slate-400 font-bold text-xs uppercase tracking-widest border-b-2 border-slate-200 pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-all"
                    >
                        View All Work
                    </Link>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div className="relative">
                    <div
                        className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((item) => (
                            <Link
                                key={item.id}
                                href={`/project/${item.id}`}
                                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-start"
                            >
                                <Card className="group overflow-hidden shadow-sm hover:shadow-xl transition-all rounded-3xl border-0 p-0 gap-0 h-full">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={item.heroImg}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <Badge className="bg-transparent border-0 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-2 p-0 h-auto">
                                            {item.category}
                                        </Badge>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-400 text-xs font-medium">{item.client}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default RelatedProjects;

'use client';

import { motion } from 'motion/react';
import { MessageSquare, PenTool, Cpu, Package } from 'lucide-react';
import { PROCESS } from '@/data/constants';

const STEP_ICONS = [MessageSquare, PenTool, Cpu, Package];
const STEP_COLORS = [
    'bg-primary text-primary-foreground',
    'bg-blue-600 text-white',
    'bg-emerald-600 text-white',
    'bg-violet-600 text-white',
];

const Process = () => (
    <section id="process" className="py-24 px-6 sm:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block bg-primary/10 text-primary font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-2 rounded-full mb-4">
                    আমাদের প্রক্রিয়া
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">কীভাবে আমরা কাজ করি</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">সহজ ৪টি ধাপে আপনার কাজ সম্পন্ন হয়</p>
                <div className="w-20 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto mt-6 rounded-full" />
            </motion.div>

            <div className="relative">
                {/* Connector line */}
                <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-blue-500 via-emerald-500 to-violet-500 opacity-20" />

                <div className="grid lg:grid-cols-4 gap-8">
                    {PROCESS.map((p, idx) => {
                        const Icon = STEP_ICONS[idx];
                        const color = STEP_COLORS[idx];
                        return (
                            <motion.div
                                key={p.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.12 }}
                                className="relative"
                            >
                                <div className="bg-white rounded-3xl p-8 border-2 border-primary/15 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-primary/5">
                                    {/* Step icon */}
                                    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    {/* Step number */}
                                    <div className="text-6xl font-black text-primary/10 absolute top-4 right-6 leading-none select-none">
                                        {p.step}
                                    </div>

                                    <h4 className="text-xl font-bold text-foreground mb-3">{p.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                                </div>

                                {/* Arrow connector - visible on lg screens */}
                                {idx < 3 && (
                                    <div className="hidden lg:flex absolute top-10 -right-4 z-10 w-8 h-8 items-center justify-center">
                                        <div className="w-2 h-2 border-r-2 border-t-2 border-primary/40 rotate-45" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
);

export { Process };

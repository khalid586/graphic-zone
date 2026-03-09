'use client';

import { ArrowRight, Layout, Printer, Image as ImageIcon, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '@/data/constants';
import { Button } from '@/components/ui/button';
import { scrollToContact } from '@/lib/navigation';
import type { ServiceIconName } from '@/types';
import type { LucideIcon } from 'lucide-react';

const SERVICE_ICONS: Record<ServiceIconName, LucideIcon> = {
    Layout,
    Printer,
    Image: ImageIcon,
    FileText,
};

const SERVICE_COLORS = [
    { bg: 'bg-primary/10', text: 'text-primary', hover: 'group-hover:bg-primary group-hover:text-white', accent: 'border-primary/20 group-hover:border-primary/50 group-hover:shadow-primary/15' },
    { bg: 'bg-blue-500/10', text: 'text-blue-600', hover: 'group-hover:bg-blue-600 group-hover:text-white', accent: 'border-blue-200 group-hover:border-blue-400 group-hover:shadow-blue-200/50' },
    { bg: 'bg-emerald-500/10', text: 'text-emerald-600', hover: 'group-hover:bg-emerald-600 group-hover:text-white', accent: 'border-emerald-200 group-hover:border-emerald-400 group-hover:shadow-emerald-200/50' },
    { bg: 'bg-violet-500/10', text: 'text-violet-600', hover: 'group-hover:bg-violet-600 group-hover:text-white', accent: 'border-violet-200 group-hover:border-violet-400 group-hover:shadow-violet-200/50' },
];

const Services = ({ onLearnMore }: { onLearnMore?: () => void }) => (
    <section id="services" className="py-24 px-6 sm:px-8 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block bg-primary/10 text-primary font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-2 rounded-full mb-4">
                    আমাদের দক্ষতা
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">কর্পোরেট সেবা স্যুট</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">আমরা ব্যবসায়িক প্রতিষ্ঠানের জন্য উচ্চমানের প্রিন্টিং ও ডিজাইন সমাধান প্রদান করি।</p>
                <div className="w-20 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto mt-6 rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service, index) => {
                    const Icon = SERVICE_ICONS[service.icon];
                    const colors = SERVICE_COLORS[index % SERVICE_COLORS.length];
                    return (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group p-8 rounded-3xl bg-white border-2 ${colors.accent} hover:shadow-xl transition-all duration-300 cursor-default`}
                        >
                            <div className={`w-14 h-14 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-6 ${colors.hover} transition-all duration-300`}>
                                <Icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                            <Button
                                variant="ghost"
                                onClick={onLearnMore ?? scrollToContact}
                                className={`${colors.text} text-xs font-bold uppercase tracking-widest p-0 h-auto hover:bg-transparent hover:gap-3 gap-2 transition-all`}
                            >
                                আরও জানুন <ArrowRight className="w-3.5 h-3.5" />
                            </Button>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

export { Services };

'use client';

import { ArrowRight, Layout, Printer, Image as ImageIcon, FileText } from 'lucide-react';
import { SERVICES } from '@/data/constants';
import { Card, CardContent } from '@/components/ui/card';
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

const Services = ({ onLearnMore }: { onLearnMore?: () => void }) => (
    <section id="services" className="py-24 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">আমাদের দক্ষতা</h2>
                <p className="text-4xl font-black text-foreground">কর্পোরেট সেবা স্যুট</p>
                <div className="w-20 h-1 bg-primary/40 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map((service) => {
                    const Icon = SERVICE_ICONS[service.icon];
                    return (
                        <Card
                            key={service.id}
                            className="p-10 rounded-3xl bg-white border-2 border-primary/30 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300 group shadow-lg shadow-primary/5 gap-0"
                        >
                            <CardContent className="p-0">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8">{service.desc}</p>
                                <Button
                                    variant="ghost"
                                    onClick={onLearnMore ?? scrollToContact}
                                    className="text-primary text-xs font-bold uppercase tracking-widest p-0 h-auto hover:bg-transparent hover:gap-3 gap-2 transition-all"
                                >
                                    আরও জানুন <ArrowRight className="w-4 h-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    </section>
);

export { Services };



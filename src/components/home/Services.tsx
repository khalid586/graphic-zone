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

interface ServicesProps {
    onLearnMore?: () => void;
}

const Services = ({ onLearnMore }: ServicesProps = {}) => (
    <section id="services" className="py-24 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">আমাদের দক্ষতা</h2>
                <p className="text-4xl font-black text-slate-900">কর্পোরেট সেবা স্যুট</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map((service) => {
                    const Icon = SERVICE_ICONS[service.icon];
                    return (
                        <Card
                            key={service.id}
                            className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-600/10 transition-all group shadow-none gap-0"
                        >
                            <CardContent className="p-0">
                                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                                <Button
                                    variant="ghost"
                                    onClick={onLearnMore ?? scrollToContact}
                                    className="text-indigo-600 text-xs font-bold uppercase tracking-widest p-0 h-auto hover:bg-transparent hover:gap-3 gap-2 transition-all"
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

export default Services;

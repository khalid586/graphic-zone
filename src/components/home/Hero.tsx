'use client';

import { ArrowRight, ShieldCheck, Zap, MessageCircle, Star, Award, Clock } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { scrollToContact } from '@/lib/navigation';
import { BRAND } from '@/config';

type HeroProps = {
    onCtaClick?: () => void;
}

const STAT_ITEMS = [
    { icon: Star, value: 'শতভাগ', label: 'ক্লায়েন্ট সন্তুষ্টি' },
    { icon: Clock, value: 'যথাসময়ে', label: 'দ্রুত ডেলিভারি' },
];

const Hero = ({ onCtaClick }: HeroProps = {}) => (
    <section className="relative min-h-screen flex items-center mt-8 sm:-mt-20 px-6 sm:px-8 bg-background overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />
            <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/40" />
            <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-primary/30" />
            <div className="absolute bottom-1/3 right-1/5 w-3 h-3 rounded-full bg-primary/20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full pt-16 sm:pt-24 pb-8">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                {/* Left content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <Badge className="bg-primary/10 text-primary border-0 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest mb-6 gap-2 w-fit">
                        <Zap className="w-3 h-3" /> এন্টারপ্রাইজ প্রিন্টিং সমাধান
                    </Badge>

                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-foreground mb-6 leading-[1.05]">
                        আপনার ব্র্যান্ড{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-primary">বড় করুন</span>
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full" />
                        </span>
                        <br />
                        <span className="text-primary">গ্রাফিক জোন</span>{' '}
                        <span className="text-foreground/70 text-4xl md:text-5xl xl:text-6xl">এর সাথে</span>
                    </h1>

                    <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                        উচ্চ-মানের{' '}
                        <span className="text-primary font-semibold">প্রিন্টিং, ব্র্যান্ডিং এবং লার্জ-ফরম্যাট</span>{' '}
                        সমাধানে দেশব্যাপী কর্পোরেশনগুলোর আস্থা। আমরা মানসম্মত সেবা প্রদান করি।
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mb-10 md:mb-12">
                        <Button
                            onClick={onCtaClick ?? scrollToContact}
                            size="lg"
                            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-primary/20 h-auto"
                        >
                            অর্ডার করুন <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:scale-[1.02] border-2 border-secondary/20 transition-all duration-300 shadow-md h-auto"
                        >
                            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" /> হোয়াটসঅ্যাপ
                            </a>
                        </Button>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {STAT_ITEMS.map(({ icon: Icon, value, label }) => (
                            <div key={label} className="flex flex-col items-start p-3 rounded-xl bg-white border border-primary/10 shadow-sm">
                                <Icon className="w-4 h-4 text-primary mb-1" />
                                <p className="text-xl font-black text-foreground leading-none">{value}</p>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide mt-1">{label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                    className="relative mb-12 md:mb-0"
                >
                    {/* Main image frame */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-[2rem] transform rotate-3 scale-105" />
                        <div className="bg-white rounded-[2rem] shadow-2xl shadow-primary/15 border-2 border-primary/20 relative z-10 p-3 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop&q=80"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover rounded-[1.5rem]"
                                alt="প্রিন্টিং যন্ত্রপাতি"
                                priority
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>

                    {/* Floating badge - bottom left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 bg-primary text-primary-foreground p-4 md:p-5 rounded-2xl shadow-2xl border-2 border-white z-20"
                    >
                        <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 mb-2" />
                        <p className="font-bold text-sm md:text-base">১০০% মানসম্মত</p>
                        <p className="text-primary-foreground/80 text-[10px]">ম্যানুয়াল পরিদর্শন নিশ্চিত</p>
                    </motion.div>

                    {/* Floating badge - top right */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="absolute -top-5 -right-5 bg-white text-foreground p-3 md:p-4 rounded-2xl shadow-xl border-2 border-primary/20 z-20"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Star className="w-4 h-4 text-primary fill-primary" />
                            </div>
                            <div>
                                <p className="font-black text-sm text-foreground">৫★ রেটিং</p>
                                <p className="text-[10px] text-muted-foreground">গ্রাহকদের পর্যালোচনা</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/8 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
                </motion.div>
            </div>
        </div>
    </section>
);

export { Hero };

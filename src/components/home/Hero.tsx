'use client';

import { ArrowRight, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { scrollToContact } from '@/lib/navigation';
import { BRAND } from '@/config';

type HeroProps = {
    onCtaClick?: () => void;
}

const Hero = ({ onCtaClick }: HeroProps = {}) => (
    <section className="relative py-4 md:py-10 lg:h-screen lg:flex lg:items-center lg:-mt-36 px-6 sm:px-8 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Badge className="bg-primary/10 text-primary border-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 gap-2">
                    <Zap className="w-3 h-3" /> এন্টারপ্রাইজ প্রিন্টিং সমাধান
                </Badge>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8 leading-[1.1]">
                    আপনার ব্র্যান্ড বড় করুন <br />
                    <span className="text-primary text-6xl md:text-7xl">গ্রাফিক জোন</span> এর সাথে
                </h1>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
                    উচ্চ-মানের <span className="text-primary font-bold">প্রিন্টিং , ব্র্যান্ডিং এবং লার্জ-ফরম্যাট </span> সমাধানে দেশব্যাপী কর্পোরেশনগুলোর আস্থা। আমরা মানসম্মত সেবা প্রদান করি।
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        onClick={onCtaClick ?? scrollToContact}
                        className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-secondary/90 shadow-xl shadow-secondary/20 h-auto"
                    >
                        অর্ডার করুন <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button
                        asChild
                        className="bg-success text-success-foreground px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-success/90 shadow-xl shadow-success/20 h-auto"
                    >
                        <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" /> হোয়াটসঅ্যাপে যোগাযোগ
                        </a>
                    </Button>
                </div>
                <div className="mt-8 md:mt-12 flex items-center gap-8 pt-8">
                    <div>
                        <p className="text-2xl font-black text-foreground">বিশ্বস্ত</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">সেবা প্রদানকারী</p>
                    </div>
                    <Separator orientation="vertical" className="h-10 bg-border" />
                    <div>
                        <p className="text-2xl font-black text-foreground">অভিজ্ঞ</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">প্রফেশনাল টিম</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mb-12 md:mb-0"
            >
                <div className="bg-white rounded-[2rem] shadow-2xl relative z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop&q=80"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-[1.5rem]"
                        alt="প্রিন্টিং যন্ত্রপাতি"
                        priority
                    />
                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-primary text-primary-foreground p-4 md:p-8 rounded-xl md:rounded-2xl shadow-xl z-20">
                    <ShieldCheck className="w-6 h-6 md:w-10 md:h-10 mb-2 md:mb-4" />
                    <p className="font-bold text-sm md:text-xl">১০০% মানসম্মত</p>
                    <p className="text-primary-foreground/80 text-[10px] md:text-xs">ম্যানুয়াল পরিদর্শন নিশ্চিত</p>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            </motion.div>
        </div>
    </section>
);

export { Hero };


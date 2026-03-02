'use client';

import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { scrollToContact } from '@/lib/navigation';

type HeroProps = {
    onCtaClick?: () => void;
}

const Hero = ({ onCtaClick }: HeroProps = {}) => (
    <section className="relative py-24 md:py-32 px-6 sm:px-8 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Badge className="bg-indigo-100 text-indigo-600 border-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 gap-2">
                    <Zap className="w-3 h-3" /> এন্টারপ্রাইজ প্রিন্টিং সমাধান
                </Badge>
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
                    আপনার ব্র্যান্ড বড় করুন <br />
                    <span className="text-indigo-600 text-6xl md:text-7xl">গ্রাফিক জোনের সাথে।</span>
                </h1>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
                    উচ্চ-মানের প্রিন্টিং, ব্র্যান্ডিং এবং লার্জ-ফরম্যাট সমাধানে বিশ্বব্যাপী কর্পোরেশনগুলোর আস্থা। আমরা মানসম্মত সেবা প্রদান করি।
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        onClick={onCtaClick ?? scrollToContact}
                        className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 shadow-xl shadow-slate-900/20 h-auto"
                    >
                        বাল্ক অর্ডার করুন <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="bg-white border-2 border-slate-200 text-slate-600 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-50 h-auto"
                    >
                        মূল্য তালিকা ডাউনলোড
                    </Button>
                </div>
                <div className="mt-12 flex items-center gap-8 pt-8 border-t border-slate-200">
                    <div>
                        <p className="text-2xl font-black text-slate-900">৫,০০০+</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">কর্পোরেট ক্লায়েন্ট</p>
                    </div>
                    <Separator orientation="vertical" className="h-10 bg-slate-200" />
                    <div>
                        <p className="text-2xl font-black text-slate-900">১২+</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">বছরের অভিজ্ঞতা</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
            >
                <div className="bg-white p-4 rounded-[2rem] shadow-2xl relative z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop&q=80"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-[1.5rem]"
                        alt="প্রিন্টিং যন্ত্রপাতি"
                        priority
                    />
                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-indigo-600 text-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-xl z-20">
                    <ShieldCheck className="w-6 h-6 md:w-10 md:h-10 mb-2 md:mb-4" />
                    <p className="font-bold text-sm md:text-xl">১০০% মানসম্মত</p>
                    <p className="text-indigo-100 text-[10px] md:text-xs">ম্যানুয়াল পরিদর্শন নিশ্চিত</p>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full blur-3xl -z-10" />
            </motion.div>
        </div>
    </section>
);

export { Hero };


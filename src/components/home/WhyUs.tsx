'use client';

import { motion } from 'motion/react';
import { Zap, Shield, Palette, Headphones, Truck, BadgeCheck } from 'lucide-react';

const WHY_US_ITEMS = [
    {
        icon: Zap,
        title: 'দ্রুত টার্নঅ্যারাউন্ড',
        desc: 'এক্সপ্রেস অর্ডারের জন্য ২৪ ঘণ্টার মধ্যে ডেলিভারি নিশ্চিত করা হয়।',
        color: 'text-amber-500 bg-amber-500/10',
    },
    {
        icon: Shield,
        title: 'গুণমান নিশ্চিত',
        desc: 'প্রতিটি প্রিন্ট শিপমেন্টের আগে ম্যানুয়ালি পরিদর্শন করা হয়।',
        color: 'text-primary bg-primary/10',
    },
    {
        icon: Palette,
        title: 'কাস্টম ডিজাইন',
        desc: 'আমাদের অভিজ্ঞ ডিজাইনাররা আপনার ব্র্যান্ডের জন্য অনন্য ডিজাইন তৈরি করেন।',
        color: 'text-violet-500 bg-violet-500/10',
    },
    {
        icon: Headphones,
        title: '২৪/৭ সাপোর্ট',
        desc: 'যেকোনো প্রশ্ন বা সমস্যার জন্য আমাদের টিম সর্বদা প্রস্তুত।',
        color: 'text-blue-500 bg-blue-500/10',
    },
    {
        icon: Truck,
        title: 'দেশব্যাপী ডেলিভারি',
        desc: 'বাংলাদেশের যেকোনো প্রান্তে নিরাপদে পণ্য পৌঁছে দেওয়া হয়।',
        color: 'text-emerald-500 bg-emerald-500/10',
    },
    {
        icon: BadgeCheck,
        title: 'সাশ্রয়ী মূল্য',
        desc: 'প্রিমিয়াম মান বজায় রেখে প্রতিযোগিতামূলক মূল্যে সেবা প্রদান।',
        color: 'text-rose-500 bg-rose-500/10',
    },
];

const WhyUs = () => (
    <section className="py-24 px-6 sm:px-8 bg-secondary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block bg-white/10 text-white/80 font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-2 rounded-full mb-4">
                    কেন আমাদের বেছে নেবেন
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">আমাদের সুবিধাসমূহ</h2>
                <p className="text-white/60 max-w-xl mx-auto">আমরা গ্রাহকদের সেরা অভিজ্ঞতা প্রদানে প্রতিশ্রুতিবদ্ধ</p>
                <div className="w-20 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto mt-6 rounded-full" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {WHY_US_ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="flex gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                        <div className={`w-12 h-12 shrink-0 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export { WhyUs };

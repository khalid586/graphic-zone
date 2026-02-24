'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const StartProjectCTA = () => (
    <section className="py-20 md:py-28 px-6 sm:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <Badge className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 gap-2">
                    <Send className="w-3 h-3" /> চলুন একসাথে কাজ করি
                </Badge>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                    আপনার প্রকল্প শুরু <br />
                    <span className="text-indigo-400">করতে প্রস্তুত?</span>
                </h2>
                <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                    কনসেপ্ট থেকে ডেলিভারি পর্যন্ত, আমাদের দল আপনার আইডিয়াকে অসাধারণ প্রিন্টেড বাস্তবে রূপান্তরিত করে। আসুন আপনার পরবর্তী প্রকল্প নিয়ে আলোচনা করি।
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-indigo-600 text-white px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-700 shadow-xl shadow-indigo-600/30 h-auto">
                        <Link href="/#contact">
                            আপনার প্রকল্প শুরু করুন <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-white/10 text-white border border-white/10 px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/20 backdrop-blur-sm h-auto">
                        <a href="tel:+1800GRAPHIC">
                            <Phone className="w-4 h-4" /> এখনই কল করুন
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
    </section>
);

export default StartProjectCTA;

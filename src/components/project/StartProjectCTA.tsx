'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const StartProjectCTA = () => (
    <section className="py-20 md:py-28 px-4 sm:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <Badge className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 gap-2">
                    <Send className="w-3 h-3" /> Let's Collaborate
                </Badge>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                    Ready to Start <br />
                    <span className="text-indigo-400">Your Project?</span>
                </h2>
                <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                    From concept to delivery, our team transforms your ideas into stunning printed reality. Let's discuss your next project and create something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-indigo-600 text-white px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-700 shadow-xl shadow-indigo-600/30 h-auto">
                        <Link href="/#contact">
                            Start Your Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-white/10 text-white border border-white/10 px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/20 backdrop-blur-sm h-auto">
                        <a href="tel:+1800GRAPHIC">
                            <Phone className="w-4 h-4" /> Call Us Now
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
    </section>
);

export default StartProjectCTA;

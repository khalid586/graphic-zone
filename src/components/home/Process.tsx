'use client';

import { PROCESS } from '@/data/constants';

const Process = () => (
    <section id="process" className="py-24 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">আমাদের প্রক্রিয়া</h2>
                <p className="text-4xl font-black text-foreground">কীভাবে আমরা কাজ করি</p>
                <div className="w-20 h-1 bg-primary/40 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid lg:grid-cols-4 gap-12">{PROCESS.map((p, idx) => (
                <div key={p.step} className="relative bg-white rounded-3xl p-8 border-2 border-primary/30 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/5">
                    <div className="text-8xl font-black text-primary/20 absolute -top-10 -left-4 z-0">{p.step}</div>
                    <div className="relative z-10 pt-4">
                        <h4 className="text-xl font-bold text-foreground mb-4">{p.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    </div>
                    {idx < 3 && <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-primary/40" />}
                </div>
            ))}
            </div>
        </div>
    </section>
);

export { Process };

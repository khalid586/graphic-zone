'use client';

import { PROCESS } from '../../data/constants';

const Process = () => (
    <section id="process" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
                {PROCESS.map((p, idx) => (
                    <div key={p.step} className="relative">
                        <div className="text-8xl font-black text-slate-100 absolute -top-10 -left-4 z-0">{p.step}</div>
                        <div className="relative z-10 pt-4">
                            <h4 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                        </div>
                        {idx < 3 && <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-slate-100" />}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Process;

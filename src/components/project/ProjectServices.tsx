'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import SectionLabel from '../ui/SectionLabel';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectServicesProps {
    services: string[];
}

const ProjectServices = ({ services }: ProjectServicesProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
    >
        <SectionLabel>What We Did</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8">Services Provided</h2>
        <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, idx) => (
                <Card key={idx} className="flex-row items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all group shadow-none">
                    <CardContent className="flex items-center gap-4 p-0">
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-slate-700">{service}</span>
                    </CardContent>
                </Card>
            ))}
        </div>
    </motion.div>
);

export default ProjectServices;

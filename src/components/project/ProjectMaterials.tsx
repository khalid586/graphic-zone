'use client';

import { memo } from 'react';
import { FileText, Ruler, Palette } from 'lucide-react';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import { Card, CardContent } from '@/components/ui/card';
import type { ProjectMaterials as MaterialsType } from '@/types';

interface ProjectMaterialsProps {
    materials: MaterialsType;
}

const MATERIAL_CARDS = [
    { key: 'paper', label: 'কাগজ / সাবস্ট্রেট', icon: FileText },
    { key: 'size', label: 'মাপ', icon: Ruler },
    { key: 'method', label: 'প্রিন্ট পদ্ধতি', icon: Palette },
] as const;

const ProjectMaterials = ({ materials }: ProjectMaterialsProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
    >
        <SectionLabel>প্রোডাকশন স্পেকস</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8">উপকরণ ও পদ্ধতি</h2>
        <div className="grid sm:grid-cols-3 gap-4">
            {MATERIAL_CARDS.map(({ key, label, icon: Icon }) => (
                <Card key={key} className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-none gap-0">
                    <CardContent className="p-0">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-5">
                            <Icon className="w-6 h-6" />
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{label}</p>
                        <p className="font-bold text-slate-700 text-sm leading-relaxed">{materials[key]}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </motion.div>
);

export default memo(ProjectMaterials);

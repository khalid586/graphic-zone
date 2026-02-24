'use client';

import { Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import SectionLabel from '../ui/SectionLabel';
import { Card, CardContent } from '@/components/ui/card';
import type { ProjectChallenge } from '../../types';

interface ProjectChallengesProps {
    challenges: ProjectChallenge[];
}

const ProjectChallenges = ({ challenges }: ProjectChallengesProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
    >
        <SectionLabel>নেপথ্য কথা</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8">চ্যালেন্জ ও সমাধান</h2>
        <div className="space-y-6">
            {challenges.map((challenge, idx) => (
                <Card key={idx} className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 shadow-none gap-0">
                    <CardContent className="p-0">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5">
                                <Lightbulb className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{challenge.title}</h3>
                        </div>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed ml-14">{challenge.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </motion.div>
);

export default ProjectChallenges;

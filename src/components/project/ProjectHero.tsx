'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tag, Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface ProjectHeroProps {
    project: Project;
}

const ProjectHero = ({ project }: ProjectHeroProps) => (
    <section className="relative px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="relative h-[35vh] sm:h-[50vh] md:h-[60vh] overflow-hidden rounded-2xl mt-6">
                <Image
                    src={project.heroImg}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 py-6 sm:py-10 md:py-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Badge className="bg-indigo-600 text-white border-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest gap-1.5">
                                <Tag className="w-3 h-3" /> {project.category}
                            </Badge>
                            <Badge variant="secondary" className="bg-white/15 text-white border-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm gap-1.5">
                                <Calendar className="w-3 h-3" /> {project.date}
                            </Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 leading-[1.1]">
                            {project.title}
                        </h1>
                        {project.client && (
                            <p className="text-white/70 text-sm sm:text-base flex items-center gap-2">
                                <User className="w-4 h-4 text-indigo-400" /> ক্লায়েন্ট: <span className="font-bold text-white">{project.client}</span>
                            </p>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-slate-50 border-b border-slate-100 rounded-b-2xl px-6 sm:px-8 py-4">
                <Breadcrumb>
                    <BreadcrumbList className="text-xs font-medium">
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/" className="hover:text-indigo-600">হোম</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <span className="text-slate-400">পোর্টফোলিও</span>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-bold">{project.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
    </section>
);

export default memo(ProjectHero);

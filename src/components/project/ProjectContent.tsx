'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { PROJECT_DATA } from '@/data/projects';
import Lightbox from '@/components/ui/Lightbox';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectServices from '@/components/project/ProjectServices';
import ProjectMaterials from '@/components/project/ProjectMaterials';
import ProjectChallenges from '@/components/project/ProjectChallenges';
import { ProjectSidebar, ProjectMobileSidebar } from '@/components/project/ProjectSidebar';
import RelatedProjects from '@/components/project/RelatedProjects';
import StartProjectCTA from '@/components/project/StartProjectCTA';

interface ProjectContentProps {
    id: string;
}

const ProjectContent = ({ id }: ProjectContentProps) => {
    const project = PROJECT_DATA[id];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIdx, setLightboxIdx] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [id]);

    const openLightbox = useCallback((idx: number) => {
        setLightboxIdx(idx);
        setLightboxOpen(true);
    }, []);

    const relatedProjects = useMemo(
        () => Object.values(PROJECT_DATA).filter((p) => p.id !== project?.id),
        [project?.id],
    );

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <p className="text-6xl font-black text-slate-200 mb-4">404</p>
                    <p className="text-xl font-bold text-slate-600 mb-8">প্রকল্প খুঁজে পাওয়া যায়নি</p>
                    <Link
                        href="/"
                        className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all"
                    >
                        হোমে ফিরে যান
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white text-slate-900 scroll-smooth">
            <Lightbox
                images={project.gallery}
                currentIndex={lightboxIdx}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onPrev={() => setLightboxIdx((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
                onNext={() => setLightboxIdx((prev) => (prev + 1) % project.gallery.length)}
                altPrefix={project.title}
            />

            <ProjectHero project={project} />

            <section id="details" className="px-6 sm:px-8 py-12 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_360px] gap-12 xl:gap-20">
                        <div className="min-w-0">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mb-16"
                            >
                                <SectionLabel>প্রকল্প সারসংক্ষেপ</SectionLabel>
                                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">এই প্রকল্প সম্পর্কে</h2>
                                <p className="text-slate-500 text-base sm:text-lg leading-relaxed">{project.description}</p>
                            </motion.div>

                            <ProjectGallery images={project.gallery} title={project.title} onImageClick={openLightbox} />
                            <ProjectServices services={project.services} />
                            <ProjectMaterials materials={project.materials} />
                            <ProjectChallenges challenges={project.challenges} />
                        </div>

                        <ProjectSidebar project={project} />
                    </div>

                    <ProjectMobileSidebar project={project} />
                </div>
            </section>

            <RelatedProjects projects={relatedProjects} />
            <StartProjectCTA />
        </div>
    );
};

export default ProjectContent;

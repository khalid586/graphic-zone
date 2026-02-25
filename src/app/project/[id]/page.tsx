import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECT_DATA } from '@/data/projects';
import { ProjectContent } from '@/components/project';

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

/** Pre-generate all known project pages at build time */
export function generateStaticParams() {
    return Object.keys(PROJECT_DATA).map((id) => ({ id }));
}

/** Dynamic SEO metadata per project */
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { id } = await params;
    const project = PROJECT_DATA[id];

    if (!project) {
        return { title: 'প্রকল্প খুঁজে পাওয়া যায়নি | গ্রাফিক জোন' };
    }

    return {
        title: `${project.title} | গ্রাফিক জোন`,
        description: project.description.slice(0, 160),
        openGraph: {
            title: project.title,
            description: project.description.slice(0, 160),
            images: [project.heroImg],
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;

    if (!PROJECT_DATA[id]) {
        notFound();
    }

    return <ProjectContent id={id} />;
}

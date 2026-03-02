import Link from 'next/link';
import { Tag, User, Calendar, Layers, Star, Palette, Phone, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BRAND } from '@/config/site';
import type { Project } from '@/types';

type ProjectSidebarProps = {
    project: Project;
}

/* ── Shared sub-components ── */

const SummaryHeader = ({ title }: { title: string }) => (
    <CardHeader className="bg-secondary p-6 rounded-none">
        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">প্রকল্প সারসংক্ষেপ</p>
        <h3 className="text-xl font-bold text-white">{title}</h3>
    </CardHeader>
);

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className={`w-4 h-4 ${i <= rating ? 'text-warning fill-warning' : 'text-muted'}`} />
        ))}
    </div>
);

const TagList = ({ tags }: { tags: readonly string[] }) => (
    <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
            <Badge
                key={idx}
                variant="secondary"
                className="rounded-full bg-muted text-foreground text-xs font-bold hover:bg-primary/10 hover:text-primary transition-all cursor-default border-0"
            >
                {tag}
            </Badge>
        ))}
    </div>
);

/* ── Desktop Sidebar (hidden on mobile) ── */

const ProjectSidebar = ({ project }: ProjectSidebarProps) => (
    <aside className="hidden lg:block">
        <div className="sticky top-28 space-y-6">
            <Card className="rounded-3xl border-muted shadow-xl shadow-muted/50 overflow-hidden p-0 gap-0">
                <SummaryHeader title={project.title} />
                <CardContent className="p-6 space-y-5">
                    {[
                        { icon: Tag, label: 'ক্যাটাগরি', value: project.category },
                        { icon: User, label: 'ক্লায়েন্ট', value: project.client },
                        { icon: Calendar, label: 'সম্পন্ন', value: project.date },
                        { icon: Layers, label: 'সেবা', value: `${project.services.length}টি ডেলিভারেবল` },
                    ].map(({ icon: Icon, label, value }) => (
                        <div key={label} className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
                                <p className="font-bold text-foreground">{value}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-warning/20 rounded-xl flex items-center justify-center text-warning">
                            <Star className="w-5 h-5 fill-warning" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">ক্লায়েন্ট রেটিং</p>
                            <StarRating rating={project.rating} />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="rounded-3xl border-muted p-6 shadow-none gap-0">
                <CardContent className="p-0">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">ট্যাগসমূহ</p>
                    <TagList tags={project.tags} />
                </CardContent>
            </Card>

            <div className="space-y-3">
                <Button asChild className="w-full bg-primary text-white px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-primary/90 shadow-xl shadow-primary/20 h-auto">
                    <Link href="/#contact">
                        <Palette className="w-4 h-4" />
                        এরকম ডিজাইন চাই
                    </Link>
                </Button>
                <Button asChild className="w-full bg-secondary text-white px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-secondary/90 h-auto">
                    <Link href="/#contact">
                        <Phone className="w-4 h-4" />
                        যোগাযোগ করুন
                    </Link>
                </Button>
                <Button asChild className="w-full bg-success text-white px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-success/90 h-auto">
                    <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="w-4 h-4" />
                        হোয়াটসঅ্যাপ
                    </a>
                </Button>
            </div>
        </div>
    </aside>
);

/* ── Mobile Sidebar (hidden on desktop) ── */

const ProjectMobileSidebar = ({ project }: ProjectSidebarProps) => (
    <div className="lg:hidden mt-12 space-y-6">
        <Card className="rounded-3xl border-muted shadow-lg overflow-hidden p-0 gap-0">
            <SummaryHeader title={project.title} />
            <CardContent className="p-6 grid grid-cols-2 gap-4">
                <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">ক্যাটাগরি</p>
                    <p className="font-bold text-foreground">{project.category}</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">ক্লায়েন্ট</p>
                    <p className="font-bold text-foreground">{project.client}</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">সম্পন্ন</p>
                    <p className="font-bold text-foreground">{project.date}</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">রেটিং</p>
                    <StarRating rating={project.rating} />
                </div>
            </CardContent>
        </Card>
        <TagList tags={project.tags} />
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                <Button asChild className="bg-primary text-white px-4 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 shadow-lg shadow-primary/20 h-auto">
                    <Link href="/#contact">ডিজাইন চাই</Link>
                </Button>
                <Button asChild className="bg-secondary text-white px-4 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-secondary/90 h-auto">
                    <Link href="/#contact">যোগাযোগ করুন</Link>
                </Button>
            </div>
            <Button asChild className="w-full bg-success text-white px-4 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-success/90 h-auto">
                <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4" />
                    হোয়াটসঅ্যাপ
                </a>
            </Button>
        </div>
    </div>
);

export { ProjectSidebar, ProjectMobileSidebar };
export default ProjectSidebar;


import Link from 'next/link';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '../../types';

interface ProjectMobileSidebarProps {
    project: Project;
}

const ProjectMobileSidebar = ({ project }: ProjectMobileSidebarProps) => (
    <div className="lg:hidden mt-12 space-y-6">
        {/* Mobile Project Summary */}
        <Card className="rounded-3xl border-slate-100 shadow-lg overflow-hidden p-0 gap-0">
            <CardHeader className="bg-slate-900 p-6 rounded-none">
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2">Project Summary</p>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-2 gap-4">
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category</p>
                    <p className="font-bold text-slate-700">{project.category}</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client</p>
                    <p className="font-bold text-slate-700">{project.client}</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Completed</p>
                    <p className="font-bold text-slate-700">{project.date}</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rating</p>
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className={`w-4 h-4 ${i <= project.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} />
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Mobile Tags */}
        <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary" className="rounded-full bg-slate-100 text-slate-600 text-xs font-bold border-0">
                    {tag}
                </Badge>
            ))}
        </div>

        {/* Mobile CTAs */}
        <div className="grid grid-cols-2 gap-3">
            <Button asChild className="bg-indigo-600 text-white px-4 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 h-auto">
                <Link href="/#contact">Request Design</Link>
            </Button>
            <Button asChild className="bg-slate-900 text-white px-4 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 h-auto">
                <Link href="/#contact">Contact Us</Link>
            </Button>
        </div>
    </div>
);

export default ProjectMobileSidebar;

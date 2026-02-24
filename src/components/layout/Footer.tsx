import Link from 'next/link';
import { Printer, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => (
    <footer className="bg-slate-950 text-slate-500 py-16 px-6 sm:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
                <Link href="/" className="flex items-center gap-3">
                    <div className="bg-indigo-600 p-2 rounded-lg">
                        <Printer className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Graphic<span className="text-indigo-600">Zone</span>
                    </span>
                </Link>
                <div className="flex gap-4">
                    {['গোপনীয়তা', 'শর্তাবলী', 'কুকিজ', 'সাইটম্যাপ'].map((label) => (
                        <Button
                            key={label}
                            variant="ghost"
                            className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest px-2 h-auto py-1"
                        >
                            {label}
                        </Button>
                    ))}
                </div>
                <div className="flex gap-4">
                    <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white h-auto w-auto p-1">
                        <Instagram className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white h-auto w-auto p-1">
                        <Twitter className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white h-auto w-auto p-1">
                        <Facebook className="w-5 h-5" />
                    </Button>
                </div>
            </div>
            <Separator className="bg-white/5 mb-12" />
            <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em]">© ২০২৬ গ্রাফিক জোন কর্পোরেশন। সর্বস্বত্ব সংরক্ষিত।</p>
            </div>
        </div>
    </footer>
);

export default Footer;

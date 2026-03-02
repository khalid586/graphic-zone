import { ShieldCheck, Clock } from 'lucide-react';
import { BRAND } from '@/config';

const TopBar = () => (
    <div className="bg-secondary text-white py-2.5 px-4 sm:px-8 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold flex justify-between items-center">
        <div className="flex gap-3 sm:gap-6">
            <span className="flex items-center gap-1 sm:gap-2">
                <ShieldCheck className="w-3 h-3 text-primary/80" />{' '}
                <span className="hidden min-[400px]:inline">ISO 9001 সার্টিফাইড</span>
                <span className="min-[400px]:hidden">সার্টিফাইড</span>
            </span>
            <span className="hidden sm:flex items-center gap-2">
                <Clock className="w-3 h-3 text-primary/80" /> ২৪/৭ প্রোডাকশন
            </span>
        </div>
        <div className="flex gap-3 sm:gap-6">
            <a href={`tel:${BRAND.contactPhone.replace(/[^+0-9]/g, '')}`} className="hover:text-primary transition-colors">
                {BRAND.contactPhone}
            </a>
        </div>
    </div>
);

export { TopBar };

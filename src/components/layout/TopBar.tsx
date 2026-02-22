import { ShieldCheck, Clock } from 'lucide-react';

const TopBar = () => (
    <div className="bg-slate-900 text-white py-2.5 px-4 sm:px-8 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold flex justify-between items-center">
        <div className="flex gap-3 sm:gap-6">
            <span className="flex items-center gap-1 sm:gap-2">
                <ShieldCheck className="w-3 h-3 text-indigo-400" />{' '}
                <span className="hidden min-[400px]:inline">ISO 9001 Certified</span>
                <span className="min-[400px]:hidden">Certified</span>
            </span>
            <span className="hidden sm:flex items-center gap-2">
                <Clock className="w-3 h-3 text-indigo-400" /> 24/7 Production
            </span>
        </div>
        <div className="flex gap-3 sm:gap-6">
            <a href="tel:+1800PRINT" className="hover:text-indigo-400 transition-colors">
                +1 800 GRAPHIC
            </a>
        </div>
    </div>
);

export default TopBar;

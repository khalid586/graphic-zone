import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { BRAND } from '@/config';
import LogoImage from '../../../assets/Logo.png';

const Footer = () => (
    <footer className="bg-secondary text-muted-foreground py-16 px-6 sm:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                <Link href="/" className="flex items-center">
                    <Image
                        src={LogoImage}
                        alt="Graphic Zone Logo"
                        width={200}
                        height={200}
                        className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-50 lg:h-50 object-contain"
                    />
                </Link>
                <div className="flex items-start gap-3 text-center md:text-left">
                    <MapPin className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">আমাদের ঠিকানা</p>
                        <p className="text-white font-semibold">{BRAND.address.street}</p>
                        <p className="text-muted-foreground">{BRAND.address.area}, {BRAND.address.city}</p>
                        <p className="text-muted-foreground">{BRAND.address.postalCode}</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-12 pt-8 border-t border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em]">© ২০২৬ গ্রাফিক জোন কর্পোরেশন। সর্বস্বত্ব সংরক্ষিত।</p>
            </div>
        </div>
    </footer>
);

export { Footer };

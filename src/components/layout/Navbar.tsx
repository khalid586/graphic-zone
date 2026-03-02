'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import type { NavItem } from '@/config';
import LogoImage from '../../../assets/Logo.png';

export type { NavItem };

type NavbarProps = {
    navItems: readonly NavItem[];
    ctaLabel?: string;
    ctaAction?: string | (() => void);
    showBackButton?: boolean;
}

const Navbar = ({ navItems, ctaLabel = 'কোটেশন চাই', ctaAction, showBackButton = false }: NavbarProps) => {
    const isScrolled = useScrollPosition(50);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavAction = (action: string | (() => void)) => {
        if (typeof action === 'function') {
            action();
        }
        setMobileMenuOpen(false);
    };

    const handleCtaClick = () => {
        if (typeof ctaAction === 'function') {
            ctaAction();
        }
    };

    const ctaHref = typeof ctaAction === 'string' ? ctaAction : undefined;

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 px-6 sm:px-8 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white border-b border-muted'
                }`}
        >
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center py-3 md:py-4">
                <Link href="/" className="flex items-center gap-2 sm:gap-3">
                    <Image
                        src={LogoImage}
                        alt="Graphic Zone Logo"
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                        priority
                    />
                    <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-foreground">
                        Graphic<span className="text-primary">Zone</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-10 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    {navItems.map((item) =>
                        typeof item.action === 'string' ? (
                            <Link key={item.label} href={item.action} className="hover:text-primary transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <button key={item.label} onClick={item.action} className="hover:text-primary transition-colors">
                                {item.label}
                            </button>
                        )
                    )}
                </div>

                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    {showBackButton && (
                        <Button variant="ghost" asChild className="hidden md:flex text-xs font-bold text-muted-foreground uppercase tracking-widest hover:text-primary">
                            <Link href="/">← ফিরে যান</Link>
                        </Button>
                    )}
                    {!showBackButton && (
                        <Button variant="ghost" asChild className="hidden md:block text-xs font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">
                            <Link href="/login">ক্লায়েন্ট লগইন</Link>
                        </Button>
                    )}
                    {ctaHref ? (
                        <Button asChild className="bg-primary text-primary-foreground px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest hover:bg-primary/90 shadow-lg shadow-primary/20 h-auto">
                            <Link href={ctaHref}>
                                <span className="hidden min-[380px]:inline">{ctaLabel}</span>
                                <span className="min-[380px]:hidden">কোটেশন</span>
                            </Link>
                        </Button>
                    ) : (
                        <Button
                            onClick={handleCtaClick}
                            className="bg-primary text-primary-foreground px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest hover:bg-primary/90 shadow-lg shadow-primary/20 h-auto"
                        >
                            <span className="hidden min-[380px]:inline">{ctaLabel}</span>
                            <span className="min-[380px]:hidden">কোটেশন</span>
                        </Button>
                    )}

                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden text-foreground">
                                {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-80 pt-12 px-6">
                            <SheetTitle className="sr-only">ন্যাভিগেশন মেনু</SheetTitle>
                            <div className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg font-bold text-foreground uppercase tracking-wide sm:tracking-widest">
                                {navItems.map((item) =>
                                    typeof item.action === 'string' ? (
                                        <Link
                                            key={item.label}
                                            href={item.action}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-left hover:text-primary transition-colors py-2"
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <button
                                            key={item.label}
                                            onClick={() => handleNavAction(item.action)}
                                            className="text-left hover:text-primary transition-colors py-2"
                                        >
                                            {item.label}
                                        </button>
                                    )
                                )}
                                {!showBackButton && (
                                    <>
                                        <Separator />
                                        <Link
                                            href="/login"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                                        >
                                            ক্লায়েন্ট লগইন
                                        </Link>
                                    </>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };


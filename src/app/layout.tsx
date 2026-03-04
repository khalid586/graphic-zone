import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Hind_Siliguri, Manrope } from 'next/font/google';
import '../index.css';
import { Navbar, Footer } from '@/components/layout';
import { PRIMARY_NAV, CTA, DEFAULT_METADATA } from '@/config';

const hindSiliguri = Hind_Siliguri({
    subsets: ['bengali', 'latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-hind-siliguri',
    display: 'swap',
});

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-manrope',
    display: 'swap',
});

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="bn" className={`${hindSiliguri.variable} ${manrope.variable}`}>
            <body className="font-sans antialiased">
                <div className="min-h-screen selection:bg-primary selection:text-white flex flex-col px-4 md:px-6 lg:px-8">
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white focus:rounded-br-xl focus:outline-none"
                    >
                        প্রধান বিষয়বস্তুতে যান
                    </a>
                    <Navbar navItems={PRIMARY_NAV} ctaLabel={CTA.label} ctaAction={CTA.action} />
                    <main id="main-content" className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

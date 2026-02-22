import type { Metadata } from 'next';
import '../index.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'Graphic Zone - Design & Printing Solutions',
    description: 'Trusted by global corporations for high-volume, quality-assured printing, branding, and large-format solutions.',
};

const NAV_ITEMS = [
    { label: 'Home', action: '/' },
    { label: 'Services', action: '/#services' },
    { label: 'Portfolio', action: '/#portfolio' },
    { label: 'Process', action: '/#process' },
    { label: 'Contact', action: '/#contact' },
];

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body className="font-sans antialiased">
                <div className="min-h-screen selection:bg-indigo-600 selection:text-white flex flex-col">
                    <TopBar />
                    <Navbar navItems={NAV_ITEMS} ctaLabel="Request Quote" ctaAction="/#contact" />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

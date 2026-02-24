import type { Metadata } from 'next';
import '../index.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'গ্রাফিক জোন - ডিজাইন ও প্রিন্টিং সমাধান',
    description: 'উচ্চ-মানের প্রিন্টিং, ব্র্যান্ডিং এবং লার্জ-ফরম্যাট সমাধানে বিশ্বব্যাপী কর্পোরেশনগুলোর আস্থা।',
};

const NAV_ITEMS = [
    { label: 'হোম', action: '/' },
    { label: 'সেবাসমূহ', action: '/#services' },
    { label: 'পোর্টফোলিও', action: '/#portfolio' },
    { label: 'প্রক্রিয়া', action: '/#process' },
    { label: 'যোগাযোগ', action: '/#contact' },
];

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="bn">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body className="font-sans antialiased">
                <div className="min-h-screen selection:bg-indigo-600 selection:text-white flex flex-col">
                    {/* <TopBar /> */}
                    <Navbar navItems={NAV_ITEMS} ctaLabel="কোটেশন চাই" ctaAction="/#contact" />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

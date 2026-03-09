'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
    Package,
    Palette,
    ShieldCheck,
    Clock,
    Truck,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { LoginForm } from './LoginForm';
import LogoImage from '../../../assets/Logo.png';

const BrandPanel = () => (
    <div className="w-full flex relative items-center justify-center pt-8 pb-4 px-4 lg:p-12 min-h-min lg:min-h-[calc(100vh-80px)]">
        {/* Simple background pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="simple-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#simple-grid)" />
            </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 lg:mb-10"
            >
                {/* Logo as it is */}
                <Image
                    src={LogoImage}
                    alt="Graphic Zone Logo"
                    width={350}
                    height={150}
                    className="w-56 sm:w-64 lg:w-80 h-auto object-contain"
                    priority
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center w-full max-w-sm mx-auto"
            >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight text-foreground">
                    আপনার প্রিন্ট, <span className="text-primary">আপনার মতো।</span>
                </h2>

                <div className="hidden sm:flex flex-col gap-3 mt-6">
                    <div className="flex items-center justify-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <p className="text-sm font-bold">দ্রুততম সময়ে ডেলিভারি</p>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-muted-foreground">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <p className="text-sm font-bold">শতভাগ রঙের নিশ্চয়তা</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
);

const AuthPage = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-primary/5 -mt-24 pt-28 lg:-mt-28 lg:pt-32 pb-12">
            {/* Left — Brand Panel */}
            <div className="lg:px-8 w-full lg:w-1/2 flex justify-center items-center">
                <div className="w-full max-w-2xl mx-4 lg:mx-0">
                    <BrandPanel />
                </div>
            </div>

            {/* Right — Auth Forms */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 pt-2 sm:p-8 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md bg-white p-6 sm:p-10 rounded-[2rem] shadow-xl shadow-primary/5 border border-primary/10"
                >
                    <div className="mb-8 text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
                            স্বাগতম
                        </h1>
                        <p className="text-muted-foreground text-sm font-bold">
                            চালিয়ে যেতে আপনার অ্যাকাউন্টে সাইন ইন করুন
                        </p>
                    </div>

                    {/* Login Form */}
                    <LoginForm />

                    {/* Footer text */}
                    <p className="text-center text-[13px] text-muted-foreground mt-8 font-bold leading-relaxed">
                        চালিয়ে যাওয়ার মাধ্যমে, আপনি আমাদের{' '}
                        <br className="sm:hidden" />
                        <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
                            সেবার শর্তাবলী
                        </Link>{' '}
                        এবং{' '}
                        <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
                            গোপনীয়তা নীতি
                        </Link>
                        তে সম্মত হচ্ছেন।
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export { AuthPage };



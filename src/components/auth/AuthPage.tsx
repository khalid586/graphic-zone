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
    <div className="w-full lg:w-1/2 flex relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/15 to-info/20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-40">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div className="relative z-10 flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 w-full">


            {/* Center illustration */}
            <div className="flex-1 flex flex-col items-center justify-center py-6 sm:py-8 lg:py-12">
                {/* Icon composition */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mb-6 sm:mb-8 lg:mb-12"
                >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center p-3 sm:p-4 shadow-lg">
                        <Image
                            src={LogoImage}
                            alt="Graphic Zone Logo"
                            width={64}
                            height={64}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-warning/30 backdrop-blur-sm border border-warning/40 flex items-center justify-center shadow-md"
                    >
                        <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-warning" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-success/30 backdrop-blur-sm border border-success/40 flex items-center justify-center shadow-md"
                    >
                        <Package className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                    </motion.div>
                </motion.div>

                {/* Marketing text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center max-w-sm px-4"
                >
                    <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                        আপনার প্রিন্ট, আপনার মতো।
                    </h2>
                </motion.div>
            </div>
        </div>
    </div >
);

const AuthPage = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white">
            {/* Left — Brand Panel */}
            <BrandPanel />

            {/* Right — Auth Forms */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md"
                >
                    {/* Heading */}
                    <div className="mb-6">
                        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                            আবার স্বাগতম
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            চালিয়ে যেতে আপনার অ্যাকাউন্টে সাইন ইন করুন।
                        </p>
                    </div>

                    {/* Login Form */}
                    <LoginForm />

                    {/* Footer text */}
                    <p className="text-center text-xs text-muted-foreground mt-8">
                        চালিয়ে যাওয়ার মাধ্যমে, আপনি আমাদের{' '}
                        <button type="button" className="text-primary hover:text-primary/90 font-medium">
                            সেবার শর্তাবলী
                        </button>{' '}
                        এবং{' '}
                        <button type="button" className="text-primary hover:text-primary/90 font-medium">
                            গোপনীয়তা নীতি
                        </button>
                        তে সম্মত হচ্ছেন।
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export { AuthPage };



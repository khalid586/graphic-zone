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
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/15 to-info/20">
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

        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">


            {/* Center illustration */}
            < div className="flex-1 flex flex-col items-center justify-center py-12">
                {/* Icon composition */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mb-12"
                >
                    <div className="w-32 h-32 rounded-3xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center p-4 shadow-lg">
                        <Image
                            src={LogoImage}
                            alt="Graphic Zone Logo"
                            width={64}
                            height={64}
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-warning/30 backdrop-blur-sm border border-warning/40 flex items-center justify-center shadow-md"
                    >
                        <Palette className="w-6 h-6 text-warning" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute -bottom-3 -left-3 w-12 h-12 rounded-2xl bg-success/30 backdrop-blur-sm border border-success/40 flex items-center justify-center shadow-md"
                    >
                        <Package className="w-6 h-6 text-success" />
                    </motion.div>
                </motion.div>

                {/* Marketing text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center max-w-sm"
                >
                    <h2 className="text-2xl xl:text-3xl font-bold text-foreground mb-4 leading-tight">
                        আপনার প্রিন্ট, আপনার মতো।
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed">
                        অর্ডার ট্র্যাক করুন, পেমেন্ট ম্যানেজ করুন এবং আপনার ডিজাইন অ্যাক্সেস করুন — সব একটি ড্যাশবোর্ড থেকে।
                    </p>
                </motion.div>
            </div>

            {/* Bottom trust indicators */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-6 text-sm bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 backdrop-blur-md px-8 py-5 rounded-2xl border border-primary/40 shadow-xl"
            >
                <div className="flex items-center gap-2 text-foreground font-medium">
                    <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-success" />
                    </div>
                    <span>নিরাপদ</span>
                </div>
                <Separator orientation="vertical" className="h-5 bg-primary/50" />
                <div className="flex items-center gap-2 text-foreground font-medium">
                    <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <span>২৪/৭ অ্যাক্সেস</span>
                </div>
                <Separator orientation="vertical" className="h-5 bg-primary/50" />
                <div className="flex items-center gap-2 text-foreground font-medium">
                    <div className="w-8 h-8 rounded-lg bg-warning/20 flex items-center justify-center">
                        <Truck className="w-4 h-4 text-warning" />
                    </div>
                    <span>অর্ডার ট্র্যাকিং</span>
                </div>
            </motion.div>
        </div>
    </div >
);

const AuthPage = () => {
    return (
        <div className="min-h-screen flex bg-white">
            {/* Left — Brand Panel */}
            <BrandPanel />

            {/* Right — Auth Forms */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md"
                >
                    {/* Heading */}
                    <div className="mb-8">
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



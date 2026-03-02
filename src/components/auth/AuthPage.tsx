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
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99,102,241,0.3) 0%, transparent 50%),
                                      radial-gradient(circle at 75% 75%, rgba(99,102,241,0.2) 0%, transparent 50%)`,
                }}
            />
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
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
                    <div className="w-32 h-32 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center p-4">
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
                        className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/20 flex items-center justify-center"
                    >
                        <Palette className="w-6 h-6 text-indigo-300" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute -bottom-3 -left-3 w-12 h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/20 flex items-center justify-center"
                    >
                        <Package className="w-6 h-6 text-emerald-300" />
                    </motion.div>
                </motion.div>

                {/* Marketing text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center max-w-sm"
                >
                    <h2 className="text-2xl xl:text-3xl font-bold text-white mb-4 leading-tight">
                        আপনার প্রিন্ট, আপনার মতো।
                    </h2>
                    <p className="text-slate-400 text-base leading-relaxed">
                        অর্ডার ট্র্যাক করুন, পেমেন্ট ম্যানেজ করুন এবং আপনার ডিজাইন অ্যাক্সেস করুন — সব একটি ড্যাশবোর্ড থেকে।
                    </p>
                </motion.div>
            </div>

            {/* Bottom trust indicators */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-6 text-sm"
            >
                <div className="flex items-center gap-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>নিরাপদ</span>
                </div>
                <Separator orientation="vertical" className="h-4 bg-slate-700" />
                <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span>২৪/৭ অ্যাক্সেস</span>
                </div>
                <Separator orientation="vertical" className="h-4 bg-slate-700" />
                <div className="flex items-center gap-2 text-slate-400">
                    <Truck className="w-4 h-4 text-amber-400" />
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
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                            আবার স্বাগতম
                        </h1>
                        <p className="text-slate-500 text-sm">
                            চালিয়ে যেতে আপনার অ্যাকাউন্টে সাইন ইন করুন।
                        </p>
                    </div>

                    {/* Login Form */}
                    <LoginForm />

                    {/* Footer text */}
                    <p className="text-center text-xs text-slate-400 mt-8">
                        চালিয়ে যাওয়ার মাধ্যমে, আপনি আমাদের{' '}
                        <button type="button" className="text-indigo-600 hover:text-indigo-700 font-medium">
                            সেবার শর্তাবলী
                        </button>{' '}
                        এবং{' '}
                        <button type="button" className="text-indigo-600 hover:text-indigo-700 font-medium">
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



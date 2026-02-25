'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
    Printer,
    Package,
    Palette,
    ShieldCheck,
    Clock,
    Truck,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import GoogleIcon from '@/components/ui/icons/GoogleIcon';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

type AuthTab = 'login' | 'signup';

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
                    <div className="w-32 h-32 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <Printer className="w-16 h-16 text-indigo-400" />
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
    const [activeTab, setActiveTab] = useState<AuthTab>('login');

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
                    {/* Mobile logo */}
                    <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                                <Printer className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-slate-900 tracking-tight">
                                Graphic Zone
                            </span>
                        </Link>
                    </div>

                    {/* Heading */}
                    <div className="mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                            {activeTab === 'login' ? 'আবার স্বাগতম' : 'অ্যাকাউন্ট তৈরি করুন'}
                        </h1>
                        <p className="text-slate-500 text-sm">
                            {activeTab === 'login'
                                ? 'চালিয়ে যেতে আপনার অ্যাকাউন্টে সাইন ইন করুন।'
                                : 'আজই আপনার বিনামূল্যে অ্যাকাউন্ট শুরু করুন।'}
                        </p>
                    </div>

                    {/* Google Login */}
                    <button
                        type="button"
                        className="w-full h-11 flex items-center justify-center gap-3 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors duration-200 mb-6"
                    >
                        <GoogleIcon />
                        গুগল দিয়ে চালিয়ে যান
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-slate-200" />
                        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                            অথবা
                        </span>
                        <div className="flex-1 h-px bg-slate-200" />
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-slate-100 rounded-lg p-1 mb-6">
                        {(['login', 'signup'] as AuthTab[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 ${activeTab === tab
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                {tab === 'login' ? 'সাইন ইন' : 'সাইন আপ'}
                            </button>
                        ))}
                    </div>

                    {/* Form area */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: activeTab === 'login' ? -10 : 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: activeTab === 'login' ? 10 : -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
                        </motion.div>
                    </AnimatePresence>

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

export default AuthPage;

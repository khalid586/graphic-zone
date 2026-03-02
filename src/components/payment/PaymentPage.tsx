'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
    ShieldCheck,
    Lock,
    BadgeCheck,
    CreditCard,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { OrderSummaryCard } from './OrderSummaryCard';
import { PaymentMethods } from './PaymentMethods';
import { PaymentResult } from './PaymentResult';
import { MOCK_PAYMENT_ORDER, PAYMENT_METHODS } from '@/data/payment';
import { formatCurrency } from '@/lib/format';
import type { PaymentMethod, PaymentState } from '@/types/payment';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
    const [paymentState, setPaymentState] = useState<PaymentState>('form');

    const handlePayNow = async () => {
        setPaymentState('processing');
        // Simulate SSLCommerz payment gateway processing
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Use crypto for better randomness in demo (80% success rate)
        // TODO: Replace with actual SSLCommerz IPN callback in production
        const bytes = new Uint8Array(1);
        globalThis.crypto.getRandomValues(bytes);
        const success = bytes[0] >= 51; // 204/255 ≈ 80% success
        setPaymentState(success ? 'success' : 'failed');
    };

    const handleRetry = () => {
        setPaymentState('form');
    };

    // Processing state
    if (paymentState === 'processing') {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl border border-slate-200 p-10 max-w-sm w-full text-center"
                >
                    <div className="relative w-16 h-16 mx-auto mb-6">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-indigo-600"
                        />
                        <CreditCard className="w-6 h-6 text-indigo-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mb-2">পেমেন্ট প্রক্রিয়াকরণ হচ্ছে</h2>
                    <p className="text-sm text-slate-500">
                        অনুগ্রহ করে অপেক্ষা করুন, SSLCommerz নিরাপদে আপনার পেমেন্ট প্রক্রিয়া করছে...
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">
                        <Lock className="w-3.5 h-3.5" />
                        <span>২৫৬-বিট SSL এনক্রিপ্টেড</span>
                    </div>
                </motion.div>
            </div>
        );
    }

    // Success / Failed states
    if (paymentState === 'success' || paymentState === 'failed') {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <PaymentResult
                    state={paymentState}
                    order={MOCK_PAYMENT_ORDER}
                    onRetry={handleRetry}
                />
            </div>
        );
    }

    // Form state (default)
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Main content */}
            <main className="px-6 sm:px-8 py-6 sm:py-10">
                <div className="max-w-4xl mx-auto">
                    {/* Page header */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-8"
                    >
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">পেমেন্ট সম্পন্ন করুন</h1>
                        <p className="text-sm text-slate-500">
                            নিচে পেমেন্ট সম্পন্ন করে আপনার অর্ডার চূড়ান্ত করুন।
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Left column: order + methods */}
                        <div className="lg:col-span-3 space-y-6">
                            <OrderSummaryCard order={MOCK_PAYMENT_ORDER} />
                            <PaymentMethods
                                methods={PAYMENT_METHODS}
                                selected={paymentMethod}
                                onSelect={setPaymentMethod}
                            />
                        </div>

                        {/* Right column: pay now + trust */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Pay Now card */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6"
                            >
                                <div className="mb-5">
                                    <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                                        পে করতে হবে
                                    </p>
                                    <p className="text-3xl font-bold text-slate-900">
                                        {formatCurrency(MOCK_PAYMENT_ORDER.remainingDue)}
                                    </p>
                                </div>

                                <Button
                                    onClick={handlePayNow}
                                    className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/25 transition-all duration-200 gap-2"
                                >
                                    <Lock className="w-4 h-4" /> এখনই পে করুন
                                </Button>

                                <p className="text-center text-[11px] text-slate-400 mt-3">
                                    আপনাকে SSLCommerz নিরাপদ চেকআউটে রিডাইরেক্ট করা হবে
                                </p>

                                <Separator className="my-5" />

                                {/* Security indicators */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                                        <span>নিরাপদ পেমেন্ট প্রক্রিয়াকরণ</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <Lock className="w-4 h-4 text-indigo-500 shrink-0" />
                                        <span>২৫৬-বিট SSL এনক্রিপশন</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <BadgeCheck className="w-4 h-4 text-amber-500 shrink-0" />
                                        <span>PCI DSS সম্মত গেটওয়ে</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Trust badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-5 sm:p-6 text-center"
                            >
                                <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-3">
                                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                                </div>
                                <p className="text-sm font-bold text-white mb-1">
                                    ১০০% নিরাপদ চেকআউট
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    SSLCommerz দ্বারা পরিচালিত — বাংলাদেশের শীর্ষস্থানীয় পেমেন্ট গেটওয়ে যা ৫,০০০+ মার্চেন্টদের বিশ্বাসযোগ্য।
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export { PaymentPage };



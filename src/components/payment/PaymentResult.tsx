'use client';

import { useMemo } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
    CheckCircle2,
    XCircle,
    ArrowRight,
    RotateCcw,
    Home,
    FileText,
    Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency, generateTransactionId } from '@/lib/format';
import type { PaymentOrder } from '@/types/payment';

type PaymentResultProps = {
    state: 'success' | 'failed';
    order: PaymentOrder;
    onRetry?: () => void;
}

const PaymentResult = ({ state, order, onRetry }: PaymentResultProps) => {
    const isSuccess = state === 'success';
    const transactionId = useMemo(generateTransactionId, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden max-w-lg mx-auto"
        >
            {/* Status header */}
            <div
                className={`px-6 py-10 text-center ${isSuccess
                    ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50'
                    : 'bg-gradient-to-br from-red-50 to-red-100/50'
                    }`}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                    className="mb-5"
                >
                    {isSuccess ? (
                        <CheckCircle2 className="w-16 h-16 mx-auto text-emerald-500" strokeWidth={1.5} />
                    ) : (
                        <XCircle className="w-16 h-16 mx-auto text-red-500" strokeWidth={1.5} />
                    )}
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`text-2xl font-bold mb-2 ${isSuccess ? 'text-emerald-900' : 'text-red-900'}`}
                >
                    {isSuccess ? 'পেমেন্ট সফল!' : 'পেমেন্ট ব্যর্থ'}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`text-sm ${isSuccess ? 'text-emerald-700' : 'text-red-700'}`}
                >
                    {isSuccess
                        ? 'আপনার পেমেন্ট সফলভাবে প্রক্রিয়া হয়েছে।'
                        : 'কিছু ভুল হয়েছে। আপনার পেমেন্ট সম্পন্ন করা যায়নি।'}
                </motion.p>
            </div>

            {/* Details */}
            <div className="px-6 py-5 space-y-3 border-b border-slate-100">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">অর্ডার আইডি</span>
                    <span className="font-semibold text-indigo-600">{order.id}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">প্রকল্প</span>
                    <span className="font-medium text-slate-900">{order.projectName}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">পরিমাণ</span>
                    <span className="font-bold text-slate-900">{formatCurrency(order.remainingDue)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">স্ট্যাটাস</span>
                    <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${isSuccess
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-red-50 text-red-700'
                            }`}
                    >
                        <span
                            className={`w-1.5 h-1.5 rounded-full ${isSuccess ? 'bg-emerald-500' : 'bg-red-500'
                                }`}
                        />
                        {isSuccess ? 'পরিশোধিত' : 'ব্যর্থ'}
                    </span>
                </div>
                {isSuccess && (
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">ট্রান্যাকশন আইডি</span>
                        <span className="font-mono text-xs text-slate-600">{transactionId}</span>
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="px-6 py-5 space-y-3">
                {isSuccess ? (
                    <>
                        <Button
                            variant="outline"
                            className="w-full h-11 rounded-xl border-slate-200 text-slate-700 font-semibold text-sm gap-2"
                        >
                            <Download className="w-4 h-4" /> রসিদ ডাউনলোড
                        </Button>
                        <div className="flex gap-3">
                            <Button
                                variant="ghost"
                                asChild
                                className="flex-1 h-10 rounded-xl text-slate-500 text-sm gap-2"
                            >
                                <Link href="/profile">
                                    <FileText className="w-4 h-4" /> আমার অর্ডার
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                asChild
                                className="flex-1 h-10 rounded-xl text-slate-500 text-sm gap-2"
                            >
                                <Link href="/">
                                    <Home className="w-4 h-4" /> হোম
                                </Link>
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <Button
                            onClick={onRetry}
                            className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-sm gap-2 shadow-lg shadow-slate-900/20"
                        >
                            <RotateCcw className="w-4 h-4" /> আবার চেষ্টা করুন
                        </Button>
                        <div className="flex gap-3">
                            <Button
                                variant="ghost"
                                asChild
                                className="flex-1 h-10 rounded-xl text-slate-500 text-sm gap-2"
                            >
                                <Link href="/profile">
                                    <ArrowRight className="w-4 h-4" /> আমার অর্ডার
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                asChild
                                className="flex-1 h-10 rounded-xl text-slate-500 text-sm gap-2"
                            >
                                <Link href="/">
                                    <Home className="w-4 h-4" /> হোম
                                </Link>
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export { PaymentResult };




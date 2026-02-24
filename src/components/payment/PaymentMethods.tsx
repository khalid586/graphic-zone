'use client';

import { motion } from 'motion/react';
import {
    CreditCard,
    Smartphone,
    Landmark,
    Check,
} from 'lucide-react';
import type { PaymentMethod, PaymentMethodOption } from '@/types/payment';

interface PaymentMethodsProps {
    methods: PaymentMethodOption[];
    selected: PaymentMethod;
    onSelect: (method: PaymentMethod) => void;
}

const iconMap: Record<PaymentMethod, React.ElementType> = {
    card: CreditCard,
    mobile: Smartphone,
    internet: Landmark,
};

const PaymentMethods = ({ methods, selected, onSelect }: PaymentMethodsProps) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
    >
        <div className="px-5 sm:px-6 py-5 border-b border-slate-100">
            <h2 className="text-base font-bold text-slate-900">পেমেন্ট পদ্ধতি</h2>
            <p className="text-xs text-slate-500">SSLCommerz এর মাধ্যমে কিভাবে পে করতে চান তা বেছে নিন</p>
        </div>

        <div className="px-5 sm:px-6 py-5 space-y-3">
            {methods.map((method) => {
                const Icon = iconMap[method.id];
                const isActive = selected === method.id;
                return (
                    <button
                        key={method.id}
                        onClick={() => onSelect(method.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${isActive
                            ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                            : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                            }`}
                    >
                        <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className={`text-sm font-semibold ${isActive ? 'text-indigo-900' : 'text-slate-900'}`}>
                                {method.label}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">{method.description}</p>
                            {/* Provider pills */}
                            <div className="flex flex-wrap gap-1.5 mt-2">
                                {method.providers.map((provider) => (
                                    <span
                                        key={provider}
                                        className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold ${isActive
                                            ? 'bg-indigo-100 text-indigo-700'
                                            : 'bg-slate-100 text-slate-500'
                                            }`}
                                    >
                                        {provider}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${isActive ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'
                                }`}
                        >
                            {isActive && <Check className="w-3 h-3 text-white" />}
                        </div>
                    </button>
                );
            })}
        </div>

        {/* SSLCommerz badge */}
        <div className="px-5 sm:px-6 py-4 border-t border-slate-100 bg-slate-50/50">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Secured by <span className="font-semibold text-slate-600">SSLCommerz</span> দ্বারা সুরক্ষিত</span>
            </div>
        </div>
    </motion.div>
);

export default PaymentMethods;

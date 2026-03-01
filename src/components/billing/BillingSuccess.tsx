'use client';

import { motion } from 'motion/react';
import { CheckCircle2, FileText, Printer, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatTime } from '@/lib/format';
import type { Bill } from '@/types/billing';

interface BillingSuccessProps {
    readonly bill: Bill;
    readonly action: 'draft' | 'generated';
    onCreateNew: () => void;
    onClose: () => void;
}

const BillingSuccess = ({ bill, action, onCreateNew, onClose }: BillingSuccessProps) => {
    const title = action === 'draft' ? 'Bill Saved as Draft' : 'Bill Generated Successfully';
    const description =
        action === 'draft'
            ? 'Your bill has been saved and can be edited later.'
            : 'The bill has been generated and is ready to be sent to the customer.';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-lg max-w-md w-full mx-auto overflow-hidden"
        >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 px-6 py-8 text-center border-b border-green-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring' }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </motion.div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{title}</h2>
                <p className="text-sm text-slate-600">{description}</p>
            </div>

            {/* Bill Details */}
            <div className="px-6 py-5 space-y-4 bg-slate-50">
                <div className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Bill ID</span>
                        <span className="font-mono font-medium text-slate-900">
                            {bill.id}
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Customer</span>
                        <span className="font-medium text-slate-900">{bill.customerName}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Items</span>
                        <span className="font-medium text-slate-900">{bill.items.length}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Generated At</span>
                        <span className="font-medium text-slate-900">
                            {formatTime(bill.createdAt)}
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Status</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {bill.status}
                        </span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-white border-t border-slate-200 flex flex-col gap-3">
                <Button
                    variant="destructive"
                    onClick={onClose}
                    className="w-full"
                >
                    Close
                </Button>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                        onClick={onCreateNew}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                    >
                        <FileText className="w-4 h-4" />
                        Create New Bill
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => window.print()}
                        className="flex-1"
                    >
                        <Printer className="w-4 h-4" />
                        Print Bill
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default BillingSuccess;

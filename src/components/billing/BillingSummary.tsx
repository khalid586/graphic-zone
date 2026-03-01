'use client';

import { FileText, User, MapPin, Package, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { formatCurrency } from '@/lib/format';
import type { BillingFormData } from '@/types/billing';

interface BillingSummaryProps {
    readonly formData: BillingFormData;
}

const BillingSummary = ({ formData }: BillingSummaryProps) => {
    const { customerName, customerAddress, items } = formData;
    const validItems = items.filter((item) => item.description.trim() && item.price > 0);
    const itemCount = validItems.length;
    const totalAmount = validItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-slate-200 shadow-sm sticky top-6"
        >
            {/* Header */}
            <div className="border-b border-slate-200 px-5 py-4">
                <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-semibold text-slate-900">Bill Preview</h3>
                </div>
            </div>

            {/* Content */}
            <div className="px-5 py-4 space-y-4">
                {/* Customer Name */}
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <User className="w-3.5 h-3.5" />
                        <span>Customer</span>
                    </div>
                    <p className="text-sm text-slate-900 pl-5">
                        {customerName.trim() || (
                            <span className="text-slate-400 italic">No name entered</span>
                        )}
                    </p>
                </div>

                {/* Customer Address */}
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Address</span>
                    </div>
                    <p className="text-sm text-slate-900 pl-5 whitespace-pre-wrap">
                        {customerAddress.trim() || (
                            <span className="text-slate-400 italic">No address entered</span>
                        )}
                    </p>
                </div>

                {/* Items */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <Package className="w-3.5 h-3.5" />
                        <span>Items ({itemCount})</span>
                    </div>
                    {itemCount > 0 ? (
                        <div className="space-y-2 pl-5">
                            {validItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="text-sm text-slate-700 flex justify-between gap-3"
                                >
                                    <div className="flex gap-2 flex-1 min-w-0">
                                        <span className="text-slate-400 shrink-0">
                                            {index + 1}.
                                        </span>
                                        <span className="break-words">{item.description}</span>
                                    </div>
                                    <span className="font-medium text-slate-900 shrink-0">
                                        {formatCurrency(item.price)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-slate-400 italic pl-5">No items added</p>
                    )}
                </div>

                {/* Total */}
                {itemCount > 0 && (
                    <div className="pt-3 border-t border-slate-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                                <DollarSign className="w-4 h-4 text-indigo-600" />
                                <span>Total</span>
                            </div>
                            <span className="text-lg font-bold text-indigo-600">
                                {formatCurrency(totalAmount)}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default BillingSummary;

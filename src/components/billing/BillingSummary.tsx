'use client';

import { FileText, User, MapPin, Package, DollarSign, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { formatCurrency } from '@/lib/format';
import type { BillingFormData } from '@/types/billing';

type BillingSummaryProps = {
    readonly formData: BillingFormData;
}

const BillingSummary = ({ formData }: BillingSummaryProps) => {
    const { customerName, customerAddress, customerPhone, items, advance } = formData;
    const validItems = items.filter((item) => item.description.trim() && item.quantity > 0 && item.rate > 0);
    const itemCount = validItems.length;
    const totalAmount = validItems.reduce((sum, item) => sum + item.amount, 0);
    const dueAmount = totalAmount - advance;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-muted shadow-sm sticky top-6"
        >
            {/* Header */}
            <div className="border-b border-muted px-5 py-4">
                <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Invoice Preview</h3>
                </div>
            </div>

            {/* Content */}
            <div className="px-5 py-4 space-y-4">
                {/* Customer Name */}
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <User className="w-3.5 h-3.5" />
                        <span>Customer</span>
                    </div>
                    <p className="text-sm text-foreground pl-5">
                        {customerName.trim() || (
                            <span className="text-muted-foreground italic">No name entered</span>
                        )}
                    </p>
                </div>

                {/* Customer Address */}
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Address</span>
                    </div>
                    <p className="text-sm text-foreground pl-5 whitespace-pre-wrap">
                        {customerAddress.trim() || (
                            <span className="text-muted-foreground italic">No address entered</span>
                        )}
                    </p>
                </div>

                {/* Customer Phone */}
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <Phone className="w-3.5 h-3.5" />
                        <span>Phone</span>
                    </div>
                    <p className="text-sm text-foreground pl-5">
                        {customerPhone.trim() || (
                            <span className="text-muted-foreground italic">No phone entered</span>
                        )}
                    </p>
                </div>

                {/* Items */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <Package className="w-3.5 h-3.5" />
                        <span>Items ({itemCount})</span>
                    </div>
                    {itemCount > 0 ? (
                        <div className="space-y-2 pl-5">
                            {validItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="text-sm text-foreground space-y-1"
                                >
                                    <div className="flex gap-2 flex-1 min-w-0">
                                        <span className="text-muted-foreground shrink-0">
                                            {index + 1}.
                                        </span>
                                        <span className="break-words">{item.description}</span>
                                    </div>
                                    <div className="pl-5 text-xs text-muted-foreground flex justify-between">
                                        <span>{item.quantity} × {formatCurrency(item.rate)}</span>
                                        <span className="font-medium text-foreground">
                                            {formatCurrency(item.amount)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground italic pl-5">No items added</p>
                    )}
                </div>

                {/* Total, Advance, and Due */}
                {itemCount > 0 && (
                    <div className="pt-3 border-t border-muted space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                <DollarSign className="w-4 h-4 text-primary" />
                                <span>Total</span>
                            </div>
                            <span className="text-lg font-bold text-foreground">
                                {formatCurrency(totalAmount)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Advance</span>
                            <span className="font-medium text-success">
                                {formatCurrency(advance)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-muted">
                            <span className="text-sm font-semibold text-foreground">Due</span>
                            <span className="text-lg font-bold text-primary">
                                {formatCurrency(dueAmount)}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export { BillingSummary };



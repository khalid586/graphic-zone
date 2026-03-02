'use client';

import { motion } from 'motion/react';
import { CheckCircle2, FileText, Printer, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatTime } from '@/lib/format';
import type { Bill } from '@/types/billing';

type BillingSuccessProps = {
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
            className="bg-white rounded-2xl border border-muted shadow-lg max-w-md w-full mx-auto overflow-hidden"
        >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-success/10 to-success/20 px-6 py-8 text-center border-b border-success/20">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring' }}
                    className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                    <CheckCircle2 className="w-8 h-8 text-success" />
                </motion.div>
                <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            {/* Bill Details */}
            <div className="px-6 py-5 space-y-4 bg-background/50">
                <div className="bg-white rounded-lg border border-muted p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Bill ID</span>
                        <span className="font-mono font-medium text-foreground">
                            {bill.id}
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Customer</span>
                        <span className="font-medium text-foreground">{bill.customerName}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Items</span>
                        <span className="font-medium text-foreground">{bill.items.length}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Generated At</span>
                        <span className="font-medium text-foreground">
                            {formatTime(bill.createdAt)}
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Status</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                            {bill.status}
                        </span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-white border-t border-muted flex flex-col gap-3">
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
                        className="flex-1 bg-primary hover:bg-primary/90"
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

export { BillingSuccess };



'use client';

import { motion } from 'motion/react';
import { CheckCircle2, FileText, Printer, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatTime, formatCurrency } from '@/lib/format';
import type { Bill } from '@/types/billing';

type BillingSuccessProps = {
    readonly bill: Bill;
    onCreateNew: () => void;
    onClose: () => void;
}

const BillingSuccess = ({ bill, onCreateNew, onClose }: BillingSuccessProps) => {
    const title = 'Bill Generated Successfully';
    const description = 'The bill has been generated and is ready to be sent to the customer.';

    // Create WhatsApp message
    const createWhatsAppMessage = () => {
        const itemsList = bill.items.map((item, idx) => 
            `${idx + 1}. ${item.description}\n   ${item.quantity} × ${formatCurrency(item.rate)} = ${formatCurrency(item.amount)}`
        ).join('\n\n');

        return `*বিল তৈরি হয়েছে* ✅\n\n` +
            `*বিল নং:* ${bill.id}\n` +
            `*গ্রাহক:* ${bill.customerName}\n\n` +
            `*পণ্য/সেবা:*\n${itemsList}\n\n` +
            `*মোট:* ${formatCurrency(bill.total)}\n` +
            `*এডভান্স:* ${formatCurrency(bill.advance)}\n` +
            `*বাকি:* ${formatCurrency(bill.due)}\n\n` +
            `ধন্যবাদ!`;
    };

    const whatsappUrl = () => {
        const phone = bill.customerPhone.replace(/[^0-9+]/g, '');
        const message = encodeURIComponent(createWhatsAppMessage());
        return `https://wa.me/${phone}?text=${message}`;
    };

    return (
        <>
            {/* Print Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @media print {
                        @page {
                            size: 5.5in 8.5in;
                            margin: 0.5in;
                        }
                        body * {
                            visibility: hidden;
                        }
                        .print-content, .print-content * {
                            visibility: visible;
                        }
                        .print-content {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                        }
                        .no-print {
                            display: none !important;
                        }
                    }
                `
            }} />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border border-muted shadow-lg w-full mx-auto overflow-hidden max-h-[90vh] flex flex-col print-content"
                style={{ maxWidth: '440px' }}
            >
                {/* Header */}
                <div className="relative bg-gradient-to-br from-success/10 to-success/20 px-6 py-8 text-center border-b border-success/20 shrink-0 no-print">
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

                {/* Bill Details - Scrollable */}
                <div className="px-6 py-5 space-y-4 bg-background/50 overflow-y-auto flex-1">
                    {/* Basic Info */}
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

                    {/* Items Breakdown */}
                    <div className="bg-white rounded-lg border border-muted p-4">
                        <h3 className="text-sm font-semibold text-foreground mb-3">Items</h3>
                        <div className="space-y-3">
                            {bill.items.map((item, index) => (
                                <div key={item.id} className="text-sm">
                                    <div className="flex items-start justify-between mb-1">
                                        <span className="text-foreground font-medium">
                                            {index + 1}. {item.description}
                                        </span>
                                        <span className="font-semibold text-foreground ml-2 shrink-0">
                                            {formatCurrency(item.amount)}
                                        </span>
                                    </div>
                                    <div className="text-xs text-muted-foreground pl-4">
                                        {item.quantity} × {formatCurrency(item.rate)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="mt-4 pt-4 border-t border-muted space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-semibold text-foreground">Total</span>
                                <span className="font-bold text-foreground">
                                    {formatCurrency(bill.total)}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Advance</span>
                                <span className="font-medium text-success">
                                    {formatCurrency(bill.advance)}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm pt-2 border-t border-muted">
                                <span className="font-semibold text-foreground">Due</span>
                                <span className="font-bold text-primary">
                                    {formatCurrency(bill.due)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions - Fixed at Bottom */}
                <div className="px-6 py-4 bg-white border-t border-muted flex flex-col gap-3 shrink-0 no-print">
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
                    <Button
                        asChild
                        className="w-full bg-success hover:bg-success/90 text-white"
                    >
                        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            Send to WhatsApp
                        </a>
                    </Button>
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="w-full"
                    >
                        Close
                    </Button>
                </div>
            </motion.div>
        </>
    );
};

export { BillingSuccess };



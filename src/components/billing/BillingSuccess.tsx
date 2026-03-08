'use client';

import { motion } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLogoLoader } from '@/hooks/useLogoLoader';
import { generatePrintHTML } from './PrintTemplate';
import { BillBasicInfo } from './BillBasicInfo';
import { BillItems } from './BillItems';
import { BillActions } from './BillActions';
import type { Bill } from '@/types/billing';

type BillingSuccessProps = {
    readonly bill: Bill;
    onCreateNew: () => void;
    onClose: () => void;
}

const BillingSuccess = ({ bill, onCreateNew, onClose }: BillingSuccessProps) => {
    const logoDataUrl = useLogoLoader();

    const title = 'Bill Generated Successfully';
    const description = 'The bill has been generated and is ready to be sent to the customer.';

    const handlePrint = () => {
        if (typeof window === 'undefined') return;

        const invoiceHTML = generatePrintHTML({ bill, logoDataUrl });

        // mobile detection - many mobile browsers either block popups or
        // ignore window.print calls, so we fall back to a safer navigation.
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

        // helper to navigate current tab to invoice; user can then use the
        // browser's share/print button and come back via history.
        const navigateToInvoice = () => {
            const uri = 'data:text/html;charset=utf-8,' + encodeURIComponent(invoiceHTML);
            window.location.href = uri;
        };

        try {
            if (isMobile) {
                // opening a blank tab is often blocked, so just navigate current
                // page; losing state is acceptable on mobile since printing is
                // the last action.
                navigateToInvoice();
                return;
            }

            const printWindow = window.open('', '_blank', 'width=800,height=600');
            if (!printWindow) {
                // popups disabled - fallback to same-tab navigation
                navigateToInvoice();
                return;
            }

            printWindow.document.write(invoiceHTML);
            printWindow.document.close();

            setTimeout(() => {
                try {
                    printWindow.focus();
                    printWindow.print();
                    printWindow.close();
                } catch (error) {
                    alert('Print failed. Please try again.');
                }
            }, 500);
        } catch (error) {
            // ultimately fall back to same-tab if anything goes wrong
            navigateToInvoice();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl border border-muted shadow-lg w-full mx-auto overflow-hidden max-h-[90vh] flex flex-col"
            style={{ maxWidth: '440px' }}
        >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-success/10 to-success/20 px-6 py-8 text-center border-b border-success/20 shrink-0">
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
            <div className="px-6 py-5 space-y-4 bg-background/50 overflow-y-auto flex-1">
                <BillBasicInfo bill={bill} />
                <BillItems bill={bill} />
            </div>

            <BillActions
                bill={bill}
                onCreateNew={onCreateNew}
                onPrint={handlePrint}
                onClose={onClose}
            />
        </motion.div>
    );
};

export { BillingSuccess };



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
        try {
            const printWindow = window.open('', '_blank', 'width=800,height=600');
            if (!printWindow) {
                alert('Please allow popups for this site to print invoices.');
                return;
            }

            const invoiceHTML = generatePrintHTML({ bill, logoDataUrl });

            printWindow.document.write(invoiceHTML);
            printWindow.document.close();

            // Wait for images to load before printing
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
            alert('Failed to open print window. Please check your popup blocker settings.');
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



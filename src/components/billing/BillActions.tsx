import { FileText, Printer, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createWhatsAppUrl } from '@/lib/whatsapp';
import type { Bill } from '@/types/billing';

interface BillActionsProps {
    bill: Bill;
    onCreateNew: () => void;
    onPrint: () => void;
    onClose: () => void;
}

export const BillActions = ({ bill, onCreateNew, onPrint, onClose }: BillActionsProps) => {
    return (
        <div className="px-6 py-4 bg-white border-t border-muted flex flex-col gap-3 shrink-0">
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
                    onClick={onPrint}
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
                <a href={createWhatsAppUrl(bill)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
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
    );
};
import { formatTime, formatCurrency } from '@/lib/format';
import type { Bill } from '@/types/billing';

interface BillBasicInfoProps {
    bill: Bill;
}

export const BillBasicInfo = ({ bill }: BillBasicInfoProps) => {
    return (
        <div className="space-y-3">
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
    );
};
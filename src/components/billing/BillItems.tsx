import { formatCurrency } from '@/lib/format';
import type { Bill } from '@/types/billing';

interface BillItemsProps {
    bill: Bill;
}

export const BillItems = ({ bill }: BillItemsProps) => {
    return (
        <div>
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
    );
};
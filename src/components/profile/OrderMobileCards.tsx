import { memo } from 'react';
import { Eye, Download, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency, formatDateShort as formatDate } from '@/lib/format';
import type { Order, OrderStatus, PaymentStatus } from '@/types/profile';
import type { StatusStyle, PaymentStyle } from '@/config';

interface OrderMobileCardsProps {
    readonly orders: readonly Order[];
    readonly statusConfig: Readonly<Record<OrderStatus, StatusStyle>>;
    readonly paymentConfig: Readonly<Record<PaymentStatus, PaymentStyle>>;
    readonly statusLabels: Readonly<Record<OrderStatus, string>>;
    readonly paymentLabels: Readonly<Record<PaymentStatus, string>>;
}

const OrderMobileCards = memo(({
    orders,
    statusConfig,
    paymentConfig,
    statusLabels,
    paymentLabels,
}: OrderMobileCardsProps) => (
    <div className="md:hidden divide-y divide-slate-100">
        {orders.map((order) => {
            const sc = statusConfig[order.status];
            const pc = paymentConfig[order.paymentStatus];
            return (
                <div key={order.id} className="p-4 sm:p-5">
                    <div className="flex items-start justify-between mb-3">
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-indigo-600">{order.id}</p>
                            <p className="text-sm font-medium text-slate-900 mt-0.5 truncate">{order.projectName}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 ${sc.bg} ${sc.text}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                            {statusLabels[order.status]}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                        <div>
                            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">তারিখ</p>
                            <p className="text-slate-700">{formatDate(order.orderDate)}</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">পরিমাণ</p>
                            <p className="font-semibold text-slate-900">{formatCurrency(order.totalAmount)}</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">পেমেন্ট</p>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold mt-0.5 ${pc.bg} ${pc.text}`}>
                                {paymentLabels[order.paymentStatus]}
                            </span>
                        </div>
                        <div>
                            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">আইটেম</p>
                            <p className="text-slate-700">{order.items.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                        <Button variant="outline" size="sm" className="flex-1 rounded-lg border-slate-200 text-slate-700 gap-1.5 text-xs h-8" aria-label={`${order.id} দেখুন`}>
                            <Eye className="w-3.5 h-3.5" /> দেখুন
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-lg border-slate-200 text-slate-700 gap-1.5 text-xs h-8" aria-label={`${order.id} ইনভয়েস`}>
                            <Download className="w-3.5 h-3.5" /> ইনভয়েস
                        </Button>
                        {order.status === 'Completed' && (
                            <Button variant="outline" size="sm" className="rounded-lg border-slate-200 text-slate-700 gap-1.5 text-xs h-8" aria-label={`${order.id} পুনরায় অর্ডার`}>
                                <RotateCcw className="w-3.5 h-3.5" /> পুনরায় অর্ডার
                            </Button>
                        )}
                    </div>
                </div>
            );
        })}
    </div>
));

OrderMobileCards.displayName = 'OrderMobileCards';

export default OrderMobileCards;

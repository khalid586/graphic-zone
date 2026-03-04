import { memo } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { formatCurrency, formatDateShort as formatDate } from '@/lib/format';
import type { Order, OrderStatus, PaymentStatus } from '@/types/profile';
import type { StatusStyle, PaymentStyle, OrderSortField } from '@/config';

type OrderTableProps = {
    readonly orders: readonly Order[];
    readonly statusConfig: Readonly<Record<OrderStatus, StatusStyle>>;
    readonly paymentConfig: Readonly<Record<PaymentStatus, PaymentStyle>>;
    readonly statusLabels: Readonly<Record<OrderStatus, string>>;
    readonly paymentLabels: Readonly<Record<PaymentStatus, string>>;
    readonly onToggleSort: (field: OrderSortField) => void;
}

const OrderTable = memo(({
    orders,
    statusConfig,
    paymentConfig,
    statusLabels,
    paymentLabels,
    onToggleSort,
}: OrderTableProps) => (
    <>
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
            <table className="w-full" role="table">
                <thead>
                    <tr className="bg-background text-left text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                        <th scope="col" className="px-6 py-3">Order ID</th>
                        <th scope="col" className="px-6 py-3">Client Name</th>
                        <th scope="col" className="px-6 py-3">Items</th>
                        <th scope="col" className="px-6 py-3">
                            <button
                                onClick={() => onToggleSort('orderDate')}
                                className="flex items-center gap-1 hover:text-foreground transition-colors"
                                aria-label="Sort by date"
                            >
                                DATE <ArrowUpDown className="w-3 h-3" />
                            </button>
                        </th>
                        <th scope="col" className="px-6 py-3">Order Status</th>
                        <th scope="col" className="px-6 py-3">Payment Status</th>
                        <th scope="col" className="px-6 py-3">
                            <button
                                onClick={() => onToggleSort('totalAmount')}
                                className="flex items-center gap-1 hover:text-foreground transition-colors"
                                aria-label="Sort by amount"
                            >
                                AMOUNT <ArrowUpDown className="w-3 h-3" />
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-muted">
                    {orders.map((order) => {
                        const sc = statusConfig[order.status];
                        const pc = paymentConfig[order.paymentStatus];
                        return (
                            <tr key={order.id} className="hover:bg-background transition-colors">
                                <td className="px-6 py-4">
                                    <span className="text-sm font-semibold text-primary">{order.id}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-foreground">{order.clientName}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-muted-foreground">{order.items.toLocaleString()}</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-muted-foreground">{formatDate(order.orderDate)}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${sc.bg} ${sc.text}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                                        {statusLabels[order.status]}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${pc.bg} ${pc.text}`}>
                                        {paymentLabels[order.paymentStatus]}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm font-semibold text-foreground">{formatCurrency(order.totalAmount)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden divide-y divide-muted">
            {orders.map((order) => {
                const sc = statusConfig[order.status];
                const pc = paymentConfig[order.paymentStatus];
                return (
                    <div key={order.id} className="p-4 sm:p-5">
                        <div className="flex items-start justify-between mb-3">
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-primary">{order.id}</p>
                                <p className="text-sm font-medium text-foreground mt-0.5 truncate">{order.clientName}</p>
                            </div>
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 ${sc.bg} ${sc.text}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                                {statusLabels[order.status]}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Date</p>
                                <p className="text-muted-foreground">{formatDate(order.orderDate)}</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Amount</p>
                                <p className="font-semibold text-foreground">{formatCurrency(order.totalAmount)}</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Payment</p>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold mt-0.5 ${pc.bg} ${pc.text}`}>
                                    {paymentLabels[order.paymentStatus]}
                                </span>
                            </div>
                            <div>
                                <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Items</p>
                                <p className="text-muted-foreground">{order.items.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </>
));

OrderTable.displayName = 'OrderTable';

export { OrderTable };

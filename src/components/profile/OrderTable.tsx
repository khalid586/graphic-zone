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
                    <tr className="bg-slate-50 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        <th scope="col" className="px-6 py-3">অর্ডার আইডি</th>
                        <th scope="col" className="px-6 py-3">প্রকল্পের নাম</th>
                        <th scope="col" className="px-6 py-3">আইটেম সংখ্যা</th>
                        <th scope="col" className="px-6 py-3">
                            <button
                                onClick={() => onToggleSort('orderDate')}
                                className="flex items-center gap-1 hover:text-slate-600 transition-colors"
                                aria-label="তারিখ অনুযায়ী সাজান"
                            >
                                তারিখ <ArrowUpDown className="w-3 h-3" />
                            </button>
                        </th>
                        <th scope="col" className="px-6 py-3">স্ট্যাটাস</th>
                        <th scope="col" className="px-6 py-3">পেমেন্ট</th>
                        <th scope="col" className="px-6 py-3">
                            <button
                                onClick={() => onToggleSort('totalAmount')}
                                className="flex items-center gap-1 hover:text-slate-600 transition-colors"
                                aria-label="পরিমাণ অনুযায়ী সাজান"
                            >
                                পরিমাণ <ArrowUpDown className="w-3 h-3" />
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {orders.map((order) => {
                        const sc = statusConfig[order.status];
                        const pc = paymentConfig[order.paymentStatus];
                        return (
                            <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="text-sm font-semibold text-indigo-600">{order.id}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-slate-900">{order.projectName}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-600">{order.items.toLocaleString()}টি</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">{formatDate(order.orderDate)}</td>
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
                                <td className="px-6 py-4 text-sm font-semibold text-slate-900">{formatCurrency(order.totalAmount)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

        {/* Mobile Cards View */}
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
                        <div className="grid grid-cols-2 gap-3 text-sm">
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
                    </div>
                );
            })}
        </div>
    </>
));

OrderTable.displayName = 'OrderTable';

export { OrderTable };

import { memo } from 'react';
import { Eye, Download, RotateCcw, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency, formatDateShort as formatDate } from '@/lib/format';
import type { Order, OrderStatus, PaymentStatus } from '@/types/profile';
import type { StatusStyle, PaymentStyle, OrderSortField } from '@/config';

interface OrderDesktopTableProps {
    readonly orders: readonly Order[];
    readonly statusConfig: Readonly<Record<OrderStatus, StatusStyle>>;
    readonly paymentConfig: Readonly<Record<PaymentStatus, PaymentStyle>>;
    readonly statusLabels: Readonly<Record<OrderStatus, string>>;
    readonly paymentLabels: Readonly<Record<PaymentStatus, string>>;
    readonly onToggleSort: (field: OrderSortField) => void;
}

const OrderDesktopTable = memo(({
    orders,
    statusConfig,
    paymentConfig,
    statusLabels,
    paymentLabels,
    onToggleSort,
}: OrderDesktopTableProps) => (
    <div className="hidden md:block overflow-x-auto">
        <table className="w-full" role="table">
            <thead>
                <tr className="bg-slate-50 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <th scope="col" className="px-6 py-3">অর্ডার আইডি</th>
                    <th scope="col" className="px-6 py-3">প্রকল্পের নাম</th>
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
                    <th scope="col" className="px-6 py-3 text-right">কার্যকলাপ</th>
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
                                <span className="block text-[11px] text-slate-400 mt-0.5">{order.items.toLocaleString()}টি আইটেম</span>
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
                            <td className="px-6 py-4">
                                <div className="flex items-center justify-end gap-1">
                                    <Button variant="ghost" size="icon-xs" className="text-slate-400 hover:text-indigo-600" aria-label={`${order.id} বিস্তারিত দেখুন`}>
                                        <Eye className="w-3.5 h-3.5" />
                                    </Button>
                                    <Button variant="ghost" size="icon-xs" className="text-slate-400 hover:text-indigo-600" aria-label={`${order.id} ইনভয়েস ডাউনলোড`}>
                                        <Download className="w-3.5 h-3.5" />
                                    </Button>
                                    {order.status === 'Completed' && (
                                        <Button variant="ghost" size="icon-xs" className="text-slate-400 hover:text-indigo-600" aria-label={`${order.id} পুনরায় অর্ডার`}>
                                            <RotateCcw className="w-3.5 h-3.5" />
                                        </Button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
));

OrderDesktopTable.displayName = 'OrderDesktopTable';

export default OrderDesktopTable;

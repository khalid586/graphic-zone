'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
    Search,
    Download,
    RotateCcw,
    Eye,
    ChevronDown,
    ArrowUpDown,
    FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Order, OrderStatus, PaymentStatus } from '@/types/profile';

interface OrderHistoryTableProps {
    orders: Order[];
}

const statusConfig: Record<OrderStatus, { bg: string; text: string; dot: string }> = {
    Completed: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
    Pending: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
    Processing: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
    Cancelled: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
};

const paymentConfig: Record<PaymentStatus, { bg: string; text: string }> = {
    Paid: { bg: 'bg-emerald-50', text: 'text-emerald-700' },
    Unpaid: { bg: 'bg-red-50', text: 'text-red-700' },
    Partial: { bg: 'bg-amber-50', text: 'text-amber-700' },
    Refunded: { bg: 'bg-slate-100', text: 'text-slate-600' },
};

const formatCurrency = (n: number) => '৳' + n.toLocaleString('en-BD');

const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('bn-BD', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

type FilterType = 'All' | OrderStatus;
type SortField = 'orderDate' | 'totalAmount';

const OrderHistoryTable = ({ orders }: OrderHistoryTableProps) => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<FilterType>('All');
    const [sortField, setSortField] = useState<SortField>('orderDate');
    const [sortAsc, setSortAsc] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    const filtered = orders
        .filter((o) => {
            const matchesSearch =
                o.id.toLowerCase().includes(search.toLowerCase()) ||
                o.projectName.toLowerCase().includes(search.toLowerCase());
            const matchesFilter = filter === 'All' || o.status === filter;
            return matchesSearch && matchesFilter;
        })
        .sort((a, b) => {
            const mul = sortAsc ? 1 : -1;
            if (sortField === 'orderDate') {
                return mul * (new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime());
            }
            return mul * (a.totalAmount - b.totalAmount);
        });

    const toggleSort = (field: SortField) => {
        if (sortField === field) {
            setSortAsc(!sortAsc);
        } else {
            setSortField(field);
            setSortAsc(false);
        }
    };

    const filters: FilterType[] = ['All', 'Completed', 'Pending', 'Processing', 'Cancelled'];

    const filterLabels: Record<FilterType, string> = {
        All: 'সব',
        Completed: 'সম্পন্ন',
        Pending: 'বাকি',
        Processing: 'প্রক্রিয়াকরণ',
        Cancelled: 'বাতিল',
    };

    const statusLabels: Record<OrderStatus, string> = {
        Completed: 'সম্পন্ন',
        Pending: 'বাকি',
        Processing: 'প্রক্রিয়াকরণ',
        Cancelled: 'বাতিল',
    };

    const paymentLabels: Record<PaymentStatus, string> = {
        Paid: 'পরিশোধিত',
        Unpaid: 'অপরিশোধিত',
        Partial: 'আংশিক',
        Refunded: 'রিফান্ডেড',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
        >
            {/* Header */}
            <div className="px-5 sm:px-6 py-5 border-b border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">অর্ডারের ইতিহাস</h2>
                        <p className="text-sm text-slate-500">{filtered.length}টি অর্ডার পাওয়া গেছে</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1 sm:flex-initial">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input
                                placeholder="অর্ডার খুঁজুন..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-9 h-9 w-full sm:w-56 rounded-lg bg-slate-50 border-slate-200 text-sm placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
                            />
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowFilters(!showFilters)}
                            className="rounded-lg border-slate-200 text-slate-600 gap-1.5"
                        >
                            ফিল্টার <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                        </Button>
                    </div>
                </div>

                {/* Filter pills */}
                {showFilters && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-wrap gap-2 mt-4"
                    >
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${filter === f
                                    ? 'bg-slate-900 text-white'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {filterLabels[f]}
                            </button>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-slate-50 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            <th className="px-6 py-3">অর্ডার আইডি</th>
                            <th className="px-6 py-3">প্রকল্পের নাম</th>
                            <th className="px-6 py-3">
                                <button onClick={() => toggleSort('orderDate')} className="flex items-center gap-1 hover:text-slate-600 transition-colors">
                                    তারিখ <ArrowUpDown className="w-3 h-3" />
                                </button>
                            </th>
                            <th className="px-6 py-3">স্ট্যাটাস</th>
                            <th className="px-6 py-3">পেমেন্ট</th>
                            <th className="px-6 py-3">
                                <button onClick={() => toggleSort('totalAmount')} className="flex items-center gap-1 hover:text-slate-600 transition-colors">
                                    পরিমাণ <ArrowUpDown className="w-3 h-3" />
                                </button>
                            </th>
                            <th className="px-6 py-3 text-right">কার্যকলাপ</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((order) => {
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
                                            <Button variant="ghost" size="icon-xs" className="text-slate-400 hover:text-indigo-600" title="বিস্তারিত দেখুন">
                                                <Eye className="w-3.5 h-3.5" />
                                            </Button>
                                            <Button variant="ghost" size="icon-xs" className="text-slate-400 hover:text-indigo-600" title="ইনভয়েস ডাউনলোড">
                                                <Download className="w-3.5 h-3.5" />
                                            </Button>
                                            {order.status === 'Completed' && (
                                                <Button variant="ghost" size="icon-xs" className="text-slate-400 hover:text-indigo-600" title="পুনরায় অর্ডার">
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

            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-slate-100">
                {filtered.map((order) => {
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
                                <Button variant="outline" size="sm" className="flex-1 rounded-lg border-slate-200 text-slate-700 gap-1.5 text-xs h-8">
                                    <Eye className="w-3.5 h-3.5" /> দেখুন
                                </Button>
                                <Button variant="outline" size="sm" className="rounded-lg border-slate-200 text-slate-700 gap-1.5 text-xs h-8">
                                    <Download className="w-3.5 h-3.5" /> ইনভয়েস
                                </Button>
                                {order.status === 'Completed' && (
                                    <Button variant="outline" size="sm" className="rounded-lg border-slate-200 text-slate-700 gap-1.5 text-xs h-8">
                                        <RotateCcw className="w-3.5 h-3.5" /> পুনরায় অর্ডার
                                    </Button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 px-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                        <FileText className="w-8 h-8 text-slate-400" />
                    </div>
                    <p className="text-sm font-medium text-slate-600">কোনো অর্ডার পাওয়া যায়নি</p>
                    <p className="text-xs text-slate-400 mt-1">আপনার সার্চ বা ফিল্টার পরিবর্তন করে দেখুন।</p>
                </div>
            )}
        </motion.div>
    );
};

export default OrderHistoryTable;

'use client';

import { memo } from 'react';
import { motion } from 'motion/react';
import {
    FileText,
    Calendar,
    Hash,
    Package,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { formatCurrency, formatDateLong as formatDate } from '@/lib/format';
import type { PaymentOrder } from '@/types/payment';

type OrderSummaryCardProps = {
    order: PaymentOrder;
}

const OrderSummaryCard = ({ order }: OrderSummaryCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-2xl border border-muted overflow-hidden"
    >
        <div className="px-5 sm:px-6 py-5 border-b border-muted">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h2 className="text-base font-bold text-foreground">অর্ডার সারসংক্ষেপ</h2>
                    <p className="text-xs text-muted-foreground">নিচে আপনার অর্ডারের বিবরণ দেখুন</p>
                </div>
            </div>
        </div>

        <div className="px-5 sm:px-6 py-5 space-y-4">
            {/* Order ID & Project */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-2.5">
                    <Hash className="w-4 h-4 text-muted-foreground" />
                    <div>
                        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">অর্ডার আইডি</p>
                        <p className="text-sm font-bold text-primary">{order.id}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                    <Package className="w-4 h-4 text-muted-foreground" />
                    <div>
                        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">ক্লায়েন্ট</p>
                        <p className="text-sm font-semibold text-foreground">{order.clientName}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">অর্ডারের তারিখ</p>
                        <p className="text-sm text-muted-foreground">{formatDate(order.orderDate)}</p>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Amount breakdown */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">মোট পরিমাণ</span>
                    <span className="text-sm font-semibold text-foreground">{formatCurrency(order.totalAmount)}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">পরিশোধিত পরিমাণ</span>
                    <span className="text-sm font-semibold text-success">{formatCurrency(order.paidAmount)}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground">বাকি পরিমাণ</span>
                    <span className="text-lg font-bold text-foreground">{formatCurrency(order.remainingDue)}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

const MemoizedOrderSummaryCard = memo(OrderSummaryCard);
export { MemoizedOrderSummaryCard as OrderSummaryCard };




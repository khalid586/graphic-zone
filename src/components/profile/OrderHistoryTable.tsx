'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';
import type { Order } from '@/types/profile';
import {
    ORDER_STATUS_STYLES,
    ORDER_STATUS_LABELS,
    PAYMENT_STATUS_STYLES,
    PAYMENT_STATUS_LABELS,
} from '@/config';
import type { OrderFilterType, OrderSortField } from '@/config';
import { OrderSearchBar } from './OrderSearchBar';
import { OrderTable } from './OrderTable';
import { OrderEmptyState } from './OrderEmptyState';

type OrderHistoryTableProps = {
    readonly orders: readonly Order[];
}

const OrderHistoryTable = ({ orders }: OrderHistoryTableProps) => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<OrderFilterType>('All');
    const [sortField, setSortField] = useState<OrderSortField>('orderDate');
    const [sortAsc, setSortAsc] = useState(false);

    const filtered = useMemo(() => {
        const lowerSearch = search.toLowerCase();
        return orders
            .filter((o) => {
                const matchesSearch =
                    o.id.toLowerCase().includes(lowerSearch) ||
                    o.projectName.toLowerCase().includes(lowerSearch);
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
    }, [orders, search, filter, sortField, sortAsc]);

    const toggleSort = useCallback((field: OrderSortField) => {
        setSortField((prev) => {
            if (prev === field) {
                setSortAsc((a) => !a);
                return prev;
            }
            setSortAsc(false);
            return field;
        });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
        >
            <OrderSearchBar
                search={search}
                onSearchChange={setSearch}
                filter={filter}
                onFilterChange={setFilter}
                resultCount={filtered.length}
            />

            <OrderTable
                orders={filtered}
                statusConfig={ORDER_STATUS_STYLES}
                paymentConfig={PAYMENT_STATUS_STYLES}
                statusLabels={ORDER_STATUS_LABELS}
                paymentLabels={PAYMENT_STATUS_LABELS}
                onToggleSort={toggleSort}
            />

            {filtered.length === 0 && <OrderEmptyState />}
        </motion.div>
    );
};

export { OrderHistoryTable };




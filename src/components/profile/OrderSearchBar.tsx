'use client';

import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ORDER_FILTERS, ORDER_FILTER_LABELS } from '@/config';
import type { OrderFilterType } from '@/config';

interface OrderSearchBarProps {
    readonly search: string;
    readonly onSearchChange: (value: string) => void;
    readonly filter: OrderFilterType;
    readonly onFilterChange: (filter: OrderFilterType) => void;
    readonly resultCount: number;
}

const OrderSearchBar = ({
    search,
    onSearchChange,
    filter,
    onFilterChange,
    resultCount,
}: OrderSearchBarProps) => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="px-5 sm:px-6 py-5 border-b border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">অর্ডারের ইতিহাস</h2>
                    <p className="text-sm text-slate-500">{resultCount}টি অর্ডার পাওয়া গেছে</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative flex-1 sm:flex-initial">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                            placeholder="অর্ডার খুঁজুন..."
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                            aria-label="অর্ডার সার্চ করুন"
                            className="pl-9 h-9 w-full sm:w-56 rounded-lg bg-slate-50 border-slate-200 text-sm placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
                        />
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowFilters(!showFilters)}
                        aria-expanded={showFilters}
                        aria-controls="order-filter-pills"
                        className="rounded-lg border-slate-200 text-slate-600 gap-1.5"
                    >
                        ফিল্টার <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                    </Button>
                </div>
            </div>

            {/* Filter pills */}
            {showFilters && (
                <motion.div
                    id="order-filter-pills"
                    role="group"
                    aria-label="অর্ডার ফিল্টার"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-wrap gap-2 mt-4"
                >
                    {ORDER_FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => onFilterChange(f)}
                            aria-pressed={filter === f}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${filter === f
                                ? 'bg-slate-900 text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            {ORDER_FILTER_LABELS[f]}
                        </button>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default OrderSearchBar;

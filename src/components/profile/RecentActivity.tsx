'use client';

import { motion } from 'motion/react';
import {
    Package,
    CreditCard,
    Download,
    RefreshCw,
} from 'lucide-react';
import type { ActivityItem } from '@/types/profile';

interface RecentActivityProps {
    activities: ActivityItem[];
}

const iconMap = {
    order: Package,
    payment: CreditCard,
    download: Download,
    update: RefreshCw,
};

const iconColorMap = {
    order: 'bg-indigo-100 text-indigo-600',
    payment: 'bg-emerald-100 text-emerald-600',
    download: 'bg-violet-100 text-violet-600',
    update: 'bg-amber-100 text-amber-600',
};

const RecentActivity = ({ activities }: RecentActivityProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
        >
            <div className="px-5 sm:px-6 py-5 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
                <p className="text-sm text-slate-500">Latest updates on your account</p>
            </div>

            <div className="divide-y divide-slate-100">
                {activities.map((activity, idx) => {
                    const Icon = iconMap[activity.icon];
                    const colorClass = iconColorMap[activity.icon];
                    return (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.05 * idx }}
                            className="flex items-start gap-4 px-5 sm:px-6 py-4 hover:bg-slate-50/50 transition-colors"
                        >
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${colorClass}`}>
                                <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-slate-900">{activity.action}</p>
                                <p className="text-sm text-slate-500 mt-0.5 line-clamp-2">{activity.description}</p>
                            </div>
                            <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap shrink-0 mt-0.5">
                                {activity.timestamp}
                            </span>
                        </motion.div>
                    );
                })}
            </div>

            {activities.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 px-6">
                    <p className="text-sm text-slate-500">No recent activity</p>
                </div>
            )}
        </motion.div>
    );
};

export default RecentActivity;

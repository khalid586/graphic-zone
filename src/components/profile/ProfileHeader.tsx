'use client';

import { memo } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
    Mail,
    Phone,
    CalendarDays,
    Pencil,
    ShoppingBag,
    DollarSign,
    Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/format';
import type { UserProfile } from '@/types/profile';

type ProfileHeaderProps = {
    user: UserProfile;
}

const StatCard = ({
    icon: Icon,
    label,
    value,
    color,
}: {
    icon: React.ElementType;
    label: string;
    value: string;
    color: string;
}) => (
    <div className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 p-4 min-w-[170px]">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <p className="text-lg font-bold text-slate-900 leading-tight">{value}</p>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{label}</p>
        </div>
    </div>
);

const ProfileHeader = ({ user }: ProfileHeaderProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
    >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/10 skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/5 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10">
            {/* Top row: avatar + info + edit button */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-8">
                <div className="relative shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
                        <Image
                            src={user.avatar}
                            alt={user.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                </div>

                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 truncate">
                        {user.name}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" /> {user.email}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" /> {user.phone}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CalendarDays className="w-3.5 h-3.5" /> সদস্য হয়েছেন {user.memberSince} থেকে
                        </span>
                    </div>
                </div>

                <Button
                    variant="outline"
                    className="self-start bg-white/10 border-white/15 text-white hover:bg-white/20 hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider gap-2 shrink-0"
                >
                    <Pencil className="w-3.5 h-3.5" /> প্রোফাইল সম্পাদনা
                </Button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <StatCard
                    icon={ShoppingBag}
                    label="মোট অর্ডার"
                    value={String(user.totalOrders)}
                    color="bg-indigo-100 text-indigo-600"
                />
                <StatCard
                    icon={DollarSign}
                    label="মোট খরচ"
                    value={formatCurrency(user.totalSpent)}
                    color="bg-emerald-100 text-emerald-600"
                />
                <StatCard
                    icon={Clock}
                    label="বাকি আছে"
                    value={String(user.pendingOrders)}
                    color="bg-amber-100 text-amber-600"
                />
            </div>
        </div>
    </motion.div>
);

const MemoizedProfileHeader = memo(ProfileHeader);
export { MemoizedProfileHeader as ProfileHeader };



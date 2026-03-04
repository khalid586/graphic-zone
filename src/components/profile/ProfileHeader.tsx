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
    <div className="flex items-center gap-3 bg-white rounded-xl border border-muted p-4 min-w-[170px]">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <p className="text-lg font-bold text-foreground leading-tight">{value}</p>
            <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
        </div>
    </div>
);

const ProfileHeader = ({ user }: ProfileHeaderProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-secondary via-secondary to-primary/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
    >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2" />

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
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-secondary flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                </div>

                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 truncate">
                        {user.name}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" /> {user.email}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" /> {user.phone}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CalendarDays className="w-3.5 h-3.5" /> Member since {user.memberSince}
                        </span>
                    </div>
                </div>

                <Button
                    variant="outline"
                    className="self-start bg-white/10 border-white/15 text-white hover:bg-white/20 hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider gap-2 shrink-0"
                >
                    <Pencil className="w-3.5 h-3.5" /> Edit Profile
                </Button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                <StatCard
                    icon={ShoppingBag}
                    label="Total Orders"
                    value={String(user.totalOrders)}
                    color="bg-primary/10 text-primary"
                />
                <StatCard
                    icon={DollarSign}
                    label="Total Amount"
                    value={formatCurrency(user.totalSpent)}
                    color="bg-blue-500/10 text-blue-600"
                />
                <StatCard
                    icon={DollarSign}
                    label="Paid Amount"
                    value={formatCurrency(user.totalPaid)}
                    color="bg-success/10 text-success"
                />
                <StatCard
                    icon={DollarSign}
                    label="Due Amount"
                    value={formatCurrency(user.dueAmount)}
                    color="bg-destructive/10 text-destructive"
                />
                <StatCard
                    icon={Clock}
                    label="Pending Orders"
                    value={String(user.pendingOrders)}
                    color="bg-warning/20 text-warning"
                />
            </div>
        </div>
    </motion.div>
);

const MemoizedProfileHeader = memo(ProfileHeader);
export { MemoizedProfileHeader as ProfileHeader };



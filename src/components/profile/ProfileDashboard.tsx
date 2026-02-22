'use client';

import ProfileHeader from '@/components/profile/ProfileHeader';
import OrderHistoryTable from '@/components/profile/OrderHistoryTable';
import RecentActivity from '@/components/profile/RecentActivity';
import { MOCK_USER, MOCK_ORDERS, MOCK_ACTIVITY } from '@/data/profile';

const ProfileDashboard = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 space-y-6">
                {/* Profile header card */}
                <ProfileHeader user={MOCK_USER} />

                {/* Two-column layout: orders + activity */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="xl:col-span-2">
                        <OrderHistoryTable orders={MOCK_ORDERS} />
                    </div>
                    <div className="xl:col-span-1">
                        <RecentActivity activities={MOCK_ACTIVITY} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfileDashboard;

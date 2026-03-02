'use client';

import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { OrderHistoryTable } from '@/components/profile/OrderHistoryTable';
import { MOCK_USER, MOCK_ORDERS } from '@/data/profile';

const ProfileDashboard = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Main content */}
            <main className="px-6 sm:px-8 py-6 sm:py-8">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Profile header card */}
                    <ProfileHeader user={MOCK_USER} />

                    {/* Order history table */}
                    <OrderHistoryTable orders={MOCK_ORDERS} />
                </div>
            </main>
        </div>
    );
};

export { ProfileDashboard };



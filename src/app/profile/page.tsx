import { ProfileDashboard } from '@/components/profile';

export const metadata = {
    title: 'Graphic Zone | Profile',
    description: 'View your order history, track deliveries, and manage your Graphic Zone account.',
};

export default function ProfilePage() {
    return <ProfileDashboard />;
}

import ProfileDashboard from '@/components/profile/ProfileDashboard';

export const metadata = {
    title: 'My Profile | Graphic Zone',
    description: 'View your order history, track deliveries, and manage your Graphic Zone account.',
};

export default function ProfilePage() {
    return <ProfileDashboard />;
}

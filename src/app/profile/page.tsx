import { ProfileDashboard } from '@/components/profile';

export const metadata = {
    title: 'Graphic Zone | Profile',
    description: 'আপনার অর্ডারের ইতিহাস দেখুন, ডেলিভারি ট্র্যাক করুন এবং আপনার গ্রাফিক জোন অ্যাকাউন্ট ম্যানেজ করুন।',
};

export default function ProfilePage() {
    return <ProfileDashboard />;
}

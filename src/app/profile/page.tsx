import ProfileDashboard from '@/components/profile/ProfileDashboard';

export const metadata = {
    title: 'আমার প্রোফাইল | গ্রাফিক জোন',
    description: 'আপনার অর্ডারের ইতিহাস দেখুন, ডেলিভারি ট্র্যাক করুন এবং আপনার গ্রাফিক জোন অ্যাকাউন্ট ম্যানেজ করুন।',
};

export default function ProfilePage() {
    return <ProfileDashboard />;
}

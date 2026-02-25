import { AuthPage } from '@/components/auth';

export const metadata = {
    title: 'লগইন | গ্রাফিক জোন',
    description: 'অর্ডার ট্র্যাক করতে, পেমেন্ট ম্যানেজ করতে এবং আপনার ডিজাইন অ্যাক্সেস করতে সাইন ইন করুন বা অ্যাকাউন্ট তৈরি করুন।',
};

export default function LoginPage() {
    return <AuthPage />;
}

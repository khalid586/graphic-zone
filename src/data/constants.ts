import type { ServiceItem, PortfolioItem, ProcessStep } from '../types';

export const SERVICES: ServiceItem[] = [
    { id: 'branding', title: 'ব্র্যান্ড আইডেন্টিটি', desc: 'লোগো ডিজাইন, স্টেশনারি এবং ব্র্যান্ড গাইডলাইন যা আপনার উপস্থিতি সংজ্ঞায়িত করে।', icon: 'Layout' },
    { id: 'printing', title: 'ডিজিটাল প্রিন্ট', desc: 'প্রিমিয়াম ফিনিশ সহ উচ্চ-মানের বিজনেস কার্ড, ফ্লায়ার এবং ব্রোশিওর।', icon: 'Printer' },
    { id: 'banners', title: 'লার্জ ফরম্যাট', desc: 'ভিনাইল ব্যানার, এক্স-স্ট্যান্ড এবং দোকানের সাইনবোর্ড যা দৃষ্টি আকর্ষণ করে।', icon: 'Image' },
    { id: 'magazines', title: 'এডিটোরিয়াল', desc: 'ম্যাগাজিন এবং বার্ষিক প্রতিবেদনের জন্য পেশাদার লেআউট এবং প্রিন্টিং।', icon: 'FileText' },
];

export const PORTFOLIO: PortfolioItem[] = [
    { id: 1, title: 'ইকো প্যাকেজিং', cat: 'ব্র্যান্ডিং', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=1000&fit=crop&q=80' },
    { id: 2, title: 'টেক ম্যাগ', cat: 'এডিটোরিয়াল', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=1000&fit=crop&q=80' },
    { id: 3, title: 'ইভেন্ট ব্যানার', cat: 'লার্জ ফরম্যাট', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1000&fit=crop' },
    { id: 4, title: 'প্রিমিয়াম কার্ড', cat: 'প্রিন্টিং', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=1000&fit=crop' },
    { id: 5, title: 'রেস্তোরাঁ আইডেন্টিটি', cat: 'ব্র্যান্ডিং', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1000&fit=crop' },
    { id: 6, title: 'বার্ষিক প্রতিবেদন', cat: 'এডিটোরিয়াল', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop' },
];

export const PROCESS: ProcessStep[] = [
    { step: '০১', title: 'পরামর্শ', desc: 'আমরা আপনার লক্ষ্য নিয়ে আলোচনা করি এবং সেরা উপকরণ নির্বাচন করি।' },
    { step: '০২', title: 'ডিজাইন', desc: 'আমাদের সৃজনশীল দল আপনার ভিশনকে ডিজিটাল প্রুফে রূপ দেয়।' },
    { step: '০৩', title: 'প্রোডাকশন', desc: 'আধুনিক যন্ত্রপাতি ব্যবহার করে নিখুঁত প্রিন্টিং।' },
    { step: '০৪', title: 'ডেলিভারি', desc: 'মান পরীক্ষিত প্রিন্ট আপনার দোরগোড়ায় পৌঁছে দেওয়া হয়।' },
];

export const SERVICE_OPTIONS = [
    { value: 'bulk', label: 'বাল্ক ডিজিটাল প্রিন্টিং' },
    { value: 'large', label: 'লার্জ ফরম্যাট সাইনেজ' },
    { value: 'branding', label: 'কর্পোরেট ব্র্যান্ডিং' },
    { value: 'editorial', label: 'এডিটোরিয়াল/ম্যাগাজিন' },
] as const;

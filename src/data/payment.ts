import type { PaymentOrder, PaymentMethodOption } from '@/types/payment';

export const MOCK_PAYMENT_ORDER: PaymentOrder = {
    id: 'GZ-2026-0128',
    projectName: 'ব্রোশিওর — গ্রীনলিফ অর্গানিক্স',
    totalAmount: 97_500,
    paidAmount: 0,
    remainingDue: 97_500,
    orderDate: '2026-02-01',
    items: 2000,
    status: 'Pending',
};

export const PAYMENT_METHODS: PaymentMethodOption[] = [
    {
        id: 'card',
        label: 'কার্ড পেমেন্ট',
        description: 'ভিসা, মাস্টারকার্ড বা AMEX দিয়ে পে করুন',
        providers: ['Visa', 'Mastercard', 'AMEX'],
    },
    {
        id: 'mobile',
        label: 'মোবাইল ব্যাংকিং',
        description: 'বিকাশ, নগদ, রকেট, উপায়',
        providers: ['বিকাশ', 'নগদ', 'রকেট', 'উপায়'],
    },
    {
        id: 'internet',
        label: 'ইন্টারনেট ব্যাংকিং',
        description: 'সরাসরি আপনার ব্যাংক অ্যাকাউন্ট থেকে পে করুন',
        providers: ['DBBL', 'সিটি ব্যাংক', 'ব্র্যাক ব্যাংক', 'EBL'],
    },
];

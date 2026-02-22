import type { PaymentOrder, PaymentMethodOption } from '@/types/payment';

export const MOCK_PAYMENT_ORDER: PaymentOrder = {
    id: 'GZ-2026-0128',
    projectName: 'Brochures — GreenLeaf Organics',
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
        label: 'Card Payment',
        description: 'Pay with Visa, Mastercard, or AMEX',
        providers: ['Visa', 'Mastercard', 'AMEX'],
    },
    {
        id: 'mobile',
        label: 'Mobile Banking',
        description: 'bKash, Nagad, Rocket, Upay',
        providers: ['bKash', 'Nagad', 'Rocket', 'Upay'],
    },
    {
        id: 'internet',
        label: 'Internet Banking',
        description: 'Pay directly from your bank account',
        providers: ['DBBL', 'City Bank', 'BRAC Bank', 'EBL'],
    },
];

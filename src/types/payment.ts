export type PaymentMethod = 'card' | 'mobile' | 'internet';

export interface PaymentMethodOption {
    id: PaymentMethod;
    label: string;
    description: string;
    providers: string[];
}

export interface PaymentOrder {
    id: string;
    projectName: string;
    totalAmount: number;
    paidAmount: number;
    remainingDue: number;
    orderDate: string;
    items: number;
    status: 'Pending' | 'Processing';
}

export type PaymentState = 'form' | 'processing' | 'success' | 'failed';

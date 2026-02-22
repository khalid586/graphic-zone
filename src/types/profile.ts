export type OrderStatus = 'Completed' | 'Pending' | 'Cancelled' | 'Processing';
export type PaymentStatus = 'Paid' | 'Unpaid' | 'Partial' | 'Refunded';

export interface Order {
    id: string;
    projectName: string;
    orderDate: string;
    status: OrderStatus;
    paymentStatus: PaymentStatus;
    totalAmount: number;
    items: number;
}

export interface ActivityItem {
    id: number;
    action: string;
    description: string;
    timestamp: string;
    icon: 'order' | 'payment' | 'download' | 'update';
}

export interface UserProfile {
    name: string;
    email: string;
    phone: string;
    avatar: string;
    memberSince: string;
    totalOrders: number;
    totalSpent: number;
    pendingOrders: number;
}

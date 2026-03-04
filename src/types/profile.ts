/**
 * Profile / order domain types.
 *
 * Const-object pattern keeps runtime values and types in sync.
 */

export const ORDER_STATUSES = {
    Completed: 'Completed',
    Pending: 'Pending',
    Processing: 'Processing',
    Cancelled: 'Cancelled',
} as const;

export type OrderStatus = (typeof ORDER_STATUSES)[keyof typeof ORDER_STATUSES];

export const PAYMENT_STATUSES = {
    Paid: 'Paid',
    Unpaid: 'Unpaid',
    Partial: 'Partial',
    Refunded: 'Refunded',
} as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[keyof typeof PAYMENT_STATUSES];

export const ACTIVITY_ICONS = {
    order: 'order',
    payment: 'payment',
    download: 'download',
    update: 'update',
} as const;

export type ActivityIcon = (typeof ACTIVITY_ICONS)[keyof typeof ACTIVITY_ICONS];

export interface Order {
    readonly id: string;
    readonly clientName: string;
    readonly orderDate: string;
    readonly status: OrderStatus;
    readonly paymentStatus: PaymentStatus;
    readonly totalAmount: number;
    readonly items: number;
}

export interface ActivityItem {
    readonly id: number;
    readonly action: string;
    readonly description: string;
    readonly timestamp: string;
    readonly icon: ActivityIcon;
}

export interface UserProfile {
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly avatar: string;
    readonly memberSince: string;
    readonly totalOrders: number;
    readonly totalSpent: number;
    readonly totalPaid: number;
    readonly dueAmount: number;
    readonly pendingOrders: number;
}

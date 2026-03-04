/**
 * Payment domain types.
 *
 * The const-object + typeof pattern gives us both a runtime value
 * (for iteration/validation) and a union type — without duplication.
 */

export const PAYMENT_METHODS_ENUM = {
    card: 'card',
    mobile: 'mobile',
    internet: 'internet',
} as const;

export type PaymentMethod = (typeof PAYMENT_METHODS_ENUM)[keyof typeof PAYMENT_METHODS_ENUM];

export interface PaymentMethodOption {
    readonly id: PaymentMethod;
    readonly label: string;
    readonly description: string;
    readonly providers: readonly string[];
}

export const PAYMENT_STATES = {
    form: 'form',
    processing: 'processing',
    success: 'success',
    failed: 'failed',
} as const;

export type PaymentState = (typeof PAYMENT_STATES)[keyof typeof PAYMENT_STATES];

export interface PaymentOrder {
    readonly id: string;
    readonly clientName: string;
    readonly totalAmount: number;
    readonly paidAmount: number;
    readonly remainingDue: number;
    readonly orderDate: string;
    readonly items: number;
    readonly status: 'Pending' | 'Processing';
}

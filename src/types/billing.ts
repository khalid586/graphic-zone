/**
 * Billing types for admin invoice creation
 */

export type BillStatus = 'draft' | 'generated' | 'paid';

export interface BillingItem {
    readonly id: string;
    readonly description: string;
    readonly quantity: number;
    readonly rate: number;
    readonly amount: number; // quantity * rate
}

export interface BillingFormData {
    readonly customerId: string;
    readonly customerName: string;
    readonly customerAddress: string;
    readonly customerPhone: string;
    readonly items: readonly BillingItem[];
    readonly advance: number;
}

export interface Bill extends BillingFormData {
    readonly id: string;
    readonly status: BillStatus;
    readonly total: number;
    readonly due: number; // total - advance
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

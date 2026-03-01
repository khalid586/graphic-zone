/**
 * Billing types for admin invoice creation
 */

export type BillStatus = 'draft' | 'generated' | 'paid';

export interface BillingItem {
    readonly id: string;
    readonly description: string;
    readonly price: number;
}

export interface BillingFormData {
    readonly customerName: string;
    readonly customerAddress: string;
    readonly items: readonly BillingItem[];
}

export interface Bill extends BillingFormData {
    readonly id: string;
    readonly status: BillStatus;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

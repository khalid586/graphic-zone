import { BillingPage } from '@/components/billing';

export const metadata = {
    title: 'Create Bill | Graphic Zone Admin',
    description: 'Generate invoice for customer order',
};

export default function BillingRoute() {
    return <BillingPage />;
}

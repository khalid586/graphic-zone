/**
 * Payment-related display configuration.
 *
 * Icon mappings and visual config for payment methods.
 * Decoupled from components so the presentation layer
 * stays declarative and data-driven.
 */

import {
    CreditCard,
    Smartphone,
    Landmark,
} from 'lucide-react';
import type { PaymentMethod } from '@/types/payment';

export const PAYMENT_METHOD_ICONS: Readonly<
    Record<PaymentMethod, React.ElementType>
> = {
    card: CreditCard,
    mobile: Smartphone,
    internet: Landmark,
} as const;

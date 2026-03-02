/**
 * Shared / cross-cutting types.
 *
 * ─ Branded types give compile-time safety to primitive values
 *   (e.g. you can't accidentally pass an OrderId where a UserId
 *   is expected, even though both are strings at runtime).
 *
 * ─ `readonly` on every field enforces immutability at the type
 *   level — mutations go through proper state management, never
 *   direct assignment.
 */

// ── Branded type utility ──────────────────────────────────────────

declare const __brand: unique symbol;

/**
 * Nominal/branded type.
 * `Brand<string, 'OrderId'>` is assignable *from* `string` nowhere
 * except through an explicit cast, preventing accidental mix-ups.
 */
export type Brand<T, B extends string> = T & { readonly [__brand]: B };

export type OrderId = Brand<string, 'OrderId'>;

/** Cast helper — use at system boundaries (API responses, route params). */
export const asOrderId = (raw: string): OrderId => raw as OrderId;

// ── Domain types ──────────────────────────────────────────────────

export type ServiceIconName = 'Layout' | 'Printer' | 'Image' | 'FileText';

export interface ServiceItem {
    readonly id: string;
    readonly title: string;
    readonly desc: string;
    readonly icon: ServiceIconName;
}

export interface PortfolioItem {
    readonly id: number;
    readonly title: string;
    readonly cat: string;
    readonly img: string;
}

export interface ProcessStep {
    readonly step: string;
    readonly title: string;
    readonly desc: string;
}

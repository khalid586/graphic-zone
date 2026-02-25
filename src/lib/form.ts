/**
 * Form validation & styling utilities.
 *
 * Design decisions:
 *   1. **Schema-ish validation without a library** — each validator is
 *      a pure function `(value) => string | null`. Composable with
 *      `composeValidators` so field rules read declaratively.
 *   2. **Input styling constants** — single source of truth for form
 *      field appearance, avoiding Tailwind string duplication.
 *   3. **Future-proof** — when Zod or a schema library is added, the
 *      validator signature is compatible via a thin adapter.
 */

// ── Types ─────────────────────────────────────────────────────────

/** Error map — keys are field names, values are error messages. */
export type FormErrors<T extends string = string> = Partial<Record<T, string>>;

/** A single field validator: returns an error message, or null if valid. */
export type FieldValidator = (value: string) => string | null;

// ── Input styling ─────────────────────────────────────────────────

export const INPUT_BASE_CLASS =
    'h-11 rounded-lg bg-slate-50 border-slate-200 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20';

export const INPUT_ERROR_CLASS =
    'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/20';

/** Compose input className with optional error state. */
export const inputClassName = (hasError: boolean): string =>
    `${INPUT_BASE_CLASS} ${hasError ? INPUT_ERROR_CLASS : ''}`;

// ── Validators ────────────────────────────────────────────────────

export const isValidEmail = (value: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isValidPhone = (value: string): boolean =>
    /^\+?[\d\s-]{7,15}$/.test(value);

// ── Composable validator builders ─────────────────────────────────

/** Require a non-empty value. */
export const required =
    (message: string): FieldValidator =>
        (value) =>
            value.trim() ? null : message;

/** Require a minimum length. */
export const minLength =
    (min: number, message: string): FieldValidator =>
        (value) =>
            value.length >= min ? null : message;

/** Require a valid email format. */
export const email =
    (message: string): FieldValidator =>
        (value) =>
            isValidEmail(value) ? null : message;

/** Require a valid phone format. */
export const phone =
    (message: string): FieldValidator =>
        (value) =>
            isValidPhone(value) ? null : message;

/**
 * Run validators in order; return the first error, or null if all pass.
 *
 * @example
 *   const validateName = composeValidators(
 *     required('নাম প্রয়োজন'),
 *     minLength(2, 'নাম কমপক্ষে ২ অক্ষরের হতে হবে'),
 *   );
 *   const error = validateName(''); // 'নাম প্রয়োজন'
 */
export const composeValidators =
    (...validators: FieldValidator[]): FieldValidator =>
        (value) => {
            for (const validate of validators) {
                const error = validate(value);
                if (error) return error;
            }
            return null;
        };

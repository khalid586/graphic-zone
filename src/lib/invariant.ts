/**
 * Lightweight assertion utility.
 *
 * Use `invariant` to assert conditions that should always be true.
 * Unlike a plain `if` + `throw`, this:
 *   1. Narrows the type for TypeScript (acts as a type guard).
 *   2. Provides a consistent, greppable assertion pattern.
 *   3. Can be stripped or replaced with a noop in production bundles.
 *
 * @example
 *   const user = getUser();
 *   invariant(user, 'User must exist at this point');
 *   // `user` is now narrowed to non-null
 */
export function invariant(
    condition: unknown,
    message: string,
): asserts condition {
    if (!condition) {
        throw new Error(`[Invariant Violation] ${message}`);
    }
}

/**
 * Exhaustive check — use in `default` branches of switch statements
 * to get a compile-time error when a new union member is added but
 * not handled.
 *
 * @example
 *   switch (status) {
 *     case 'Completed': return …;
 *     case 'Pending':   return …;
 *     default: exhaustive(status);
 *   }
 */
export function exhaustive(value: never): never {
    throw new Error(`[Exhaustive] Unhandled value: ${String(value)}`);
}

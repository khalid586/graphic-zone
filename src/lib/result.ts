/**
 * Railway-oriented error handling.
 *
 * Every service call returns `Result<T, E>` rather than throwing.
 * This makes error states explicit in the type system and forces
 * callers to handle both branches — a pattern proven at scale to
 * eliminate whole classes of unhandled-exception bugs.
 *
 * @example
 *   const result = await getUserProfile();
 *   if (!result.ok) {
 *     logError(result.error);
 *     return notFound();
 *   }
 *   const user = result.data; // fully typed
 */

// ── Core types ────────────────────────────────────────────────────

export interface Success<T> {
    readonly ok: true;
    readonly data: T;
}

export interface Failure<E = AppError> {
    readonly ok: false;
    readonly error: E;
}

export type Result<T, E = AppError> = Success<T> | Failure<E>;

// ── Error envelope ────────────────────────────────────────────────

export type ErrorCode =
    | 'NOT_FOUND'
    | 'VALIDATION'
    | 'NETWORK'
    | 'UNAUTHORIZED'
    | 'FORBIDDEN'
    | 'INTERNAL';

export interface AppError {
    readonly code: ErrorCode;
    readonly message: string;
    readonly cause?: unknown;
}

// ── Constructors ──────────────────────────────────────────────────

export const ok = <T>(data: T): Success<T> => ({ ok: true, data });

export const fail = <E = AppError>(error: E): Failure<E> => ({
    ok: false,
    error,
});

export const appError = (
    code: ErrorCode,
    message: string,
    cause?: unknown,
): AppError => ({ code, message, cause });

// ── Combinators ───────────────────────────────────────────────────

/** Transform the success value, leaving failures untouched. */
export const mapResult = <T, U, E = AppError>(
    result: Result<T, E>,
    fn: (data: T) => U,
): Result<U, E> => (result.ok ? ok(fn(result.data)) : result);

/** Wrap an async operation that may throw into a Result. */
export const tryCatch = async <T>(
    fn: () => Promise<T>,
    toError: (err: unknown) => AppError = (err) =>
        appError('INTERNAL', err instanceof Error ? err.message : String(err), err),
): Promise<Result<T>> => {
    try {
        return ok(await fn());
    } catch (err) {
        return fail(toError(err));
    }
};

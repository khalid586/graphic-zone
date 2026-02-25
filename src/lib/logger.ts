/**
 * Structured logging utility.
 *
 * Design decisions (20 YoE lens):
 *   1. **Single transport swap-point** — change `dispatch` to forward
 *      to Sentry / Datadog / CloudWatch without touching 50+ call-sites.
 *   2. **Structured payload** — always an object, never a bare string.
 *      This makes log ingestion and alerting trivially filterable.
 *   3. **Convention-based severity** — `logInfo`, `logWarning`, `logError`
 *      rather than a generic `log` with a string argument — prevents
 *      typos and enables tree-shaking of dev-only levels.
 *   4. **Idempotent & side-effect-safe** — no thrown errors, no state
 *      mutations — safe to call from error boundaries and async handlers.
 */

export type LogSeverity = 'info' | 'warning' | 'error' | 'fatal';

export interface LogContext {
    /** Which module / component raised the log entry */
    readonly source?: string;
    /** Arbitrary metadata (order IDs, user segment, etc.) */
    readonly meta?: Readonly<Record<string, unknown>>;
}

interface LogPayload {
    readonly message: string;
    readonly severity: LogSeverity;
    readonly source: string;
    readonly meta?: Readonly<Record<string, unknown>>;
    readonly stack?: string;
    readonly timestamp: string;
}

const LOG_PREFIX = '[GraphicZone]';

/**
 * Central dispatch — the single point to swap console for a real
 * transport (Sentry, Datadog, OpenTelemetry, etc.).
 */
function dispatch(payload: LogPayload): void {
    const consoleFn =
        payload.severity === 'info'
            ? console.info
            : payload.severity === 'warning'
                ? console.warn
                : console.error;

    consoleFn(LOG_PREFIX, payload);

    // TODO: Replace with real transport:
    // sentry.captureException(payload);
    // datadogLogs.logger.log(payload.message, payload, payload.severity);
}

/** Build a structured payload from a raw error + context. */
function buildPayload(
    error: unknown,
    severity: LogSeverity,
    context?: LogContext,
): LogPayload {
    return {
        message: error instanceof Error ? error.message : String(error),
        severity,
        source: context?.source ?? 'unknown',
        meta: context?.meta,
        stack: error instanceof Error ? error.stack : undefined,
        timestamp: new Date().toISOString(),
    };
}

// ── Public API ────────────────────────────────────────────────────

export const logError = (
    error: unknown,
    severity: LogSeverity = 'error',
    context?: LogContext,
): void => dispatch(buildPayload(error, severity, context));

export const logInfo = (msg: string, ctx?: LogContext): void =>
    dispatch(buildPayload(msg, 'info', ctx));

export const logWarning = (msg: string, ctx?: LogContext): void =>
    dispatch(buildPayload(msg, 'warning', ctx));

export const logFatal = (error: unknown, ctx?: LogContext): void =>
    dispatch(buildPayload(error, 'fatal', ctx));

/**
 * Next.js Proxy — runs on every matched request.
 *
 * Responsibilities:
 *   1. Route protection — redirect unauthenticated users away from
 *      protected pages (/profile, /payment).
 *
 * Security headers are configured in next.config.ts.
 *
 * When a real auth system (NextAuth, Clerk, etc.) is integrated,
 * replace the `isAuthenticated` stub with a proper session check.
 */

import { type NextRequest } from 'next/server';

/** Routes that require authentication */
const PROTECTED_ROUTES = ['/profile', '/payment'] as const;

/** Cheap auth check — replace with real session/token validation */
function isAuthenticated(request: NextRequest): boolean {
    // TODO: Check session cookie, JWT, or NextAuth token
    // For now, allow all requests (stub returns true)
    const _cookie = request.cookies.get('session');
    return true;
}

export default async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ── Route protection ──────────────────────────────────────
    const isProtected = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));

    if (isProtected && !isAuthenticated(request)) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        return Response.redirect(loginUrl);
    }

    // ── Allow request to continue with security headers ──────
    return undefined;
}

export const config = {
    /**
     * Run proxy on all routes except:
     *   - _next/static (static files)
     *   - _next/image (image optimization)
     *   - favicon.ico
     *   - public assets
     */
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};

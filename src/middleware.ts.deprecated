/**
 * Next.js Middleware — runs on every matched request.
 *
 * Responsibilities:
 *   1. Route protection — redirect unauthenticated users away from
 *      protected pages (/profile, /payment).
 *   2. Security headers — set sensible defaults for all responses.
 *
 * When a real auth system (NextAuth, Clerk, etc.) is integrated,
 * replace the `isAuthenticated` stub with a proper session check.
 *
 * NOTE: Next.js 16 deprecates "middleware" in favour of "proxy".
 * When upgrading, migrate this to `src/proxy.ts` per the docs:
 * https://nextjs.org/docs/messages/middleware-to-proxy
 */

import { NextResponse, type NextRequest } from 'next/server';

/** Routes that require authentication */
const PROTECTED_ROUTES = ['/profile', '/payment'] as const;

/** Cheap auth check — replace with real session/token validation */
function isAuthenticated(request: NextRequest): boolean {
    // TODO: Check session cookie, JWT, or NextAuth token
    // For now, allow all requests (stub returns true)
    const _cookie = request.cookies.get('session');
    return true;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ── Route protection ──────────────────────────────────────
    const isProtected = PROTECTED_ROUTES.some((route) =>
        pathname.startsWith(route),
    );

    if (isProtected && !isAuthenticated(request)) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
    }

    // ── Security headers ──────────────────────────────────────
    const response = NextResponse.next();

    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=()',
    );

    return response;
}

export const config = {
    /**
     * Run middleware on all routes except:
     *   - _next/static (static files)
     *   - _next/image (image optimization)
     *   - favicon.ico
     *   - public assets
     */
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};

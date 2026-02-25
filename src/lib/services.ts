/**
 * Data service abstraction layer.
 *
 * Every function returns `Result<T>` so callers explicitly handle
 * both success and failure — no unguarded `await` that silently
 * crashes the component tree.
 *
 * Currently backed by mock data; swap implementations here when
 * a real API lands — call-sites remain untouched.
 */

import { PROJECT_DATA } from '@/data/projects';
import { MOCK_PAYMENT_ORDER, PAYMENT_METHODS } from '@/data/payment';
import { MOCK_USER, MOCK_ORDERS, MOCK_ACTIVITY } from '@/data/profile';
import { ok, fail, appError, tryCatch } from '@/lib/result';
import type { Result } from '@/lib/result';
import type { Project } from '@/types';
import type { PaymentOrder, PaymentMethodOption } from '@/types/payment';
import type { UserProfile, Order, ActivityItem } from '@/types/profile';
import { logError } from '@/lib/logger';

/* ── Projects ─────────────────────────────────────────────────── */

export async function getProjectById(id: string): Promise<Result<Project>> {
    return tryCatch(async () => {
        // TODO: Replace with fetch(`/api/projects/${id}`)
        const project = PROJECT_DATA[id];
        if (!project) throw new Error(`Project "${id}" not found`);
        return project;
    }, (err) => {
        logError(err, 'warning', { source: 'getProjectById', meta: { id } });
        return appError('NOT_FOUND', `Project "${id}" not found`, err);
    });
}

export async function getAllProjects(): Promise<Result<Project[]>> {
    return tryCatch(async () => {
        // TODO: Replace with fetch('/api/projects')
        return Object.values(PROJECT_DATA);
    }, (err) => {
        logError(err, 'error', { source: 'getAllProjects' });
        return appError('INTERNAL', 'Failed to load projects', err);
    });
}

export async function getRelatedProjects(
    excludeId: number,
): Promise<Result<Project[]>> {
    const allResult = await getAllProjects();
    if (!allResult.ok) return allResult;
    return ok(allResult.data.filter((p) => p.id !== excludeId));
}

/* ── Payment ──────────────────────────────────────────────────── */

export async function getPaymentOrder(): Promise<Result<PaymentOrder>> {
    return tryCatch(async () => {
        // TODO: Replace with fetch('/api/payment/current')
        return MOCK_PAYMENT_ORDER;
    }, (err) => {
        logError(err, 'error', { source: 'getPaymentOrder' });
        return appError('INTERNAL', 'Failed to load payment order', err);
    });
}

export async function getPaymentMethods(): Promise<Result<PaymentMethodOption[]>> {
    return tryCatch(async () => {
        // TODO: Replace with fetch('/api/payment/methods')
        return PAYMENT_METHODS;
    }, (err) => {
        logError(err, 'error', { source: 'getPaymentMethods' });
        return appError('INTERNAL', 'Failed to load payment methods', err);
    });
}

/* ── Profile ──────────────────────────────────────────────────── */

export async function getUserProfile(): Promise<Result<UserProfile>> {
    return tryCatch(async () => {
        // TODO: Replace with fetch('/api/user/me')
        return MOCK_USER;
    }, (err) => {
        logError(err, 'error', { source: 'getUserProfile' });
        return appError('UNAUTHORIZED', 'Failed to load user profile', err);
    });
}

export async function getOrderHistory(): Promise<Result<Order[]>> {
    return tryCatch(async () => {
        // TODO: Replace with fetch('/api/orders')
        return MOCK_ORDERS;
    }, (err) => {
        logError(err, 'error', { source: 'getOrderHistory' });
        return appError('INTERNAL', 'Failed to load order history', err);
    });
}

export async function getRecentActivity(): Promise<Result<ActivityItem[]>> {
    return tryCatch(async () => {
        // TODO: Replace with fetch('/api/activity')
        return MOCK_ACTIVITY;
    }, (err) => {
        logError(err, 'error', { source: 'getRecentActivity' });
        return appError('INTERNAL', 'Failed to load activity', err);
    });
}

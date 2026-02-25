import { describe, it, expect } from 'vitest';
import { SERVICES, PORTFOLIO, PROCESS } from '@/data/constants';

describe('SERVICES', () => {
    it('has 4 items', () => {
        expect(SERVICES).toHaveLength(4);
    });

    it('each service has required fields', () => {
        SERVICES.forEach((s) => {
            expect(s.id).toBeTruthy();
            expect(s.title).toBeTruthy();
            expect(s.desc).toBeTruthy();
            expect(s.icon).toBeTruthy();
        });
    });

    it('all icon names are valid', () => {
        const validIcons = ['Layout', 'Printer', 'Image', 'FileText'];
        SERVICES.forEach((s) => {
            expect(validIcons).toContain(s.icon);
        });
    });
});

describe('PORTFOLIO', () => {
    it('has at least 1 item', () => {
        expect(PORTFOLIO.length).toBeGreaterThan(0);
    });

    it('each item has required fields', () => {
        PORTFOLIO.forEach((p) => {
            expect(p.id).toBeDefined();
            expect(p.title).toBeTruthy();
            expect(p.cat).toBeTruthy();
            expect(p.img).toMatch(/^https?:\/\//);
        });
    });
});

describe('PROCESS', () => {
    it('has 4 steps', () => {
        expect(PROCESS).toHaveLength(4);
    });

    it('each step has required fields', () => {
        PROCESS.forEach((step) => {
            expect(step.step).toBeTruthy();
            expect(step.title).toBeTruthy();
            expect(step.desc).toBeTruthy();
        });
    });
});

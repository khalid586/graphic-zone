import { describe, it, expect } from 'vitest';
import {
    BRAND,
    PRIMARY_NAV,
    CTA,
    DEFAULT_METADATA,
    FOOTER_LINKS,
} from '@/config/site';

describe('BRAND', () => {
    it('has name and tagline', () => {
        expect(BRAND.name).toBeTruthy();
        expect(BRAND.tagline).toBeTruthy();
    });
});

describe('PRIMARY_NAV', () => {
    it('has at least one nav item', () => {
        expect(PRIMARY_NAV.length).toBeGreaterThan(0);
    });

    it('each item has label and action', () => {
        PRIMARY_NAV.forEach((item) => {
            expect(item.label).toBeTruthy();
            expect(item.action).toBeTruthy();
        });
    });
});

describe('CTA', () => {
    it('has label and action', () => {
        expect(CTA.label).toBeTruthy();
        expect(CTA.action).toBeTruthy();
    });
});

describe('DEFAULT_METADATA', () => {
    it('has title and description', () => {
        expect(DEFAULT_METADATA.title).toBeTruthy();
        expect(DEFAULT_METADATA.description).toBeTruthy();
    });
});

describe('FOOTER_LINKS', () => {
    it('has at least one link', () => {
        expect(FOOTER_LINKS.length).toBeGreaterThan(0);
    });

    it('each link is a non-empty string', () => {
        FOOTER_LINKS.forEach((link) => {
            expect(typeof link).toBe('string');
            expect(link.length).toBeGreaterThan(0);
        });
    });
});

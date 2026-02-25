import { describe, it, expect } from 'vitest';
import { scrollToContact, scrollToSection } from '@/lib/navigation';

describe('scrollToContact', () => {
    it('is a function', () => {
        expect(typeof scrollToContact).toBe('function');
    });

    it('does not throw when element is missing', () => {
        expect(() => scrollToContact()).not.toThrow();
    });
});

describe('scrollToSection', () => {
    it('is a function', () => {
        expect(typeof scrollToSection).toBe('function');
    });

    it('does not throw when element is missing', () => {
        expect(() => scrollToSection('nonexistent')).not.toThrow();
    });
});

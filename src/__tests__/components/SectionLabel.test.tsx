import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionLabel } from '@/components/ui/SectionLabel';

describe('SectionLabel', () => {
    it('renders children text', () => {
        render(<SectionLabel>টেস্ট লেবেল</SectionLabel>);
        expect(screen.getByText('টেস্ট লেবেল')).toBeInTheDocument();
    });

    it('renders as h2 element', () => {
        render(<SectionLabel>টেস্ট</SectionLabel>);
        const el = screen.getByText('টেস্ট');
        expect(el.tagName).toBe('H2');
    });

    it('has correct styling classes', () => {
        render(<SectionLabel>স্টাইল</SectionLabel>);
        const el = screen.getByText('স্টাইল');
        expect(el.className).toContain('text-indigo-600');
        expect(el.className).toContain('uppercase');
    });
});


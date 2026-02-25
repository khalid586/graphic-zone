import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

describe('LoadingSpinner', () => {
    it('renders an SVG element', () => {
        const { container } = render(<LoadingSpinner />);
        const svg = container.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });

    it('uses default size of 20', () => {
        const { container } = render(<LoadingSpinner />);
        const svg = container.querySelector('svg');
        expect(svg?.getAttribute('width')).toBe('20');
        expect(svg?.getAttribute('height')).toBe('20');
    });

    it('accepts custom size', () => {
        const { container } = render(<LoadingSpinner size={32} />);
        const svg = container.querySelector('svg');
        expect(svg?.getAttribute('width')).toBe('32');
    });

    it('applies custom className', () => {
        const { container } = render(<LoadingSpinner className="text-red-500" />);
        const svg = container.querySelector('svg');
        expect(svg?.className.baseVal).toContain('text-red-500');
    });

    it('always has animate-spin class', () => {
        const { container } = render(<LoadingSpinner />);
        const svg = container.querySelector('svg');
        expect(svg?.className.baseVal).toContain('animate-spin');
    });
});

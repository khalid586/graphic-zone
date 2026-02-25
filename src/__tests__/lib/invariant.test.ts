import { describe, it, expect } from 'vitest';
import { invariant, exhaustive } from '@/lib/invariant';

describe('invariant', () => {
    it('does not throw when condition is truthy', () => {
        expect(() => invariant(true, 'should not throw')).not.toThrow();
        expect(() => invariant(1, 'truthy number')).not.toThrow();
        expect(() => invariant('non-empty', 'truthy string')).not.toThrow();
        expect(() => invariant({}, 'truthy object')).not.toThrow();
    });

    it('throws when condition is falsy', () => {
        expect(() => invariant(false, 'was false')).toThrow('[Invariant Violation] was false');
        expect(() => invariant(null, 'was null')).toThrow('[Invariant Violation] was null');
        expect(() => invariant(undefined, 'was undefined')).toThrow('[Invariant Violation] was undefined');
        expect(() => invariant(0, 'was zero')).toThrow('[Invariant Violation] was zero');
        expect(() => invariant('', 'was empty')).toThrow('[Invariant Violation] was empty');
    });

    it('narrows the type after the call', () => {
        const value: string | null = 'hello';
        invariant(value, 'must exist');
        // If TypeScript doesn't narrow, this line would error at compile time
        const len: number = value.length;
        expect(len).toBe(5);
    });
});

describe('exhaustive', () => {
    it('throws with a descriptive message', () => {
        // Force-cast to never to test the runtime behavior
        expect(() => exhaustive('surprise' as never)).toThrow(
            '[Exhaustive] Unhandled value: surprise',
        );
    });
});

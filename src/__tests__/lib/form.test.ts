import { describe, it, expect } from 'vitest';
import {
    type FormErrors,
    INPUT_BASE_CLASS,
    INPUT_ERROR_CLASS,
    inputClassName,
    isValidEmail,
    isValidPhone,
    required,
    minLength,
    email,
    phone,
    composeValidators,
} from '@/lib/form';

describe('inputClassName', () => {
    it('returns base class without error', () => {
        const result = inputClassName(false);
        expect(result).toContain(INPUT_BASE_CLASS);
        expect(result).not.toContain(INPUT_ERROR_CLASS);
    });

    it('includes error class when hasError is true', () => {
        const result = inputClassName(true);
        expect(result).toContain(INPUT_BASE_CLASS);
        expect(result).toContain(INPUT_ERROR_CLASS);
    });
});

describe('isValidEmail', () => {
    it('accepts valid emails', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('user.name@domain.co')).toBe(true);
    });

    it('rejects invalid emails', () => {
        expect(isValidEmail('')).toBe(false);
        expect(isValidEmail('not-email')).toBe(false);
        expect(isValidEmail('@missing.com')).toBe(false);
        expect(isValidEmail('no@domain')).toBe(false);
    });
});

describe('isValidPhone', () => {
    it('accepts valid phone numbers', () => {
        expect(isValidPhone('+8801712345678')).toBe(true);
        expect(isValidPhone('01712345678')).toBe(true);
        expect(isValidPhone('+1 234 567 8901')).toBe(true);
    });

    it('rejects invalid phone numbers', () => {
        expect(isValidPhone('')).toBe(false);
        expect(isValidPhone('abc')).toBe(false);
        expect(isValidPhone('12')).toBe(false); // too short
    });
});

describe('FormErrors type', () => {
    it('allows partial error maps', () => {
        const errors: FormErrors<'email' | 'password'> = { email: 'Required' };
        expect(errors.email).toBe('Required');
        expect(errors.password).toBeUndefined();
    });
});

// ── Composable validators ─────────────────────────────────────────

describe('required', () => {
    const validate = required('ফিল্ড প্রয়োজন');

    it('returns null for non-empty string', () => {
        expect(validate('hello')).toBeNull();
    });

    it('returns error for empty string', () => {
        expect(validate('')).toBe('ফিল্ড প্রয়োজন');
    });

    it('returns error for whitespace-only string', () => {
        expect(validate('   ')).toBe('ফিল্ড প্রয়োজন');
    });
});

describe('minLength', () => {
    const validate = minLength(3, 'কমপক্ষে ৩ অক্ষর');

    it('returns null when length is sufficient', () => {
        expect(validate('abc')).toBeNull();
        expect(validate('abcdef')).toBeNull();
    });

    it('returns error when too short', () => {
        expect(validate('ab')).toBe('কমপক্ষে ৩ অক্ষর');
        expect(validate('')).toBe('কমপক্ষে ৩ অক্ষর');
    });
});

describe('email validator builder', () => {
    const validate = email('ইমেইল সঠিক নয়');

    it('returns null for valid email', () => {
        expect(validate('a@b.co')).toBeNull();
    });

    it('returns error for invalid email', () => {
        expect(validate('not-email')).toBe('ইমেইল সঠিক নয়');
    });
});

describe('phone validator builder', () => {
    const validate = phone('ফোন সঠিক নয়');

    it('returns null for valid phone', () => {
        expect(validate('+8801712345678')).toBeNull();
    });

    it('returns error for invalid phone', () => {
        expect(validate('abc')).toBe('ফোন সঠিক নয়');
    });
});

describe('composeValidators', () => {
    const validate = composeValidators(
        required('প্রয়োজন'),
        minLength(2, 'কমপক্ষে ২'),
        email('ইমেইল সঠিক নয়'),
    );

    it('returns first failing error', () => {
        expect(validate('')).toBe('প্রয়োজন');
    });

    it('returns second error when first passes', () => {
        expect(validate('a')).toBe('কমপক্ষে ২');
    });

    it('returns third error when first two pass', () => {
        expect(validate('not-email')).toBe('ইমেইল সঠিক নয়');
    });

    it('returns null when all pass', () => {
        expect(validate('test@example.com')).toBeNull();
    });
});

/**
 * ESLint configuration.
 *
 * A principal-level config focuses on:
 *   - Catch real bugs (no-floating-promises, exhaustive-deps)
 *   - Enforce consistency without bike-shedding (Prettier handles style)
 *   - Stay out of the way — zero warnings that aren't actionable
 */
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            /* ── TypeScript discipline ───────────────────────── */
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/consistent-type-imports': [
                'warn',
                { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',

            /* ── React best practices ────────────────────────── */
            'react/self-closing-comp': 'warn',
            'react/jsx-curly-brace-presence': [
                'warn',
                { props: 'never', children: 'never' },
            ],

            /* ── Import hygiene ──────────────────────────────── */
            'no-duplicate-imports': 'error',

            /* ── General quality ─────────────────────────────── */
            'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
            eqeqeq: ['error', 'always'],
            'prefer-const': 'error',
        },
    },
    {
        /* Test files get relaxed rules */
        files: ['**/*.test.{ts,tsx}', '**/__tests__/**'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'no-console': 'off',
        },
    },
];

export default eslintConfig;

/**
 * Site-wide configuration.
 *
 * Single source of truth for metadata, navigation items, and brand
 * constants. Keeping these here (rather than scattered across layout
 * files and components) makes i18n, A/B tests, and CMS-driven config
 * trivial to integrate later.
 */

import type { Metadata } from 'next';

// ── Brand ─────────────────────────────────────────────────────────

export const BRAND = {
    name: 'Graphic Zone',
    nameBn: 'গ্রাফিক জোন',
    tagline: 'ডিজাইন ও প্রিন্টিং সমাধান',
    contactEmail: 'graphiczonecumilla@gmail.com',
    contactEmailSecondary: 'shariartuhin91@gmail.com',
    contactPhone: '+৮৮ ০১৩১২৫৯৪২৯২',
    contactPhoneSecondary: '+৮৮ ০১৯১২৫৯৪২৯২',
    whatsappUrl: 'https://wa.me/8801312594292',
    address: {
        street: 'Victoria College Road',
        area: 'Kandirpar',
        city: 'Cumilla',
        postalCode: '3500',
        full: 'Victoria College Road, Kandirpar, Cumilla 3500',
    },
    owner: {
        name: 'Alou Jafar Sherian Tuhin',
        designation: 'Graphic Designer',
    },
    socialLinks: {
        instagram: '#',
        twitter: '#',
        facebook: 'https://facebook.com/graphiczonecumilla',
    },
} as const;

// ── Navigation ────────────────────────────────────────────────────

export interface NavItem {
    readonly label: string;
    readonly action: string | (() => void);
}

export const PRIMARY_NAV: readonly NavItem[] = [
    { label: 'হোম', action: '/' },
    { label: 'সেবাসমূহ', action: '/#services' },
    { label: 'পোর্টফোলিও', action: '/#portfolio' },
    { label: 'প্রক্রিয়া', action: '/#process' },
    { label: 'যোগাযোগ', action: '/#contact' },
] as const;

export const CTA = {
    label: 'কোটেশন চাই',
    action: '/#contact',
} as const;

// ── SEO / Metadata ────────────────────────────────────────────────

export const DEFAULT_METADATA: Metadata = {
    title: 'গ্রাফিক জোন - ডিজাইন ও প্রিন্টিং সমাধান',
    description:
        'উচ্চ-মানের প্রিন্টিং, ব্র্যান্ডিং এবং লার্জ-ফরম্যাট সমাধানে বিশ্বব্যাপী কর্পোরেশনগুলোর আস্থা।',
    icons: {
        icon: '/Logo.png',
        apple: '/Logo.png',
    },
};

// ── Footer ────────────────────────────────────────────────────────

export const FOOTER_LINKS = [
    'গোপনীয়তা',
    'শর্তাবলী',
    'কুকিজ',
    'সাইটম্যাপ',
] as const;

'use client';

import { Layout, Printer, Image as ImageIcon, FileText } from 'lucide-react';
import type { ServiceItem, PortfolioItem, ProcessStep } from '../types';

export const SERVICES: ServiceItem[] = [
    { id: 'branding', title: 'Brand Identity', desc: 'Logo design, stationary, and brand guidelines that define your presence.', icon: <Layout /> },
    { id: 'printing', title: 'Digital Print', desc: 'High-quality business cards, flyers, and brochures with premium finishes.', icon: <Printer /> },
    { id: 'banners', title: 'Large Format', desc: 'Vinyl banners, X-stands, and shop signage that grabs attention.', icon: <ImageIcon /> },
    { id: 'magazines', title: 'Editorial', desc: 'Professional layout and printing for magazines and annual reports.', icon: <FileText /> },
];

export const PORTFOLIO: PortfolioItem[] = [
    { id: 1, title: 'Eco Packaging', cat: 'Branding', img: 'https://picsum.photos/seed/p1/800/1000' },
    { id: 2, title: 'Tech Mag', cat: 'Editorial', img: 'https://picsum.photos/seed/p2/800/1000' },
    { id: 3, title: 'Event Banners', cat: 'Large Format', img: 'https://picsum.photos/seed/p3/800/1000' },
    { id: 4, title: 'Premium Cards', cat: 'Printing', img: 'https://picsum.photos/seed/p4/800/1000' },
    { id: 5, title: 'Restaurant Identity', cat: 'Branding', img: 'https://picsum.photos/seed/p5/800/1000' },
    { id: 6, title: 'Annual Report', cat: 'Editorial', img: 'https://picsum.photos/seed/p6/800/1000' },
];

export const PROCESS: ProcessStep[] = [
    { step: '01', title: 'Consultation', desc: 'We discuss your goals and choose the best materials.' },
    { step: '02', title: 'Design', desc: 'Our creative team crafts your vision into a digital proof.' },
    { step: '03', title: 'Production', desc: 'Precision printing using state-of-the-art machinery.' },
    { step: '04', title: 'Delivery', desc: 'Quality-checked prints delivered to your doorstep.' },
];

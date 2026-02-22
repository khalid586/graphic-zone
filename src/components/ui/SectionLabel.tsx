import type { ReactNode } from 'react';

interface SectionLabelProps {
    children: ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
    <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">{children}</h2>
);

export default SectionLabel;

import { memo, type ReactNode } from 'react';

type SectionLabelProps = {
    children: ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
    <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">{children}</h2>
);

const MemoizedSectionLabel = memo(SectionLabel);
export { MemoizedSectionLabel as SectionLabel };



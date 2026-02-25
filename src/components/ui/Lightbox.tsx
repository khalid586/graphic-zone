'use client';

import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

interface LightboxProps {
    images: readonly string[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    altPrefix?: string;
}

const Lightbox = ({ images, currentIndex, isOpen, onClose, onPrev, onNext, altPrefix = 'Image' }: LightboxProps) => {
    useBodyScrollLock(isOpen);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    onPrev();
                    break;
                case 'ArrowRight':
                    onNext();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onPrev, onNext]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${altPrefix} গ্যালারি লাইটবক্স`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
                    onClick={onClose}
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="লাইটবক্স বন্ধ করুন"
                        className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-transparent z-10"
                        onClick={onClose}
                    >
                        <X className="size-8" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="আগের ছবি"
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 p-3 rounded-full backdrop-blur-sm z-10 hover:bg-white/20"
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrev();
                        }}
                    >
                        <ChevronLeft className="size-6" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="পরের ছবি"
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 p-3 rounded-full backdrop-blur-sm z-10 hover:bg-white/20"
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                    >
                        <ChevronRight className="size-6" />
                    </Button>
                    <motion.img
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        src={images[currentIndex]}
                        alt={`${altPrefix} — ছবি ${currentIndex + 1} / ${images.length}`}
                        className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold uppercase tracking-widest" aria-live="polite">
                        {currentIndex + 1} / {images.length}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;

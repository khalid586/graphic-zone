'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, Grid3x3 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';

interface ProjectGalleryProps {
    images: readonly string[];
    title: string;
    onImageClick: (index: number) => void;
}

const ProjectGallery = ({ images, title, onImageClick }: ProjectGalleryProps) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const galleryRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % images.length);
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + images.length) % images.length);

    return (
        <motion.div
            id="gallery"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <SectionLabel>প্রকল্প গ্যালারি</SectionLabel>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900">ভিজুয়াল শোকেস</h2>
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => galleryRef.current?.scrollTo({ left: 0, behavior: 'smooth' })}
                    className="rounded-xl bg-slate-100 text-slate-400 hover:bg-indigo-600 hover:text-white border-0"
                >
                    <Grid3x3 className="w-4 h-4" />
                </Button>
            </div>

            {/* Grid Layout */}
            <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
                {images.map((img, idx) => (
                    <div
                        key={img}
                        role="button"
                        tabIndex={0}
                        aria-label={`${title} ছবি ${idx + 1} বড় করে দেখুন`}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                        onClick={() => onImageClick(idx)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onImageClick(idx); } }}
                    >
                        <Image
                            src={img}
                            alt={`${title} ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all flex items-center justify-center">
                            <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Slider */}
            <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[16/9] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 cursor-pointer"
                            onClick={() => onImageClick(activeSlide)}
                        >
                            <Image
                                src={images[activeSlide]}
                                alt={`${title} — Slide ${activeSlide + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 80vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <Button
                    variant="secondary"
                    size="icon"
                    aria-label="আগের স্লাইড"
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
                >
                    <ChevronLeft className="w-5 h-5 text-slate-900" />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    aria-label="পরের স্লাইড"
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
                >
                    <ChevronRight className="w-5 h-5 text-slate-900" />
                </Button>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveSlide(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${idx === activeSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectGallery;

'use client';

import Image from 'next/image';

// Real brand logos - you can replace with your actual client logos
const CLIENT_LOGOS = [
    { name: 'Adobe', logo: 'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg' },
    { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
    { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
] as const;

const Marquee = () => {
    return (
        <section className="py-12 bg-background px-6 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-black text-foreground text-center">
                        আমাদের ক্লায়েন্টসমূহ
                    </h2>
                    <div className="w-20 h-1 bg-primary/40 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="relative overflow-hidden w-full">
                    <div className="flex gap-0">
                        <div className="flex shrink-0 animate-marquee gap-0">
                            {CLIENT_LOGOS.map((client, index) => (
                                <div
                                    key={`logo-1-${index}`}
                                    className="flex items-center justify-center mx-8 bg-white rounded-lg p-6 shadow-md border-2 border-primary/20 min-w-[160px] h-24 shrink-0 group"
                                >
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={140}
                                        height={70}
                                        className="object-contain max-h-16 w-auto transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex shrink-0 animate-marquee gap-0" aria-hidden="true">
                            {CLIENT_LOGOS.map((client, index) => (
                                <div
                                    key={`logo-2-${index}`}
                                    className="flex items-center justify-center mx-8 bg-white rounded-lg p-6 shadow-md border-2 border-primary/20 min-w-[160px] h-24 shrink-0 group"
                                >
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={140}
                                        height={70}
                                        className="object-contain max-h-16 w-auto transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Marquee };

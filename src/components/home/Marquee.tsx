'use client';

import Image from 'next/image';

// Client logos from assets folder
const CLIENT_LOGOS = [
    { name: 'Alif', logo: require('../../../assets/company logos/Alif.png') },
    { name: 'Apex', logo: require('../../../assets/company logos/Apex.png') },
    { name: 'Aviary', logo: require('../../../assets/company logos/Aviary.png') },
    { name: 'Bandhu Battery', logo: require('../../../assets/company logos/Bandhu Battery.png') },
    { name: 'Bangla Food', logo: require('../../../assets/company logos/Bangla Food.png') },
    { name: 'Ctg Shamity', logo: require('../../../assets/company logos/Ctg Shamity].png') },
    { name: 'G Tech', logo: require('../../../assets/company logos/G Tech.png') },
    { name: 'Kazi', logo: require('../../../assets/company logos/Kazi.png') },
    { name: 'NDF', logo: require('../../../assets/company logos/NDF.png') },
    { name: 'Orbit', logo: require('../../../assets/company logos/Orbit.png') },
    { name: 'Rising Sun', logo: require('../../../assets/company logos/Rising Sun.png') },
    { name: 'Samatat', logo: require('../../../assets/company logos/Samatat.png') },
    { name: 'Shabimok', logo: require('../../../assets/company logos/Shabimok.png') },
    { name: 'Swadesh Polly', logo: require('../../../assets/company logos/Swadesh Polly.png') },
    { name: 'Taimiyans', logo: require('../../../assets/company logos/Taimiyans.png') },
    { name: 'Tajmahal', logo: require('../../../assets/company logos/Tajmahal.png') },
];

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

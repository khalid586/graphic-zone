import { Hero, Marquee, Services, Portfolio, Process, Contact } from '@/components/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Graphic Zone | Home',
};

const HomePage = () => {
    return (
        <div className="bg-white text-foreground scroll-smooth">
            <Hero />
            <Marquee />
            <Services />
            <Portfolio />
            <Process />
            <Contact />
        </div>
    );
};

export default HomePage;

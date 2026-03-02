import { Hero, Services, Portfolio, Process, Contact } from '@/components/home';

const HomePage = () => {
    return (
        <div className="bg-white text-foreground scroll-smooth">
            <Hero />
            <Services />
            <Portfolio />
            <Process />
            <Contact />
        </div>
    );
};

export default HomePage;

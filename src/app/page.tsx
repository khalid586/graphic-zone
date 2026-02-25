import { Hero, Services, Portfolio, Process, Contact } from '@/components/home';

const HomePage = () => {
    return (
        <div className="bg-white text-slate-900 scroll-smooth">
            <Hero />
            <Services />
            <Portfolio />
            <Process />
            <Contact />
        </div>
    );
};

export default HomePage;

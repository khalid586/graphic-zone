import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import Process from '@/components/home/Process';
import Contact from '@/components/home/Contact';

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

import React from 'react';
import { Navbar, Footer } from '../marketing';
import { HeroSection, Ideology, Tokenomics, Roadmap, Apps } from '../sections';

const Home: React.FC = () => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />
            <HeroSection />
            <Ideology />
            <Tokenomics />
            <Roadmap />
            <Apps />
            <Footer />
        </div>
    );
};

export default Home;
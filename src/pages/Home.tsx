import React from 'react';
import { Navbar } from '../marketing';
import { HeroSection, Ideology, Tokenomics } from '../sections';

const Home: React.FC = () => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />
            <HeroSection />
            <Ideology />
            <Tokenomics />
        </div>
    );
};

export default Home;
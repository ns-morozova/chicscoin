import React from 'react';
import { Navbar, Footer } from '../marketing';
import { HeroSection, Ideology, Tokenomics } from '../sections';

const Home: React.FC = () => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />
            <HeroSection />
            <Ideology />
            <Tokenomics />
            <Footer />
        </div>
    );
};

export default Home;
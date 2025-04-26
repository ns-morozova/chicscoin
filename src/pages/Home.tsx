import React from 'react';
import { Navbar } from '../marketing';
import { HeroSection, Ideology } from '../sections';

const Home: React.FC = () => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />
            <HeroSection />
            <Ideology />
        </div>
    );
};

export default Home;
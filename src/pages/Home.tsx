import React from 'react';
import { Navbar } from '../marketing';
import { HeroSection } from '../sections';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default Home;
import React from 'react';
import { Navbar, Footer } from '../marketing';
import { HeroSection, Ideology, Tokenomics, Invitation, Roadmap, Apps, Social, TokenDistribution } from '../sections';

const Home: React.FC = () => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />
            <HeroSection />
            <Ideology />
            <Invitation />
            <Tokenomics />
            <TokenDistribution />
            {/* <Invitation /> */}
            <Roadmap />
            <Apps />
            <Social />
            <Footer />
        </div>
    );
};

export default Home;
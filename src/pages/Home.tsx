import React from 'react';
import { Navbar, Footer } from '../marketing';
import { HeroSection, Ideology, Tokenomics, TokenDistribution, Invitation, DexScreenerEmbed, Roadmap, Apps, Social } from '../sections';

const Home: React.FC = () => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />
            <HeroSection />
            <Ideology />
            <Invitation />
            <DexScreenerEmbed />
            <Tokenomics />
            <TokenDistribution />
            <Roadmap />
            <Apps />
            <Social />
            <Footer />
        </div>
    );
};

export default Home;
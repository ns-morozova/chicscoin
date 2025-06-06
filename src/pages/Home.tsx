import React from 'react';
// import { Navbar, Footer } from '../marketing';
import { HeroSection, Ideology, Tokenomics, TokenDistribution, Invitation, Roadmap, Apps, DexScreenerTransition, Social } from '../sections';

const Home: React.FC = () => {
    return (
        <div className="relative overflow-hidden">
            {/* <Navbar /> */}
            <HeroSection />
            <Ideology />
            <Invitation />
            <Tokenomics />
            <TokenDistribution />
            <Roadmap />
            {/* <DexScreenerEmbed /> */}
            <Apps />
            <DexScreenerTransition />
            <Social />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
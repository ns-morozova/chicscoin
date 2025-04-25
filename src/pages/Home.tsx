import React from 'react';
import Navbar from '../marketing';
import { HeroSection } from '../sections';

const Home: React.FC = () => {
    const navbarItems = [
        { label: 'Идеология', anchor: 'home' },
        { label: 'Токеномика', anchor: 'about' },
        { label: 'Дорожная карта', anchor: 'contact' },
        { label: 'Соц сети', anchor: 'soc' },
    ];

    return (
        <div>
            <Navbar items={navbarItems} />
            <HeroSection />
        </div>
    );
};

export default Home;
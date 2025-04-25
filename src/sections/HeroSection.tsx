import React from 'react';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full">
            <img
                src="/images/banner.png"
                alt="Hero Banner"
                className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 w-full h-full bg-black/50"></div>
            
            <div className="absolute left-1/2 -translate-1/2 top-1/2 md:top-1/4">
                <h1
                    className="relative font-bold uppercase text-3xl md:text-8xl"
                    style={{
                        background: 'linear-gradient(90deg, #1B0643, #8F0050, #BC0F58, #E7005B, #FF6068, #FF7475)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    chics coin
                </h1>
                
            </div>
        </section>
    );
};

export default HeroSection;
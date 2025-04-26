import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="relative w-full">
            {/* <img
                src="/images/banner.png"
                alt="Hero Banner"
                className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 w-full h-full bg-black/50"></div>
            
            <div className="flex flex-col items-center gap-1 absolute left-1/2 -translate-1/2 top-1/2 lg:top-1/4">
                <h1
                    className="relative font-audiowide font-bold text-center uppercase text-nowrap text-3xl md:text-6xl lg:text-7xl xl:text-8xl"
                    style={{
                        background: 'linear-gradient(90deg, #1B0643, #8F0050, #BC0F58, #E7005B, #FF6068, #FF7475)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    {t('hero.title')}
                </h1>
                <p className="text-white text-center text-sm md:text-base lg:text-lg">
                    {t('hero.description')}
                </p>
                <Button className="max-w-max mt-6 lg:mt-10">{t('hero.button')}</Button>
                
            </div> */}

            <div
                className="relative w-full h-80 mb-40 sm:h-[450px] md:h-[600px] md:mb-32 lg:h-[750px] xl:h-[850px] 2xl:h-[1000px] 2xl:mb-20 4xl:mb-16"
                style={{
                    backgroundImage: "url('/images/banner.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 w-full h-full bg-black/50"></div>
                <div className="relative flex flex-col items-center gap-1 pt-24 sm:pt-32 z-20">
                    <h1
                        className="font-audiowide font-bold text-center uppercase text-nowrap text-3xl md:text-6xl lg:text-7xl xl:text-8xl"
                        style={{
                            background: 'linear-gradient(90deg, #1B0643, #8F0050, #BC0F58, #E7005B, #FF6068, #FF7475)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        {t('hero.title')}
                    </h1>
                    <p className="text-white text-center text-sm md:text-base lg:text-lg">
                        {t('hero.description')}
                    </p>
                    <Button className="max-w-max mt-6 lg:mt-10">{t('hero.button')}</Button>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
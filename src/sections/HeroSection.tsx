import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="relative w-full">
            <div className="sm:hidden h-32"></div>
            <div
                className="relative w-full max-w-7xl mx-auto h-[500px] bg-bottom-right pt-2 sm:bg-center sm:h-[600px] sm:pt-24 md:h-[700px] md:pt-28 lg:h-[850px] lg:pt-36 xl:h-[1000px] 2xl:h-[1000px]"
                style={{
                    backgroundImage: "url('/images/banner.JPG')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 1))',
                    }}
                >
                </div>
                <div className="-mt-12 sm:mt-0 relative flex flex-col items-center gap-5 px-4 md:gap-7 lg:px-8 z-20">
                    {/* <div className="hidden lg:block w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto rounded-full overflow-hidden">
                        <img
                            alt={t('navbar.logo')}
                            src="/images/chiks-coin2.png"
                            className="w-full h-auto object-cover"
                        />
                    </div> */}

                    <div className="w-full flex flex-col gap-2 items-center lg:gap-3">
                        <h1
                            className="font-audiowide font-bold text-center uppercase text-nowrap text-3xl md:text-6xl lg:text-7xl"
                            style={{
                                background: 'linear-gradient(90deg, #AF0092, #14B8A6)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            {t('hero.title')}
                        </h1>
                        <p className="text-center text-sm w-1/2 sm:w-1/3 md:text-base">
                            {t('hero.description')}
                        </p>
                    </div>
                    
                    <Button className="max-w-max">{t('hero.button')}</Button>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
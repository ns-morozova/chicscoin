import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from '../components/Button';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    // Хук для отслеживания видимости секции
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="home" className="relative w-full">
            <div className="h-32 sm:h-14 xl:h-6"></div>
            <div
                ref={ref}
                className="relative w-full max-w-7xl mx-auto h-[500px] bg-bottom-right pt-2 sm:bg-center sm:h-[550px] sm:pt-24 md:h-[600px] md:pt-28 lg:h-[750px] lg:pt-36 xl:h-[850px]"
                style={{
                    backgroundImage: "url('/images/banner-hero.JPG')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Градиентные слои */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 1))',
                    }}
                ></div>
                <div
                    className="hidden md:block absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 1))',
                    }}
                ></div>

                {/* Контент */}
                <div className="-mt-8 lg:-mt-14 xl:-mt-4 relative flex flex-col items-center gap-5 px-4 md:gap-7 lg:px-8 z-20">
                    <div className="w-full flex flex-col gap-2 items-center lg:gap-3">
                        <h1
                            className={`font-audiowide font-bold text-center uppercase text-nowrap text-3xl md:text-6xl lg:text-7xl animationShift ${inView ? 'endShift' : 'startShift'
                                }`}
                            style={{
                                background: 'linear-gradient(90deg, #AF0092, #14B8A6)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            {t('hero.title')}
                        </h1>

                        <p
                            className={`text-center text-sm w-2/3 sm:w-1/3 md:text-base animationShift !delay-[300ms] ${inView ? 'endShift' : 'startShift'
                                }`}
                        >
                            {t('hero.description')}
                        </p>
                    </div>

                    <Button
                        type={ButtonType.White}
                        className={`max-w-max animationShift tr-double-delay ${inView ? 'endShiftBtn' : 'startShiftBtn'
                            }`}
                    >
                        {t('hero.button')}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from '../components/Button';
import { useInView } from 'react-intersection-observer';

const Invitation: React.FC = () => {
    const { t } = useTranslation();

    // Хук для отслеживания видимости секции
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5, // Триггер, когда 50% секции видно
    });

    return (
        <section className="py-8 lg:px-8 md:py-16">
            <div
                ref={ref}
                className="relative max-w-7xl mx-auto px-4 py-24 sm:py-44 md:px-8 md:py-56 lg:py-72 xl:py-80"
                style={{
                    backgroundImage: "url('/images/banner-invitation.JPG')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="relative flex flex-col items-center z-10">
                    <h2
                        className={`mb-3 font-medium text-center text-xl md:text-4xl md:mb-6 transition-transform duration-1000 ease-out ${
                            inView ? 'opacity-100 translate-y-0 delay-[200ms]' : 'opacity-0 translate-y-16'
                        }`}
                    >
                        Присоединиться сейчас
                    </h2>

                    <div
                        className={`transition-transform duration-1000 ease-out ${
                            inView ? 'opacity-100 translate-y-0 delay-[400ms]' : 'opacity-0 translate-y-16'
                        }`}
                    >
                        <Button
                            type={ButtonType.Gradient}
                            className="max-w-max"
                        >
                            {t('hero.button')}
                        </Button>
                    </div>
                </div>

                {/* Градиентные слои */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 1))',
                    }}
                ></div>
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 1))',
                    }}
                ></div>
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 1))',
                    }}
                ></div>
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to left, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 1))',
                    }}
                ></div>
            </div>
        </section>
    );
};

export default Invitation;
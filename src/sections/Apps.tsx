import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const Apps: React.FC = () => {
    const { t } = useTranslation();

    // Хук для отслеживания видимости секции
    const [ref, inView] = useInView({
        triggerOnce: true, // Анимация запускается только один раз
        threshold: 0.2,
    });

    return (
        <section id="social" className="px-4 py-8 lg:px-8 md:py-16">
            <div
                ref={ref}
                className="relative max-w-7xl mx-auto py-20 bg-top-left sm:py-28 md:py-36 md:bg-center"
                style={{
                    backgroundImage: "url('/images/banner-apps.jpg')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Градиентные слои */}
                <div className="absolute inset-0 w-full h-full bg-black/20 md:bg-black/40"></div>
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

                {/* Контент */}
                <div className="relative z-10">
                    <h2
                        className={`mb-10 mx-auto w-2/3 sm:w-auto font-medium text-center text-xl md:text-3xl md:mb-16 animationShift ${
                            inView ? 'endShift' : 'startShift'
                        }`}
                    >
                        {t('apps.availableOn')}
                    </h2>

                    <div className="flex flex-col gap-10 sm:flex-row sm:justify-center sm:gap-40 md:gap-52">
                        
                        <div className="relative w-3/5 pb-20 flex-shrink-0 sm:w-2/5 md:max-w-72">
                            <img
                                alt="Mockup"
                                src="/images/iPhone_Mockup_1.png"
                                className=""
                            />
                            <img
                                alt="Mockup"
                                src="/images/iPhone_Mockup_2.png"
                                className="absolute w-full bottom-0 left-32 flex-shrink-0 md:left-44 z-10"
                            />
                        </div>

                        <div className="flex justify-center gap-5 sm:flex-col">
                            <div
                                className={`w-full max-w-40 md:max-w-44 lg:max-w-52 cursor-pointer animationShift tr-delay ${inView ? 'endShift' : 'startShift'
                                    }`}
                            >
                                <img
                                    alt="App Store"
                                    src="/icons/AppStore.svg"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div
                                className={`w-full max-w-40 md:max-w-44 lg:max-w-52 cursor-pointer animationShift tr-double-delay ${inView ? 'endShift' : 'startShift'
                                    }`}
                            >
                                <img
                                    alt="Google Play"
                                    src="/icons/GooglePlay.svg"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apps;
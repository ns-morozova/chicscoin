import React from 'react';
import { useTranslation } from 'react-i18next';

const Apps: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="social" className="px-4 py-8 lg:px-8 md:py-16">
            <div
                className="relative max-w-7xl mx-auto py-20 bg-top-left sm:py-28 md:py-36 md:bg-center"
                style={{
                    backgroundImage: "url('/images/bg-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 w-full h-full bg-black/20 md:bg-black/40"></div>

                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 1))',
                    }}
                >
                </div>
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 1))',
                    }}
                >
                </div>
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 1))',
                    }}
                >
                </div>
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to left, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 1))',
                    }}
                >
                </div>

                <div className="relative z-10">
                    <h2 className="mb-10 mx-auto w-2/3 sm:w-auto font-medium text-center text-xl md:text-3xl md:mb-16">
                        {t('apps.availableOn')}
                    </h2>
                    <div className="flex justify-center gap-5">
                        <div className="w-full max-w-40 md:max-w-44 lg:max-w-52 cursor-pointer transition-all duration-300 hover:scale-105">
                            <img
                                alt="App Store"
                                src="/icons/AppStore.svg"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="w-full max-w-40 md:max-w-44 lg:max-w-52 cursor-pointer transition-all duration-300 hover:scale-105">
                            <img
                                alt="Google Play"
                                src="/icons/GooglePlay.svg"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apps;
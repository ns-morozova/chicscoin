import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const Invitation: React.FC = () => {
    const { t } = useTranslation();

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    return (
        <section className="py-8 lg:px-8 md:py-16">
            <div className="relative max-w-7xl mx-auto">
                <div className="relative z-10">
                    <h2
                        className={`mb-3 font-medium text-center text-xl md:text-4xl md:mb-6 animationShift ${inView ? 'endShift' : 'startShift'
                            }`}
                    >
                        {t('dailymatches')}
                    </h2>
                </div>
                <div
                    ref={ref}
                    className="relative px-4 py-24 sm:py-40 md:px-8 md:py-48 lg:py-56 xl:py-72"
                    style={{
                        backgroundImage: "url('/images/banner-invitation.JPG')",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
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
            </div>
        </section>
    );
};

export default Invitation;
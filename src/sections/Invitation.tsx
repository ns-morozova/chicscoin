import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from '../components/Button';

const Invitation: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-8 lg:px-8 md:py-16">
            
            <div
                className="relative max-w-7xl mx-auto px-4 py-24 sm:py-44 md:px-8 md:py-56 lg:py-72 xl:py-80"
                style={{
                    backgroundImage: "url('/images/banner-invitation.JPG')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="relative flex flex-col items-center z-10">
                    <h2 className="mb-3 font-medium text-xl md:text-4xl md:mb-6">
                        Присоединиться сейчас
                    </h2>
                    <Button type={ButtonType.Gradient} className="max-w-max">{t('hero.button')}</Button>
                </div>

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
            </div>
        </section>
    );
};

export default Invitation;
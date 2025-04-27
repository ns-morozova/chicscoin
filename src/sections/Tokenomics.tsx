import React from 'react';
import { useTranslation } from 'react-i18next';
import CardTokenomics from '../components/Button/CardTokenomics';

const Tokenomics: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="px-4 py-8 lg:px-8 md:py-16">
            
            <div className="relative max-w-7xl mx-auto z-50">
                <h2 className="mb-5 md:mb-10 lg:mb-12 text-white text-center text-2xl md:text-5xl">
                    {t('tokenomics.title')}
                </h2>

                <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-6">
                    <CardTokenomics
                        number={1}
                        textKey="cardtokenomics.emission"
                        type="primary"
                        className="md:col-span-2 lg:col-span-3"
                    />

                    <CardTokenomics
                        number={2}
                        textKey="cardtokenomics.volume"
                        type="secondary"
                        className="lg:col-span-3"
                    />

                    <CardTokenomics
                        number={3}
                        textKey="cardtokenomics.marketing"
                        type="secondary"
                        className="lg:col-span-2"
                    />

                    <CardTokenomics
                        number={4}
                        textKey="cardtokenomics.voting"
                        type="primary"
                        className="lg:col-span-2"
                    />

                    <CardTokenomics
                        number={5}
                        textKey="cardtokenomics.mining"
                        type="primary"
                        className="lg:col-span-2"
                    />
                </div>

                <div
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full -z-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(193, 0, 161, 0.5), rgba(48, 101, 125, 0.5))',
                        filter: 'blur(150px)',
                    }}
                ></div>

            </div>
        </section>
    );
};

export default Tokenomics;
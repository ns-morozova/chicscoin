import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CardTokenomics, CardTokenomicsType } from '../components/Cards';
import { useInView } from 'react-intersection-observer';

const Tokenomics: React.FC = () => {
    const { t } = useTranslation();

    // Хук для отслеживания видимости секции
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const cards = [
        {
            number: 1,
            textKey: 'cardtokenomics.emission',
            type: CardTokenomicsType.Pink,
            className: 'md:col-span-2 lg:col-span-3',
        },
        {
            number: 2,
            textKey: 'cardtokenomics.volume',
            type: CardTokenomicsType.Teal,
            className: 'lg:col-span-3',
        },
        {
            number: 3,
            textKey: 'cardtokenomics.marketing',
            type: CardTokenomicsType.Teal,
            className: 'lg:col-span-2',
        },
        {
            number: 4,
            textKey: 'cardtokenomics.voting',
            type: CardTokenomicsType.Pink,
            className: 'lg:col-span-2',
        },
        {
            number: 5,
            textKey: 'cardtokenomics.mining',
            type: CardTokenomicsType.Pink,
            className: 'lg:col-span-2',
        },
    ];

    // Состояние для управления видимостью каждой карточки
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    useEffect(() => {
        if (inView) {
            const startAnimation = async () => {
                await new Promise((resolve) => setTimeout(resolve, 400));

                for (let i = 0; i < cards.length; i++) {
                    await new Promise((resolve) => setTimeout(resolve, 120 * (i + 1)));
                    setVisibleCards((prev) => [...prev, i]);
                }
            };

            startAnimation();
        } else {
            setVisibleCards([]);
        }
    }, [inView]);

    return (
        <section id="tokenomics" className="px-4 py-8 lg:px-8 md:py-16">
            
            <div ref={ref} className="relative max-w-7xl mx-auto z-10">
                <h2 className={`mb-5 md:mb-10 lg:mb-12 font-medium text-center uppercase text-2xl md:text-5xl animationShift ${
                    inView ? 'endShift' : 'startShift'
                }`}>
                    {t('tokenomics.title')}
                </h2>

                <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-6">
                    {cards.map((card, index) => (
                        <CardTokenomics
                            key={index}
                            number={card.number}
                            textKey={card.textKey}
                            type={card.type}
                            className={`animationShift ${visibleCards.includes(index) ? 'endShift' : 'startShift'
                                } ${card.className}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;
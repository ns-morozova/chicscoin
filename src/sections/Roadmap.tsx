import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CardRoadmap, CardRoadmapType } from '../components/Cards';
import { useInView } from 'react-intersection-observer';

const Roadmap: React.FC = () => {
    const { t } = useTranslation();

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const cards = [
        {
            title: 'cardroadmap.concept.title',
            description: 'cardroadmap.concept.description',
            number: 'I',
        type: CardRoadmapType.Pink,
        },
        {
            title: 'cardroadmap.start.title',
            description: 'cardroadmap.start.description',
            number: 'II',
            type: CardRoadmapType.Teal,
        },
        {
            title: 'cardroadmap.integration.title',
            description: 'cardroadmap.integration.description',
            number: 'III',
            type: CardRoadmapType.Pink,
        },
        {
            title: 'cardroadmap.contests.title',
            description: 'cardroadmap.contests.description',
            number: 'IV',
            type: CardRoadmapType.Teal,
        },
    ];

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
        <section id="roadmap" className="px-4 pt-8 pb-10 lg:px-8 md:pt-32 md:pb-16">
            <div ref={ref} className="relative max-w-7xl mx-auto">
                <div className="relative z-20">
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-5/6 md:h-full z-10 transition-opacity duration-700 ${
                            visibleCards.includes(1) ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            background:
                                'radial-gradient(circle, rgba(175, 0, 146, 0.9), rgba(20, 184, 166, 0.9))',
                            filter: 'blur(150px)',
                            willChange: 'transform, opacity',
                        }}
                    ></div>

                    <h2 className={`relative mb-5 md:mb-10 lg:mb-12 font-medium text-center uppercase text-2xl md:text-5xl z-20 animationShift ${
                        inView ? 'endShift' : 'startShift'
                    }`}>
                        {t('headlines.roadmap')}
                    </h2>

                    <div className="relative flex flex-col gap-4 bg-transparent">
                        {cards.map((card, index) => (
                            <CardRoadmap
                                key={index}
                                title={card.title}
                                description={card.description}
                                number={card.number}
                                type={card.type}
                                className={`animationShift ${
                                    visibleCards.includes(index) ? 'endShift' : 'startShift'
                                }`}
                            />
                        ))}
                        <div
                            className={`absolute top-20 left-4 w-1 h-5/6 bg-gradient-to-b from-[#AF0092] to-[#14B8A6] md:left-8 z-0 transition-opacity duration-300 ${
                                visibleCards.includes(1) ? 'opacity-100' : 'opacity-0'}`}
                        ></div>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default Roadmap;
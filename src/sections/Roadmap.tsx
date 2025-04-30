import React from 'react';
import { useTranslation } from 'react-i18next';
import { CardRoadmap, CardRoadmapType } from '../components/Cards';

const Roadmap: React.FC = () => {
    const { t } = useTranslation();

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

    return (
        <section id="roadmap" className="px-4 py-10 lg:px-8 md:py-44">
            <div className="relative max-w-7xl mx-auto">
                <div className="relative z-20">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-5/6 md:h-full z-10"
                        style={{
                            background: 'radial-gradient(circle, rgba(175, 0, 146, 0.9), rgba(20, 184, 166, 0.9))',
                            filter: 'blur(150px)',
                        }}
                    ></div>

                    <h2 className="relative mb-5 md:mb-10 lg:mb-12 font-medium text-center uppercase text-2xl md:text-5xl z-20">
                        {t('roadmap.title')}
                    </h2>

                    <div className="relative flex flex-col gap-4 bg-transparent">
                        {cards.map((card, index) => (
                            <CardRoadmap
                                key={index}
                                title={card.title}
                                description={card.description}
                                number={card.number}
                                type={card.type}
                                className=""
                            />
                        ))}
                        <div className="absolute top-2 left-4 w-1 h-5/6 bg-gradient-to-b from-[#AF0092] to-[#14B8A6] md:left-8 z-0"></div>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default Roadmap;
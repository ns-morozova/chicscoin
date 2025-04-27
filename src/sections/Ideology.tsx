import React from 'react';
import { useTranslation } from 'react-i18next';
import { CardIdeology } from '../components/Cards';

import { BsBroadcast } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Ideology: React.FC = () => {
    const { t } = useTranslation();

    const cards = [
        {
            textKey: 'cardideology.translations',
            icon: <BsBroadcast className="size-6 md:size-7" />,
        },
        {
            textKey: 'cardideology.expressions',
            icon: <AiOutlineHeart className="size-6 md:size-7" />,
        },
        {
            textKey: 'cardideology.matches',
            icon: <AiOutlineTeam className="size-6 md:size-7" />,
        },
        {
            textKey: 'cardideology.purchases',
            icon: <AiOutlineShoppingCart className="size-6 md:size-7" />,
        },
    ];

    return (
        <section className="px-4 py-8 lg:px-8 md:py-16">

            <div className="max-w-7xl mx-auto">
                <div className="lg:hidden mx-auto mb-12 w-20 sm:w-24 md:w-28 h-auto rounded-full overflow-hidden">
                    <img
                        alt={t('navbar.logo')}
                        src="/images/chiks-coin2.png"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="bg-gradient-to-b from-[#AF0092] to-[#14B8A6] rounded-3xl text-center px-4 py-10 sm:pb-4 md:px-8 md:pt-20 md:pb-8">
                    <div className="mx-auto w-11/12 sm:w-3/5 md:w-3/4 lg:w-3/5 lg:max-w-lg">
                        <h2 className="font-medium text-xl mb-2 md:mb-4 md:text-4xl lg:px-3">
                            {t('ideology.description')}
                        </h2>
                        <p className="text-sm mb-8 md:mb-16 md:text-base lg:px-16">
                            {t('ideology.toolDescription')}
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {cards.map((card, index) => (
                            <CardIdeology
                                key={index}
                                textKey={card.textKey}
                                icon={card.icon}
                                className="hover:bg-[#1A1A1A]"
                            />
                        ))}
                    </div>  
                </div>
            </div>
        </section>
    );
};

export default Ideology;
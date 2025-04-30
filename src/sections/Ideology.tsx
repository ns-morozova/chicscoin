import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CardIdeology } from '../components/Cards';
import { BsBroadcast } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useInView } from 'react-intersection-observer';

const Ideology: React.FC = () => {
    const { t } = useTranslation();

    // Хук для отслеживания видимости секции
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

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

    // Состояние для управления видимостью каждой карточки
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    // Отмена анимации при выходе из зоны видимости
    const animationRef = useRef<boolean>(false);

    useEffect(() => {
        if (inView) {
            // Разрешаем анимацию
            animationRef.current = true;

            const startCardAnimation = async () => {
                // Задержка перед началом анимации заголовка и текста
                await new Promise((resolve) => setTimeout(resolve, 400));

                // Показ карточек одна за другой
                for (let i = 0; i < cards.length; i++) {
                    if (!animationRef.current) break;

                    await new Promise((resolve) => setTimeout(resolve, 120 * (i + 1)));
                    setVisibleCards((prev) => [...prev, i]);
                }
            };

            startCardAnimation();
        } else {
            animationRef.current = false;
            setVisibleCards([]);
        }
    }, [inView]);

    return (
        <section id="ideology" className="px-4 pb-8 lg:px-8 md:pt-8 md:pb-16">
            <div ref={ref} className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-b from-[#AF0092] to-[#14B8A6] rounded-3xl text-center px-4 py-10 sm:pb-4 md:px-8 md:pt-20 md:pb-8">
                    <div className="mx-auto w-11/12 sm:w-3/5 md:w-3/4 lg:w-3/5 lg:max-w-lg">
                        <h2
                            className={`font-medium text-xl mb-2 md:mb-4 md:text-4xl lg:px-3 animationShift ${inView ? 'endShift' : 'startShift'
                                }`}
                        >
                            {t('ideology.description')}
                        </h2>
                        <p
                            className={`text-sm mb-8 md:mb-16 md:text-base lg:px-16 animationShift tr-delay ${inView ? 'endShift' : 'startShift'
                                }`}
                        >
                            {t('ideology.toolDescription')}
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {cards.map((card, index) => (
                            <CardIdeology
                                key={index}
                                textKey={card.textKey}
                                icon={card.icon}
                                className={`hover:bg-[#1A1A1A] animationShift ${
                                    visibleCards.includes(index) ? 'endShift' : 'startShift'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ideology;
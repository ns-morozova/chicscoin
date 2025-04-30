import React from 'react';
import { useTranslation } from 'react-i18next';

export enum CardRoadmapType {
    Pink = 'pink',
    Teal = 'teal',
}

interface CardRoadmapProps {
    title: string;
    description: string;
    number: string;
    type: CardRoadmapType;
    className?: string;
}

const CardRoadmap: React.FC<CardRoadmapProps> = ({ title, description, number, type, className }) => {
    const { t } = useTranslation();

    return (
        <div
            className={`relative bg-black overflow-hidden rounded-3xl px-6 py-8 shadow-lg transition-all duration-300 hover:shadow-2xl group z-10
                ${className || ''}
                ${type === CardRoadmapType.Pink ? 'hover:bg-pink-950' : 'hover:bg-teal-900'}
            `}
        >
            <h3
                className={`relative text-xl w-max md:text-3xl font-medium md:pl-8 transition-colors duration-300
                    ${type === CardRoadmapType.Pink ? 'text-[#c00aa2]' : 'text-[#14B8A6]'
                    }
                `}
            >
                {/* Пульсирующая точка */}
                <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 left-0 md:w-5 md:h-5 rounded-full opacity-100 group-hover:opacity-100 group-hover:animate-ping
                        ${type === CardRoadmapType.Pink ? 'bg-[#c00aa2]/80' : 'bg-teal-600/80'}
                    `}
                    style={{ animationDuration: '3s' }}
                ></div>

                <span className="md:hidden">{number}. </span>
                    {t(title)}
                <span
                    className={`absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r transition-all duration-500 ease-out group-hover:w-full
                        ${type === CardRoadmapType.Pink ? 'from-[#AF0092] to-[#EB9FBE]' : 'from-[#14b8a6] to-[#115e59]'}
                    `}
                ></span>
            </h3>

            <p className="mt-6 text-sm sm:w-4/5 xl:w-3/5 md:text-base md:mt-10 text-white">
                {t(description)}
            </p>

            <div
                className={`absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r transition-all duration-500 ease-out group-hover:w-full
                    ${type === CardRoadmapType.Pink ? 'from-[#AF0092] to-[#EB9FBE]' : 'from-[#14b8a6] to-[#115e59]'}
                `}
            ></div>
        </div>
    );
};

export default CardRoadmap;
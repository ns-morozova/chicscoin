import React from 'react';
import { useTranslation } from 'react-i18next';

export enum CardTokenomicsType {
    Pink = 'pink',
    Teal = 'teal',
}

interface CardTokenomicsProps {
    number: number;
    textKey: string;
    type: CardTokenomicsType;
    className?: string;
}

const CardTokenomics: React.FC<CardTokenomicsProps> = ({ number, textKey, type, className }) => {
    const { t } = useTranslation();

    return (
        <div
            className={`relative transition-colors group rounded-3xl px-4 py-3.5 shadow-lg md:px-8 md:py-5 overflow-hidden
                ${className || ''}
                ${type === CardTokenomicsType.Pink ? 'hover:!border-[#5B004C]' : 'hover:!border-[#042521]'}
            `}
            style={{
                border: type === CardTokenomicsType.Pink ? '1px solid #AF0092' : '1px solid rgba(20, 184, 166, 0.7)',
            }}
        >
            <span
                className={`absolute inset-0 bg-gradient-to-r transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out opacity-50
                    ${type === CardTokenomicsType.Pink ? 'from-[#AF0092] to-[#BC0F58]' : 'from-[#14b8a6] to-[#115e59]'}
                `}
            ></span>
            <div
                className="relative w-7 h-7 md:w-9 md:h-9 rounded-full border border-white flex items-center justify-center mb-4"
            >
                <span className="font-audiowide md:text-xl">{number}</span>
            </div>

            <p className="relative text-sm md:text-base">{t(textKey)}</p>
        </div>
    );
};

export default CardTokenomics;
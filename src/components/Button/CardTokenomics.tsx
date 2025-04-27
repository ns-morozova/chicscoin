import React from 'react';
import { useTranslation } from 'react-i18next';

interface CardTokenomicsProps {
    number: number;
    textKey: string;
    type: 'primary' | 'secondary' | 'tertiary';
    className?: string;
}

const CardTokenomics: React.FC<CardTokenomicsProps> = ({ number, textKey, type, className }) => {
    const { t } = useTranslation();

    const cardStyles = {
        primary: {
            border: '1px solid #FF4FE2',
            color: '#FFFFFF',
        },
        secondary: {
            border: '1px solid #FFFFFF',
            color: '#FFFFFF',
        },
        tertiary: {
            background: '#000000',
            color: '#FFFFFF',
        },
    };

    const selectedStyle = cardStyles[type] || cardStyles.primary;

    return (
        <div
            className={`relative transition-colors group overflow-hidden rounded-3xl px-4 py-3.5 shadow-lg md:px-8 md:py-5 ${className || ''}`}
            style={{
                ...selectedStyle,
            }}
        >
            <span
                className="absolute inset-0 bg-gradient-to-r from-[#FF7475] to-[#BC0F58] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out opacity-50"
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
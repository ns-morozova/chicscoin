import React from 'react';
import { useTranslation } from 'react-i18next';

interface CardIdeologyProps {
    textKey: string;
    icon?: React.ReactElement;
    className?: string;
}

const CardIdeology: React.FC<CardIdeologyProps> = ({ textKey, icon, className }) => {
    const { t } = useTranslation();

    return (
        <div
            className={`relative bg-[#0F0F0F99] flex flex-col items-center gap-1 sm:items-start md:gap-3 transition-colors group overflow-hidden rounded-3xl px-4 py-3.5 shadow-lg md:px-8 md:py-5 ${className || ''}`}
        >
            {icon && (
                <div>
                    <div className="text-white">{icon}</div>
                </div>
            )}

            <p className="relative text-left text-sm md:text-base text-white">{t(textKey)}</p>
        </div>
    );
};

export default CardIdeology;
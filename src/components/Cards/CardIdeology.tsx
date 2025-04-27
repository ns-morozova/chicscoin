import React from 'react';
import { useTranslation } from 'react-i18next';

interface CardIdeologyProps {
    textKey: string;
    icon?: React.ReactElement<{ className?: string }>; // Явно указываем, что иконка поддерживает className
    className?: string;
}

const CardIdeology: React.FC<CardIdeologyProps> = ({ textKey, icon, className }) => {
    const { t } = useTranslation();

    return (
        <div
            className={`relative bg-[#0F0F0F99] flex flex-col items-center gap-5 sm:items-start md:gap-7 transition-all duration-300 group overflow-hidden rounded-3xl px-4 py-3.5 shadow-lg md:px-8 md:py-5 hover:bg-[#1A1A1A] ${className || ''}`}
        >
            {/* Контейнер для иконки */}
            {icon && React.isValidElement(icon) && (
                <div
                    className="relative w-14 h-14 flex-none rounded-lg border border-white/40 text-white overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover:bg-teal-500/20 group-hover:border-none"
                >
                    {/* Фоновый эффект при наведении */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-teal-500/90 to-slate-600/90 opacity-0 transition-opacity duration-300 group-hover:opacity-90 backdrop-blur-sm"
                    ></div>

                    {/* Декоративные элементы */}
                    <div className="absolute top-1 right-1 h-3 w-3 border-t border-r border-white/30"></div>
                    <div className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-white/30"></div>

                    {/* Анимация пульсации */}
                    <span
                        className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"
                        style={{ animationDuration: '2s' }}
                    ></span>

                    {/* Иконка */}
                    <div className="flex items-center justify-center h-full w-full relative z-10">
                        {React.cloneElement(icon, {
                            className: `w-7 h-7 text-[#DC99D4] transition-colors duration-300 group-hover:text-teal-500 ${icon.props.className || ''
                                }`,
                        })}
                    </div>

                    {/* Пульсирующая точка */}
                    <div
                        className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                        style={{ animationDuration: '3s' }}
                    ></div>
                </div>
            )}

            {/* Текст */}
            <p className="relative text-left text-sm md:text-base text-white transition-colors duration-300 group-hover:text-teal-500">
                {t(textKey)}
            </p>

            {/* Горизонтальная линия при наведении */}
            <div
                className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#AF0092] to-[#EB9FBE] transition-all duration-500 ease-out group-hover:w-full"
            ></div>
        </div>
    );
};

export default CardIdeology;
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export enum ButtonType {
    White = 'white',
    Gradient = 'gradient',
}

interface ButtonProps {
    href?: string;
    to?: string;
    onClick?: () => void;
    type: ButtonType;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, to, onClick, type, className, children }) => {
    const baseClasses =
        'group relative flex items-center justify-center overflow-hidden rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base shadow-sm transition-colors duration-300 z-20';

    return href || to ? (
        // Если передан href или to, рендерим ссылку <a> или <ScrollLink>
        to ? (
            <ScrollLink
                to={to}
                smooth={true}
                duration={600}
                className={`${baseClasses} ${className} cursor-pointer
                    ${type === ButtonType.White ? 'bg-white text-gray-950 ring-1 ring-gray-200 hover:border-pink-500/50 hover:text-pink-700 hover:ring-pink-300'
                        : 'bg-gradient-to-r from-[#AF0092] to-[#14B8A6] text-white hover:text-teal-200'}
                `}
            >
                <span className="relative z-10 flex items-center">
                    {children}
                    {/* Стрелка */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-0 h-5 ml-0 transition-all duration-500 ease-out opacity-0 group-hover:w-5 group-hover:ml-2 group-hover:opacity-100"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
                <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-pink-500/10 group-hover:ring-pink-500/20 transition-all duration-300"></span>
                <span className="absolute -bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-pink-500/60 to-red-500/60 transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
        ) : (
            <a
                href={href}
                    className={`${baseClasses} ${className} cursor-pointer
                    ${type === ButtonType.White ? 'bg-white text-gray-950 ring-1 ring-gray-200 hover:border-pink-500/50 hover:text-pink-700 hover:ring-pink-300'
                        : 'bg-gradient-to-r from-[#AF0092] to-[#14B8A6] text-white hover:text-teal-200'}
                `}
            >
                <span className="relative z-10 flex items-center">
                    {children}
                    {/* Стрелка */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-0 h-5 ml-0 transition-all duration-500 ease-out opacity-0 group-hover:w-5 group-hover:ml-2 group-hover:opacity-100"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
                <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-pink-500/10 group-hover:ring-pink-500/20 transition-all duration-300"></span>
                <span className="absolute -bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-pink-500/60 to-red-500/60 transition-all duration-300 group-hover:w-full"></span>
            </a>
        )
    ) : (
        // Если href не передан, рендерим кнопку <button>
        <button onClick={onClick} className={`${baseClasses} ${className}
            ${type === ButtonType.White ? 'bg-white text-gray-950 ring-1 ring-gray-200 hover:border-pink-500/50 hover:text-pink-700 hover:ring-pink-300'
                : 'bg-gradient-to-r from-[#AF0092] to-[#14B8A6] text-white hover:text-teal-200'}
        `}>
            <span className="relative z-10 flex items-center">
                {children}
                {/* Стрелка */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-0 h-5 ml-0 transition-all duration-500 ease-out opacity-0 group-hover:w-5 group-hover:ml-2 group-hover:opacity-100"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
            <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-pink-500/10 group-hover:ring-pink-500/20 transition-all duration-300"></span>
            <span className="absolute -bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-pink-500/60 to-red-500/60 transition-all duration-300 group-hover:w-full"></span>
        </button>
    );
};

export default Button;
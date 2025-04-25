import React from 'react';

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, onClick, className, children }) => {
    const baseClasses =
        'group relative h-[52px] flex items-center justify-center overflow-hidden rounded-lg bg-white px-6 py-3.5 text-base font-medium tracking-wider text-gray-950 shadow-sm ring-1 ring-gray-200 transition-colors duration-300 hover:border-pink-500/50 hover:text-pink-700 hover:ring-pink-300';

    return href ? (
        // Если передан href, рендерим ссылку <a>
        <a href={href} className={`${baseClasses} ${className}`}>
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
    ) : (
        // Если href не передан, рендерим кнопку <button>
        <button onClick={onClick} className={`${baseClasses} ${className}`}>
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
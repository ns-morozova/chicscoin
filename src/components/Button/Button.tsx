import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
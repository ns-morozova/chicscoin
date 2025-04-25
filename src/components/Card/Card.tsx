import React from 'react';

interface CardProps {
    title: string;
    description: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, className }) => {
    return (
        <div
            className={`p-6 bg-white rounded-lg shadow-md ${className}`}
        >
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
};

export default Card;
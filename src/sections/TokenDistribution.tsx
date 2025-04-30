import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DataItem {
    name: string;
    value: number;
}

const TokenDistribution: React.FC = () => {
    // Данные для диаграммы
    const data: DataItem[] = [
        { name: 'Open Market', value: 45 },
        { name: 'Frozen until 2025', value: 38.5 }, // 70% от 55%
        { name: 'Marketing and Community', value: 16.5 }, // 30% от 55%
    ];

    // Цвета для сегментов диаграммы
    const COLORS = ['#14B8A6', '#AF0092', '#FFC75F'];

    return (
        <section className="px-4 py-8 lg:px-8 md:py-16">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                {/* Заголовок */}
                <h2 className="text-2xl font-bold mb-2 text-center">
                    Distribution of CHICS Emission (1 Billion CHICS)
                </h2>

                {/* Диаграмма */}
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                        {/* Основная диаграмма */}
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        {/* Подпись для 45% */}
                        <text
                            x="50%"
                            y="50%"
                            dy="-120"
                            textAnchor="middle"
                            fontSize="14"
                            fill="#fff"
                            fontWeight="bold"
                        >
                            Open Market (45%)
                        </text>

                        {/* Подпись для 55% */}
                        <text
                            x="50%"
                            y="125%"
                            dy="-120"
                            textAnchor="middle"
                            fontSize="14"
                            fill="#fff"
                            fontWeight="bold"
                        >
                            Developers & Pre-Seed Investors (55%)
                        </text>

                        {/* Подсказки при наведении */}
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>

                {/* Подробное описание */}
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        Total Emission: 1 Billion CHICS
                    </p>
                    <ul className="list-disc list-inside text-sm">
                        <li>45% to Open Market</li>
                        <li>(Within 55%) 70% Frozen until 2025</li>
                        <li>(Within 55%) 30% for Marketing and Community</li>
                    </ul>
                </div>
            </div>
        </section>
        
    );
};

export default TokenDistribution;
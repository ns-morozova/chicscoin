import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

interface DataItem {
    name: string;
    value: number;
}

const TokenDistribution: React.FC = () => {
    const { t } = useTranslation();

        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.3,
        });

    // Данные для основной диаграммы (45% и 55%)
    const mainData: DataItem[] = [
        { name: 'Open Market', value: 45 },
        { name: 'Developers & Pre-Seed Investors', value: 55 },
    ];

    // Данные для внешней дуги (детализация 55% на 70% и 30%)
    const outerArcData: DataItem[] = [
        { name: 'Frozen until 2025', value: 38.5 }, // 70% от 55%
        { name: 'Marketing and Community', value: 16.5 }, // 30% от 55%
    ];

    return (
        <section className="px-4 py-8 lg:px-8 md:py-16">
            <div ref={ref} className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                {/* Заголовок */}
                <h2 className={`text-2xl font-bold mb-2 text-center animationShift ${
                    inView ? 'endShift' : 'startShift'
                }`}>
                    {t('distribution.title')}
                </h2>

                <div className={`relative w-full animationShift tr-delay ${
                    inView ? 'endShift' : 'startShift'
                }`}>
                    {/* Диаграмма */}
                    <ResponsiveContainer width="100%" height={350}>
                        <PieChart>
                            {/* Определение градиентов */}
                            <defs>
                                {/* Градиент для первого сегмента основной диаграммы */}
                                <linearGradient id="mainGradient1" x1="0" y1="1" x2="0" y2="0">
                                    <stop offset="0%" stopColor="#14b8a6" />
                                    <stop offset="100%" stopColor="#134e4a" />
                                </linearGradient>

                                {/* Градиент для второго сегмента основной диаграммы */}
                                <linearGradient id="mainGradient2" x1="0" y1="1" x2="0" y2="0">
                                    <stop offset="0%" stopColor="#ec4899" />
                                    <stop offset="100%" stopColor="#7B206C" />
                                </linearGradient>

                                {/* Градиент для первого сегмента внешней дуги */}
                                <linearGradient id="outerGradient1" x1="0" y1="1" x2="0" y2="0">
                                    <stop offset="0%" stopColor="#40D6F7" />
                                    <stop offset="100%" stopColor="#003883" />
                                </linearGradient>

                                {/* Градиент для второго сегмента внешней дуги */}
                                <linearGradient id="outerGradient2" x1="0" y1="1" x2="0" y2="0">
                                    <stop offset="0%" stopColor="#8A2D8D" />
                                    <stop offset="100%" stopColor="#00B4D8" />
                                </linearGradient>
                            </defs>

                            {/* Основная диаграмма (45% и 55%) */}
                            <Pie
                                data={mainData}
                                cx="50%"
                                cy="50%"
                                outerRadius={110}
                                innerRadius={50}
                                fill="#8884d8"
                                dataKey="value"
                                startAngle={-90} // Начальный угол (верхняя точка)
                                endAngle={270} // Конечный угол (полный круг)
                                stroke="none" // Убираем обводку
                            >
                                {mainData.map((entry, index) => (
                                    <Cell
                                        key={`cell-main-${index}`}
                                        fill={index === 0 ? 'url(#mainGradient1)' : 'url(#mainGradient2)'}
                                    />
                                ))}
                            </Pie>

                            {/* Внешняя дуга (70% и 30% от 55%) */}
                            <Pie
                                data={outerArcData}
                                cx="50%"
                                cy="50%"
                                outerRadius={130} // Больший радиус для внешней дуги
                                innerRadius={120} // Меньший радиус для создания тонкой дуги
                                fill="#8884d8"
                                dataKey="value"
                                startAngle={-90 + (45 / 100) * 360} // Начало после 45%
                                endAngle={270} // Конец на полном круге
                                stroke="none" // Убираем обводку
                            >
                                {outerArcData.map((entry, index) => (
                                    <Cell
                                        key={`cell-outer-${index}`}
                                        fill={index === 0 ? 'url(#outerGradient1)' : 'url(#outerGradient2)'}
                                    />
                                ))}
                            </Pie>

                            {/* Подсказки при наведении */}
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <div className="relative">
                            <span className="absolute top-1/2 -translate-y-1/2 -left-24">55%</span>
                            <span className="absolute top-1/2 -translate-y-1/2 -right-24">45%</span>

                            <span className="absolute -top-32 -left-32 mt-2">70%</span>
                            <span className="absolute top-24 -left-32">30%</span>
                        </div>
                    </div>
                </div>

                {/* Подробное описание */}
                <div className="mt-4 text-center">
                    <p className={`font-medium mb-4 md:mb-6 animationShift !delay-[1000ms] ${
                        inView ? 'endShift' : 'startShift'
                    }`}>
                        {t('distribution.totalEmission')}
                    </p>
                    <ul className="flex flex-col items-start gap-2 text-left list-disc list-inside text-sm mx-auto sm:w-3/4 md:text-base">
                        <li className={`animationShift !delay-[1200ms] ${inView ? 'endShift' : 'startShift'
                    }`}>{t('distribution.openMarket')}</li>
                        <li className={`animationShift !delay-[1400ms] ${inView ? 'endShift' : 'startShift'
                        }`}>
                            {t('distribution.developersAndInvestors')} <br />
                            <span className="pl-3.5">
                                ({t('distribution.ofWhich')} {t('distribution.frozenUntil2025')} {t('distribution.and')}{' '}
                                {t('distribution.marketingAndCommunity')})
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TokenDistribution;
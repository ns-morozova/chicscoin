import React from 'react';
import { useTranslation } from 'react-i18next';

const Ideology: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section
            className="relative mt-10"
            style={{
                background: 'linear-gradient(90deg, #430030 0%, #18053A 20%, #4D204C 40%, #D3495A 60%, #FF516B 75%, #FF6C78 90%, #160438 100%)',
            }}
        >
            {/* Полукруг */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[300%] aspect-square rounded-full overflow-hidden -mt-48 z-10"
            >
                <div
                    className="w-full h-full"
                    style={{
                        background: 'linear-gradient(90deg, #430030 0%, #18053A 20%, #4D204C 40%, #D3495A 60%, #FF516B 75%, #FF6C78 90%, #160438 100%)', // Градиент для круга
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 relative z-20">
                <h2 className="absolute -top-32 left-1/2 -translate-x-1/2 font-audiowide uppercase text-3xl text-white mb-4">
                    {t('ideology.title')}
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                    Мы стремимся к созданию инновационных решений, которые объединяют людей и технологии.
                </p>

                <div className="flex flex-wrap gap-4">
                    <button className="bg-transparent border border-white/50 hover:bg-white/20 text-white hover:text-black rounded-lg px-4 py-2">
                        Организация трансляций
                    </button>
                    <button className="bg-transparent border border-white/50 hover:bg-white/20 text-white hover:text-black rounded-lg px-4 py-2">
                        Выявление симпатий
                    </button>
                    <button className="bg-transparent border border-white/50 hover:bg-white/20 text-white hover:text-black rounded-lg px-4 py-2">
                        Совместные матчи
                    </button>
                    <button className="bg-transparent border border-white/50 hover:bg-white/20 text-white hover:text-black rounded-lg px-4 py-2">
                        Внутриигровые покупки
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Ideology;
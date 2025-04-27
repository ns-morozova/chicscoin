import React from 'react';
import { useTranslation } from 'react-i18next';

const Ideology: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="px-4 py-8 lg:px-8 md:py-16">

            <div className="max-w-7xl mx-auto">
                <div className="lg:hidden mx-auto mb-6 w-20 sm:w-24 md:w-28 h-auto rounded-full overflow-hidden">
                    <img
                        alt={t('navbar.logo')}
                        src="/images/chiks-coin2.png"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <p className="text-sm text-white text-center md:text-base">
                    CHICS — криптовалюта для геймеров и стримеров. <br></br> Удобный инструмент взаимодействия геймеров
                    с популярными девушками-стримерами
                </p>
                
            </div>
        </section>
    );
};

export default Ideology;
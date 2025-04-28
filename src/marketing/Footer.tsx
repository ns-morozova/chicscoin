import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="px-4 py-8 lg:px-8 md:py-16">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex flex-col gap-1 md:gap-4">
                    <h2
                        className="font-audiowide font-bold uppercase text-nowrap text-2xl md:text-5xl"
                        style={{
                            background: 'linear-gradient(90deg, #AF0092, #14B8A6)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        {t('footer.title')}
                    </h2>
                    <p className="text-white/50 text-xs md:text-base">
                        {t('footer.copyright')}
                    </p>
                </div>

                <Link
                    to="home"
                    smooth={true}
                    duration={600}
                    className="-m-1.5 p-1.5 cursor-pointer"
                >
                    <span className="sr-only">{t('navbar.logo')}</span>
                    <div className="w-16 md:w-24 lg:w-28 h-auto rounded-full overflow-hidden">
                        <img
                            alt={t('navbar.logo')}
                            src="/images/chiks-coin2.png"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </Link>

            </div>
        </footer>
    );
};

export default Footer;
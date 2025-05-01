import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    // Хук для отслеживания видимости футера
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <footer className="px-4 pt-8 lg:px-8 md:pt-16">
            <div ref={ref} className="relative max-w-7xl mx-auto flex justify-between items-center py-8 md:py-16">
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
                        {t('title')}
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
                    <div
                        className="w-16 md:w-24 lg:w-28 h-auto rounded-full hover:rotate-12 hover:shadow-[0_0_50px] hover:scale-105 hover:shadow-teal-600 transition-all duration-500 ease-out overflow-hidden"
                    >
                        <img
                            alt={t('navbar.logo')}
                            src="/images/chiks-coin2.png"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </Link>

                {/* <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#AF0092] to-[#14B8A6] md:h-0.5"></div> */}

                <div
                    className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#AF0092] to-[#14B8A6] md:h-0.5 transition-all duration-2000 ease-out ${inView ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        transform: inView ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                    }}
                ></div>

            </div>
        </footer>
    );
};

export default Footer;
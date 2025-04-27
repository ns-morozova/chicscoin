import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const { t, i18n } = useTranslation();

    // Функция для переключения языка
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    // Обработчик изменения языка
    const handleLanguageChange = (language: string) => {
        setCurrentLanguage(language);
        setIsOpen(false);
        changeLanguage(language);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* Центрированный контейнер для десктопа */}
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <nav
                    aria-label="Global"
                    className="relative mx-auto mt-4 rounded-full shadow-lg lg:mt-6 overflow-hidden"
                >
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(90deg, #AF0092, #14B8A6)',
                            opacity: 1,
                            zIndex: -1,
                        }}
                    ></div>

                    <div className="relative flex items-center justify-end px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:justify-center lg:py-4.5">
                        {/* Логотип */}
                        <div className="absolute left-1.5 flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">{t('navbar.logo')}</span>
                                <div className="w-8 sm:w-10 md:w-11 lg:w-13 h-auto rounded-full overflow-hidden">
                                    <img
                                        alt={t('navbar.logo')}
                                        src="/images/chiks-coin2.png"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </a>
                        </div>

                        {/* Кнопка для мобильного меню */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        {/* Десктопное меню */}
                        <div className="hidden text-base font-medium lg:flex lg:gap-x-14 xl:gap-x-20">
                            <a
                                href="#home"
                                className="hover:text-[#FFE6E6] transition-colors"
                            >
                                {t('navbar.menu.home')}
                            </a>
                            <a
                                href="#about"
                                className="hover:text-[#FFE6E6] transition-colors"
                            >
                                {t('navbar.menu.about')}
                            </a>
                            <a
                                href="#services"
                                className="hover:text-[#FFE6E6] transition-colors"
                            >
                                {t('navbar.menu.services')}
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-[#FFE6E6] transition-colors"
                            >
                                {t('navbar.menu.contact')}
                            </a>
                        </div>

                        {/* Переключатель языка */}
                        <div className="lang-switcher pr-2 transition-colors duration-300 hidden lg:block lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2">
                            <select
                                className="selector bg-transparent p-1.5 outline-none cursor-pointer"
                                onChange={(e) => changeLanguage(e.target.value)}
                            >
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                    </div>
                    
                </nav>
            </div>

            {/* Мобильное меню */}
            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <div className="fixed inset-0 z-10 bg-black/50" />
                <DialogPanel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-[#141414] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 z-50">
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="font-medium text-base space-y-2 py-6">
                                <a
                                    href="#home"
                                    className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-800 transition-colors"
                                >
                                    {t('navbar.menu.home')}
                                </a>
                                <a
                                    href="#about"
                                    className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-800 transition-colors"
                                >
                                    {t('navbar.menu.about')}
                                </a>
                                <a
                                    href="#services"
                                    className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-800 transition-colors"
                                >
                                    {t('navbar.menu.services')}
                                </a>
                                <a
                                    href="#contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-800 transition-colors"
                                >
                                    {t('navbar.menu.contact')}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Переключатель языка в мобильном меню */}
                    {/* <div className="lang-switcher mt-4">
                        <select
                            className="selector bg-transparent border border-white rounded p-1 w-full outline-none focus:outline-none"
                            onChange={(e) => changeLanguage(e.target.value)}
                        >
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                        </select>
                    </div> */}

                    <div className="absolute top-6 left-6">
                        <div className="lang-switcher relative w-max">
                            {/* Кнопка для отображения текущего языка */}
                            <div className="relative px-0.5">
                                <button
                                    className="custom-selector m-0.5 ml-0 bg-[#141414] rounded px-3 w-full text-left outline-none focus:outline-none"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {currentLanguage === 'en' ? 'EN' : 'RU'}
                                </button>
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-[#AF0092] to-[#14B8A6] rounded -z-10"
                                ></div>
                            </div>
                            
                            {/* Выпадающее меню */}
                            {isOpen && (
                                <div className="absolute top-full left-0 w-full bg-gradient-to-b from-[#AF0092] to-[#14B8A6] rounded shadow-lg mt-2 py-2 z-10">
                                    <button
                                        className="block w-full mb-1 hover:text-gray-100"
                                        onClick={() => handleLanguageChange('en')}
                                    >
                                        EN
                                    </button>
                                    <button
                                        className="block w-full hover:text-gray-100"
                                        onClick={() => handleLanguageChange('ru')}
                                    >
                                        RU
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-32 h-auto mx-auto mt-20 rounded-full overflow-hidden">
                        <img
                            alt={t('navbar.logo')}
                            src="/images/chiks-coin2.png"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Navbar;
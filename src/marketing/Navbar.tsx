import React from 'react';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    // Функция для переключения языка
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* Центрированный контейнер для десктопной версии */}
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <nav
                    aria-label="Global"
                    className="relative mx-auto mt-4 rounded-full shadow-lg lg:mt-6 overflow-hidden"
                    style={{
                        background: 'linear-gradient(90deg, #1B0643, #8F0050, #BC0F58, #E7005B, #FF6068, #FF7475)',
                    }}
                >
                    <div className="relative bg-gray-200/20 backdrop-blur-md flex items-center justify-end p-2 sm:p-6 lg:justify-center">
                        {/* Логотип */}
                        <div className="absolute left-2 sm:left-3 lg:left-2 flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">{t('navbar.logo')}</span>
                                <div className="w-8 sm:w-14 lg:w-16 h-auto rounded-full overflow-hidden">
                                    <img
                                        alt={t('navbar.logo')}
                                        src="/images/chiks-coin.png"
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
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        {/* Десктопное меню */}
                        <div className="hidden text-xl font-medium text-[#FFE6E6] lg:flex lg:gap-x-14 xl:gap-x-20">
                            <a
                                href="#home"
                                className="hover:text-[#FFB4B4] transition-colors"
                            >
                                {t('navbar.menu.home')}
                            </a>
                            <a
                                href="#about"
                                className="hover:text-[#FFB4B4] transition-colors"
                            >
                                {t('navbar.menu.about')}
                            </a>
                            <a
                                href="#services"
                                className="hover:text-[#FFB4B4] transition-colors"
                            >
                                {t('navbar.menu.services')}
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-[#FFB4B4] transition-colors"
                            >
                                {t('navbar.menu.contact')}
                            </a>
                        </div>

                        {/* Переключатель языка */}
                        <div className="lang-switcher bg-gray-200/20 hover:bg-gray-200/40 backdrop-blur-md rounded-md pr-2 transition-colors duration-300 hidden lg:block lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2">
                            <select
                                className="selector bg-transparent text-white p-1.5 outline-none cursor-pointer"
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
                <DialogPanel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-[#BC0F58] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 z-50">
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#home"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800 transition-colors"
                                >
                                    {t('navbar.menu.home')}
                                </a>
                                <a
                                    href="#about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800 transition-colors"
                                >
                                    {t('navbar.menu.about')}
                                </a>
                                <a
                                    href="#services"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800 transition-colors"
                                >
                                    {t('navbar.menu.services')}
                                </a>
                                <a
                                    href="#contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800 transition-colors"
                                >
                                    {t('navbar.menu.contact')}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Переключатель языка в мобильном меню */}
                    <div className="lang-switcher mt-4">
                        <select
                            className="selector bg-transparent text-white border border-white rounded p-1 w-full outline-none focus:outline-none"
                            onChange={(e) => changeLanguage(e.target.value)}
                        >
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                        </select>
                    </div>

                    <div className="w-32 h-auto mx-auto mt-20 rounded-full overflow-hidden">
                        <img
                            alt={t('navbar.logo')}
                            src="/images/chiks-coin.png"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Navbar;
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Telegram from '../assets/icons/telegram.svg';
import Instagram from '../assets/icons/instagram.svg';
import Discord from '../assets/icons/discord.svg';

const Social: React.FC = () => {
    const socialLinks = [
        { href: 'https://t.me/chicscoin', icon: Telegram, alt: 'Telegram' },
        { href: 'https://instagram.com/chicscoin', icon: Instagram, alt: 'Instagram' },
        { href: 'https://discord.com/', icon: Discord, alt: 'Discord' },
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [visibleLinks, setVisibleLinks] = useState<number[]>([]);

    useEffect(() => {
        if (inView) {
            const startAnimation = async () => {
                await new Promise((resolve) => setTimeout(resolve, 400));

                for (let i = 0; i < socialLinks.length; i++) {
                    await new Promise((resolve) => setTimeout(resolve, 120 * (i + 1)));
                    setVisibleLinks((prev) => [...prev, i]);
                }
            };

            startAnimation();
        }
    }, [inView]);

    return (
        <section className="px-4 pb-8 lg:px-8 md:pb-16">
            <div ref={ref} className="relative max-w-7xl mx-auto">
                <div className="relative w-max mx-auto flex justify-center gap-6 px-16 py-2 md:gap-10 md:px-20">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative w-12 h-12 flex items-center justify-center border border-white/30 rounded-full transition-all duration-300 md:w-20 md:h-20 hover:-translate-y-3 overflow-hidden z-20 animationShift ${
                                visibleLinks.includes(index) ? 'endShift' : 'startShift'
                            }`}
                        >
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-[#AF0092] to-[#14B8A6] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out opacity-90"
                            ></span>

                            <img
                                src={link.icon}
                                alt={link.alt}
                                className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110 md:w-8 md:h-8"
                            />
                        </a>
                    ))}
                    <div
                        className={`absolute w-full inset-0 bg-gradient-to-br from-[#AF0092]/70 to-[#14B8A6]/70 rounded-full blur-[50px] md:hidden ${
                            visibleLinks.includes(2) ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            willChange: 'transform, opacity',
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Social;
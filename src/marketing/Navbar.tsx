import React from 'react';

interface NavbarProps {
    items: { label: string; anchor: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    return (
        <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-[#BC0F58] rounded-full p-2 md:p-4 shadow-lg z-50">
            <div className="relative flex items-center justify-between md:justify-center">
                <div className="w-12 md:w-24 rounded-full overflow-hidden md:absolute md:-left-36 md:top-1/2 md:-translate-y-1/2">
                    <img
                        src="/images/chiks-coin.png"
                        alt="logo"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <ul className="flex gap-4 md:gap-10 text-white">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${item.anchor}`} // Якорная ссылка
                                className="hover:text-white transition-colors"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
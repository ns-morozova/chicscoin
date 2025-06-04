import React from 'react';

const DexScreenerEmbed: React.FC = () => {
    return (
        <section className="px-4 py-8 lg:px-8 md:py-16 text-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                {/* Заголовок */}
                <h1 className="text-2xl font-bold mb-4">ChicsCoin</h1>

                {/* Описание */}
                <p className="text-lg mb-4">
                    Claim Your DEX Screener <br />
                    <strong>Token Profile</strong> ### ChicsCoin
                </p>
                <p className="text-sm md:text-base mb-6">
                    CHICS unites fans of female gaming and the esports world with a real crypto economy. We're here to prove the
                    real-world applicability of the TON ecosystem beyond Web3. Hold CHICS, play with girls!
                </p>

                {/* Секция с загрузкой */}
                <div className="flex flex-col items-center justify-center mb-6">
                    <span className="text-xl font-semibold">CHICS</span>
                    <span className="text-gray-400">Loading...</span>
                </div>

                {/* Встраиваемый iframe */}
                <div
                    className="relative w-full h-0 overflow-hidden"
                    style={{ paddingBottom: '125%' }} // Адаптивная высота для мобильных устройств
                >
                    <iframe
                        src="https://dexscreener.com/ton/EQC0BZ2HLYUE6wPjUtuNJ9lcLFsGp2-5HG3-vs-EGrKmMiS_?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                        className="absolute top-0 left-0 w-full h-full border-0"
                        title="DexScreener Embed"
                    ></iframe>
                </div>
            </div>
            
        </section>
    );
};

export default DexScreenerEmbed;
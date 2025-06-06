import React from 'react';
// import { Navbar, Footer } from '../marketing';
import { DexScreenerEmbed } from '../sections';

const DexScreener: React.FC = () => {
    return (
        <div className="relative overflow-hidden">
            <DexScreenerEmbed />
        </div>
    );
};

export default DexScreener;
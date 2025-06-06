import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from "../marketing";
import { Footer } from "../marketing";

const Layout: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <main className="flex-1 w-full">
                <div className="flex max-w-full">
                    <div className="flex flex-col w-full">
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
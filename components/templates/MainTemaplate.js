import React from 'react';
import Footer from '../modules/Footer';
import Header from '../modules/Header';

const MainTemaplate = ({ children }) => {
    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto p-4">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default MainTemaplate;
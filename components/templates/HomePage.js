import React from 'react';
import About from '../modules/About';
import Banner from '../modules/Banner';
import Companies from '../modules/Companies';
import Guide from '../modules/Guide';
import Links from '../modules/Links';
import Restrictions from '../modules/Restrictions';
import WhyUs from '../modules/WhyUs';

const HomePage = () => {
    return (
        <>
            <Banner />
            <WhyUs />
            <About />
            <Companies />
            <Guide />
            <Links />
            <Restrictions />
        </>
    );
};

export default HomePage;
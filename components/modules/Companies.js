import React from 'react';
import Apple from '../icons/Apple';
import Binance from '../icons/Binance';
import SpaceX from '../icons/SpaceX';
import Tesla from '../icons/Tesla';

const Companies = () => {
    return (
        <section className="flex justify-between items-center">
            <Apple />
            <SpaceX />
            <Binance />
            <Tesla />
        </section>
    );
};

export default Companies;
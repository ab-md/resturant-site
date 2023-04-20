import React from 'react';
import Choice from '../icons/Choice';
import Clock from '../icons/Clock';
import Fast from '../icons/Fast';
import Food from '../icons/Food';

const WhyUs = () => {
    return (
        <section className="flex flex-col mt-24">
            <p className="text-green-500 fontStyle why-us-title">Why us?</p>
            <div 
            className="flex flex-wrap justify-between gap-x-4 gap-y-12 mt-10 why-us"
            // className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
            >
                <div className="py-12 w-40 shadow-lg shadow-slate-300 rounded-lg flex flex-col items-center justify-center">
                    <Fast />
                    <p className="mt-4 font-medium text-center">Fast</p>
                </div>
                <div className="py-12 w-40 shadow-lg shadow-slate-300 rounded-lg flex flex-col items-center justify-center">
                    <Food />
                    <p className="mt-4 font-medium text-center">Best Restaurants</p>
                </div>
                <div className="py-12 w-40 shadow-lg shadow-slate-300 rounded-lg flex flex-col items-center justify-center">
                    <Choice />
                    <p className="mt-4 font-medium text-center">Your Choice</p>
                </div>
                <div className="py-12 w-40 shadow-lg shadow-slate-300 rounded-lg flex flex-col items-center justify-center">
                    <Clock />
                    <p className="mt-4 font-medium text-center">24 - 7</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
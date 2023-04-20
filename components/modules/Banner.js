import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <section
            className="flex flex-col-reverse md:flex-row items-center mt-24"
        // className="grid grid-cols-1 sm:grid-cols-2 items-center mt-24"
        >
            <div className="flex flex-1 flex-col items-start gap-6">
                <h3 className="border-b-3 border-green-600 fontStyle">
                    FoodsFront
                </h3>
                <p className="font-medium">Food Delivery and Takeout!</p>
                <p className="text-justify">BotoFood is an online food ordering and delivery platform launched by Uber in 2014. Meals are delivered by couriers using cars, scooters, bikes, or on foot.</p>
                <button className="bg-green-600 py-2 px-6 rounded-md text-white">
                    <Link href="/menu">See All</Link>
                </button>
            </div>
            <div className="flex-1 mb-12 md:mb-0 w-full">
                <Image
                    className="w-full"
                    src="/images/banner.png"
                    width="500" height="500" alt="banner"
                />
            </div>
        </section>
    );
};

export default Banner;
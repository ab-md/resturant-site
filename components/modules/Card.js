import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Dollar from '../icons/Dollar';
import Location from '../icons/Location';

const Card = ({ data }) => {

    return (
        <div className="shadow-my p-3 rounded-lg">
            <div className={`${data.discount ? "relative" : ""}`}>
                <Image
                    className="rounded-lg"
                    src={`/images/${data.id}.jpeg`}
                    width={1000} height={1000}
                    alt={data.name} />
                {
                    data.discount ? (
                        <div className="absolute top-1 left-1 p-1 bg-red-600 text-white font-bold rounded-lg border-3 border-white">{data.discount} %</div>
                    ) : null
                }
            </div>
            <div className="flex justify-between items-center mt-6">
                <h3 className="text-green-500 text-lg">{data.name}</h3>
                <div className="flex items-center">
                    <Location />
                    <p className="text-gray-500">{data.details[0].Cuisine}</p>
                </div>
            </div>
            <div className="flex items-center mt-6">
                <Dollar />
                <p className={`${data.discount ? "text-red-600" : ""}`}>
                    {Math.ceil(data.price - data.price * data.discount / 100)} $
                    {/* {(data.price * (100 - data.discount)) / 100} $ */}
                </p>
            </div>
            <Link
                className="block text-center bg-green-600 mt-6 w-full py-1 rounded-md text-white"
                href={`/menu/${data.id}`}>See Details</Link>
        </div>
    );
};

export default Card;
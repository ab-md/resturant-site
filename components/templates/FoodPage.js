import Image from 'next/image';
import React from 'react';
import Dollar from '../icons/Dollar';
import Location from '../icons/Location';

const FoodPage = ({ data }) => {

    const { id, name, price, discount, introduction, details, details: [country], ingredients, recipe } = data;

    return (
        <main className="mt-24">
            <p className="text-3xl border-b-5 border-green-600 inline-block">Details</p>
            <div className="sm:grid grid-cols-2 items-center">
                <Image
                    className="mt-16 rounded-xl" alt={data.name}
                    src={`/images/${id}.jpeg`} width={1000} height={1000}
                />
                <div className="sm:pl-8">
                    <h1 className="text-xl font-bold text-green-600 mt-4">{name}</h1>
                    <div className="flex items-center mt-8">
                        <Location />
                        <p className="text-gray-500">{country.Cuisine}</p>
                    </div>
                    <div className="flex items-center mt-12">
                        <Dollar />
                        <p>{(price * (100 - discount) / 100)}$</p>
                    </div>
                    {
                        discount ? (
                            <div className="bg-red-600 bg-opacity-90 py-2 text-center rounded-md text-white mt-6">
                                {discount}% OFF
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <p className="text-justify mt-12">{introduction}</p>
            <div className="mt-16">
                <p className="text-xl text-green-600 font-bold">Details</p>
                <ul className="list-disc list-inside mt-4">
                    {
                        details.map((data, index) => (
                            <li key={index} className="py-1">
                                <span className="font-bold text-lg">{Object.keys(data)}: </span>
                                <span className="text-gray-500">{Object.values(data)}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="mt-16">
                <p className="text-xl text-green-600 font-bold">Ingredients</p>
                <ul className="list-disc list-inside mt-4">
                    {
                        ingredients.map((data, index) => (
                            <li className="p-1 font-bold text-lg" key={index}>{data}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="mt-16">
                <p className="text-xl text-green-600 font-bold">Recipe</p>
                <ul className="mt-4">
                    {
                        recipe.map((data, index) => (
                            <li key={index}
                                className={`${index % 2 == 0 ? "bg-green-300 bg-opacity-80" : "bg-green-100"} p-4 py-24 sm:py-4 h-24 flex items-center`}>
                                <span className="text-3xl px-4">{index + 1}</span>
                                <span>{data}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="my-28">
                <button className="w-full bg-green-500 text-white text-xl py-3 rounded-md">Add To Cart</button>
            </div>
        </main>
    );
};

export default FoodPage;
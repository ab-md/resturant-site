import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Card from '../modules/Card';

const CategoriesPage = ({ data }) => {

    const router = useRouter();
    const { query: { difficulty, time } } = router;

    const [filters, setFilters] = useState({ difficulty: "", time: "" });

    const filterHandler = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
    }

    const filterFoods = e => {
        e.preventDefault();
        if (!filters.difficulty || !filters.time) alert("Select Options first.");
        router.push({
            pathname: "/categories",
            query: filters,
        })
    }

    useEffect(() => {
        if (filters.difficulty !== difficulty || filters.time !== time) {
            setFilters({ difficulty, time });
        }
    }, [])

    return (
        <div className="mt-24">
            <p className="text-3xl border-b-5 border-green-600 inline-block leading-8">Categories</p>
            <form className="mt-12 flex flex-col w-full sm:flex-row">
                <select
                    value={filters.difficulty}
                    name="difficulty"
                    onChange={filterHandler}
                    className="text-green-600 bg-gray-200 p-2 rounded-lg shadow-lg">
                    <option value="">Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <select
                    value={filters.time}
                    name="time"
                    onChange={filterHandler}
                    className="text-green-600 bg-gray-200 p-2 rounded-lg shadow-my sm:ml-4 mt-6 sm:mt-0">
                    <option value="">Cooking Time</option>
                    <option value="more">More than 30 min</option>
                    <option value="less">Less than 30 min</option>
                </select>
                <button
                    onClick={filterFoods}
                    className="bg-green-500 text-white px-4 py-1 h-9 rounded-lg sm:ml-3 mt-6 sm:mt-0"
                >Search
                </button>
            </form>
            {
                !data.length ? (
                    <div className="my-44 w-full h-full flex justify-center items-center">
                        <Image
                            className="w-96"
                            src="/images/search.png" width={700} height={700} alt="search" />
                    </div>
                ) : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-24 mt-16">
                    {data.map(food => (
                        <Card key={food.id} data={food} />
                    ))}
                </div>
            }
        </div>
    );
};

export default CategoriesPage;
import CategoriesPage from '@/components/templates/CategoriesPage';
import React from 'react';

const index = ({ data }) => {

    return (
        <>
            <CategoriesPage data={data} />
        </>
    );
};

export default index;

export async function getServerSideProps(context) {
    const { query: { difficulty, time } } = context;
    const req = await fetch(`${process.env.BASE_URL}`);
    const res = await req.json();
    const splitData = data => {
        const pureTime = data.details.at(4)["Cooking Time"].split(" ").at(0);
        return pureTime;
    }
    let filteredFoods = [];
    if (time === "more") {
        filteredFoods = res.filter((food) => (
            food.details[2].Difficulty === difficulty && splitData(food) > 30
            // food.details[4]["Cooking Time"].split(" ")[0];
        ))
    } else if (time === "less") {
        filteredFoods = res.filter(food =>
            food.details.at(2).Difficulty === difficulty && splitData(food) < 30
        );
    }
    return {
        props: {
            data: filteredFoods,
        },
    }
}
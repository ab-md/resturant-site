import Menu from '@/components/templates/Menu';
import { data } from 'autoprefixer';
import React from 'react';

const index = ({ foods }) => {

    return (
        <>
            <Menu foods={foods} />
        </>
    );
};

export default index;

export async function getStaticProps() {
    const res = await fetch(`${process.env.BASE_URL}`);
    const data = await res.json();
    return {
        props: {
            foods: data,
        },
        revalidate: 60 * 60 * 5,
    }
}
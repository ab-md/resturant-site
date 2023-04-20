import Link from 'next/link';
import React from 'react';

const Links = () => {
    return (
        <section className="flex justify-between mt-24">
            <div className="py-4 px-8 shadow-lg rounded-lg w-48 text-center">
                <Link href="/menu">Menu</Link>
            </div>
            <div className="py-4 px-8 shadow-lg rounded-lg w-48 text-center">
                <Link href="/categories">Categories</Link>
            </div>
            <div className="py-4 px-8 shadow-lg rounded-lg w-48 text-center">
                <Link href="/discount">Discount</Link>
            </div>
        </section>
    );
};

export default Links;
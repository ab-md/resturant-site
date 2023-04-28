import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div
            className="max-w-4xl flex items-center justify-between mx-auto p-4">
            <div className="text-xl font-bold text-green-500">
                <Link href="/">MetaFood</Link>
            </div>
            <div>
                <ul className="flex gap-4 text-gray-500 text-lg">
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="/categories">Categories</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
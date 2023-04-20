import React from 'react';

const Guide = () => {
    return (
        <section>
            <p className="fontStyle">How to Order?</p>
            <ul className="list-disc list-inside mt-4">
                <li>Sign in (or create an account) and set your delivery address.</li>
                <li>Choose the restaurant you want to order from.</li>
                <li>Select your items and tap “Add to Cart”.</li>
                <li>To place your order, select “View cart” or “Checkout”.</li>
                <li>eview your order and tap “Place Order”...</li>
                <li>Track your order progress.</li>
            </ul>
        </section>
    );
};

export default Guide;
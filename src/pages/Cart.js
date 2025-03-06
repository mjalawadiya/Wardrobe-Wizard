import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWishlist.css';

const Cart = () => {
    return (
        <div className="page-container">
            <h2><FaShoppingCart size={30} /> Your Cart</h2>
            <p>Your cart is currently empty.</p>
        </div>
    );
};

export default Cart;

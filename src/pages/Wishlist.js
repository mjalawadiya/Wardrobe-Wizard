import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './CartWishlist.css';

const Wishlist = () => {
    return (
        <div className="page-container">
            <h2><FaHeart size={30} /> Your Wishlist</h2>
            <p>Your wishlist is empty. Start adding your favorites!</p>
        </div>
    );
};

export default Wishlist;

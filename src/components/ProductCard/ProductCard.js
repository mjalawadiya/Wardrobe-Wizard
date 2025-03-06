import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, img }) => {
    return (
        <div className="product-card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;

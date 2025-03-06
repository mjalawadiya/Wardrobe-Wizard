import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";

const Tshirt = () => {
    const tshirtProducts = [
        {
        id: 1,
        title: "Classic Tee",
        price: "₹799",
        image: "/images/classic-tee.jpg",
        },
        {
        id: 2,
        title: "Graphic Tee",
        price: "₹899",
        image: "/images/graphic-tee.jpg",
        },
    ];

    return (
        <div>
        <Navbar />
        <h2>T-Shirts Collection</h2>
        <div className="product-container">
            {tshirtProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
            ))}
        </div>
        </div>
    );
};

export default Tshirt;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const CarouselComponent = () => {
    const slides = [
        { id: 1, image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/male-fashion-sales-and-discount-template-design-cff09afdc8e1d77aecdfeaa6b1d5920b_screen.jpg?ts=1634148617", caption: "Latest Jackets Collection"},
        { id: 2, image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-brown-men-fashion-retail-flyer-design-template-721912b88064341d9d10a415881bb9cb_screen.jpg?ts=1735536044", caption: "Latest Jackets Collection" },
        { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NyvGPdVkmk_8nSFNoD4u7UeuwBYVH-wWeA&s", caption: "Trendy Jeans for You" },
    ];

    return (
        <div className="carousel-container">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="carousel-root">
            {slides.map((slide) => (
            <div key={slide.id} className="carousel-item">
                <img src={slide.image} alt={slide.caption} />
                <div className="carousel-caption">{slide.caption}</div>
            </div>
            ))}
        </Carousel>
        </div>
    );
};

export default CarouselComponent;

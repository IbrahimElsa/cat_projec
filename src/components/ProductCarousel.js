import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductCarousel = ({ reviews }) => {
    return (
        <div className="max-w-md mx-auto"> {/* Adjust the max width as needed */}
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                {reviews.map((review, index) => (
                    <div key={index}>
                        <img src={review.imageSrc} alt={review.title} className="h-auto" />
                        <p className="legend">{review.title}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ProductCarousel;

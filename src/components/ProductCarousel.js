import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProductCarousel = ({ reviews }) => {
  return (
    <Carousel responsive={responsive}>
      {reviews.map((review, index) => (
        <div key={index}>
          <img src={review.imageSrc} alt={review.title} className="h-auto" />
          <p className="legend">{review.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
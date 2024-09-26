import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // Include slick theme for styling
import { CDN_URL } from '../../utils/constants'; // Your CDN URL path

const 
CategorySlider = ({ categories }) => {
  const settings = {
    dots: true,                // Enable dot indicators
    infinite: true,            // Infinite scroll
    speed: 500,                // Transition speed
    slidesToShow: 8,           // Number of slides visible at once
    slidesToScroll: 2,         // Slides scrolled at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center my-6">
      <h2 className="text-2xl font-bold mb-2">What's on your mind?</h2>
      <Slider {...settings}>
        {categories.slice(0, 8).map((category) => {
          const { id, imageId, description, action } = category;
          return (
            <div key={id} className="flex justify-center items-center p-2">
              <a
                href={action.link}
                className="flex flex-col items-center cursor-pointer"
                aria-label={description}
              >
                <img
                  src={CDN_URL + imageId}
                  alt={description}
                  className="w-20 h-30 rounded-full"
                />
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CategorySlider;

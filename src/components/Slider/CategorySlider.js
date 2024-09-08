import React from 'react';
import { CDN_URL } from '../../utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 

const CategorySlider = ({ categories }) => {
  console.log(categories, "sdfghjkljhgfdghjkhgfdsfghjk")
  return (
    <div className="text-center my-8">
      <h2 className="text-2xl font-bold mb-4">What's on your mind?</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {categories.slice(0, 8).map((category) => {
          const { imageId, description, action } = category;
          return (
            <SwiperSlide key={category.id}>
              <a
                href={action.link}
                className="flex flex-col items-center cursor-pointer"
                aria-label={description}
              >
                <img
                  src={CDN_URL + imageId}
                  alt={description}
                  className="w-25 h-40 rounded-full"
                />
                
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategorySlider;

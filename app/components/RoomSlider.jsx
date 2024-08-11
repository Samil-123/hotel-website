import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function RoomSlider({ images }) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image 
            src={image}
            width={1000}
            height={1000}
            className='object-center object-cover w-full h-full'
            alt={`Room image ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

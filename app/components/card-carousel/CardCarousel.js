import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import pagination styles if you're using pagination
import "swiper/css/navigation"; // Import navigation styles if you're using navigation

export default function CardCarousel() {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];

  const settings = {
    slidesPerView: 3, // Change this based on your responsive design
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    navigation: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <Swiper {...settings}>
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <h3>{card}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

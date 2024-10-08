"use client";
import React from "react";
import Slider from "react-slick";

import "./SubBanner.css"

export default function SubBanner() {
  const cards = ["Card 1", "Card 2", "Card 3"];
  var settings = {
    speed: 300,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    infinite: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000
        },
      },
    ],
  };
  return (
    <section className="sub-banner">
      <div className="container lg text-center">
        <p className="text-yellow-400 font-bold">
          We Provide Reliable Electrical Solutions
        </p>
        <h1 className="text-2xl font-bold text-gray-700">
          For Every Home & Business
        </h1>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index}>
              <div className="p-4 border">
                <h3>{card}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

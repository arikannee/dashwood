"use client";
import React from "react";
import Slider from "react-slick";
import galleryData from "@/data/gallery-data";
import "./SlideGallery.css";

export default function SlideGallery() {
  var settings = {
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slide-gallery">
      <div className="container lg text-center">
        <Slider {...settings}>
          {galleryData.map((photo, index) => (
            <div key={index}>
              <div className="gallery-item relative m-4 overflow-hidden">
                <img
                  src={`images/gallery/${photo.image}`}
                  alt={photo.title}
                  className="w-full h-auto"
                />
                {/* Hover description */}
                <div className="gallery-description absolute w-full flex flex-col items-left text-left justify-center bg-white text-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300 bottom-9 h-auto px-4 py-3">
                  <p className="m-0">{photo.title}</p>
                  <h3 className="text-xl m-0">{photo.subTitle}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

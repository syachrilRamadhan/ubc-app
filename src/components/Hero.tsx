"use client";

import React from "react";

import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/c1.jpg",
      title: "Trending Item",
      mainTitle: "BAGUS KAN?",
      price: "Rp.250.000",
    },
    {
      id: 1,
      img: "/c2.jpg",
      title: "Trending Aksesoris",
      mainTitle: "MODERN LIPSTIK",
      price: "Rp.150.000",
    },
    {
      id: 2,
      img: "/c3.jpg",
      title: "Paling Laris",
      mainTitle: "YAKIN GAK MAU NIH?",
      price: "Rp.300.000",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} price={item.price} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

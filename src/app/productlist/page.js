"use client"
import Image from "next/image"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function ProductList() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  return (
    <div className="px-10 mt-10">
      <Slider {...settings}>
        <div className="flex align-center justify-center">
          <div>
            <Image
              src="/Activision.png"
              width={180}
              height={130}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div>
        <Image
              src="/Asics.png"
              width={180}
              height={130}
              alt="Picture of the author"
            />
        </div>
        <div>
        <Image
              src="/Disney.png"
              width={180}
              height={130}
              alt="Picture of the author"
            />
        </div>
        <div>
        <Image
              src="/Kroger.png"
              width={180}
              height={130}
              alt="Picture of the author"
            />
        </div>
        <div>
        <Image
              src="/LinkedIn_logo.png"
              width={180}
              height={130}
              alt="Picture of the author"
            />
        </div>
        <div>
        <Image
              src="/Loreal.png"
              width={180}
              height={130}
              alt="Picture of the author"
            />
        </div>
        <div>
        <Image
              src="/Pepsico.png"
              width={180}
              height={130}
              alt="Picture of the author"
            />
        </div>
      </Slider>
    </div>
  )
}
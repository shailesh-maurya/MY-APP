"use client"
import Image from "next/image"
import ImgWrap from 'public/hero-banner.png'
import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "../../../node_modules/next/link";

export default function Section() {
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
        ]
    };

    return (
        <>
            <div className="banner relative isolate overflow-hidden min-h-[600px] max-lg:min-h-fit flex items-center">
                <div className="absolute top-0 left-0 h-full">
                    <Image
                        src={ImgWrap}
                        style={
                            {
                                height: '100%',
                                objectFit: 'cover',
                            }
                        }
                    />
                </div>
                <div className="relative w-full px-10 py-10">
                    <div className="w-1/2 max-lg:w-full">
                        <h1 className="text-[72px] max-xl:text-[60px] max-lg:text-[48px] max-md:text-[36px] font-bold text-white mb-[20px] max-md:mb-[10px]">Data to enrich your online business</h1>
                        <p className="text-[20px] max-md:text-[18px] text-white mb-[20px] mdmd:mb-[10px]">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div className="mt-10">
                            <a href="#" className="text-base text-black inline-block font-bold py-[14px] max-md:py-[12px] px-[22px] max-md:px-[20px] uppercase bg-[#FFE133;] border-[#FFE133;] border rounded-[5px] transition ease-in-out duration-300 hover:text-white hover:bg-transparent">Request a Demo</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="logo-slider m-y-10">
                <div className="relative w-full py-10">
                    <div className="my-7">
                        <Slider {...settings}>
                            <div>
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
                </div>
            </div>

            <div className="card-content">
                <div className="relative w-full px-10 py-10">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="w-[calc(35%-10px)] max-lg:w-full crelative p-5 bg-black mr-[10px] max-lg:mr-[0px]">
                            <div className="border-l-[10px] border-[#FFE133]">
                                <h2 className="text-[#FFE133] text-[130px] max-lg:text-[110px] max-md:text-[90px] max-sm:text-[70px] font-bold leading-none m-[10px]">3x</h2>
                                <p className="text-white m-[10px]">Measurable Economic Benefit of sharing Data Externally</p>
                                <p className="text-[#7f7f7f] text[14px] m-[10px]">According to Gartner*</p>
                            </div>
                        </div>
                        <div className="relative w-[calc(65%-10px)] max-lg:w-full p-5 bg-black flex flex-wrap ml-[10px] max-lg:ml-[0px] max-lg:mt-[20px]">
                            <div className="border-l-[10px] border-[#FFE133] flex flex-wrap items-center justify-center">
                                <div className="w-1/2 max-sm:w-full">
                                    <h2 className="text-[#FFE133] text-[130px] max-lg:text-[110px] max-md:text-[90px] max-sm:text-[70px] font-bold leading-none m-[10px]">7/10</h2>
                                    <p className="text-white mx-[10px]">Companies see data collaboration Increasing in the next 12 months</p>
                                </div>
                                <div className="w-1/2 max-sm:w-full max-sm:pt-[20px]">
                                    <h2 className="text-[#FFE133] text-[130px] max-lg:text-[110px] max-md:text-[90px] max-sm:text-[70px] font-bold leading-none m-[10px]">47%</h2>
                                    <p className="text-white mx-[10px]">of companies have used data clean rooms in the past 12 months*</p>
                                </div>
                                <div className="block w-full flex flex-wrap items-center justify-end mt-[20px]">
                                    <Link href="#" className=" inline-flex">
                                        <span className="text[14px] font-bold text-white mr-[10px]">LEARN MORE</span>
                                        <Image
                                            src="/chevron-right.png"
                                            width={18}
                                            height={18}
                                            alt="Picture of the author"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
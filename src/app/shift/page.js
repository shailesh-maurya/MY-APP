"use client"
import React from 'react'
import Image from "next/image"
import { useState } from "react";
import Link from "../../../node_modules/next/link";
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Shift() {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    const introData = {
        title: "History Headline",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi pulvinar aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi pulvinar aenean dolor sit amet, consectetur adipiscing elit.",
        cta: "Optional CTA",
        ctalink: "/"
    }
    const tabData = [
        {
            date: '2015',
            highLightedText: '0 Sed ut perspiciatis unde',
            blurb: '0 Sed ut perspiciatis unde omnis iste natus error.',
            image: '/tab-img.png'
        },
        {
            date: '2018',
            highLightedText: '1 Sed ut perspiciatis unde',
            blurb: '1 Sed ut perspiciatis unde omnis iste natus error.',
            image: '/man-at-computer-2x.jpg'
        },
        {
            date: '2020',
            highLightedText: '2 Sed ut perspiciatis unde',
            blurb: '2 Sed ut perspiciatis unde omnis iste natus error.',
            image: '/tasas-on-screen-2x.jpg'
        },
        {
            date: '2022',
            highLightedText: '3 Sed ut perspiciatis unde',
            blurb: '3 Sed ut perspiciatis unde omnis iste natus error.',
            image: '/uphold-testimonial-image-2x.png'
        },
    ]
    console.log(tabData);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const settings = {
        // dots: true,
        infinite: true,
        speed: 6000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 1,
        arrows: false,

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
            <section className="bg-white relative py-[40px] mx-auto w-full max-w-[1235px]">
                <div className="bg-img absolute bottom-0 right-0 max-w-[733px] max-lg:hidden ">
                    <Image
                        src="/hero_graphic.png"
                        width={566}
                        height={638}
                        alt="Picture of the author"
                    />
                </div>
                <div className="relative w-full mx-auto my-0 px-[50px]">
                    <div className="flex flex-wrap">
                        <div className="relative max-w-[650px]">
                            <h1 className="text-black text-[88px] max-xl:text-[74px] max-lg:text-[60px] max-md:text-[46px] max-sm:[32px] leading-[100%] font-bold mb-[32px] max-md:mb-[20px]">Sift helps companies grow securely</h1>
                            <p className="text-black text-[18px] max-md:text-[16px] leading-[150%] mb-[32px] max-md:mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra adipiscing est, venenatis viverra nunc non aenean amet.</p>
                            <div className="btn-wrap">
                                <Link href="#" className="text-black text-[16px] font-bold bg-transparent border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700">Optional CTA</Link>
                            </div>
                        </div>
                        <div className="hidden max-lg:flex mt-[20px]">
                            <Image
                                src="/hero_graphic.png"
                                width={566}
                                height={638}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-[40px] mx-auto w-full max-w-[1235px] shadow-[0_4px_8px_0px_rgba(0,0,0,0.16)]">
                <div className="relative w-full mx-auto my-0 px-[50px]">
                    <div className="relative">
                        <ul className="flex flex-wrap">
                            <li className="relative mr-[20px] text-[18px] leading-[150%] text-center font-[500] hover:font-[600] border-transparent border-b-4 hover:border-[#FF3B84] ease-in-out transition-[700]">
                                <Link href="#">About us</Link>
                            </li>
                            <li className="relative mr-[20px] text-[18px] leading-[150%] text-center font-[500] hover:font-[600] border-transparent border-b-4 hover:border-[#FF3B84] ease-in-out transition-[700]">
                                <Link href="#">Our History</Link>
                            </li>
                            <li className="relative mr-[20px] text-[18px] leading-[150%] text-center font-[500] hover:font-[600] border-transparent border-b-4 hover:border-[#FF3B84] ease-in-out transition-[700]">
                                <Link href="#">Leadership</Link>
                            </li>
                            <li className="relative mr-[20px] text-[18px] leading-[150%] text-center font-[500] hover:font-[600] border-transparent border-b-4 hover:border-[#FF3B84] ease-in-out transition-[700]">
                                <Link href="#">Awards</Link>
                            </li>
                            <li className="relative mr-[20px] text-[18px] leading-[150%] text-center font-[500] hover:font-[600] border-transparent border-b-4 hover:border-[#FF3B84] ease-in-out transition-[700]">
                                <Link href="#">Careers</Link>
                            </li>
                            <li className="relative mr-[20px] text-[18px] leading-[150%] text-center font-[500] hover:font-[600] border-transparent border-b-4 hover:border-[#FF3B84] ease-in-out transition-[700]">
                                <Link href="#">Patents</Link>
                            </li>
                            <li className="relative mr-[20px] text-[18px] leading-[150%] text-center font-[500] hover:font-[600] border-transparent border-b-4 hover:border-[#FF3B84] ease-in-out transition-[700]">
                                <Link href="#">Integrations</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-[#EAF0FF] relative py-[40px] pt-[140px] mx-auto w-full max-w-[1235px]">
                <div className="relative w-full mx-auto my-0 px-[50px]">
                    <div className="flex flex-wrap items-end">
                        <div className="w-2/3">
                            <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-bold text-black mb-[20px] leading-[100%] max-w-[771px]">Market leadership headline lorem at ipsum dolore</h2>
                            <p className="max-w-[771px] text-[18px]">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora amet set incidunt ut labore et dolore magnam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi.</p>
                        </div>
                        <div className="w-1/3 flex justify-end">
                            <Link href="#" className="text-black text-[16px] font-bold bg-transparent border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700">Watch the video</Link>
                        </div>
                    </div>
                    <div className="relative mt-[32px] max-md:mt-[20px] rounded-[16px] w-full">
                        <div className="absolute top-[calc(50%-20px)] left-[calc(50%-20px)] w-[40px] h-[40px]  rounded-[16px] opacity-40 z-20 cursor-pointer">
                            <Image className="rounded-[16px]"
                                src="/play_button.svg"
                                width={40}
                                height={40}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-black rounded-[16px] opacity-40 z-10">
                        </div>
                        <Image className="rounded-[16px]"
                            src="/discussion.jpeg"
                            width={1200}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="card-wrapper w-[calc(100%+20px)] mt-[50px] flex flex-wrap -ml-[10px]">
                        <div className="card border-t-[2px] border-black w-[calc(33.33%-20px)] m-[10px] pt-[24px] ">
                            <h4 className="text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[24px] text-black mb-[20px]">Lorem Ipsum Dolor Sit Amet Cosectur Risus Egestas</h4>
                            <p className="text-[18px] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis nibh iaculis venenatis. Arcu sit nunc pretium, fermentum euismod libero nuncadfnk.</p>
                        </div>
                        <div className="card border-t-[2px] border-black w-[calc(33.33%-20px)] m-[10px] pt-[24px]">
                            <h4 className="text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[24px] text-black mb-[20px]">Lorem Ipsum Dolor Sit Amet Cosectur Risus Egestas</h4>
                            <p className="text-[18px] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis nibh iaculis venenatis. Arcu sit nunc pretium, fermentum euismod libero nuncadfnk.</p>
                        </div>
                        <div className="card border-t-[2px] border-black w-[calc(33.33%-20px)] m-[10px] pt-[24px]">
                            <h4 className="text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[24px] text-black mb-[20px]">Lorem Ipsum Dolor Sit Amet Cosectur Risus Egestas</h4>
                            <p className="text-[18px] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis nibh iaculis venenatis. Arcu sit nunc pretium, fermentum euismod libero nuncadfnk.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-black to-[#010f43]  relative py-[40px] mx-auto w-full max-w-[1235px]">
                <div className="relative w-full mx-auto my-0 px-[50px]">
                    <div className="flex flex-wrap items-end">
                        <div className="w-3/4">
                            <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-bold text-white mb-[20px] leading-[100%] font-[Permanent Marker]">Headline <span className="text-[#79f7c6]">About</span> our values</h2>
                            <p className="max-w-[771px] text-[18px] text-white">Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>
                        <div className="w-1/4 flex justify-end">
                            <Link href="#" onClick={() => toggleTab(1)} className="text-black text-[16px] font-bold bg-[#ff3b84] border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-white hover:bg-transparent ease-in-out duration-700">Careers</Link>
                            <Link href="#" onClick={() => toggleTab(1)} className="text-white text-[16px] font-bold bg-transparent border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700 ml-[20px]">Media Kit</Link>
                        </div>
                    </div>
                    <div className="content-wrap w-[calc(100%+20px)] -ml-[10px] mt-[40px] flex flex-wrap  align-middle">
                        <div className="content w-[calc(33.33%-20px)] m-[10px]">
                            <div className="icon mb-[20px] max-w-[40px]">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_674_1394)">
                                        <path d="M35.2969 16.0625C34.7031 15.4531 34.0938 14.8125 33.8594 14.2656C33.625 13.7188 33.6406 12.9063 33.625 12.0781C33.6094 10.5625 33.5781 8.82812 32.375 7.625C31.1719 6.42188 29.4375 6.39062 27.9219 6.375C27.0938 6.35937 26.25 6.34375 25.7344 6.14062C25.2188 5.9375 24.5469 5.29688 23.9375 4.70312C22.8594 3.67188 21.625 2.5 20 2.5C18.375 2.5 17.1406 3.67188 16.0625 4.70312C15.4531 5.29688 14.8125 5.90625 14.2656 6.14062C13.7188 6.375 12.9063 6.35937 12.0781 6.375C10.5625 6.39062 8.82812 6.42188 7.625 7.625C6.42188 8.82812 6.39062 10.5625 6.375 12.0781C6.35937 12.9063 6.34375 13.75 6.14062 14.2656C5.9375 14.7812 5.29688 15.4531 4.70312 16.0625C3.67188 17.1406 2.5 18.375 2.5 20C2.5 21.625 3.67188 22.8594 4.70312 23.9375C5.29688 24.5469 5.90625 25.1875 6.14062 25.7344C6.375 26.2812 6.35937 27.0938 6.375 27.9219C6.39062 29.4375 6.42188 31.1719 7.625 32.375C8.82812 33.5781 10.5625 33.6094 12.0781 33.625C12.9063 33.6406 13.75 33.6562 14.2656 33.8594C14.7812 34.0625 15.4531 34.7031 16.0625 35.2969C17.1406 36.3281 18.375 37.5 20 37.5C21.625 37.5 22.8594 36.3281 23.9375 35.2969C24.5469 34.7031 25.1875 34.0938 25.7344 33.8594C26.2812 33.625 27.0938 33.6406 27.9219 33.625C29.4375 33.6094 31.1719 33.5781 32.375 32.375C33.5781 31.1719 33.6094 29.4375 33.625 27.9219C33.6406 27.0938 33.6562 26.25 33.8594 25.7344C34.0625 25.2188 34.7031 24.5469 35.2969 23.9375C36.3281 22.8594 37.5 21.625 37.5 20C37.5 18.375 36.3281 17.1406 35.2969 16.0625ZM27.7344 17.1562L18.5781 25.9062C18.3414 26.1289 18.0281 26.252 17.7031 26.25C17.383 26.2512 17.0748 26.128 16.8438 25.9062L12.2656 21.5312C11.7455 21.0773 11.6916 20.2878 12.1455 19.7675C12.5994 19.2473 13.3889 19.1934 13.9092 19.6473C13.9353 19.67 13.9603 19.6939 13.9844 19.7186L17.7031 23.2655L26.0156 15.3436C26.5358 14.8897 27.3255 14.9436 27.7794 15.4638C28.2067 15.9539 28.1872 16.6897 27.7344 17.1562Z" fill="#FFCA36" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_674_1394">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h4 className="text-[24px] max-xl:text-[23px] max-lg:text-[22px] max-md:text-[21px] max-sm:text-[20px] font-bold text-white mb-[20px] leading-[120%]">Lorem Ipsum Dolor</h4>
                            <p className="text-[16px] text-white font-[400]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        </div>
                        <div className="content w-[calc(33.33%-20px)] m-[10px]">
                            <div className="icon mb-[20px] max-w-[40px]">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_674_1399)">
                                        <path d="M36.25 32.5C36.25 33.1903 35.6903 33.75 35 33.75H5C4.30969 33.75 3.75 33.1903 3.75 32.5V7.5C3.75 6.80969 4.30969 6.25 5 6.25C5.69031 6.25 6.25 6.80969 6.25 7.5V24.4844L14.1094 16.6094C14.6027 16.1208 15.3973 16.1208 15.8906 16.6094L20 20.7344L27.6094 13.125L25.3594 10.8906C25.0133 10.5217 24.91 9.98688 25.0938 9.51563C25.2927 9.05313 25.7466 8.7525 26.25 8.75H32.5C33.1903 8.75 33.75 9.30969 33.75 10V16.25C33.7516 16.7547 33.4495 17.2108 32.9844 17.4062C32.8302 17.4675 32.6659 17.4992 32.5 17.5C32.1681 17.4986 31.8494 17.37 31.6094 17.1406L29.375 14.8906L20.8906 23.3906C20.3973 23.8792 19.6027 23.8792 19.1094 23.3906L15 19.2656L6.25 28.0156V31.25H35C35.6903 31.25 36.25 31.8097 36.25 32.5Z" fill="#FFCA36" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_674_1399">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <h4 className="text-[24px] max-xl:text-[23px] max-lg:text-[22px] max-md:text-[21px] max-sm:text-[20px] font-bold text-white mb-[20px] leading-[120%]">Lorem Ipsum Dolor</h4>
                            <p className="text-[16px] text-white font-[400]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        </div>
                        <div className="content w-[calc(33.33%-20px)] m-[10px]">
                            <div className="icon mb-[20px] max-w-[40px]">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_674_1404)">
                                        <path d="M20 3.75C11.0253 3.75 3.75 11.0253 3.75 20C3.75 28.9747 11.0253 36.25 20 36.25C28.9747 36.25 36.25 28.9747 36.25 20C36.2328 11.0325 28.9675 3.76719 20 3.75ZM21.875 27.5H21.25V28.75C21.25 29.4403 20.6903 30 20 30C19.3097 30 18.75 29.4403 18.75 28.75V27.5H16.25C15.5597 27.5 15 26.9403 15 26.25C15 25.5597 15.5597 25 16.25 25H21.875C22.9105 25 23.75 24.1605 23.75 23.125C23.75 22.0895 22.9105 21.25 21.875 21.25H18.125C15.7087 21.25 13.75 19.2913 13.75 16.875C13.75 14.4587 15.7087 12.5 18.125 12.5H18.75V11.25C18.75 10.5597 19.3097 10 20 10C20.6903 10 21.25 10.5597 21.25 11.25V12.5H23.75C24.4403 12.5 25 13.0597 25 13.75C25 14.4403 24.4403 15 23.75 15H18.125C17.0895 15 16.25 15.8395 16.25 16.875C16.25 17.9105 17.0895 18.75 18.125 18.75H21.875C24.2913 18.75 26.25 20.7087 26.25 23.125C26.25 25.5413 24.2913 27.5 21.875 27.5Z" fill="#FFCA36" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_674_1404">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <h4 className="text-[24px] max-xl:text-[23px] max-lg:text-[22px] max-md:text-[21px] max-sm:text-[20px] font-bold text-white mb-[20px] leading-[120%]">Lorem Ipsum Dolor</h4>
                            <p className="text-[16px] text-white font-[400]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        </div>
                        <div className="content w-[calc(33.33%-20px)] m-[10px]">
                            <div className="icon mb-[20px] max-w-[40px]">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_674_1410)">
                                        <path d="M33.3906 12.8594L24.6406 4.1094C24.4025 3.87721 24.0825 3.74815 23.75 3.75002H8.75C7.36922 3.75002 6.25 4.86924 6.25 6.25002V33.75C6.25 35.1308 7.36922 36.25 8.75 36.25H31.25C32.6308 36.25 33.75 35.1308 33.75 33.75V13.75C33.7519 13.4175 33.6228 13.0975 33.3906 12.8594ZM25.2656 25.2656L20.8906 29.6406C20.3939 30.1208 19.6061 30.1208 19.1094 29.6406L14.7344 25.2656C14.2909 24.7253 14.3695 23.9278 14.9098 23.4844C15.3766 23.1013 16.0489 23.1013 16.5156 23.4844L18.75 25.7344V18.75C18.75 18.0597 19.3097 17.5 20 17.5C20.6903 17.5 21.25 18.0597 21.25 18.75V25.7344L23.4844 23.4844C24.0247 23.041 24.8222 23.1196 25.2656 23.6599C25.6488 24.1266 25.6488 24.7989 25.2656 25.2656ZM23.75 13.75V6.87502L30.625 13.75H23.75Z" fill="#FFCA36" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_674_1410">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <h4 className="text-[24px] max-xl:text-[23px] max-lg:text-[22px] max-md:text-[21px] max-sm:text-[20px] font-bold text-white mb-[20px] leading-[120%]">Lorem Ipsum Dolor</h4>
                            <p className="text-[16px] text-white font-[400]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        </div>
                        <div className="content w-[calc(33.33%-20px)] m-[10px]">
                            <div className="icon mb-[20px] max-w-[40px]">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_674_1415)">
                                        <path d="M35.2967 25.5L35.3436 25.3438C36.5523 21.8837 36.5523 18.1163 35.3436 14.6562L35.2967 14.5C32.9684 8.05438 26.8531 3.75672 19.9998 3.75C13.1465 3.75672 7.03123 8.05438 4.70295 14.5L4.65607 14.6562C3.44732 18.1163 3.44732 21.8837 4.65607 25.3438L4.70295 25.5C7.03889 31.9398 13.1495 36.2341 19.9998 36.25C26.8531 36.2433 32.9684 31.9456 35.2967 25.5ZM19.9998 7.125C21.82 8.99734 23.1836 11.2645 23.9842 13.75H16.0154C16.8161 11.2645 18.1797 8.99734 19.9998 7.125ZM16.0154 26.25H23.9842C23.1836 28.7355 21.82 31.0027 19.9998 32.875C18.1797 31.0027 16.8161 28.7355 16.0154 26.25ZM15.3592 23.75C14.8801 21.273 14.8801 18.727 15.3592 16.25H24.6404C25.1195 18.727 25.1195 21.273 24.6404 23.75H15.3592ZM27.1873 16.25H33.2342C33.9219 18.7027 33.9219 21.2973 33.2342 23.75H27.1873C27.604 21.2673 27.604 18.7327 27.1873 16.25ZM32.2498 13.75H26.6248C25.8729 11.1177 24.5915 8.66656 22.8592 6.54688C26.9097 7.42141 30.3554 10.0645 32.2498 13.75ZM22.8592 33.4531C24.5915 31.3334 25.8729 28.8823 26.6248 26.25H32.2498C30.3554 29.9355 26.9097 32.5786 22.8592 33.4531Z" fill="#FFCA36" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_674_1415">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <h4 className="text-[24px] max-xl:text-[23px] max-lg:text-[22px] max-md:text-[21px] max-sm:text-[20px] font-bold text-white mb-[20px] leading-[120%]">Lorem Ipsum Dolor</h4>
                            <p className="text-[16px] text-white font-[400]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        </div>
                    </div>
                    <div className="wrapper flex flex-wrap mt-[40px]">
                        <div className="col-two w-1/2 pr-[10px]">
                            <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] font-bold text-white mb-[20px] leading-[115%]">History Headline</h2>
                            <p className="text-white text-[16px] mb-[40px] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi pulvinar aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi pulvinar aenean dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="btn-wrap">
                                <Link href="#" className="text-white text-[16px] font-bold bg-transparent border-2 py-[16px] px-[24px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700">Optional CTA</Link>
                            </div>
                            <div className="tab-content mt-[30px] flex flex-wrap justify-around">
                                <div className="years text-white">
                                    {
                                        tabData.map((data, index) => (
                                            <h3 className="mb-[20px] text-white" key={index} onClick={() => handleTabClick(index)}>{data.date}</h3>
                                        ))
                                    }
                                </div>
                                <div className="">
                                    <h3 className="text-white font-bold text-[88px] max-xl:text-[76px] max-lg:text-[64px] max-md:text-[52px] max-sm:text-[40px] mb-[20px] leading-[100%]">{tabData[activeTab].date}</h3>
                                    <p className="text-[#79F7C6] text-[14px] font-semibold uppercase mb-[20px]">{tabData[activeTab].highLightedText} </p>
                                    <p className="text-white text-[16px] leading-[150%] font-normal">{tabData[activeTab].blurb}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-two w-1/2">
                            <div className="img-wrap pl-[10px]">
                                <Image
                                    src={tabData[activeTab].image}
                                    width={566}
                                    height={638}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-[40px] mx-auto w-full max-w-[1235px] bg-[#00124D]">
                <div className="relative w-full mx-auto my-0 px-[50px]">
                    <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-bold text-white mb-[20px] leading-[115%]">About leadership & board of <span className="text-[#79f7c6]">Directors</span></h2>
                    <p className="text-white text-[16px] mb-[40px] leading-[150%]">Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum.</p>
                    <div className="wrap">
                        <div className="tab-content mt-[50px]">
                            <Tab.Group className="">
                                <Tab.List>
                                    <Tab as={Fragment} className="text-[16px] text-white font-[700] leading-[120%] uppercase py-[10px] px-[10px] text-center w-1/2   hover:opacity-[1] cursor-pointer inline-block outline-0">
                                        {({ selected }) => (

                                            <button
                                                className={
                                                    selected ? ' text-white opacity-[1] border-[#FF3B84] border-b-2' : ' text-white opacity-[0.4] border-b-2 border-white'
                                                }
                                            >
                                                Leadership
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={Fragment} className="text-[16px] text-white font-[700] leading-[120%] uppercase py-[10px] px-[10px] text-center w-1/2  opacity-[0.4] hover:opacity-[1] cursor-pointer inline-block outline-0">
                                        {({ selected }) => (

                                            <button
                                                className={
                                                    selected ? ' text-white opacity-[1] border-[#FF3B84] border-b-2' : ' text-white opacity-[0.4] border-b-2 border-white'
                                                }
                                            >
                                                Board of directors
                                            </button>
                                        )}
                                    </Tab>
                                    <div className='tab-content mt-[50px]'>
                                        <div className='wrapper  flex flex-wrap'>
                                            <Tab.Panels className="wrapper  ">
                                                <Tab.Panel className="w-full  flex flex-wrap">
                                                    <h1 className='text-white block w-full'>Tab content1</h1>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/jason_tran.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">FOUNDER & EXECUTIVE CHAIRMAN</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Jason Tan</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/kris_nagel.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Founder & Executive Chairman</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">kris Nagel</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/eugene_sung.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Chief Financial Officer</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Jason Tan</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/chris_jones.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Chief revenuw officer</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Chris Jones</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)]  m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/neeraj_gupta.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Chief Technology Officer</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Neeraj Gupta</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/armen_najarian.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Chief Marketing Officer</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Armen Najarian</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/liz_kosinski.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Chief People Officer</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Liz Kosinski</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/eva_gutierrez.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">General Counsel</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Eva Gutierrez</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/dave_scholtz.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">SVP, Global Partnerships</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Dave Scholtz</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/raj_motwane.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">SVP, Customer Experience & Success</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Raj Motwane</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel className="w-full  flex flex-wrap">
                                                    <h1 className='text-white block w-full'>Tab content1</h1>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/jason_tran.png"
                                                                width={480}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">FOUNDER & EXECUTIVE CHAIRMAN</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Jason Tan</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/kris_nagel.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Founder & Executive Chairman</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">kris Nagel</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/eugene_sung.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Chief Financial Officer</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Jason Tan</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/chris_jones.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Chief revenuw officer</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Chris Jones</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)]  m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/neeraj_gupta.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Chief Technology Officer</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Neeraj Gupta</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/armen_najarian.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Chief Marketing Officer</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Armen Najarian</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/liz_kosinski.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">Chief People Officer</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Liz Kosinski</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/eva_gutierrez.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">General Counsel</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Eva Gutierrez</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/dave_scholtz.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">SVP, Global Partnerships</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Dave Scholtz</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-[calc(100%-20px)] m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
                                                        <div className="img-wrap transition-all duration-700 group-hover:scale-105">
                                                            <Image className="overflow-hidden"
                                                                src="/raj_motwane.png"
                                                                width={500}
                                                                height={220}
                                                            />
                                                        </div>
                                                        <div className="text-wrap text-white p-[32px] max-md:p-[20px]">
                                                            <h6 className="text-[14px] font-[700] leading-[120%] uppercase mb-[20px]">SVP, Customer Experience & Success</h6>
                                                            <h4 className="text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] font-[600] leading-[120%] mb-[25px]">Raj Motwane</h4>
                                                            <div className="social-nav flex flex-wrap pb-[30px]">
                                                                <Link href="#" className="mr-[24px]">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z" fill="white"></path></svg>
                                                                </Link>
                                                                <Link href="#" className="">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z" fill="white"></path></svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                            </Tab.Panels>
                                        </div>
                                    </div>
                                </Tab.List>
                            </Tab.Group>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-[40px] mx-auto w-full max-w-[1235px] bg-[#EAF0FF]">
                <div className="relative w-full mx-auto my-0 px-[50px]">
                    <div className="flex flex-wrap items-end">
                        <div className="w-2/3">
                            <h2 className="text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-bold text-black mb-[20px] leading-[100%] max-w-[771px]">Working with the biggest innovators and game changers</h2>
                        </div>
                        <div className="w-1/3 flex justify-end">
                            <Link href="#" className="text-black text-[16px] font-bold bg-transparent border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700">view all investors</Link>
                        </div>
                    </div>
                    <div className="w-full relative mt-[50px]">
                        <Slider {...settings}>
                            <div>
                                <Image
                                    src="/build.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/nikon.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/remitly-color-logo.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/swan-color-logo.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/taptap-send-color-logo.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/yelp-color-logo.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <section className='relative py-[40px] mx-auto w-full max-w-[1235px] bg-[#fff]'>
                <div className='relative w-full mx-auto my-0 px-[50px]'>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-bold text-black mb-[20px] leading-[100%]">This is a headline about awards</h2>
                            <p className='text-[18px] text-black'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum.</p>
                        </div>
                    </div>
                    <div className='wrapper w-[calc(100%+20px)] -ml-[10px] mt-[40px] flex flex-wrap'>
                        <div className='col-three relative w-[calc(33.33%-20px)] p-[32px] m-[10px] cursor-pointer border-2 border-black rounded-[16px] shadow-[] flex flex-wrap justify-center group group-hover:border-3 group-hover:border-black hover:shadow-black-shadow'>
                            <div className='icon transition-all duration-700 ease-in-out group group-hover:scale-110'>
                                <Image
                                    src="/award_1.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h4 className='text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-bold text-black mb-[20px]'>Award one</h4>
                            <p className='text-black text-[16px] pb-[30px]'>At diam tellus lectus sociis neque sed elementum. Ac mauris odio tristique.</p>
                            <div class="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                <a class=" text-black hover:text" href="#"><span class="text-[16px] inline-block font-bold group-hover:text-[#ff3b84] uppercase">Learn more
                                </span><svg class="ml-[10px] inline-block group-hover:width-[30px]" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg></a></div>
                        </div>
                        <div className='col-three relative w-[calc(33.33%-20px)] p-[32px] m-[10px] cursor-pointer border-2 border-black rounded-[16px] shadow-[] flex flex-wrap justify-center group group-hover:border-3 group-hover:border-black hover:shadow-black-shadow'>
                            <div className='icon transition-all duration-700 ease-in-out group group-hover:scale-110'>
                                <Image
                                    src="/award_1.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h4 className='text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-bold text-black mb-[20px]'>Award one</h4>
                            <p className='text-black text-[16px] pb-[30px]'>At diam tellus lectus sociis neque sed elementum. Ac mauris odio tristique.</p>
                            <div class="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                <a class=" text-black hover:text" href="#"><span class="text-[16px] inline-block font-bold group-hover:text-[#ff3b84] uppercase">Learn more
                                </span><svg class="ml-[10px] inline-block group-hover:width-[30px]" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg></a></div>
                        </div>
                        <div className='col-three relative w-[calc(33.33%-20px)] p-[32px] m-[10px] cursor-pointer border-2 border-black rounded-[16px] shadow-[] flex flex-wrap justify-center group group-hover:border-3 group-hover:border-black hover:shadow-black-shadow'>
                            <div className='icon transition-all duration-700 ease-in-out group group-hover:scale-110'>
                                <Image
                                    src="/award_1.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h4 className='text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-bold text-black mb-[20px]'>Award one</h4>
                            <p className='text-black text-[16px] pb-[30px]'>At diam tellus lectus sociis neque sed elementum. Ac mauris odio tristique.</p>
                            <div class="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                <a class=" text-black hover:text" href="#"><span class="text-[16px] inline-block font-bold group-hover:text-[#ff3b84] uppercase">Learn more
                                </span><svg class="ml-[10px] inline-block group-hover:width-[30px]" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg></a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
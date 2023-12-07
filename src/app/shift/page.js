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
                        <div className="w-2/3 max-lg:w-full">
                            <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-bold text-black mb-[20px] leading-[100%] max-w-[771px]">Market leadership headline lorem at ipsum dolore</h2>
                            <p className="max-w-[771px] text-[18px]">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora amet set incidunt ut labore et dolore magnam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi.</p>
                        </div>
                        <div className="w-1/3 flex justify-end max-lg:w-full max-lg:justify-start max-lg:mt-[24px]">
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
                    <div className="card-wrapper w-[calc(100%+20px)] max-sm:w-full max-sm:-ml-0 mt-[50px] max-lg:mt-[24px] flex flex-wrap -ml-[10px]">
                        <div className="card border-t-[2px] border-black w-[calc(33.33%-20px)] max-sm:my-[10px] max-sm:mx-0 m-[10px] pt-[24px] max-lg:w-[calc(50%-20px)] max-sm:w-full">
                            <h4 className="text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] text-black mb-[20px]">Lorem Ipsum Dolor Sit Amet Cosectur Risus Egestas</h4>
                            <p className="text-[18px] max-lg:text-[16px] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis nibh iaculis venenatis. Arcu sit nunc pretium, fermentum euismod libero nuncadfnk.</p>
                        </div>
                        <div className="card border-t-[2px] border-black w-[calc(33.33%-20px)] max-sm:my-[10px] max-sm:mx-0 m-[10px] pt-[24px] max-lg:w-[calc(50%-20px)] max-sm:w-full">
                            <h4 className="text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px]  text-black mb-[20px]">Lorem Ipsum Dolor Sit Amet Cosectur Risus Egestas</h4>
                            <p className="text-[18px] max-lg:text-[16px] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis nibh iaculis venenatis. Arcu sit nunc pretium, fermentum euismod libero nuncadfnk.</p>
                        </div>
                        <div className="card border-t-[2px] border-black w-[calc(33.33%-20px)] max-sm:my-[10px] max-sm:mx-0 m-[10px] pt-[24px] max-lg:w-[calc(50%-20px)] max-sm:w-full">
                            <h4 className="text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] text-black mb-[20px]">Lorem Ipsum Dolor Sit Amet Cosectur Risus Egestas</h4>
                            <p className="text-[18px] max-lg:text-[16px] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis nibh iaculis venenatis. Arcu sit nunc pretium, fermentum euismod libero nuncadfnk.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-black to-[#010f43]  relative py-[40px] mx-auto w-full max-w-[1235px]">
                <div className="relative w-full mx-auto my-0 px-[50px]">
                    <div className="flex flex-wrap items-end">
                        <div className="w-3/4 max-lg:w-full max-xl:mb-[20px]">
                            <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-bold text-white mb-[20px] leading-[100%] font-[Permanent Marker]">Headline <span className="text-[#79f7c6]">About</span> our values</h2>
                            <p className="max-w-[771px] text-[18px] max-lg:text-[16px] text-white">Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>
                        <div className="w-1/4 flex justify-end max-xl:w-full max-xl:justify-start flex-wrap">
                            <Link href="#" onClick={() => toggleTab(1)} className="text-black text-[16px] font-bold bg-[#ff3b84] border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-white hover:bg-transparent ease-in-out duration-700 max-sm:mb-[10px] max-sm:mr-[10px]">Careers</Link>
                            <Link href="#" onClick={() => toggleTab(1)} className="text-white text-[16px] font-bold bg-transparent border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700 ml-[20px] max-sm:ml-0">Media Kit</Link>
                        </div>
                    </div>
                    <div className="content-wrap w-[calc(100%+20px)] -ml-[10px] mt-[50px] max-lg:mt-[20px] flex flex-wrap  align-middle">
                        <div className="content w-[calc(33.33%-20px)] m-[10px] max-lg:w-[calc(50%-20px)] max-sm:w-full">
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
                        <div className="content w-[calc(33.33%-20px)] m-[10px] max-lg:w-[calc(50%-20px)] max-sm:w-full">
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
                        <div className="content w-[calc(33.33%-20px)] m-[10px] max-lg:w-[calc(50%-20px)] max-sm:w-full">
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
                        <div className="content w-[calc(33.33%-20px)] m-[10px] max-lg:w-[calc(50%-20px)] max-sm:w-full">
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
                        <div className="content w-[calc(33.33%-20px)] m-[10px] max-lg:w-[calc(50%-20px)] max-sm:w-full">
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
                    <div className="wrapper flex flex-wrap mt-[40px] max-sm:mt-[20px]">
                        <div className="col-two w-1/2 pr-[10px] max-lg:w-full">
                            <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] font-bold text-white mb-[20px] leading-[115%]">History Headline</h2>
                            <p className="text-white text-[16px] mb-[40px] max-lg:mb-[20px] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi pulvinar aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi pulvinar aenean dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="btn-wrap">
                                <Link href="#" className="text-white text-[16px] font-bold bg-transparent border-2 py-[16px] px-[24px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700">Optional CTA</Link>
                            </div>
                            <div className="tab-content mt-[30px] flex flex-wrap justify-around">
                                <div className="years text-white max-lg:w-full max-lg:flex flex-wrap justify-around">
                                    {
                                        tabData.map((data, index) => (
                                            <h3 className="mb-[20px] text-white" key={index} onClick={() => handleTabClick(index)}>{data.date}</h3>
                                        ))
                                    }
                                </div>
                                <div className="max-lg:w-full max-lg:text-center">
                                    <h3 className="text-white font-bold text-[88px] max-xl:text-[76px] max-lg:text-[64px] max-md:text-[52px] max-sm:text-[40px] mb-[20px] leading-[100%]">{tabData[activeTab].date}</h3>
                                    <p className="text-[#79F7C6] text-[14px] font-semibold uppercase mb-[20px]">{tabData[activeTab].highLightedText} </p>
                                    <p className="text-white text-[16px] leading-[150%] font-normal max-lg:mb-[20px]">{tabData[activeTab].blurb}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-two w-1/2 max-lg:w-full">
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
                                    <div className='max-sm:overflow-x-scroll max-sm:w-full max-sm:whitespace-nowrap'>
                                    <Tab as={Fragment} className="text-[16px] max-sm:text-[14px] text-white font-[700] leading-[120%] uppercase py-[10px] px-[10px] text-center w-1/2   hover:opacity-[1] cursor-pointer inline-block outline-0">
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
                                    <Tab as={Fragment} className="text-[16px] max-sm:text-[14px] text-white font-[700] leading-[120%] uppercase py-[10px] px-[10px] text-center w-1/2  opacity-[0.4] hover:opacity-[1] cursor-pointer inline-block outline-0">
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
                                    </div>
                                    <div className='tab-content mt-[50px]'>
                                        <div className='wrapper  flex flex-wrap'>
                                            <Tab.Panels className="wrapper  ">
                                                <Tab.Panel className="w-full  flex flex-wrap">
                                                    <h1 className='text-white block w-full'>Tab content1</h1>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0  m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0  m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel className="w-full  flex flex-wrap">
                                                    <h1 className='text-white block w-full'>Tab content2</h1>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0  m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0  m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
                                                            <Link href="#" className=" text-white hover:text">
                                                                <span className="inline-block font-bold group-hover:text-[#ff3b84]">Read bio</span>
                                                                <svg className="ml-[10px] inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="card relative w-[calc(25%-20px)] max-md:w-[calc(50%-20px)] max-lg:w-[calc(33.33%-20px)] max-sm:w-full max-sm:-ml-0 max-sm:mx-0 m-[10px] rounded-[16px] border-2 transition-all duration-700 hover:scale-105  bg-black group hover:shadow-lg overflow-hidden">
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
                                                        <div className="absolute bottom-[20px] left-[32px] max-md:left-[20px] flex flex-wrap align-middle cursor-pointer">
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
                    <div className="flex flex-wrap items-end ">
                        <div className="w-2/3 max-lg:w-full">
                            <h2 className="text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-bold text-black mb-[20px] leading-[100%] max-w-[771px]">Working with the biggest innovators and game changers</h2>
                        </div>
                        <div className="w-1/3 flex justify-end max-lg:w-full max-lg:justify-start">
                            <Link href="#" className="text-black text-[16px] font-bold bg-transparent border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700">view all investors</Link>
                        </div>
                    </div>
                    <div className="w-full relative mt-[50px] max-md:mt-[20px]">
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
                            <p className='text-[18px]  max-sm:text-[16px] text-black'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum.</p>
                        </div>
                    </div>
                    <div className='wrapper w-[calc(100%+20px)] -ml-[10px] mt-[40px] flex flex-wrap'>
                        <div className='col-three relative w-[calc(33.33%-20px)] max-lg:w-[calc(50%-20px)] max-sm:w-full p-[32px] m-[10px] cursor-pointer border-2 border-black rounded-[16px] shadow-[] flex flex-wrap justify-center group group-hover:border-3 group-hover:border-black hover:shadow-black-shadow hover:outline-3 hover:outline-black'>
                            <div className='icon transition-all duration-700 ease-in-out group group-hover:scale-110'>
                                <Image
                                    src="/award_1.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h4 className='text-left w-full text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-bold text-black mb-[20px]'>Award one</h4>
                            <p className='text-black text-[16px] pb-[30px]'>At diam tellus lectus sociis neque sed elementum. Ac mauris odio tristique.</p>
                            <div class="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                <a class=" text-black hover:text" href="#"><span class="text-[16px] inline-block font-bold group-hover:text-[#ff3b84] uppercase">Learn more
                                </span><svg class="ml-[10px] inline-block group-hover:width-[30px]" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg></a></div>
                        </div>
                        <div className='col-three relative w-[calc(33.33%-20px)] max-lg:w-[calc(50%-20px)] max-sm:w-full p-[32px] m-[10px] cursor-pointer border-2 border-black rounded-[16px] shadow-[] flex flex-wrap justify-center group group-hover:border-3 group-hover:border-black hover:shadow-black-shadow'>
                            <div className='icon transition-all duration-700 ease-in-out group group-hover:scale-110'>
                                <Image
                                    src="/award_2.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h4 className='w-full text-left text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-bold text-black mb-[20px]'>Award two</h4>
                            <p className='text-black text-[16px] pb-[30px]'>At diam tellus lectus sociis neque sed elementum. Ac mauris odio tristique.</p>
                            <div class="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                <a class=" text-black hover:text" href="#"><span class="text-[16px] inline-block font-bold group-hover:text-[#ff3b84] uppercase">Learn more
                                </span><svg class="ml-[10px] inline-block group-hover:width-[30px]" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg></a></div>
                        </div>
                        <div className='col-three relative w-[calc(33.33%-20px)] max-lg:w-[calc(50%-20px)] max-sm:w-full p-[32px] m-[10px] cursor-pointer border-2 border-black rounded-[16px] shadow-[] flex flex-wrap justify-center group group-hover:border-3 group-hover:border-black hover:shadow-black-shadow'>
                            <div className='icon transition-all duration-700 ease-in-out group group-hover:scale-110'>
                                <Image
                                    src="/award_3.png"
                                    width={180}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h4 className='text-left w-full text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-bold text-black mb-[20px]'>Award three</h4>
                            <p className='text-black text-[16px] pb-[30px]'>At diam tellus lectus sociis neque sed elementum. Ac mauris odio tristique.</p>
                            <div class="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer">
                                <a class=" text-black hover:text" href="#"><span class="text-[16px] inline-block font-bold group-hover:text-[#ff3b84] uppercase">Learn more
                                </span><svg class="ml-[10px] inline-block group-hover:width-[30px]" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg></a></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='footer-cta relative py-[40px] mx-auto w-full max-w-[1235px] bg-[#fff]'>
                <div className='relative w-full mx-auto my-0 px-[50px]'>
                    <div className='wrapper flex flex-wrap'>
                        <div className='col-left w-1/2 max-md:w-full'>
                            <h2 className='text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-bold text-black mb-[20px] leading-[100%] max-w-[771px]'>Headline about careers</h2>
                            <p className="max-w-[771px] text-[18px] max-md:text-[16px] mb-[20px]">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora amet set incidunt ut labore et dolore magnam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi.</p>
                            <Link href="#" className="text-black text-[16px] font-bold bg-transparent border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700">view open postions</Link>
                        </div>
                        <div className='col-right w-1/2 max-md:w-full max-md:mt-[20px]'>
                            <Image className="absolute top-0 right-0 max-md:relative"
                                src="/careers_graphic.png"
                                width={566}
                                height={638}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='relative py-[140px] max-md:py-[40px] mx-auto w-full max-w-[1235px] bg-[#000]'>
                <div className='relative w-full mx-auto my-0 px-[50px]'>
                    <div className="flex flex-wrap items-end ">
                        <div className="w-2/3 max-lg:w-full">
                            <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-bold text-white mb-[20px] leading-[100%] max-w-[771px]"><span>Explore</span>more from Sift</h2>
                        </div>
                        <div className="w-1/3 flex justify-end mt-[40px] max-lg:w-full max-lg:justify-start max-lg:mt-0">
                            <Link href="#" className="text-white text-[16px] font-bold bg-transparent border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700">Watch the video</Link>
                        </div>
                    </div>
                    <div className='wrap w-[calc(100%+20px)] relative -ml-[10px] flex flex-wrap'>
                        <div className='card w-[calc(33.33%-20px)] max-md:w-[calc(50%-20px)] max-sm:w-full m-[10px] cursor-pointer  border-white rounded-[16px] truncate border-2 transistion relative group whitespace-pre-line group-hover:border-2 group-hover:border-white hover:shadow-white-shadow'>
                            <Image className="transition-all duration-700 group-hover:scale-105 "
                                src="/cardimgone.png"
                                width={566}
                                height={638}
                                alt="Picture of the author"
                            />
                            <div className='content text-white p-[32px] max-lg:p-[20px]'>
                                <h6 className='text-[16px] leading-[120%] font-[700] uppercase mb-[20px]'>Press releases  |  feb 23 2023</h6>
                                <h5 className='text-[24px] max-xl:text-[23px] max-lg:text-[22px] max-md:text-[21px] max-sm:text-[20px] font-bold  mb-[30px] max-sm:mb-[55px] leading-[120%]'>Lorem ipsum dolor sit amet consectetur. Tortor sagittis sed in vitae.</h5>
                                <div class="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer max-lg:left-[20px]"><a class=" text-white hover:text" href="#"><span class="text-[16px] max-sm:text-[14px] inline-block font-bold group-hover:text-[#ff3b84] uppercase">read the press release</span><svg class="ml-[10px] inline-block group-hover:width-[30px]" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg></a></div>
                            </div>
                        </div>
                        <div className='card w-[calc(33.33%-20px)] max-md:w-[calc(50%-20px)] max-sm:w-full m-[10px] cursor-pointer  border-white rounded-[16px] truncate border-2 transistion relative group whitespace-pre-line group-hover:border-2 group-hover:border-white hover:shadow-white-shadow'>
                            <Image className="transition-all duration-700 group-hover:scale-105 "
                                src="/scondcard.png"
                                width={566}
                                height={638}
                                alt="Picture of the author"
                            />
                            <div className='content text-white p-[32px] max-lg:p-[20px]'>
                                <h6 className='text-[16px] leading-[120%] font-[700] uppercase mb-[20px]'>Press releases  |  feb 23 2023</h6>
                                <h5 className='text-[24px] max-xl:text-[23px] max-lg:text-[22px] max-md:text-[21px] max-sm:text-[20px] font-bold  mb-[30px] max-sm:mb-[55px] leading-[120%]'>Lorem ipsum dolor sit amet consectetur. Tortor sagittis sed in vitae.</h5>
                                <div class="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer max-lg:left-[20px]"><a class=" text-white hover:text" href="#"><span class="text-[16px] max-sm:text-[14px] inline-block font-bold group-hover:text-[#ff3b84] uppercase">read the press release</span><svg class="ml-[10px] inline-block group-hover:width-[30px]" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg></a></div>
                            </div>
                        </div>
                        <div className='card w-[calc(33.33%-20px)] max-md:w-[calc(50%-20px)] max-sm:w-full m-[10px] cursor-pointer  border-white rounded-[16px] truncate border-2 transistion relative group whitespace-pre-line group-hover:border-2 group-hover:border-white hover:shadow-white-shadow'>
                            <Image className="transition-all duration-700 group-hover:scale-105 "
                                src="/scondcard.png"
                                width={566}
                                height={638}
                                alt="Picture of the author"
                            />
                            <div className='content text-white p-[32px] max-lg:p-[20px] '>
                                <h6 className='text-[16px] leading-[120%] font-[700] uppercase mb-[20px]'>Press releases  |  feb 23 2023</h6>
                                <h5 className='text-[24px] max-xl:text-[23px] max-lg:text-[22px] max-md:text-[21px] max-sm:text-[20px] font-bold  mb-[30px] max-sm:mb-[55px] leading-[120%]'>Lorem ipsum dolor sit amet consectetur. Tortor sagittis sed in vitae.</h5>
                                <div class="absolute bottom-[20px] left-[32px] flex flex-wrap align-middle cursor-pointer max-lg:left-[20px]"><a class=" text-white hover:text" href="#"><span class="text-[16px] max-sm:text-[14px] inline-block font-bold group-hover:text-[#ff3b84] uppercase">read the press release</span><svg class="ml-[10px] inline-block group-hover:width-[30px]" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-[40px] mx-auto w-full max-w-[1235px]  pt-[180px] max-xl:pt-0 max-lg:pt-0 bg-black truncate whitespace-pre-line'>
                <div className='relative w-full mx-auto my-0 px-[50px] '>
                    <div className='w-full flex flex-wrap bg-[#2E69FF] justify-end align-middle relative rounded-t-lg max-lg:justify-normal max-lg:p-[20px]'>
                        <div className='left-img w-1/2 max-lg:w-full max-lg:relative'>
                            <Image className="absolute left-0 bottom-0 max-xl:relative"
                                src="/footercta.webp"
                                width={520}
                                height={300}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='col-right w-1/2 py-[30px] px-[10px] max-lg:w-full'>
                            <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-bold text-white mb-[20px] leading-[100%] max-w-[771px]">Take the next step</h2>
                            <p className='text-[18px] max-md:text-[16px] text-white font-[400] leading-[150%] mb-[20px]'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum.</p>
                            <Link href="#" className="text-black text-[16px] font-bold bg-white border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#Ffff] rounded-full inline-block uppercase hover:text-[#FF3B84] hover:bg-[#FFff] hover:border-[#FF3B84] ease-in-out duration-700">Optional CTA</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-[40px] mx-auto w-full max-w-[1235px]  bg-black'>
                <div className='relative w-full mx-auto my-0 px-[50px] flex flex-wrap max-lg:justify-center'>
                    <div className='w-1/4 max-lg:w-full max-lg:flex max-lg:flex-wrap max-lg:justify-center'>
                        <div className='w-full flex flex-wrap mb-[32px] max-lg:justify-center'>
                            <Link href='#'>
                            <Image className=""
                                src="/logo.png"
                                width={140}
                                height={50}
                                alt="Picture of the author"
                            />
                            </Link>
                        </div>
                        <div className='social-nav w-full flex flex-wrap justify-between max-w-[400px]'>
                            <Link href="" className='group'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.2703 14.2195L13.6453 10.4695C13.5041 10.3753 13.3399 10.3212 13.1704 10.313C13.0008 10.3048 12.8322 10.3428 12.6825 10.4229C12.5328 10.503 12.4077 10.6223 12.3206 10.768C12.2334 10.9136 12.1874 11.0802 12.1875 11.25V18.75C12.1874 18.9198 12.2334 19.0864 12.3206 19.2321C12.4077 19.3777 12.5328 19.497 12.6825 19.5771C12.8322 19.6572 13.0008 19.6952 13.1704 19.687C13.3399 19.6788 13.5041 19.6247 13.6453 19.5305L19.2703 15.7805C19.3989 15.6949 19.5044 15.5789 19.5773 15.4427C19.6502 15.3065 19.6884 15.1545 19.6884 15C19.6884 14.8455 19.6502 14.6935 19.5773 14.5573C19.5044 14.4211 19.3989 14.3051 19.2703 14.2195ZM14.0625 16.9981V13.0078L17.0602 15L14.0625 16.9981ZM27.4605 8.14688C27.3501 7.71486 27.1386 7.31529 26.8433 6.98114C26.5481 6.64698 26.1776 6.38781 25.7625 6.225C21.7453 4.67344 15.3516 4.6875 15 4.6875C14.6484 4.6875 8.25469 4.67344 4.2375 6.225C3.82238 6.38781 3.45192 6.64698 3.15667 6.98114C2.86143 7.31529 2.64987 7.71486 2.53945 8.14688C2.23594 9.31641 1.875 11.4539 1.875 15C1.875 18.5461 2.23594 20.6836 2.53945 21.8531C2.64971 22.2854 2.86119 22.6852 3.15644 23.0195C3.45169 23.3539 3.82224 23.6133 4.2375 23.7762C8.08594 25.2609 14.1094 25.3125 14.9227 25.3125H15.0773C15.8906 25.3125 21.9176 25.2609 25.7625 23.7762C26.1778 23.6133 26.5483 23.3539 26.8436 23.0195C27.1388 22.6852 27.3503 22.2854 27.4605 21.8531C27.7641 20.6813 28.125 18.5461 28.125 15C28.125 11.4539 27.7641 9.31641 27.4605 8.14688ZM25.6453 21.3891C25.6096 21.5328 25.5403 21.6661 25.4432 21.7779C25.346 21.8898 25.2237 21.977 25.0863 22.0324C21.3773 23.4645 15.0691 23.4387 15.0082 23.4387H15C14.9367 23.4387 8.6332 23.4621 4.92188 22.0324C4.7845 21.977 4.66221 21.8898 4.56505 21.7779C4.46788 21.6661 4.3986 21.5328 4.36289 21.3891C4.07812 20.3191 3.75 18.3481 3.75 15C3.75 11.652 4.07812 9.68086 4.35469 8.6168C4.38974 8.47217 4.45872 8.33796 4.55592 8.22527C4.65312 8.11258 4.77575 8.02465 4.91367 7.96875C8.49023 6.58711 14.4832 6.5625 14.9742 6.5625H15.0059C15.0691 6.5625 21.3785 6.54141 25.084 7.96875C25.2214 8.0242 25.3436 8.11141 25.4408 8.22324C25.538 8.33507 25.6073 8.46834 25.643 8.61211C25.9219 9.68086 26.25 11.652 26.25 15C26.25 18.3481 25.9219 20.3191 25.6453 21.3832V21.3891Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                            </svg>
                            </Link>
                            <Link href="#" className='group'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.3125 2.8125H4.6875C4.19022 2.8125 3.71331 3.01004 3.36167 3.36167C3.01004 3.71331 2.8125 4.19022 2.8125 4.6875V25.3125C2.8125 25.8098 3.01004 26.2867 3.36167 26.6383C3.71331 26.99 4.19022 27.1875 4.6875 27.1875H25.3125C25.8098 27.1875 26.2867 26.99 26.6383 26.6383C26.99 26.2867 27.1875 25.8098 27.1875 25.3125V4.6875C27.1875 4.19022 26.99 3.71331 26.6383 3.36167C26.2867 3.01004 25.8098 2.8125 25.3125 2.8125ZM25.3125 25.3125H4.6875V4.6875H25.3125V25.3125ZM11.25 13.125V20.625C11.25 20.8736 11.1512 21.1121 10.9754 21.2879C10.7996 21.4637 10.5611 21.5625 10.3125 21.5625C10.0639 21.5625 9.8254 21.4637 9.64959 21.2879C9.47377 21.1121 9.375 20.8736 9.375 20.625V13.125C9.375 12.8764 9.47377 12.6379 9.64959 12.4621C9.8254 12.2863 10.0639 12.1875 10.3125 12.1875C10.5611 12.1875 10.7996 12.2863 10.9754 12.4621C11.1512 12.6379 11.25 12.8764 11.25 13.125ZM21.5625 16.4062V20.625C21.5625 20.8736 21.4637 21.1121 21.2879 21.2879C21.1121 21.4637 20.8736 21.5625 20.625 21.5625C20.3764 21.5625 20.1379 21.4637 19.9621 21.2879C19.7863 21.1121 19.6875 20.8736 19.6875 20.625V16.4062C19.6875 15.7846 19.4406 15.1885 19.001 14.749C18.5615 14.3094 17.9654 14.0625 17.3438 14.0625C16.7221 14.0625 16.126 14.3094 15.6865 14.749C15.2469 15.1885 15 15.7846 15 16.4062V20.625C15 20.8736 14.9012 21.1121 14.7254 21.2879C14.5496 21.4637 14.3111 21.5625 14.0625 21.5625C13.8139 21.5625 13.5754 21.4637 13.3996 21.2879C13.2238 21.1121 13.125 20.8736 13.125 20.625V13.125C13.1262 12.8954 13.2116 12.6741 13.365 12.5033C13.5185 12.3325 13.7293 12.2239 13.9575 12.1981C14.1857 12.1724 14.4154 12.2313 14.603 12.3637C14.7906 12.4961 14.9231 12.6928 14.9754 12.9164C15.6096 12.4862 16.349 12.2368 17.1142 12.1951C17.8795 12.1534 18.6416 12.321 19.3188 12.6798C19.996 13.0385 20.5626 13.575 20.9579 14.2315C21.3532 14.8881 21.5622 15.6399 21.5625 16.4062ZM11.7188 9.84375C11.7188 10.1219 11.6363 10.3938 11.4818 10.625C11.3272 10.8563 11.1076 11.0365 10.8506 11.143C10.5937 11.2494 10.3109 11.2772 10.0382 11.223C9.76537 11.1687 9.5148 11.0348 9.31813 10.8381C9.12146 10.6415 8.98753 10.3909 8.93327 10.1181C8.87901 9.84531 8.90686 9.56256 9.01329 9.3056C9.11973 9.04864 9.29997 8.82902 9.53123 8.6745C9.76249 8.51997 10.0344 8.4375 10.3125 8.4375C10.6855 8.4375 11.0431 8.58566 11.3069 8.84938C11.5706 9.1131 11.7188 9.47079 11.7188 9.84375Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                                </svg>
                            </Link>
                            <Link href="#" className='group'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 9.375C13.8875 9.375 12.7999 9.7049 11.8749 10.323C10.9499 10.9411 10.2289 11.8196 9.80318 12.8474C9.37744 13.8752 9.26604 15.0062 9.48308 16.0974C9.70013 17.1885 10.2359 18.1908 11.0225 18.9775C11.8092 19.7641 12.8115 20.2999 13.9026 20.5169C14.9938 20.734 16.1248 20.6226 17.1526 20.1968C18.1804 19.7711 19.0589 19.0501 19.677 18.1251C20.2951 17.2001 20.625 16.1125 20.625 15C20.6234 13.5086 20.0303 12.0788 18.9758 11.0242C17.9212 9.96968 16.4914 9.37655 15 9.375ZM15 18.75C14.2583 18.75 13.5333 18.5301 12.9166 18.118C12.2999 17.706 11.8193 17.1203 11.5355 16.4351C11.2516 15.7498 11.1774 14.9958 11.3221 14.2684C11.4667 13.541 11.8239 12.8728 12.3483 12.3483C12.8728 11.8239 13.541 11.4667 14.2684 11.3221C14.9958 11.1774 15.7498 11.2516 16.4351 11.5355C17.1203 11.8193 17.706 12.2999 18.118 12.9166C18.5301 13.5333 18.75 14.2583 18.75 15C18.75 15.9946 18.3549 16.9484 17.6516 17.6516C16.9484 18.3549 15.9946 18.75 15 18.75ZM20.625 2.8125H9.375C7.63509 2.81436 5.96697 3.50636 4.73667 4.73667C3.50636 5.96697 2.81436 7.63509 2.8125 9.375V20.625C2.81436 22.3649 3.50636 24.033 4.73667 25.2633C5.96697 26.4936 7.63509 27.1856 9.375 27.1875H20.625C22.3649 27.1856 24.033 26.4936 25.2633 25.2633C26.4936 24.033 27.1856 22.3649 27.1875 20.625V9.375C27.1856 7.63509 26.4936 5.96697 25.2633 4.73667C24.033 3.50636 22.3649 2.81436 20.625 2.8125ZM25.3125 20.625C25.3125 21.8682 24.8186 23.0605 23.9396 23.9396C23.0605 24.8186 21.8682 25.3125 20.625 25.3125H9.375C8.1318 25.3125 6.93951 24.8186 6.06044 23.9396C5.18136 23.0605 4.6875 21.8682 4.6875 20.625V9.375C4.6875 8.1318 5.18136 6.93951 6.06044 6.06044C6.93951 5.18136 8.1318 4.6875 9.375 4.6875H20.625C21.8682 4.6875 23.0605 5.18136 23.9396 6.06044C24.8186 6.93951 25.3125 8.1318 25.3125 9.375V20.625ZM22.5 8.90625C22.5 9.18438 22.4175 9.45626 22.263 9.68752C22.1085 9.91878 21.8889 10.099 21.6319 10.2055C21.3749 10.3119 21.0922 10.3397 20.8194 10.2855C20.5466 10.2312 20.296 10.0973 20.0994 9.90062C19.9027 9.70395 19.7688 9.45338 19.7145 9.1806C19.6603 8.90781 19.6881 8.62506 19.7945 8.3681C19.901 8.11114 20.0812 7.89152 20.3125 7.737C20.5437 7.58247 20.8156 7.5 21.0938 7.5C21.4667 7.5 21.8244 7.64816 22.0881 7.91188C22.3518 8.1756 22.5 8.53329 22.5 8.90625Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                                </svg>
                            </Link>
                            <Link href="#" className='group'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0092 3.75H25.7469L17.5812 13.2808L27.1875 26.25H19.6659L13.7746 18.3842L7.03375 26.25H3.29383L12.0278 16.0558L2.8125 3.75H10.5251L15.8502 10.9396L22.0092 3.75ZM20.6974 23.9654H22.7685L9.39973 5.91462H7.17724L20.6974 23.9654Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                                </svg>
                            </Link>
                            <Link href="#" className='group'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 2.8125C12.5895 2.8125 10.2332 3.52728 8.22899 4.86646C6.22477 6.20564 4.66267 8.10907 3.74022 10.336C2.81778 12.563 2.57643 15.0135 3.04668 17.3777C3.51694 19.7418 4.67769 21.9134 6.38214 23.6179C8.08659 25.3223 10.2582 26.4831 12.6223 26.9533C14.9865 27.4236 17.437 27.1822 19.664 26.2598C21.8909 25.3373 23.7944 23.7752 25.1335 21.771C26.4727 19.7668 27.1875 17.4105 27.1875 15C27.1841 11.7687 25.899 8.67076 23.6141 6.3859C21.3292 4.10104 18.2313 2.81591 15 2.8125ZM15.9375 25.2691V17.8125H18.75C18.9986 17.8125 19.2371 17.7137 19.4129 17.5379C19.5887 17.3621 19.6875 17.1236 19.6875 16.875C19.6875 16.6264 19.5887 16.3879 19.4129 16.2121C19.2371 16.0363 18.9986 15.9375 18.75 15.9375H15.9375V13.125C15.9375 12.6277 16.135 12.1508 16.4867 11.7992C16.8383 11.4475 17.3152 11.25 17.8125 11.25H19.6875C19.9361 11.25 20.1746 11.1512 20.3504 10.9754C20.5262 10.7996 20.625 10.5611 20.625 10.3125C20.625 10.0639 20.5262 9.8254 20.3504 9.64959C20.1746 9.47377 19.9361 9.375 19.6875 9.375H17.8125C16.8179 9.375 15.8641 9.77009 15.1609 10.4733C14.4576 11.1766 14.0625 12.1304 14.0625 13.125V15.9375H11.25C11.0014 15.9375 10.7629 16.0363 10.5871 16.2121C10.4113 16.3879 10.3125 16.6264 10.3125 16.875C10.3125 17.1236 10.4113 17.3621 10.5871 17.5379C10.7629 17.7137 11.0014 17.8125 11.25 17.8125H14.0625V25.2691C11.4197 25.0279 8.9716 23.7771 7.22747 21.7769C5.48334 19.7767 4.57743 17.1812 4.69819 14.5301C4.81894 11.879 5.95706 9.37659 7.8758 7.54325C9.79454 5.70991 12.3462 4.68684 15 4.68684C17.6538 4.68684 20.2055 5.70991 22.1242 7.54325C24.043 9.37659 25.1811 11.879 25.3018 14.5301C25.4226 17.1812 24.5167 19.7767 22.7725 21.7769C21.0284 23.7771 18.5803 25.0279 15.9375 25.2691Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                                </svg>
                            </Link>
                        </div>
                        <div class="btn-wrap mt-[32px] max-lg:w-full max-lg:text-center"><a class="text-white text-[16px] font-bold bg-transparent border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-white hover:bg-[#FF3B84] ease-in-out duration-700" href="#">Contact us</a></div>
                    </div>
                    <div className='w-2/4 text-white max-lg:w-full max-lg:my-[20px]'>
                        <div className='w-full flex flex-wrap justify-between max-lg:text-center'>
                            <div className='w-1/3 pl-[20px] max-sm:w-full max-sm:pl-0'>
                                <h4 className='text-[16px] leading-[150%] font-[600] mb-[24px]'>Developers</h4>
                                <ul>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out'>
                                        <a href=''>Overview</a>
                                    </li>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out'>
                                        <a href=''>APIs</a>
                                    </li>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out'>
                                        <a href=''>Plugins</a>
                                    </li>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out'>
                                        <a href=''>Guides</a>
                                    </li>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out'>
                                        <a href=''>Tutorials</a>
                                    </li>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out cursor-pointer group'>
                                        <a href='#' className='pr-[5px] inline-block'>Engineering Blogs</a>
                                        <svg className='inline-block' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6977 6.95981H10.7796C10.5894 6.95981 10.4353 7.11397 10.4353 7.30412V11.4902C10.4353 11.7124 10.2545 11.8932 10.0323 11.8932H2.0096C1.78746 11.8932 1.60676 11.7124 1.60676 11.4902V3.46772C1.60676 3.24548 1.78746 3.06465 2.0096 3.06465H6.41007C6.60022 3.06465 6.75437 2.91049 6.75437 2.72034V1.80219C6.75437 1.61204 6.60022 1.45789 6.41007 1.45789H2.0096C0.901486 1.45789 0 2.35951 0 3.46772V11.4903C0 12.5985 0.901532 13.5 2.0096 13.5H10.0322C11.1404 13.5 12.042 12.5984 12.042 11.4903V7.30416C12.042 7.11397 11.8879 6.95981 11.6977 6.95981Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                                            <path d="M12.6557 0.5H9.00361C8.81346 0.5 8.6593 0.654157 8.6593 0.844306V1.76246C8.6593 1.95261 8.81346 2.10676 9.00361 2.10676H10.2571L5.5403 6.82344C5.40584 6.9579 5.40584 7.17587 5.5403 7.31038L6.18952 7.95965C6.25412 8.02424 6.34166 8.06051 6.43302 8.06051C6.52433 8.06051 6.61192 8.02424 6.67647 7.95965L11.3932 3.24288V4.4963C11.3932 4.68644 11.5474 4.8406 11.7375 4.8406H12.6557C12.8458 4.8406 13 4.68644 13 4.4963V0.844306C13 0.654157 12.8458 0.5 12.6557 0.5Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-1/3 pl-[20px] max-sm:w-full max-sm:pl-0'>
                                <h4 className='text-[16px] leading-[150%] font-[600] mb-[24px]'>Support</h4>
                                <ul>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out cursor-pointer group'>
                                        <a href='#' className='pr-[5px] inline-block'>Help Center</a>
                                        <svg className='inline-block' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6977 6.95981H10.7796C10.5894 6.95981 10.4353 7.11397 10.4353 7.30412V11.4902C10.4353 11.7124 10.2545 11.8932 10.0323 11.8932H2.0096C1.78746 11.8932 1.60676 11.7124 1.60676 11.4902V3.46772C1.60676 3.24548 1.78746 3.06465 2.0096 3.06465H6.41007C6.60022 3.06465 6.75437 2.91049 6.75437 2.72034V1.80219C6.75437 1.61204 6.60022 1.45789 6.41007 1.45789H2.0096C0.901486 1.45789 0 2.35951 0 3.46772V11.4903C0 12.5985 0.901532 13.5 2.0096 13.5H10.0322C11.1404 13.5 12.042 12.5984 12.042 11.4903V7.30416C12.042 7.11397 11.8879 6.95981 11.6977 6.95981Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                                            <path d="M12.6557 0.5H9.00361C8.81346 0.5 8.6593 0.654157 8.6593 0.844306V1.76246C8.6593 1.95261 8.81346 2.10676 9.00361 2.10676H10.2571L5.5403 6.82344C5.40584 6.9579 5.40584 7.17587 5.5403 7.31038L6.18952 7.95965C6.25412 8.02424 6.34166 8.06051 6.43302 8.06051C6.52433 8.06051 6.61192 8.02424 6.67647 7.95965L11.3932 3.24288V4.4963C11.3932 4.68644 11.5474 4.8406 11.7375 4.8406H12.6557C12.8458 4.8406 13 4.68644 13 4.4963V0.844306C13 0.654157 12.8458 0.5 12.6557 0.5Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                                        </svg>
                                    </li>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out cursor-pointer group'>
                                        <a href='#' className='pr-[5px] inline-block'>Contact Support</a>
                                        <svg className='inline-block' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6977 6.95981H10.7796C10.5894 6.95981 10.4353 7.11397 10.4353 7.30412V11.4902C10.4353 11.7124 10.2545 11.8932 10.0323 11.8932H2.0096C1.78746 11.8932 1.60676 11.7124 1.60676 11.4902V3.46772C1.60676 3.24548 1.78746 3.06465 2.0096 3.06465H6.41007C6.60022 3.06465 6.75437 2.91049 6.75437 2.72034V1.80219C6.75437 1.61204 6.60022 1.45789 6.41007 1.45789H2.0096C0.901486 1.45789 0 2.35951 0 3.46772V11.4903C0 12.5985 0.901532 13.5 2.0096 13.5H10.0322C11.1404 13.5 12.042 12.5984 12.042 11.4903V7.30416C12.042 7.11397 11.8879 6.95981 11.6977 6.95981Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                                            <path d="M12.6557 0.5H9.00361C8.81346 0.5 8.6593 0.654157 8.6593 0.844306V1.76246C8.6593 1.95261 8.81346 2.10676 9.00361 2.10676H10.2571L5.5403 6.82344C5.40584 6.9579 5.40584 7.17587 5.5403 7.31038L6.18952 7.95965C6.25412 8.02424 6.34166 8.06051 6.43302 8.06051C6.52433 8.06051 6.61192 8.02424 6.67647 7.95965L11.3932 3.24288V4.4963C11.3932 4.68644 11.5474 4.8406 11.7375 4.8406H12.6557C12.8458 4.8406 13 4.68644 13 4.4963V0.844306C13 0.654157 12.8458 0.5 12.6557 0.5Z" fill="white" className='group-hover:fill-[#FF3B84]' />
                                        </svg>
                                    </li>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out'>
                                        <a href=''>Contact Support</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-1/3 pl-[20px] max-sm:w-full max-sm:pl-0'>
                                <h4 className='text-[16px] leading-[150%] font-[600] mb-[24px]'>Partners</h4>
                                <ul>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out'>
                                        <a href=''>Overview</a>
                                    </li>
                                    <li className='text-[16px] leading-[150%] font-[400] mb-[24px] hover:text-[#ff3b84] transition-all ease-in-out'>
                                        <a href=''>Become a Partner</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4 max-lg:w-full '>
                        <div className='wrap'>
                            <h4 className='text-[18px] text-white font-[700] leading-[150%] mb-[32px] max-lg:text-center'>Subscribe to receive updates!</h4>
                            <div className='wrapper'>
                                <form>
                                    <label for="first-name" type="text" className='w-full text-white uppercase text-[14px] font-[700] leading-[120%] mb-[10px] block'>first name</label>
                                    <input id="first-name" type="text" className='w-full text-white bg-transparent border-white border-2 rounded-[4px] outline-none p-[10px] block mb-[24px] hover:border-[#ff3b84] ease-in-out transition-[600]'></input>
                                    <label for="last-name" type="text" className='w-full text-white uppercase text-[14px] font-[700] leading-[120%] mb-[10px] block '>Last name</label>
                                    <input id="last-name" type="text" className='w-full text-white bg-transparent border-white border-2 rounded-[4px] outline-none p-[10px] block mb-[24px] hover:border-[#ff3b84] ease-in-out transition-[600]'></input>
                                    <div class="flex align-middle mb-[24px]">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 accent-[#ff3b84] accent-current-transparent focus:accent-[#ff3b84]" />
                                        <label for="default-checkbox" class="text-white uppercase text-[16px] font-[400] leading-[120%] mb-[10px] inline-block pl-[10px]">Lorem ipsum dolore</label>
                                    </div>
                                    <button type="submit" class="text-white text-[16px] font-bold bg-transparent border-2 py-[16px] max-md:py-[12px] px-[24px] max-md:px-[20px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-white hover:bg-[#FF3B84] ease-in-out duration-700">subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[24px] flex flex-wrap justify-between w-full'>
                        <div className='col-left max-lg:w-full max-lg:mb-[20px]'>
                            <p className='text-[14px] text-white font-[400] leading-[150%]'>© 2023 Sift Science, Inc. All rights reserved. Sift and the Sift logo are trademarks or registered trademarks of Sift Science, Inc.</p>
                        </div>
                        <div className='col-right max-lg:w-full'>
                            <ul className='flex flex-wrap'>
                                <li className='text-[14px] text-white font-[400] leading-[176%] ml-[10px] hover:text-[#ff3b84] max-lg:ml-0 max-lg:mr-[10px]'><Link href="#" className=''>Privacy & Terms</Link></li>
                                <li className='text-[14px] text-white font-[400] leading-[176%] ml-[10px] hover:text-[#ff3b84] max-lg:ml-0'><Link href="#" >Sitemap</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
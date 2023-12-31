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
                <div className="relative w-full px-10 py-10 max-w-[1340px] mx-auto">
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
                <div className="relative w-full px-10 py-10 max-w-[1340px] mx-auto">
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
                <div className="relative w-full px-10 py-10 max-w-[1340px] mx-auto">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="w-[calc(35%-10px)] max-lg:w-full relative p-5 bg-black mr-[10px] max-lg:mr-[0px]">
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
                                <div className=" relative w-full flex flex-wrap items-center justify-end mt-[20px]">
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
                    <div className="relative w-full p-5 bg-black mt-[20px] font-bold">
                        <h4 className="text-[#c8c8c8] text-[22px] max-w-[100px] mb-[20px]">BUSINESS INSIDER</h4>
                        <h2 className="text-[#FFE133] max-w-[1000px] text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px] font-bold leading-none">Habu named one of the hottest marketing tech companies of 2022!</h2>
                        <div className=" relative w-full flex flex-wrap items-center justify-end mt-[20px]">
                            <Link href="#" className=" inline-flex">
                                <span className="text[14px] font-bold text-white mr-[10px]">LEARN MORE</span>
                                <Image
                                    src="/chevron-right.png"
                                    width={18}
                                    height={16}
                                    alt="Picture of the author"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-with-img">
                <div className="px-10 py-10 max-w-[1340px] mx-auto">
                    <p className="text-[20px] max-md:text-[18px] font-bold text-[#b1b1b1] mb-[10px]">what we do</p>
                    <h2 className="text-black max-w-[1000px] text-[60px] max-lg:text-[52px] max-md:text-[44px] max-sm:text-[36px] font-bold leading-[0.97]">Habu Clean Room Platform can help you unlock new insights wherever your data lives</h2>
                    <div className="relative mt-[40px] flex flex-wrap">
                        <div className="card-wrapper flex flex-wrap m-y-[20px] w-1/2 max-lg:w-full">
                            <div className="relative card w-1/2 max-md:w-full pr-[20px] max-md:pr-[0px] my-[10px]">
                                <h3 className="text-black font-bold text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px]">Smart</h3>
                                <p className="text-black text-[18px] max-md:text-[16px]">Designed to work with distributed datasets without copying or moving data to a centralized location</p>
                            </div>
                            <div className="relative card w-1/2 max-md:w-full pr-[20px] max-md:pr-[0px] my-[10px]">
                                <h3 className="text-black font-bold text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px]">Scalable</h3>
                                <p className="text-black text-[18px] max-md:text-[16px]">Fully interoperable and platform-agnostic with support across many use cases</p>
                            </div>
                            <div className="relative card w-1/2 max-md:w-full pr-[20px] max-md:pr-[0px] my-[10px]">
                                <h3 className="text-black font-bold text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px]">Simple</h3>
                                <p className="text-black text-[18px] max-md:text-[16px]">A business-friendly clean room solution that anyone in your company can get value from</p>
                            </div>
                            <div className="relative card w-1/2 max-md:w-full pr-[20px] max-md:pr-[0px] my-[10px]">
                                <h3 className="text-black font-bold text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px]">Safe</h3>
                                <p className="text-black text-[18px] max-md:text-[16px]">Architected with the latest privacy-enhancing tools for consumer privacy and business governance</p>
                            </div>
                        </div>
                        <div className="relative  max-w-fit w-1/2 max-lg:w-full flex flex-wrap justify-center max-lg:mt-[100px] max-md:mt-[20px]">
                            <div className="absolute -right-[60px] -top-[85px] z-0">
                                <Image className="max-md:hidden"
                                    src="/what_we_do_circles.png"
                                    width={142}
                                    height={150}
                                    alt="Picture of the author"
                                />
                            </div>
                            <Image className="relative z-10"
                                src="/monitor_homepage.png"
                                width={600}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="mt-10 block w-full">
                            <a href="#" className="text-base text-black inline-block font-bold py-[14px] max-md:py-[12px] px-[22px] max-md:px-[20px] uppercase bg-[#FFE133;] border-[#FFE133;] border rounded-[5px] transition ease-in-out duration-300 hover:text-[#FFE133;] hover:bg-transparent">Request a Demo</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-black my-[100px]">
                <div className="px-10 py-10 relative max-w-[1340px] mx-auto">
                    <div className="img-wrap absolute pl-10 left-0  -top-[6%] max-xl:hidden">
                        <Image className="relative z-10"
                            src="/disney_image_quote.png"
                            width={500}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="relative flex max-lg:flex-wrap justify-end items-center">
                        <div className="img-wrap hidden max-xl:block pr-[20px] max-lg:w-full ">
                            <Image className="relative z-10 max-lg:mx-auto max-lg:mb-[20px]"
                                src="/disney_image_quote.png"
                                width={500}
                                height={400}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="w-1/2 max-w-[600px] max-lg:max-w-[100%] max-lg:w-full max-lg:mx-auto ">
                            <Image className="relative z-10 mb-[20px]"
                                src="/disnep-white.png"
                                width={162}
                                height={71}
                                alt="Picture of the author"
                            />
                            <h3 className="text-white text-[30px] max-lg:text-[26px] max-md:text-[22px] max-sm:text-[18px] leading-[1.5] font-bold italic mb-[20px]">“By streamlining and accelerating data collaboration, our solution with Habu enables our clients to increase the velocity and value of data-driven initiatives. In short, Habu puts the power of our clean room in the hands of business executives quickly and effectively.”</h3>
                            <h4 className="text-[#FFE133] text-[20px] max-md:text-[18px] max-sm:text-[16px] font-bold">Dana McGraw; VP Audience Modeling & Data Science at Disney Advertising</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-card-grid">
                <div className="px-10 py-10 max-md:py-6 max-w-[1340px] mx-auto">
                    <p className="text-[20px] max-md:text-[18px] font-bold text-[#b1b1b1] mb-[10px]">what we do</p>
                    <h2 className="text-black max-w-[1000px] text-[60px] max-lg:text-[52px] max-md:text-[44px] max-sm:text-[36px] font-bold leading-[0.97]">Habu Clean Room Platform can help you unlock new insights wherever your data lives</h2>
                    <div className="relative flex flex-wrap justify-center w-[calc(100%+20px)] -ml-[10px] mt-[40px] max-sm:mt-[20px]">
                        <div className="relative w-[calc(50%-20px)] m-[10px] max-lg:w-full flex flex-wrap justify-center">
                            <div className="w-[220px] max-sm:w-full">
                                <Image className="relative z-10"
                                    src="/customer.png"
                                    width={220}
                                    height={150}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="w-[calc(100%-220px)] max-sm:w-full pl-[20px] max-sm:pl-[0px] ">
                                <h4 className="text-black font-bold leading-[1.13] mb-[20px] text-[30px] max-lg:text-[27px] max-md:text-[24px] max-sm:text-[21px]">Customer Journey and Attribution</h4>
                                <p className="text-[16px] text-[#212022]">Get a more complete picture of consumer behaviors and close gaps in your customer journey with high-value data signals from key partners.</p>
                            </div>
                        </div>
                        <div className="relative w-[calc(50%-20px)] m-[10px] max-lg:w-full flex flex-wrap justify-center">
                            <div className="w-[220px] max-sm:w-full">
                                <Image className="relative z-10"
                                    src="/customer.png"
                                    width={220}
                                    height={150}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="w-[calc(100%-220px)] max-sm:w-full pl-[20px] max-sm:pl-[0px] ">
                                <h4 className="text-black font-bold leading-[1.13] mb-[20px] text-[30px] max-lg:text-[27px] max-md:text-[24px] max-sm:text-[21px]">Customer Journey and Attribution</h4>
                                <p className="text-[16px] text-[#212022]">Get a more complete picture of consumer behaviors and close gaps in your customer journey with high-value data signals from key partners.</p>
                            </div>
                        </div>
                        <div className="relative w-[calc(50%-20px)] m-[10px] max-lg:w-full flex flex-wrap justify-center">
                            <div className="w-[220px] max-sm:w-full">
                                <Image className="relative z-10"
                                    src="/customer.png"
                                    width={220}
                                    height={150}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="w-[calc(100%-220px)] max-sm:w-full pl-[20px] max-sm:pl-[0px] ">
                                <h4 className="text-black font-bold leading-[1.13] mb-[20px] text-[30px] max-lg:text-[27px] max-md:text-[24px] max-sm:text-[21px]">Customer Journey and Attribution</h4>
                                <p className="text-[16px] text-[#212022]">Get a more complete picture of consumer behaviors and close gaps in your customer journey with high-value data signals from key partners.</p>
                            </div>
                        </div>
                        <div className="relative w-[calc(50%-20px)] m-[10px] max-lg:w-full flex flex-wrap justify-center">
                            <div className="w-[220px] max-sm:w-full">
                                <Image className="relative z-10"
                                    src="/customer.png"
                                    width={220}
                                    height={150}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="w-[calc(100%-220px)] max-sm:w-full pl-[20px] max-sm:pl-[0px] ">
                                <h4 className="text-black font-bold leading-[1.13] mb-[20px] text-[30px] max-lg:text-[27px] max-md:text-[24px] max-sm:text-[21px]">Customer Journey and Attribution</h4>
                                <p className="text-[16px] text-[#212022]">Get a more complete picture of consumer behaviors and close gaps in your customer journey with high-value data signals from key partners.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 block w-full">
                        <a href="#" className="text-base text-black inline-block font-bold py-[14px] max-md:py-[12px] px-[22px] max-md:px-[20px] uppercase bg-[#FFE133;] border-[#FFE133;] border rounded-[5px] transition ease-in-out duration-300 hover:text-[#FFE133;] hover:bg-transparent">Request a Demo</a>
                    </div>
                </div>
            </div>


            <div className="solution relative bg-[#212022]">
                <div className="absolute left-0 top-0 bottom-0 max-lg:hidden my-auto h-full">
                    <Image className="relative"
                        src="/solutions_left_quotemark@3x.png"
                        width={340}
                        height={250}
                        alt="Picture of the author"
                    />
                </div>
                <div className="absolute right-0 top-0 bottom-0 max-lg:hidden my-auto">
                    <Image className="relative"
                        src="/solutions_right_quotemark@3x.png"
                        width={340}
                        height={250}
                        alt="Picture of the author"
                    />
                </div>
                <div className="relative px-10 py-10 max-md:py-6 max-w-[1340px] mx-auto z-10">
                    <p className="text-[20px] max-md:text-[18px] font-bold text-[#b1b1b1] mb-[10px]">what we do</p>
                    <h2 className="text-white max-w-[1000px] text-[60px] max-lg:text-[52px] max-md:text-[44px] max-sm:text-[36px] font-bold leading-[0.97]">For Those With Data to Share and Those Seeking Insights</h2>
                    <div className="relative flex flex-wrap justify-center items-center">
                        <div className="text-wrap w-1/2 max-sm:w-full mt-[20px]">
                            <h3 className="text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px] text-[#ffe136]">Build your own data clean room</h3>
                            <p className="text-[16px] leading-[1.63] text-white">Build your own clean room on any cloud and collaborate with partners by distributing insights that drive growth – working with data where it lives.</p>
                        </div>
                        <div className="img-wrap w-1/2 max-sm:w-full">
                            <Image className="relative"
                                src="/solutions.png"
                                width={1000}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className="relative flex flex-wrap justify-center items-center flex-row-reverse">
                        <div className="text-wrap w-1/2 max-sm:w-full mt-[20px]">
                            <h3 className="text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px] text-[#ffe136]">Access your own data clean room</h3>
                            <p className="text-[16px] leading-[1.63] text-white">Maximize your advertising investments with out-of-the-box intelligence packs and automation for walled gardens and other media platforms.</p>
                        </div>
                        <div className="img-wrap w-1/2 max-sm:w-full">
                            <Image className="relative"
                                src="/solutions2nd.png"
                                width={1000}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="content-with-cards pb-[180px] max-xl:pb-[0px] bg-white">
                <div className="px-10 py-10 max-md:py-6 max-w-[1340px] mx-auto">
                    <p className="text-[20px] max-md:text-[18px] font-bold text-[#b1b1b1] mb-[10px]">Ecosystem</p>
                    <h2 className="text-black max-w-[1000px] text-[60px] max-lg:text-[52px] max-md:text-[44px] max-sm:text-[36px] font-bold leading-[0.97] mb-[20px]">Works Well with others</h2>
                    <p className="text-[16px] text-black leading-[1.63]">Habu works with a wide range of collaborators across the ecosystem including leading platforms for activation, data and identity companies, agencies and consultancies, and major clouds. Fast-track business growth with a platform that integrates with your existing tools and technology investments.</p>
                    <div className="relative max-w-[640px] flex flex-wrap items-center ml-auto mt-[20px]">
                        <h5 className="w-full text-[20px] max-lg:text-[18px] max-md:text-[16px] font-bold mb-[20px]">Featured Certifications</h5>
                        <div className="icon-wrap flex flex-wrap items-center">

                            <Image className=""
                                src="/google_cloud.png"
                                width={180}
                                height={100}
                                alt="Picture of the author"
                            />
                            <Image className="ml-[20px]"
                                src="/snowflake_bug.png"
                                width={180}
                                height={100}
                                alt="Picture of the author"
                            />
                            <Image className="ml-[20px]"
                                src="/amazon .png"
                                width={180}
                                height={100}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black utility-content">
                <div className="px-10 py-10 max-md:py-6 max-w-[1340px] mx-auto">
                    <div className="card-wrap flex flex-wrap justify-between -mt-[150px] max-xl:-mt-[0px]">
                        <div className="relative max-w-[518px] max-xl:max-w-full shadow-[0 10px 20px 0 rgba(33, 32, 34, 0.25)] bg-white min-h-[500px] max-xl:min-h-[auto] h-full -mt-[120px] max-xl:-mt-[0px] max-xl:pb-[85px] max-xl:mb-[20px]">
                            <div className="relative w-full flex flex-wrap items-center bg-black">
                                <Image className="w-[50px]"
                                    src="/yellow_habu.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                                <h5 className="text-[#FFE133] text-[16px] font-bold pl-[20px] w-[calc(100%-50px)]">Featured Partner</h5>
                            </div>
                            <div className="content bg-white p-[30px] max-md:p-[15px] h-full">
                                <Image className="mb-[20px]"
                                    src="/snowflake_bug.png"
                                    width={70}
                                    height={100}
                                    alt="Picture of the author"
                                />
                                <h3 className="mb-[20px] text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px] text-black font-bold leading-[1]">Infrastructure & Intelligence with Snowflake</h3>
                                <p className="mb-[20px] text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi, pellentesque pulvinar ut lacus est. Ornare nec fringilla mi eu donec duis velit.</p>
                                <div className="absolute left-[30px] bottom-[30px]">
                                    <a href="#" className="text-base text-black inline-block font-bold py-[14px] max-md:py-[12px] px-[22px] max-md:px-[20px] uppercase bg-[#FFE133;] border-[#FFE133;] border rounded-[5px] transition ease-in-out duration-300 hover:text-[#FFE133] hover:bg-transparent">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-[518px] max-xl:max-w-full shadow-[0 10px 20px 0 rgba(33, 32, 34, 0.25)] bg-white min-h-[500px] max-xl:min-h-[auto] h-full max-xl:-mt-[0px] max-xl:pb-[85px]">
                            <div className="relative w-full flex flex-wrap items-center bg-black">
                                <Image className="w-[50px]"
                                    src="/yellow_habu.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                                <h5 className="text-[#FFE133] text-[16px] font-bold pl-[20px] w-[calc(100%-50px)]">Featured Partner</h5>
                            </div>
                            <div className="content bg-white p-[30px] max-md:p-[15px] h-full">
                                <Image className="mb-[20px]"
                                    src="/aws.png"
                                    width={70}
                                    height={100}
                                    alt="Picture of the author"
                                />
                                <h3 className="mb-[20px] text-[45px] text-black max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px] font-bold leading-[1]">Amazon Marketing Cloud</h3>
                                <p className="mb-[20px] text-[18px]">Maximize your advertising investments with out-of-the-box intelligence packs and automation for walled gardens and other media platforms.</p>
                                <div className="absolute left-[30px] bottom-[30px]">
                                    <a href="#" className="text-base text-black inline-block font-bold py-[14px] max-md:py-[12px] px-[22px] max-md:px-[20px] uppercase bg-[#FFE133;] border-[#FFE133;] border rounded-[5px] transition ease-in-out duration-300 hover:text-[#FFE133] hover:bg-transparent">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-[20px] max-md:text-[18px] font-bold text-[#b1b1b1] mb-[10px] mt-[50px]">industries we serve</p>
                    <h2 class="text-white max-w-[800px] text-[60px] max-lg:text-[52px] max-md:text-[44px] max-sm:text-[36px] font-bold leading-[0.97]">Data collaboration for your needs</h2>
                    <div className="card-grid mt-[40px] flex flex-wrap">
                        <div className="col-two w-1/2 max-xl:w-full">
                            <div className="w-[calc(100%+20px)] -ml-[10px] flex flex-wrap">
                                <div className="card w-[calc(50%-20px)] max-md:w-full m-[10px]">
                                    <Image className="max-w-[60px]"
                                        src="/coffee cup.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                    <h3 className="text-[#ffe136] text-[30px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-bold mt-[20px] leading-[1.13]">CPG</h3>
                                    <p className="text-white text-[18px] max-md:text-[16px] mt-[10px] leading-[1.44]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
                                </div>
                                <div className="card w-[calc(50%-20px)] max-md:w-full m-[10px]">
                                    <Image className="max-w-[60px]"
                                        src="/cart.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                    <h3 className="text-[#ffe136] text-[30px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-bold mt-[20px] leading-[1.13]">Retail</h3>
                                    <p className="text-white text-[18px] max-md:text-[16px] mt-[20px] leading-[1.44]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
                                </div>
                                <div className="card w-[calc(50%-20px)] max-md:w-full m-[10px]">
                                    <Image className="max-w-[60px]"
                                        src="/bank.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                    <h3 className="text-[#ffe136] text-[30px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-bold mt-[20px] leading-[1.13]">Financial Services</h3>
                                    <p className="text-white text-[18px] max-md:text-[16px] mt-[20px] leading-[1.44]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
                                </div>
                                <div className="card w-[calc(50%-20px)] max-md:w-full m-[10px]">
                                    <Image className="max-w-[60px]"
                                        src="/plane.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                    <h3 className="text-[#ffe136] text-[30px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-bold mt-[20px] leading-[1.13]">Travel</h3>
                                    <p className="text-white text-[18px] max-md:text-[16px] mt-[20px] leading-[1.44]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-two w-1/2 max-xl:w-full mt-[165px] max-xl:mt-[0px]">
                            <div className="w-[calc(100%+20px)] -ml-[10px] flex flex-wrap">
                                <div className="card w-[calc(50%-20px)] max-md:w-full m-[10px]">
                                    <Image className="max-w-[60px]"
                                        src="/volume.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                    <h3 className="text-[#ffe136] text-[30px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-bold mt-[20px] leading-[1.13]">Media</h3>
                                    <p className="text-white text-[18px] max-md:text-[16px] mt-[20px] leading-[1.44]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
                                </div>
                                <div className="card w-[calc(50%-20px)] max-md:w-full m-[10px]">
                                    <Image className="max-w-[60px]"
                                        src="/doctor.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                    <h3 className="text-[#ffe136] text-[30px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-bold mt-[20px] leading-[1.13]">Healthcare</h3>
                                    <p className="text-white text-[18px] max-md:text-[16px] mt-[20px] leading-[1.44]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
                                </div>
                                <div className="card w-[calc(50%-20px)] max-md:w-full m-[10px]">
                                    <Image className="max-w-[60px]"
                                        src="/note.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                    <h3 className="text-[#ffe136] text-[30px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-bold mt-[20px] leading-[1.13]">Entertainment</h3>
                                    <p className="text-white text-[18px] max-md:text-[16px] mt-[20px] leading-[1.44]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
                                </div>
                                <div className="card w-[calc(50%-20px)] max-md:w-full m-[10px]">
                                    <Image className="max-w-[60px]"
                                        src="/car.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                    <h3 className="text-[#ffe136] text-[30px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-bold mt-[20px] leading-[1.13]">Automotive</h3>
                                    <p className="text-white text-[18px] max-md:text-[16px] mt-[20px] leading-[1.44]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="img-with-text pb-[200px] max-lg:pb-[0px]">
                <div className="px-10 py-10  max-w-[1340px] mx-auto">
                    <div className="flex flex-wrap items-center justify-around">
                        <div className="img-wrap w-1/2 max-lg:w-full">
                            <Image
                                src="/state_of_data.png"
                                width={700}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="text-wrap w-1/2 max-lg:w-full">
                            <p className="text-black text-[20px] max-lg:text-[19px] max-md:text-[18px] font-bold mb-[20px]">Report</p>
                            <h3 className="text-black text-[60px] max-xl:text-[52px] max-lg:text-[44px] max-md:text-[36px] leading-[0.97] font-bold mb-[20px]">State  of Data Collaboration Report 2022</h3>
                            <p className="text-[#212022] text-[20px] max-lg:text-[19px] max-md:text-[18px]">The future of data collaboration in a privacy-first world</p>
                            <div className=" relative w-full flex flex-wrap items-center mt-[20px]">
                                <Link href="#" className=" inline-flex">
                                    <span className="text[14px] font-bold text-black mr-[10px]">LEARN MORE</span>
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

            <div className="footer bg-[#212022]">
                <div className="px-10 py-10  max-w-[1340px] mx-auto">
                    <div className="footer-cta bg-[#FFE133] w-full relative min-h-[400px] max-md:min-h-fit flex flex-wrap items-center p-[40px] -mt-[175px] max-lg:mt-[0px] ">
                        <div className="w-2/3 pr-[20px] max-lg:w-full max-lg:pr-[0px]">
                            <h2 className="text-[72px] max-xl:text-[60px] max-lg:text-[48px] max-md:text-[36px] font-bold leading-[0.97] text-right max-lg:text-center">Get smarter with collaborative intelligence</h2>
                        </div>
                        <div className="w-1/3 pl-[20px] max-lg:w-full max-lg:pl-[0px]">
                            <div class="mt-10 block w-full max-lg:flex max-lg:justify-center"><a href="#" class="text-base text-[#FFE133;]  inline-block font-bold py-[14px] max-md:py-[12px] px-[22px] max-md:px-[20px] uppercase bg-black border-black border rounded-[5px] transition ease-in-out duration-300 hover:text-black hover:bg-transparent">Request a Demo</a></div>
                        </div>
                    </div>
                    <div className="footer-content mt-[50px]">
                        <div className="flex flex-wrap">
                            <div className="w-2/5 max-lg:w-full">
                                <h3 className="text-white font-bold text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm-[30px] mb-[20px] max-lg:text-center">Stay Connected</h3>
                                <form action="#" method="POST" class="mx-auto mt-16 max-lg:mt-0 max-w-xl">
                                    <div class="flex flex-wrap items-end">
                                        <div class="relative w-2/3 max-lg:w-full mb-[20px] pr-[10px] max-lg:flex max-lg:flex-wrap max-lg:justify-center">
                                            <label for="email" class="block text-[#b1b1b1] cursor-pointer max-lg:text-center max-lg:w-full">Email</label>
                                            <input type="text" name="email" id="email" autocomplete="email" class="text-[#212022] bg-[#eeeeee] w-full max-w-[300px] p-[12px] rounded outline-none max-lg:mx-auto max-lg:w-full" />
                                        </div>
                                        <div class="relative w-1/3 max-lg:w-full mb-[20px] max-lg:flex max-lg:justify-center">
                                            <button type="submit" class="text-base text-black inline-block font-bold py-[12px] max-md:py-[12px] px-[22px] max-md:px-[20px] uppercase bg-[#FFE133;] border-[#FFE133;] border rounded-[5px] transition ease-in-out duration-300 hover:text-white hover:bg-transparent">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <div class="mt-10 block w-full max-lg:flex max-lg:justify-center"><a href="#" class="text-base text-white  inline-block font-bold py-[14px] max-md:py-[12px] px-[22px] max-md:px-[20px] uppercase bg-transparent border-[#FFE133;] border rounded-[5px] transition ease-in-out duration-300 hover:text-black hover:bg-[#FFE133;]">Contact Us</a></div>
                            </div>
                            <div className="w-2/5 mt-[50px] flex flex-wrap justify-between max-lg:w-full">
                                <div className="w-1/2 text-center max-sm:w-full">
                                    <ul>
                                        <li>
                                            <Link href='#' className="text-white text-[14px] uppercase mb-[10px] hover:text-[#FFE133] block font-semibold">Data Clean Room Overview</Link>
                                        </li>
                                        <li>
                                            <Link href='#' className="text-white text-[14px] uppercase mb-[10px] hover:text-[#FFE133] block font-semibold">Use Cases</Link>
                                        </li>
                                        <li>
                                            <Link href='#' className="text-white text-[14px] uppercase mb-[10px] hover:text-[#FFE133] block font-semibold">About Us</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-1/2 text-center max-sm:w-full">
                                    <ul>
                                        <li>
                                            <Link href='#' className="text-white text-[14px] uppercase mb-[10px] hover:text-[#FFE133] block font-semibold">Amazon</Link>
                                        </li>
                                        <li>
                                            <Link href='#' className="text-white text-[14px] uppercase mb-[10px] hover:text-[#FFE133] block font-semibold">Snowflake</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-1/5 max-lg:w-full max-lg:flex max-lg:justify-center max-lg:flex-wrap">
                                <h4 className="text-[#FFE133] text-[20px] max-lg:text-[18px] max-md:text-[16px] mb-[50px] w-full max-lg:text-center max-lg:mb-[20px]">Industries we serve</h4>
                                <div className="flex flex-wrap max-lg:justify-center max-lg:w-[calc(100%+20px)]">
                                    <Image className="w-[155px] block mb-[20px] max-lg:px-[10px]"
                                        src="/Google_Cloud_Partner.png"
                                        width={80}
                                        height={60}
                                    />
                                    <Image className="w-[155px] block mb-[20px]"
                                        src="/powered by lockup stacked white.png"
                                        width={80}
                                        height={65}
                                    />
                                    <Image className="w-[155px] block mb-[20px]"
                                        src="/AmazonAds.png"
                                        width={80}
                                        height={65}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="privecy-policy mt-[100px] max-lg:mt-[40px] max-sm:mt-[20px] border-t-[10px] border-[#FFE133]">
                        <div className="flex flex-wrap justify-between pt-[50px] max-lg:justify-center w-full">
                            <div className="icon max-lg:w-full">
                                <Link href='#'>
                                <Image class=" max-lg:mx-auto"
                                    src='/habu-logo.png'
                                    width={80}
                                    height={80}
                                />
                                </Link>
                            </div>
                            <div className="max-lg:w-full max-lg:my-[10px]">
                                <p className="text-[16px] text-white max-lg:text-center ">© 2022 Habu Inc.</p>
                            </div>
                            <div className="max-lg:w-full">
                                <ul className="flex flex-wrap max-lg:justify-center max-lg:text-center">
                                    <li className="text-white text-[16px] ml-[10px] max-lg:w-full max-lg:mb-[10px]">Privacy Policy</li>
                                    <li className="text-white text-[16px] ml-[10px] max-lg:w-full max-lg:mb-[10px]">Cookie policy</li>
                                    <li className="text-white text-[16px] ml-[10px] max-lg:w-full max-lg:mb-[10px]">Privacy Settings</li>
                                    <li className="text-white text-[16px] ml-[10px] max-lg:w-full max-lg:mb-[10px]">Do not sell my personal information</li>
                                    <li className=" ml-[10px]"><Link href='#'><Image class="max-w-[30px] rounded"
                                        src="/linkedin.png"
                                        width={80}
                                        height={80}
                                    /></Link>
                                    </li>
                                    <li className=" ml-[10px]"><Link href='#'><Image class="max-w-[30px] rounded"
                                        src="/twitter.png"
                                        width={80}
                                        height={80}
                                    /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
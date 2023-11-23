"use client"
import Image from "next/image"
import { useState } from "react";
import Link from "../../../node_modules/next/link";
export default function Shift() {
    const [activeTab, setActiveTab] = useState(0)
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

    return (
        <>
            <section className="bg-white relative py-[50px] max-md:py-[25px] max-w-[1150px] mx-auto">
                <div className="bg-img absolute bottom-0 right-0 max-w-[733px] max-lg:hidden ">
                    <Image
                        src="/hero_graphic.png"
                        width={566}
                        height={638}
                        alt="Picture of the author"
                    />
                </div>
                <div className="relative w-full px-[20px]  mx-auto">
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

            <section className="relative py-[50px] max-w-[1150px] mx-auto boxshadow-[0px 4px 8px 0px rgba(0, 0, 0, 0.16)]">
                <div className="relative w-full px-[64px]  mx-auto">
                    <div className="relative py-[24px]">
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
            <div className="tab bg-[#010c33]">
                <div className="relative w-full px-10 py-10 max-w-[1340px] mx-auto z-10">
                    <div className="wrapper flex flex-wrap">
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
            </div>
        </>

    )
}
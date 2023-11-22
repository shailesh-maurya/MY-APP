"use client"
import Image from "next/image"
import Link from "../../../node_modules/next/link";
export default function Shift() {
    const introData = {
        title: "History Headline",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi pulvinar aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi pulvinar aenean dolor sit amet, consectetur adipiscing elit.",
        cta: "Optional CTA",
        ctalink: "/"
    }
    const tabData = [
        {
            date: '2015',
            highLightedText: 'Sed ut perspiciatis unde',
            blurb: 'Sed ut perspiciatis unde omnis iste natus error.',
            image: '/IntroWithTab/sift-tab.png'
        },
        {
            date: '2018',
            highLightedText: 'Sed ut perspiciatis unde',
            blurb: 'Sed ut perspiciatis unde omnis iste natus error.',
            image: '/IntroWithTab/sift-tab.png'
        },
        {
            date: '2020',
            highLightedText: 'Sed ut perspiciatis unde',
            blurb: 'Sed ut perspiciatis unde omnis iste natus error.',
            image: '/IntroWithTab/sift-tab.png'
        },
        {
            date: '2022',
            highLightedText: 'Sed ut perspiciatis unde',
            blurb: 'Sed ut perspiciatis unde omnis iste natus error.',
            image: '/IntroWithTab/sift-tab.png'
        },
    ]
    console.log(tabData);

    return (
        <>
            <div>
                {
                    tabData.map((data, index) => (
                        <h3 key={index}>{data.date}</h3>
                    ))
                }
                <h1>Shift page</h1>
            </div>
            <div className="tab bg-[#010c33]">
                <div className="relative w-full px-10 py-10 max-w-[1340px] mx-auto z-10">
                    <div className="wrapper flex flex-wrap">
                        <div className="col-two w-1/2">
                            <h2 className="text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] font-bold text-white mb-[20px] leading-[115%]">History Headline</h2>
                            <p className="text-white text-[16px] mb-[40px] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi pulvinar aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin suspendisse amet, aliquam auctor semper at facilisi pulvinar aenean dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="btn-wrap">
                                <Link href="#" className="text-white text-[16px] font-bold bg-transparent border-2 py-[16px] px-[24px] text-center border-solid border-[#FF3B84] rounded-full inline-block uppercase hover:text-black hover:bg-[#FF3B84] ease-in-out duration-700">Optional CTA</Link>
                            </div>
                            <div className="tab-content mt-[30px]">
                                <div className="years text-white">
                                    {
                                        tabData.map((data, index) => (
                                            <h3 className="mb-[20px]" key={index}>{data.date}</h3>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-two w-1/2">
                            <div className="img-wrap">
                                <Image
                                    src="/tab-img.png"
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
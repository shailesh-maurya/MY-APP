import Image from "next/image"
import ImgWrap from 'public/hero-banner.png'
export default function Selection() {

    return (
        <>
        <div className="banner relative isolate overflow-hidden min-h-[600px] max-lg:min-h-fit flex items-center">
            <div className="absolute top-0 left-0 h-full">
                <Image
                    src={ImgWrap}
                    style={
                        {
                            height:'100%',
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
        

        <div className="logo-slider">
            <div className="relative w-full px-8 py-10">
                <div className="" id="default-carousel" class="relative" data-carousel="static">
                    <div className="item">
                    <Image
                    src="/Activision.png"
                    width={190}
                    height={70}
                />
                 </div>
                 <div className="item">
                    <Image
                    src="/Asics.png"
                    width={190}
                    height={70}
                />
                 </div>
                 <div className="item">
                    <Image
                    src="/Disney.png"
                    width={190}
                    height={70}
                />
                 </div>
                 <div className="item">
                    <Image
                    src="/Kroger.png"
                    width={190}
                    height={70}
                />
                 </div>
                 <div className="item">
                    <Image
                    src="/Loreal.png"
                    width={190}
                    height={70}
                />
                 </div>
                 <div className="item">
                    <Image
                    src="/Pepsico.png"
                    width={190}
                    height={70}
                />
                 </div>
                 <div className="item">
                    <Image
                    src="/LinkedIn_logo.png"
                    width={190}
                    height={70}
                />
                 </div>
                </div>
            </div>
        </div>
        </>

    )
}
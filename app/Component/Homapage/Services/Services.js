import Image from "next/image";
import { Fraunces, Urbanist } from "next/font/google";

// Initialize Fonts
const fraunces = Fraunces({
    weight: ["300", "400", "500", "600"],
    subsets: ["latin"],
    display: "swap",
});

const urbanist = Urbanist({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export default function Services() {
    return (
        <section className="relative w-full bg-[#132825] pt-24 pb-32">

            {/* --- TOP: Title Section --- */}
            <div className="flex flex-col items-center text-center w-full mb-20 px-6">

                {/* Subtitle */}
                <span className={`${urbanist.className} text-[#E6B15F] text-[12px] md:text-[14px] font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-2`}>
                    ✦ OUR SERVICES ✦
                </span>

                {/* Main Heading */}
                <h2 className={`${fraunces.className} text-[45px] md:text-[60px] lg:text-[75px] leading-[1.1] text-white max-w-[800px]`}>
                    Perfect Spaces for Every Occasion
                </h2>
            </div>

            {/* --- MIDDLE: Symmetrical Layout --- */}
            <div className="max-w-[1500px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                {/* Left Column (Text aligns Right) */}
                <div className="w-full lg:w-[30%] flex flex-col gap-16 order-2 lg:order-1">

                    {/* Service 1 */}
                    <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 mb-5">
                            <h3 className={`${urbanist.className} text-white font-medium tracking-widest text-[14px] md:text-[15px] uppercase leading-snug order-2 md:order-1`}>
                                PARTY & <br /> CELEBRATIONS
                            </h3>
                            {/* Add your glass/cheers icon here */}
                            <div className="w-[50px] h-[50px] relative order-1 md:order-2">
                                <Image src="/assets/s-icon-1x.png" fill alt="Party Icon" className="object-contain" />
                            </div>
                        </div>
                        <p className={`${urbanist.className} text-white/50 text-[15px] leading-[1.8] max-w-[280px]`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 mb-5">
                            <h3 className={`${urbanist.className} text-white font-medium tracking-widest text-[14px] md:text-[15px] uppercase leading-snug order-2 md:order-1`}>
                                LUXURY <br /> FINE DINING
                            </h3>
                            {/* Add your dining table icon here */}
                            <div className="w-[50px] h-[50px] relative order-1 md:order-2">
                                <Image src="/assets/s-icon-2x.png" fill alt="Dining Icon" className="object-contain" />
                            </div>
                        </div>
                        <p className={`${urbanist.className} text-white/50 text-[15px] leading-[1.8] max-w-[280px]`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.
                        </p>
                    </div>

                </div>

                {/* Center Column: Highlight Arch Image */}
                <div className="w-full lg:w-[35%] flex justify-center order-1 lg:order-2 mb-10 lg:mb-0">
                    <div className="relative w-full max-w-[450px]">
                        {/* Gold Offset Wireframe Border */}
                        <div className="absolute inset-[-15px] border border-[#E6B15F]/40 rounded-t-[1000px] z-0 pointer-events-none"></div>

                        {/* Arch Image Wrapper */}
                        <div className="relative w-full aspect-[4/5] rounded-t-[1000px] overflow-hidden z-10 bg-black/20 shadow-2xl">
                            {/* Replace with your party image */}
                            <Image
                                src="/assets/service-image.jpg.webp"
                                fill
                                alt="People celebrating at a party"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column (Text aligns Left) */}
                <div className="w-full lg:w-[30%] flex flex-col gap-16 order-3">

                    {/* Service 3 */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 mb-5">
                            {/* Add your Banquet Hall icon here */}
                            <div className="w-[50px] h-[50px] relative">
                                <Image src="/assets/s-icon-3x.png" fill alt="Banquet Icon" className="object-contain" />
                            </div>
                            <h3 className={`${urbanist.className} text-white font-medium tracking-widest text-[14px] md:text-[15px] uppercase leading-snug`}>
                                BANQUET <br /> HALL
                            </h3>
                        </div>
                        <p className={`${urbanist.className} text-white/50 text-[15px] leading-[1.8] max-w-[280px]`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 mb-5">
                            {/* Add your Catering Truck icon here */}
                            <div className="w-[50px] h-[50px] relative">
                                <Image src="/assets/s-icon-4x.png" fill alt="Catering Icon" className="object-contain" />
                            </div>
                            <h3 className={`${urbanist.className} text-white font-medium tracking-widest text-[14px] md:text-[15px] uppercase leading-snug`}>
                                OUTDOOR <br /> CATERING
                            </h3>
                        </div>
                        <p className={`${urbanist.className} text-white/50 text-[15px] leading-[1.8] max-w-[280px]`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.
                        </p>
                    </div>

                </div>
            </div>

            {/* --- BOTTOM: Contact Button --- */}
            <div className="flex justify-center mt-20 px-6">
                <button className={`${urbanist.className} px-10 py-4 border border-[#E6B15F] text-[#E6B15F] text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-[#E6B15F] hover:text-[#111] transition-all duration-300`}>
                    Contact Us
                </button>
            </div>

        </section>
    );
}
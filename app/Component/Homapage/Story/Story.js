import Image from "next/image";
import { Fraunces, Urbanist } from "next/font/google";
import Link from "next/link";

// 1. Initialize Fonts
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

export default function Story() {
    return (
        // The parent section MUST NOT have overflow-hidden so the plate can overlap the next section
        <section className="relative w-full bg-[#132825] pt-32 pb-40 z-10">

            {/* --- TOP: Title Section --- */}
            <div className="flex flex-col items-center text-center w-full mb-24 px-6">

                {/* Subtitle */}
                <span className={`${urbanist.className} text-[#E6B15F] text-[12px] md:text-[14px] font-semibold tracking-[0.2em] uppercase mb-6`}>
                    ✦ Our Story ✦
                </span>

                {/* Main Heading with Embedded Images */}
                <h2 className={`${fraunces.className} text-[40px] md:text-[65px] lg:text-[85px] leading-[1.15] text-white`}>
                    Enjoy Every Moment with Tasty <br />

                    {/* Line 2: Image -> Breakfast, Hearty -> Image */}
                    <span className="relative inline-block w-[100px] md:w-[180px] h-[45px] md:h-[70px] align-middle mx-2 md:mx-4 rounded-full overflow-hidden shadow-lg border border-white/10">
                        <Image
                            src="/assets/title-dine-img-1-rdkg7jj34hpn2h80y0zx0vtch1hez76kak2n7sz33s.jpg.webp"
                            fill
                            alt="Pasta dish"
                            className="object-cover"
                        />
                    </span>
                    <span className="text-[#E6B15F]">Breakfast,</span> Hearty
                    <span className="relative inline-block w-[100px] md:w-[180px] h-[45px] md:h-[70px] align-middle mx-2 md:mx-4 rounded-full overflow-hidden shadow-lg border border-white/10">
                        <Image
                            src="/assets/title-dine-img-2-rdkg7kgxbbqxe36nsjejldkt2fcs6waamoq4p2xoxk.jpg.webp"
                            fill
                            alt="Lasagna dish"
                            className="object-cover"
                        />
                    </span> <br />

                    {/* Line 3: Mains & -> Image -> Drinks */}
                    <span className="text-[#E6B15F]">Mains &</span>
                    <span className="relative inline-block w-[100px] md:w-[180px] h-[45px] md:h-[70px] align-middle mx-2 md:mx-4 rounded-full overflow-hidden shadow-lg border border-white/10">
                        <Image
                            src="/assets/title-dine-img-3-rdkg7leri5s7pp5an1t65vc9nt85ele0ytdm6cwarc.jpg.webp"
                            fill
                            alt="Pouring wine"
                            className="object-cover"
                        />
                    </span>
                    <span className="text-[#E6B15F]">Drinks</span>
                </h2>
            </div>

            {/* --- MIDDLE: Content Grid --- */}
            <div className="max-w-[1400px] mx-auto px-6 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Side: Text & Features */}
                <div>
                    {/* Paragraph */}
                    <p className={`${urbanist.className} text-white/80 text-[16px] md:text-[17px] leading-[1.9] mb-14 max-w-[600px]`}>
                        Lorem Ipsum is simply dummy text of the printingand typesetting industry
                        lorem Ipsum has been the industrys standard dummy text ever since the
                        when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book It has survived not only five centuries, but also the
                        leap into.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14">

                        {/* Feature 1 */}
                        <div>
                            <div className="mb-5 flex items-center gap-4">
                                <Image
                                    src="/assets/s-icon-5x.png"
                                    width={50}
                                    height={50}
                                    alt="Hygienic Food Icon"
                                    className="object-contain"
                                />
                                <h3 className={`${urbanist.className} text-white font-medium tracking-widest text-[14px] uppercase leading-snug`}>
                                    Hygienic <br /> Food
                                </h3>
                            </div>
                            <p className={`${urbanist.className} text-white/60 text-[15px] leading-relaxed max-w-[250px]`}>
                                Lorem Ipsum is simply dummy text of the printing and type setting dummy text.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div>
                            <div className="mb-5 flex items-center gap-4">
                                <Image
                                    src="/assets/s-icon-6x.png"
                                    width={50}
                                    height={50}
                                    alt="Fresh Ambience Icon"
                                    className="object-contain"
                                />
                                <h3 className={`${urbanist.className} text-white font-medium tracking-widest text-[14px] uppercase leading-snug`}>
                                    Fresh <br /> Ambience
                                </h3>
                            </div>
                            <p className={`${urbanist.className} text-white/60 text-[15px] leading-relaxed max-w-[250px]`}>
                                Lorem Ipsum is simply dummy text of the printing and type setting dummy text.
                            </p>
                        </div>
                    </div>

                    {/* Contact Block */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 pt-4">
                        <div>
                            <p className={`${urbanist.className} text-white/90 text-[15px] mb-1`}>
                                Booking Request :
                            </p>
                            <p className={`${urbanist.className} text-[#E6B15F] text-[26px] md:text-[32px] font-medium`}>
                                +80 (400) 123 4567
                            </p>
                        </div>

                        <Link href={'/about'}><button className={`${urbanist.className} px-8 py-4 border border-[#E6B15F] text-[#E6B15F] text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-[#E6B15F] hover:text-[#111] transition-all duration-300 cursor-pointer`}>
                            Learn More
                        </button></Link>
                    </div>
                </div>

                {/* Right Side: Arch Image Layout */}
                <div className="relative w-full max-w-[550px] mx-auto flex justify-center mt-10 lg:mt-0">

                    {/* Gold Offset Wireframe Border */}
                    <div className="absolute inset-[-20px] border border-[#E6B15F]/40 rounded-t-[1000px] z-0 pointer-events-none"></div>

                    {/* Arch Image Wrapper */}
                    <div className="relative w-full aspect-[4/4.5] rounded-t-[1000px] overflow-hidden z-10 bg-black/20 shadow-2xl">
                        <Image
                            src="/assets/book-table-bg.jpg.webp"
                            fill
                            alt="Restaurant Interior"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}
import Image from "next/image";
import Link from "next/link";
import { Fraunces, Urbanist } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600"] });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function MeetTheChef() {
    return (
        <section className="bg-[#152C29] py-28 px-6 md:px-12 flex justify-center w-full overflow-hidden">
            {/* 12-Column Grid for perfect separation */}
            <div className="max-w-[1350px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

                {/* --- Left Column: Text Content (Takes up 4 cols) --- */}
                <div className="flex flex-col items-start z-10 lg:col-span-4">
                    <span className={`${urbanist.className} text-[#E6B15F] text-[12px] md:text-[13px] font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2`}>
                        ✦ MEET THE CHEF ✦
                    </span>
                    <h2 className={`${fraunces.className} text-[45px] md:text-[60px] leading-[1.1] text-white mb-6`}>
                        Master Chef<br />Lorenzo
                    </h2>
                    <p className={`${urbanist.className} text-white/80 text-[15px] md:text-[16px] leading-[1.8] mb-10 max-w-[380px]`}>
                        A fine dine master chef crafts exquisite cuisine with precision, passion, creativity, and elegance, delivering unforgettable culinary experiences and refined flavors.
                    </p>
                    <Link
                        href="/team" // Adjust link as needed
                        className={`${urbanist.className} px-8 py-4 border border-[#E6B15F]/60 text-[#E6B15F] text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-[#E6B15F] hover:text-[#111] transition-all duration-300`}
                    >
                        MEET OUR TEAM
                    </Link>
                </div>

                {/* --- Center Column: Main Chef & Badge (Takes up 4 cols) --- */}
                <div className="relative flex justify-center items-center lg:col-span-4 mt-16 lg:mt-0">
                    <div className="relative w-full max-w-[340px]">

                        {/* Gold Outer Arch Line Offset */}
                        <div className="absolute inset-[-15px] border border-[#E6B15F]/40 rounded-t-[300px] rounded-b-[20px] pointer-events-none z-0"></div>

                        {/* Main Arch Image */}
                        <div className="relative w-full aspect-[3/4.2] rounded-t-[300px] rounded-b-[20px] overflow-hidden z-10 shadow-2xl">
                            <Image
                                src="/assets/portrait-man-smiling-kitchen-1.jpg.webp" // Main chef image
                                alt="Master Chef Lorenzo"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Bottom Left Floating Badge */}
                        <div className="absolute -bottom-10 -left-12 md:-left-16 w-[150px] h-[150px] bg-[#132825] rounded-full border-4 border-[#18312E] flex items-center justify-center shadow-2xl z-20 -rotate-12">

                            {/* Circular Rotating Text (SVG) */}
                            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]">
                                <path id="textPath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
                                <text fill="white" fontSize="10.5" fontWeight="500" letterSpacing="1.5" className={`${urbanist.className} uppercase`}>
                                    <textPath href="#textPath" startOffset="0%">
                                        25+ Years of Experience . Tastyc .
                                    </textPath>
                                </text>
                            </svg>

                            {/* Inner Gold Circle with Hat Icon */}
                            <div className="relative w-[70px] h-[70px] bg-[#E6B15F] rounded-full flex items-center justify-center z-10">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="#132825">
                                    <path d="M7 8.5C7 6.01472 9.01472 4 11.5 4C13.562 4 15.2974 5.38555 15.8365 7.28822C16.0359 7.24434 16.2415 7.22222 16.4524 7.22222C18.4116 7.22222 20 8.81057 20 10.7698C20 12.394 18.9103 13.7634 17.4042 14.1866V18.5C17.4042 19.3284 16.7327 20 15.9042 20H8.09581C7.26738 20 6.59581 19.3284 6.59581 18.5V14.1207C5.14371 13.655 4.1084 12.2906 4.1084 10.6698C4.1084 8.71057 5.69675 7.12222 7.65597 7.12222C7.94042 7.12222 8.21733 7.15572 8.48316 7.2185C8.36195 7.62585 8.2976 8.05581 8.2976 8.5H7Z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- Right Column: Two Separated Images (Takes up 4 cols) --- */}
                <div className="flex flex-col items-center lg:items-end justify-center gap-12 lg:col-span-4 mt-20 lg:mt-0 w-full">

                    {/* Top Right Image: Pill shape */}
                    <div className="relative w-full max-w-[350px] aspect-[2/1.1] rounded-[100px] overflow-hidden shadow-xl">
                        <Image
                            src="/assets/tasty-smoke-cooked-food.jpg.webp" // Pill shape food image
                            alt="Signature Smoking Dish"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Bottom Right Image: Arch shape (Staggered to the left slightly) */}
                    <div className="relative w-full max-w-[240px] aspect-[3/4] rounded-t-[200px] rounded-b-xl overflow-hidden shadow-xl lg:mr-16">
                        <Image
                            src="/assets/chef-man-1.jpg.webp" // Chef cooking image
                            alt="Chef Cooking Details"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
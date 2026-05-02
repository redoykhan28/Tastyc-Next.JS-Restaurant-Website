import { Fraunces, Herr_Von_Muellerhoff } from "next/font/google";

// 1. Initialize Fonts
const fraunces = Fraunces({
    weight: "300",
    subsets: ["latin"],
    display: "swap",
});

const herrVon = Herr_Von_Muellerhoff({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/assets/restoria-preview.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay to make text readable */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>

            {/* Center Text Section */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white mt-[-110px] w-full">
                <h1 className={`${fraunces.className} flex flex-col items-center text-center`}>
                    <span className="text-[55px] md:text-[90px] lg:text-[110px] leading-[1.1] tracking-[0.05em] uppercase">
                        WHERE
                    </span>

                    {/* We wrap TASTE MEETS in a relative block to perfectly anchor 'elegance' to it */}
                    <div className="relative inline-block mt-[-10px] md:mt-[-20px]">
                        <span className="text-[55px] md:text-[90px] lg:text-[110px] leading-[1.1] tracking-[0.05em] uppercase relative z-10">
                            TASTE MEETS
                        </span>

                        {/* Cursive Overlay: whitespace-nowrap prevents the squashing/wrapping bug! */}
                        <div
                            className={`${herrVon.className}  pt-25 text-[100px] md:text-[180px] lg:text-[250px] text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] -rotate-[6deg] whitespace-nowrap text-center z-20 pointer-events-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]`}
                        >
                            elegance
                        </div>
                    </div>
                </h1>
            </div>

            {/* Left Sidebar Layout (Socials) - FIXED ROTATION */}
            <div className="hidden lg:flex absolute left-8 top-0 h-full py-24 flex-col items-center justify-center z-20">
                {/* Top Line */}
                <div className="w-[1px] flex-1 bg-white/40 mb-8"></div>

                {/* Rotated text container */}
                <div className="h-[180px] flex items-center justify-center relative w-full">
                    <div className="-rotate-90 flex items-center gap-4 text-white text-[12px] tracking-[0.2em] font-medium whitespace-nowrap absolute">
                        <span className="cursor-pointer hover:text-[#E6B15F] transition-colors">YT</span>
                        <span className="text-[#E6B15F] text-[16px] leading-none rotate-90">✦</span>
                        <span className="cursor-pointer hover:text-[#E6B15F] transition-colors">IG</span>
                        <span className="text-[#E6B15F] text-[16px] leading-none rotate-90">✦</span>
                        <span className="cursor-pointer hover:text-[#E6B15F] transition-colors">FB</span>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="w-[1px] flex-1 bg-white/40 mt-8"></div>
            </div>

            {/* Right Sidebar Layout (Phone) - FIXED ROTATION */}
            <div className="hidden lg:flex absolute right-8 top-0 h-full py-24 flex-col items-center justify-center z-20">
                {/* Top Line */}
                <div className="w-[1px] flex-1 bg-white/40 mb-8"></div>

                {/* Rotated text container */}
                <div className="h-[180px] flex items-center justify-center relative w-full">
                    <div className="rotate-90 text-white text-[12px] tracking-[0.2em] font-medium whitespace-nowrap absolute cursor-pointer hover:text-[#E6B15F] transition-colors">
                        +1-800-852-9001
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="w-[1px] flex-1 bg-white/40 mt-8"></div>
            </div>

            {/* Bottom Center: Curved Scroll Indicator */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 144 75"
                    className="w-[250px] h-[125px] text-[#18312E] fill-current"
                >
                    <path d="M0,75 C25,75 40,75 55,40 C65,15 72,0 72,0 C72,0 79,15 89,40 C104,75 119,75 144,75 Z" />
                </svg>

                {/* Mouse/Scroll Icon */}
                <div className="absolute bottom-6 flex flex-col items-center">
                    <div className="w-[20px] h-[32px] border border-white/50 rounded-full flex justify-center p-[4px]">
                        <div className="w-[4px] h-[4px] bg-white rounded-full animate-bounce mt-1"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Right: Rotating Book Now Badge */}
            <div className="hidden md:flex absolute bottom-12 right-12 z-30 w-[130px] h-[130px] rounded-full bg-[#18312E] items-center justify-center border border-white/10 shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                    <path id="textPath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="transparent" />
                    <text fill="white" fontSize="10.5" fontWeight="500" letterSpacing="3.5">
                        <textPath href="#textPath" startOffset="0%">BOOK NOW • BOOK NOW • </textPath>
                    </text>
                </svg>

                {/* Center Gold Circle with Dining Icon */}
                <div className="w-[58px] h-[58px] rounded-full bg-[#E6B15F] flex items-center justify-center z-10">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" className="w-8 h-8 ml-1">
                        <path d="M12 2v3" strokeLinecap="round" />
                        <path d="M9 7h6l-1-2h-4l-1 2z" strokeLinejoin="round" />
                        <path d="M8 14h8" strokeLinecap="round" />
                        <path d="M10 14v5" strokeLinecap="round" />
                        <path d="M14 14v5" strokeLinecap="round" />
                        <path d="M5 18h2v-5h-2v-4" strokeLinejoin="round" />
                        <path d="M19 18h-2v-5h2v-4" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
"use client";
import { Fraunces, Urbanist } from "next/font/google";

// Initialize Fonts (Skip if you already have these globally)
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

export default function Footer() {
    return (
        <footer
            className="relative w-full bg-fixed bg-center bg-cover pt-20 pb-8"
            style={{ backgroundImage: "url('/assets/book-table-bg.jpg (1).webp')" }} // Your dark restaurant background here
        >
            {/* The Magic Gradient Overlay: Starts solid #18312E at the top, fades to semi-transparent at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#18312E] via-[#18312E]/90 to-[#18312E]/30 z-0"></div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-[1400px]">

                {/* --- Top Logo --- */}
                <div className="flex flex-col items-center justify-center mb-16">
                    <h2 className={`${fraunces.className} text-white text-4xl md:text-5xl font-bold mb-2`}>
                        Tastyc
                    </h2>
                    <div className="flex items-center gap-2 text-[#E6B15F] text-[10px] tracking-[0.3em] uppercase">
                        <span className="w-8 h-[1px] bg-[#E6B15F]"></span>
                        Food & Drinks
                        <span className="w-8 h-[1px] bg-[#E6B15F]"></span>
                    </div>
                </div>

                {/* --- Middle Section: 3 Columns --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center mb-16">

                    {/* Left Image Pill */}
                    <div className="hidden lg:flex justify-center">
                        <div className="relative w-[300px] aspect-[3/4] rounded-[150px] border border-[#E6B15F]/40 p-3">
                            <img
                                src="/assets/book-table-bg.jpg (1).webp" // Your interior image here
                                alt="Restaurant Interior"
                                className="w-full h-full object-cover rounded-[140px]"
                            />
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="flex flex-col items-center text-center">

                        <div className="flex items-center gap-3 text-[#E6B15F] text-[12px] md:text-[14px] font-semibold tracking-[0.2em] uppercase mb-6">
                            ✦ VISIT US ✦
                        </div>

                        <div className={`${urbanist.className} text-white/80 space-y-3 mb-12 text-[15px] md:text-[17px]`}>
                            <p>Tastyc, Arrondissement, Paris 9578</p>
                            <p>Daily - 8.00 am to 10.00 pm</p>
                            <p>booking@tastyccafe.com</p>
                            <p>Booking Request: <span className="text-[#E6B15F]">+1-800-852-9001</span></p>
                        </div>

                        {/* Newsletter Section */}
                        <h3 className={`${fraunces.className} text-white text-[32px] md:text-[40px] mb-2`}>
                            Our Newsletter
                        </h3>
                        <p className={`${urbanist.className} text-white/60 text-[14px] mb-6`}>
                            Subscribe us & Get 25% Off. Get latest updates.
                        </p>

                        {/* DaisyUI Join Form */}
                        <form className="join w-full max-w-[400px]" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative w-full join-item">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/50">
                                    {/* Envelope Icon */}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className={`${urbanist.className} input w-full bg-transparent border border-white/20 text-white placeholder-white/50 pl-12 rounded-none focus:outline-none focus:border-[#E6B15F] transition-colors`}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={`${urbanist.className} btn join-item rounded-none bg-[#E6B15F] hover:bg-white text-black border-none px-6 uppercase tracking-[0.1em] font-bold text-[13px]`}
                            >
                                Subscribe
                            </button>
                        </form>

                    </div>

                    {/* Right Image Pill */}
                    <div className="hidden lg:flex justify-center">
                        <div className="relative w-[300px] aspect-[3/4] rounded-[150px] border border-[#E6B15F]/40 p-3">
                            <img
                                src="/assets/gallery-2-big.jpg.webp" // Your food image here
                                alt="Delicious Food"
                                className="w-full h-full object-cover rounded-[140px]"
                            />
                        </div>
                    </div>

                </div>

                {/* --- Bottom Divider --- */}
                <hr className="border-white/10 mb-6" />

                {/* --- Bottom Footer Info --- */}
                <div className={`${urbanist.className} flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-white/50`}>

                    <p>© 2025 All Rights Reserved.</p>

                    {/* Social Icons (Custom thin outlined circles matching the image) */}
                    <div className="flex items-center gap-3">
                        {[
                            { id: 'fb', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> },
                            { id: 'ig', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></> },
                            { id: 'tt', icon: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a7 7 0 1 1-7-7z"></path> },
                            { id: 'yt', icon: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path> },
                            { id: 'x', icon: <path d="M4 4l16 16m0-16L4 20"></path> } // Standard generic X/cross shape
                        ].map((social) => (
                            <a
                                key={social.id}
                                href="#"
                                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:bg-[#E6B15F] hover:text-black hover:border-[#E6B15F] transition-all duration-300"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {social.icon}
                                </svg>
                            </a>
                        ))}
                    </div>

                    <p>Developed by <span className="text-[#E6B15F] hover:text-white cursor-pointer transition-colors">Sezan Ahmed.</span></p>

                </div>

            </div>
        </footer>
    );
}
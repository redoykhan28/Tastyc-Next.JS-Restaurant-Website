"use client";

import Image from "next/image";
import Link from "next/link";
import { Fraunces, Urbanist } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600"] });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function ContactPage() {
    return (
        <main className="bg-[#18312E] min-h-screen w-full flex flex-col">

            {/* --- HERO SECTION --- */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col items-center justify-center pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/gal-bg-01.jpg.webp" // Your requested background image
                        alt="Contact Us Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-6 mt-10">
                    <h1 className={`${fraunces.className} text-white text-[50px] md:text-[70px] leading-tight mb-4 drop-shadow-md`}>
                        Contact Us
                    </h1>

                    <p className={`${urbanist.className} text-white/90 text-[15px] md:text-[17px] tracking-wide mb-6`}>
                        A taste of perfection in every dish - <span className="text-[#E6B15F]">fine dining with a modern twist</span>
                    </p>

                    {/* Breadcrumbs */}
                    <div className={`${urbanist.className} flex items-center gap-3 text-[13px] md:text-[14px] tracking-[0.15em] uppercase font-bold text-white/80`}>
                        <Link href="/" className="hover:text-[#E6B15F] transition-colors">
                            Home
                        </Link>
                        <span className="text-[#E6B15F] text-[10px]">✦</span>
                        <span className="text-[#E6B15F]">Contact Us</span>
                    </div>
                </div>

                {/* Mouse Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-70">
                    <div className="w-[20px] h-[32px] border border-white rounded-full flex justify-center p-[4px]">
                        <div className="w-[2px] h-[6px] bg-white rounded-full animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* --- CONTACT INFO & FORM SECTION --- */}
            <section className="relative w-full py-24 px-6 md:px-12 flex justify-center z-10 bg-[#18312E]">
                <div className="relative w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Desktop Vertical Divider Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 z-0"></div>
                    {/* Gold Diamond on Divider */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#18312E] py-4 text-[#E6B15F] text-[10px] z-10">
                        ✦
                    </div>

                    {/* --- LEFT COLUMN: Arch Image & Details --- */}
                    <div className="flex flex-col items-center lg:items-center text-center relative z-10">

                        {/* Arch Image */}
                        <div className="relative w-[280px] md:w-[320px] aspect-[3/4.2] rounded-t-[300px] overflow-hidden mb-10">
                            <Image
                                src="/assets/gal-bg-01.jpg.webp" // Replace with your restaurant interior image
                                alt="Restaurant Interior"
                                fill
                                className="object-cover"
                            />
                            {/* Inner Gold Frame */}
                            <div className="absolute inset-[10px] border border-[#E6B15F]/40 rounded-t-[300px] pointer-events-none"></div>
                        </div>

                        <span className={`${urbanist.className} text-[#E6B15F] text-[12px] md:text-[13px] font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-2`}>
                            ✦ VISIT US ✦
                        </span>

                        <p className={`${urbanist.className} text-white text-[15px] leading-relaxed mb-6`}>
                            Restaurant St, Delicious City, London 9578, UK
                        </p>

                        <div className={`${urbanist.className} flex flex-col gap-2 text-[14px] text-white/70 mb-8`}>
                            <p>LUNCH TIME - <span className="text-white">10.00 am - 3.30 pm</span></p>
                            <p>DINNER TIME - <span className="text-white">08.00 pm - 10.30 pm</span></p>
                        </div>

                        <div className={`${urbanist.className} flex flex-col md:flex-row gap-2 md:gap-6 text-[14px] text-white/70`}>
                            <p>Call: <a href="tel:+85123456789" className="text-white hover:text-[#E6B15F] transition-colors">+85-123-456789</a></p>
                            <span className="hidden md:block">|</span>
                            <p>Email: <a href="mailto:booktastyc@domain.com" className="text-white hover:text-[#E6B15F] transition-colors">booktastyc@domain.com</a></p>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: Form --- */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10 lg:pl-8">

                        <span className={`${urbanist.className} text-[#E6B15F] text-[12px] md:text-[13px] font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2`}>
                            ✦ WRITE TO US ✦
                        </span>

                        <h2 className={`${fraunces.className} text-[40px] md:text-[50px] text-white mb-4`}>
                            Message Us
                        </h2>

                        <p className={`${urbanist.className} text-white/70 text-[15px] mb-10`}>
                            Contact us — we aim to reply within 24 hours and are happy to help!
                        </p>

                        <form className="w-full flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className={`${urbanist.className} w-full bg-transparent border border-white/20 text-white placeholder-white/50 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors`}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className={`${urbanist.className} w-full bg-transparent border border-white/20 text-white placeholder-white/50 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors`}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className={`${urbanist.className} w-full bg-transparent border border-white/20 text-white placeholder-white/50 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors`}
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className={`${urbanist.className} w-full bg-transparent border border-white/20 text-white placeholder-white/50 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors`}
                                required
                            />
                            <textarea
                                placeholder="Message"
                                rows="5"
                                className={`${urbanist.className} w-full bg-transparent border border-white/20 text-white placeholder-white/50 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors resize-none`}
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className={`${urbanist.className} w-full bg-[#E6B15F] hover:bg-white text-black font-bold tracking-[0.15em] uppercase text-[13px] py-5 mt-2 transition-colors duration-300`}
                            >
                                Send Message
                            </button>
                        </form>

                    </div>

                </div>
            </section>

        </main>
    );
}
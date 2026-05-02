"use client";

import { useState, useEffect } from "react";
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

// Testimonial Data
const testimonials = [
    {
        id: 1,
        name: "SARAH JENNINGS",
        text: "The flavors here are absolutely incredible. I had the seafood pasta and it was the best I've tasted outside of Italy. The staff was incredibly attentive and made our anniversary dinner very special.",
        image: "/assets/revs-1-280x280.jpg.webp",
    },
    {
        id: 2,
        name: "VIKTORIA F.",
        text: "An unforgettable dining experience! Every dish was a masterpiece, and the ambiance was simply perfect. From the first bite to the last, every moment was pure culinary bliss. Highly recommended!",
        image: "/assets/revs-2-280x280.jpg.webp",
    },
    {
        id: 3,
        name: "DAVID CHEN",
        text: "Fantastic service and a truly remarkable wine selection. The steak was cooked to absolute perfection. I love the warm, inviting atmosphere. Will definitely be returning with my colleagues soon.",
        image: "/assets/revs-3-280x280.jpg.webp",
    },
];

export default function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(1);

    // --- NEW: Auto Scroll Logic ---
    useEffect(() => {
        // Set an interval to automatically advance the testimonial every 5000ms (5 seconds)
        const interval = setInterval(() => {
            setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
        }, 5000);

        // Cleanup interval on unmount or when the user manually clicks (resets timer)
        return () => clearInterval(interval);
    }, [activeIndex]);
    // We include activeIndex in the dependency array so if a user clicks an image, 
    // the 5-second timer restarts from 0, preventing an immediate double-skip!

    // Helper to get the correct ordered array so the active item is ALWAYS in the middle
    const getOrderedItems = () => {
        if (activeIndex === 0) return [testimonials[2], testimonials[0], testimonials[1]];
        if (activeIndex === 1) return [testimonials[0], testimonials[1], testimonials[2]];
        if (activeIndex === 2) return [testimonials[1], testimonials[2], testimonials[0]];
        return testimonials;
    };

    const orderedItems = getOrderedItems();
    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="w-full bg-[#18312E] py-24 flex justify-center px-6 md:px-12 overflow-hidden">

            {/* Outer Container with the gold border */}
            <div className="relative w-full max-w-[1400px] border border-[#E6B15F]/30 flex flex-col lg:flex-row overflow-hidden rounded-tl-[60px] md:rounded-tl-[120px] rounded-br-[60px] md:rounded-br-[120px]">

                {/* Left Side: Testimonial Content (Dark Green) */}
                <div className="relative w-full lg:w-1/2 bg-[#1d3c38] px-8 py-20 md:px-16 lg:px-24 flex flex-col items-center text-center justify-center z-10">

                    {/* Subtitle */}
                    <span className={`${urbanist.className} text-[#E6B15F] text-[12px] font-semibold tracking-[0.25em] uppercase mb-6`}>
                        REVIEWS
                    </span>

                    {/* Heading */}
                    <h2 className={`${fraunces.className} text-[45px] md:text-[60px] text-white mb-10`}>
                        Testimonials
                    </h2>

                    {/* Quote Icon */}
                    <div className="mb-6">
                        <svg width="40" height="30" viewBox="0 0 24 24" fill="#E6B15F" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.983 3v7.391C9.983 16.095 6.252 19.961 1 21l-.995-2.151C3.663 17.657 5.05 14.509 5.05 10.391H0V3h9.983zm14.017 0v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c3.658-1.192 5.045-4.34 5.045-8.458H14V3h10z" />
                        </svg>
                    </div>

                    {/* Testimonial Text */}
                    <p
                        key={activeTestimonial.id}
                        className={`${urbanist.className} text-white/90 text-[16px] md:text-[18px] leading-[1.8] font-normal max-w-[500px] mb-16 animate-[fadeIn_0.5s_ease-in-out] min-h-[140px]`}
                    >
                        {activeTestimonial.text}
                    </p>

                    {/* Interactive Profile Image Selector */}
                    <div className="relative flex flex-col items-center justify-center min-h-[150px]">

                        <div className="flex items-center justify-center gap-6 mb-4">
                            {orderedItems.map((item, index) => {
                                const isActive = index === 1;

                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => setActiveIndex(testimonials.findIndex(t => t.id === item.id))}
                                        className={`relative rounded-full overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${isActive
                                            ? "w-[90px] h-[90px] md:w-[100px] md:h-[100px] border-2 border-[#E6B15F] scale-100 opacity-100 z-10"
                                            : "w-[70px] h-[70px] md:w-[80px] md:h-[80px] border-none scale-90 opacity-60 hover:opacity-100 z-0 grayscale-[30%]"
                                            }`}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={`Testimonial from ${item.name}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Active Name Label */}
                        <div key={`name-${activeTestimonial.id}`} className="absolute -bottom-2 h-6 animate-[fadeInUp_0.3s_ease-out]">
                            <span className={`${urbanist.className} text-[#E6B15F] text-[12px] font-bold tracking-[0.15em] uppercase`}>
                                {activeTestimonial.name}
                            </span>
                        </div>

                    </div>
                </div>

                {/* Right Side: The large curved image */}
                <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full">

                    <div className="absolute top-0 left-0 w-[100px] lg:w-[200px] h-full z-10 hidden lg:block">
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[#1d3c38]">
                            <path d="M0,0 C100,0 100,100 0,100 Z" />
                        </svg>
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full pointer-events-none stroke-[#E6B15F] fill-transparent stroke-[0.5]">
                            <path d="M0,0 C100,0 100,100 0,100" />
                        </svg>
                    </div>

                    <Image
                        src="/assets/revs-bg.jpg.webp"
                        alt="People dining together"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
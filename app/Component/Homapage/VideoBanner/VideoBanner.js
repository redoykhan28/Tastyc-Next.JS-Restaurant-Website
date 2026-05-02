"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoBanner() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        // We set a lower z-index here (z-0) so the rotating plate from the Story section stays on top!
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full px-10 pb-30">
                {/* Replace this path with your actual background image from the asset folder */}
                <Image
                    src="/assets/video_bg.jpg.webp"
                    fill
                    alt="Restaurant Table Setting"
                    className="object-cover px-2 pb-30 bg-[#152C29]"
                    priority
                />

                {/* Slight dark overlay to make the white play button pop out more */}
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
            </div>

            {/* Animated Play Button Wrapper */}
            <div className="relative z-10 flex items-center justify-center group cursor-pointer">

                {/* Outer Halo (Ping Animation) */}
                <div className="absolute w-[140px] h-[140px] md:w-[180px] md:h-[180px] bg-white/20 rounded-full animate-ping opacity-75"></div>

                {/* Middle Halo (Static semi-transparent ring) */}
                <div className="absolute w-[160px] h-[160px] md:w-[200px] md:h-[200px] border border-white/30 rounded-full scale-100 group-hover:scale-110 transition-transform duration-500"></div>

                {/* Inner Solid White Button */}
                <div className="relative w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-white rounded-full flex items-center justify-center shadow-2xl z-20 group-hover:scale-95 transition-transform duration-300">

                    {/* Play Icon (Dark Green to match global theme) */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 md:w-10 md:h-10 text-[#18312E] ml-1 md:ml-2"
                    >
                        <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>

                </div>
            </div>

        </section>
    );
}
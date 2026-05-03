"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Fraunces, Urbanist } from "next/font/google";
import Link from "next/link";

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

export default function MenuSection() {
    const [menuData, setMenuData] = useState([]);
    const [activeTab, setActiveTab] = useState("");

    // Fetch data on component mount
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch('/data/menu.json');
                const data = await response.json();

                setMenuData(data);
                // Set the first category as the default active tab
                if (data.length > 0) {
                    setActiveTab(data[0].categoryId);
                }
            } catch (error) {
                console.error("Failed to fetch menu:", error);
            }
        };

        fetchMenu();
    }, []);

    // Find the currently selected category object based on the activeTab
    const currentCategory = menuData.find(cat => cat.categoryId === activeTab);
    const currentItems = currentCategory?.items || [];

    // Prevent rendering before data is fetched to avoid errors
    if (menuData.length === 0) {
        return <section className="w-full bg-[#18312E] pt-24 pb-32 min-h-[800px]"></section>;
    }

    return (
        <section className="relative w-full bg-[#18312E] pt-24 pb-32 overflow-hidden">

            {/* Background Graphic Rings */}
            <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0">
                <Image
                    src="/assets/bg-rings.png"
                    width={200}
                    height={600}
                    alt="Decorative rings"
                    className="object-contain"
                />
            </div>

            {/* --- TOP: Title & Tabs --- */}
            <div className="flex flex-col items-center text-center w-full mb-10 px-6 relative z-10">
                <span className={`${urbanist.className} text-[#E6B15F] text-[12px] md:text-[14px] font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-2`}>
                    ✦ SPECIAL FINE DINE ✦
                </span>

                <h2 className={`${fraunces.className} text-[45px] md:text-[65px] lg:text-[75px] leading-[1.1] text-white mb-16`}>
                    Delicious Menu
                </h2>

                <div className={`${urbanist.className} flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[13px] font-bold tracking-[0.15em] uppercase`}>
                    {menuData.map((tab, index) => (
                        <div key={tab.categoryId} className="flex items-center">
                            <button
                                onClick={() => setActiveTab(tab.categoryId)}
                                className={`pb-2 border-b-[2px] transition-all duration-300 uppercase ${activeTab === tab.categoryId
                                    ? "text-white border-[#E6B15F]"
                                    : "text-white/60 border-transparent hover:text-white"
                                    }`}
                            >
                                {tab.category}
                            </button>
                            {index < menuData.length - 1 && (
                                <span className="text-[#E6B15F] ml-6 md:ml-10 text-[14px]">✦</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MIDDLE: Menu Content Area with Paper Background --- */}
            <div className="relative mx-auto w-full max-w-[1700px] min-h-[700px] flex items-center">

                {/* Paper Background Image overlaying the dark green container */}
                <Image
                    src="/assets/menu-bg-paper.jpg"
                    fill
                    alt="Paper texture background"
                    className="object-cover z-2 opacity-90 px-0 md:px-18"
                />

                {/* Left Side Pattern Graphic */}
                <div className="absolute left-0 top-0 h-full w-[80px] z-0 opacity-60 mix-blend-multiply pointer-events-none"
                    style={{ backgroundImage: 'url(/assets/pattern-black.png)', backgroundRepeat: 'repeat-y' }}>
                </div>

                {/* Content Wrapper inside the paper background with proper padding */}
                <div className="relative z-20 w-full flex flex-col lg:flex-row items-center justify-between py-16 px-6 md:px-20 lg:pl-32 lg:pr-12">

                    {/* Left Side: Dynamic Menu List */}
                    <div className="w-full lg:w-[45%]">
                        <h3 className={`${fraunces.className} text-[35px] md:text-[45px] text-white mb-10 text-center md:text-left`}>
                            {currentCategory.category}
                        </h3>

                        <div className="flex flex-col gap-10">
                            {currentItems.map((item) => (
                                <div key={item.id} className="flex gap-4 md:gap-6 items-start">
                                    {/* Item Image */}
                                    <div className="w-[75px] h-[75px] md:w-[85px] md:h-[85px] rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={85}
                                            height={85}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Item Details - min-w-0 prevents flexbox blowout on mobile */}
                                    <div className="flex-1 pt-1 min-w-0">

                                        {/* Title & Price Row: Stack vertically on mobile, horizontally on desktop */}
                                        <div className="flex flex-col md:flex-row md:items-end gap-1 md:gap-4 mb-2 w-full">

                                            {/* Title with wrapping enforced */}
                                            <h4 className={`${urbanist.className} text-white text-[15px] md:text-[17px] font-bold tracking-wide flex flex-wrap items-center gap-2 break-words whitespace-normal uppercase`}>
                                                {item.name}
                                                {item.isNew && (
                                                    <span className="bg-[#E6B15F] text-[#111] text-[10px] font-bold px-2 py-[2px] rounded-sm tracking-wider shrink-0">
                                                        NEW
                                                    </span>
                                                )}
                                            </h4>

                                            {/* Dotted Line: Hidden on mobile to prevent messy wrapping, visible on md+ */}
                                            <div className="hidden md:block flex-1 border-b border-dashed border-white/30 relative top-[-6px]"></div>

                                            {/* Price */}
                                            <span className={`${urbanist.className} text-[#E6B15F] text-[16px] md:text-[18px] font-medium shrink-0 mt-1 md:mt-0`}>
                                                ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                                            </span>
                                        </div>

                                        {/* Description with wrapping enforced */}
                                        <p className={`${urbanist.className} text-white/50 text-[13px] md:text-[14px] leading-[1.6] md:leading-[1.8] w-full max-w-[380px] break-words whitespace-normal`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Highlight Arch Image & Vertical Text */}
                    <div className="hidden lg:flex relative items-center justify-end w-[50%] mt-10 lg:mt-0">
                        <div className="relative flex items-center gap-8 md:gap-10 pr-6">

                            {/* Arch Image */}
                            <div className="relative w-[380px] xl:w-[450px]">
                                {/* Gold Offset Wireframe Border */}
                                <div className="absolute inset-[-15px] border border-[#E6B15F]/40 rounded-t-[1000px] z-0 pointer-events-none"></div>

                                {/* Arch Image Wrapper */}
                                <div className="relative w-full aspect-[4/4.5] rounded-t-[1000px] overflow-hidden z-10 bg-black/20 shadow-2xl">
                                    <Image
                                        src={currentCategory.categoryImage}
                                        fill
                                        alt={`${currentCategory.category} category`}
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Vertical Text perfectly spaced beside the image */}
                            <div className="flex items-center z-20 pointer-events-none shrink-0">
                                <span
                                    className={`${fraunces.className} text-[#E6B15F] text-[60px] xl:text-[80px] uppercase opacity-90 leading-none tracking-[0.1em]`}
                                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                                >
                                    {currentCategory.category}
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* --- BOTTOM: Schedule & Button --- */}
            <div className="flex flex-col items-center text-center mt-16 px-6 relative z-10">
                <p className={`${urbanist.className} text-white text-[16px] md:text-[18px] mb-8`}>
                    During winter daily from <span className="text-[#E6B15F]">7:00 pm</span> to <span className="text-[#E6B15F]">9:00 pm</span>
                </p>
                <Link href={'/Menu'}><button className={`${urbanist.className} px-8 py-4 border border-[#E6B15F] text-[#E6B15F] text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-[#E6B15F] hover:text-[#111] transition-all duration-300 cursor-pointer`}>
                    View All Menu
                </button></Link>
            </div>

        </section>
    );
}
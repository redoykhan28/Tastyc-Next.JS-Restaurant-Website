"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Urbanist } from "next/font/google";

// 1. Import and configure the Urbanist font
const urbanist = Urbanist({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    // Handle transparent to dark-green scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when side menu is open
    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isSideMenuOpen]);

    const navLinkClass = `flex items-center text-white uppercase text-[13px] font-semibold tracking-[0.1em] h-full relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#E6B15F] after:opacity-0 group-hover:after:opacity-100 transition-all duration-300 ${urbanist.className}`;

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${isScrolled ? "bg-[#18312E]" : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-6 xl:px-12 flex items-center justify-between h-24 relative">

                    {/* Left: Logo */}
                    <div className="flex-shrink-0 z-10">
                        <Link href="/">
                            <Image
                                src="/assets/logo-sm-white.png"
                                alt="Tastyc Logo"
                                width={160}
                                height={50}
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Center: Navigation - Absolutely centered for desktop */}
                    <nav className="hidden lg:flex items-center h-full absolute left-1/2 -translate-x-1/2">
                        <ul className="flex items-center gap-6 xl:gap-10 h-full">
                            <li className="h-full group relative flex items-center">
                                <Link href="/" className={navLinkClass}>HOME</Link>
                            </li>
                            <li className="h-full group relative flex items-center">
                                <Link href="/about" className={navLinkClass}>ABOUT US</Link>
                            </li>
                            <li className="h-full group relative flex items-center">
                                <Link href="/Menu" className={navLinkClass}>MENU</Link>
                            </li>
                            <li className="h-full group relative flex items-center">
                                <Link href="/blog" className={navLinkClass}>BLOG</Link>
                            </li>
                            <li className="h-full group relative flex items-center">
                                <Link href="/contact" className={navLinkClass}>CONTACT US</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Right: Actions (Cart, Reservation, Hamburger) */}
                    <div className="flex items-center gap-6 xl:gap-8 z-10">
                        {/* Cart Icon */}
                        <Link href="#" className="text-white hover:text-[#E6B15F] transition-colors">
                            <div className="indicator">
                                <span className={`indicator-item badge badge-sm bg-[#22c55e] text-white border-none text-[10px] font-bold h-5 w-5 rounded-full p-0 ${urbanist.className}`}>
                                    0
                                </span>
                                <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5h.008v.008h-.008V10.5zm5.625 0h.008v.008h-.008V10.5z" />
                                </svg>
                            </div>
                        </Link>

                        {/* Reservation Button */}
                        <Link
                            href="/#reservation"
                            className={`hidden md:flex items-center justify-center bg-[#E6B15F] text-[#111] uppercase font-bold text-[13px] tracking-widest px-8 py-4 hover:bg-white transition-colors duration-300 ${urbanist.className}`}
                        >
                            Reservation
                        </Link>

                        {/* Hamburger Menu Icon - Always visible */}
                        <button
                            onClick={() => setIsSideMenuOpen(true)}
                            className="text-white hover:text-[#E6B15F] transition-colors flex flex-col gap-[5px] items-end justify-center w-8 h-8 cursor-pointer"
                        >
                            <span className="w-full h-[2px] bg-current"></span>
                            <span className="w-full h-[2px] bg-current"></span>
                            <span className="w-[60%] h-[2px] bg-current"></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* --- SIDEMENU OVERLAY & PANEL --- */}

            {/* 1. Dark Backdrop (Clicking it closes the menu) */}
            <div
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isSideMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsSideMenuOpen(false)}
            ></div>

            {/* 2. Slide-in Side Panel (100% on mobile, 40% on desktop) */}
            <div
                className={`fixed top-0 right-0 h-full z-50 bg-[#18312E] w-full lg:w-[40%] shadow-2xl transition-transform duration-500 ease-in-out transform ${isSideMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Textured background pattern */}
                <div
                    className="absolute inset-0 z-0 opacity-100"
                    style={{
                        backgroundImage: "url(/assets/pattern-black.png)",
                        backgroundRepeat: "repeat",
                        backgroundSize: "200px",
                    }}
                ></div>

                {/* Close Button */}
                <button
                    onClick={() => setIsSideMenuOpen(false)}
                    className="absolute top-8 right-8 z-50 text-white hover:text-[#E6B15F] transition-colors flex items-center justify-center w-10 h-10 border border-white/20 rounded-full"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Side Menu Content Container */}
                <div className="relative z-10 w-full h-full overflow-y-auto flex flex-col items-center gap-12 py-16 px-6">

                    {/* Logo */}
                    <div className="flex-shrink-0 mt-8">
                        <Link href="/" onClick={() => setIsSideMenuOpen(false)}>
                            <Image
                                src="/assets/logo-sm-white.png"
                                alt="Tastyc Logo"
                                width={180}
                                height={60}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Menu Links */}
                    <nav className={`${urbanist.className} w-full`}>
                        <ul className="flex flex-col items-center gap-6 w-full text-white uppercase text-[15px] font-semibold tracking-[0.15em] text-center">
                            <li>
                                <Link href="/" onClick={() => setIsSideMenuOpen(false)} className="hover:text-[#E6B15F] transition-colors pb-1 border-b border-transparent hover:border-[#E6B15F]">HOME</Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={() => setIsSideMenuOpen(false)} className="hover:text-[#E6B15F] transition-colors pb-1 border-b border-transparent hover:border-[#E6B15F]">ABOUT US</Link>
                            </li>
                            <li>
                                <Link href="/Menu" onClick={() => setIsSideMenuOpen(false)} className="hover:text-[#E6B15F] transition-colors pb-1 border-b border-transparent hover:border-[#E6B15F]">MENU</Link>
                            </li>
                            <li>
                                <Link href="/blog" onClick={() => setIsSideMenuOpen(false)} className="hover:text-[#E6B15F] transition-colors pb-1 border-b border-transparent hover:border-[#E6B15F]">BLOG</Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={() => setIsSideMenuOpen(false)} className="hover:text-[#E6B15F] transition-colors pb-1 border-b border-transparent hover:border-[#E6B15F]">CONTACT US</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* --- NEW: Contact Information Section --- */}
                    <div className="flex flex-col items-center mt-auto text-center pt-8 border-t border-white/10 w-full max-w-[250px]">
                        <span className={`${urbanist.className} text-[#E6B15F] text-[12px] md:text-[13px] font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2`}>
                            ✦ VISIT US ✦
                        </span>

                        <p className={`${urbanist.className} text-white/80 text-[14px] leading-relaxed mb-4`}>
                            Restaurant St, Delicious City,<br /> London 9578, UK
                        </p>

                        <div className={`${urbanist.className} flex flex-col gap-2 text-[14px] text-[#E6B15F] font-medium mb-6`}>
                            <a href="tel:+85123456789" className="hover:text-white transition-colors">+85-123-456789</a>
                            <a href="mailto:booktastyc@domain.com" className="hover:text-white transition-colors">booktastyc@domain.com</a>
                        </div>

                        <p className={`${urbanist.className} text-white/50 text-[11px] tracking-[0.15em] uppercase`}>
                            Daily : 8.00 am to 10.00 pm
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}
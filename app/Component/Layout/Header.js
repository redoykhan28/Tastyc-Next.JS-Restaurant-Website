"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Urbanist } from "next/font/google";

// 1. Import and configure the Urbanist font
const urbanist = Urbanist({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

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

    // We add urbanist.className here to apply the font to the top-level menu
    const navLinkClass = `flex items-center text-white uppercase text-[13px] font-semibold tracking-[0.1em] h-full relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#E6B15F] after:opacity-0 group-hover:after:opacity-100 transition-all duration-300 ${urbanist.className}`;

    // We add urbanist.className here to apply the font to the dropdown links
    const dropdownLinkClass = `block px-6 py-2.5 text-[15px] text-black hover:bg-black/10 transition-colors ${urbanist.className}`;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-[#18312E]" : "bg-transparent"
                }`}
        >
            <div className="max-w-[1600px] mx-auto px-6 xl:px-12 flex items-center justify-between h-24">

                {/* Left: Logo */}
                <div className="flex-shrink-0">
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

                {/* Center: Navigation - FULL MENU RESTORED */}
                <nav className="hidden lg:flex items-center h-full mx-auto">
                    <ul className="flex items-center gap-6 xl:gap-8 h-full">

                        {/* HOME */}
                        <li className="h-full group relative flex items-center">
                            <Link href="/" className={navLinkClass}>
                                HOME
                                <svg className="w-4 h-4 ml-1 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </Link>
                        </li>

                        {/* PAGES (With full dropdown from your screenshot) */}
                        <li className="h-full group relative flex items-center">
                            <Link href="/pages" className={navLinkClass}>
                                PAGES
                                <svg className="w-4 h-4 ml-1 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </Link>

                            {/* The Dropdown Menu for Pages */}
                            <div className="absolute top-24 left-0 w-56 bg-[#E6B15F] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                <ul className="flex flex-col py-2">
                                    <li><Link href="/about" className={dropdownLinkClass}>About Us</Link></li>
                                    <li><Link href="/chefs" className={dropdownLinkClass}>Chefs</Link></li>
                                    <li><Link href="/gallery" className={dropdownLinkClass}>Gallery</Link></li>
                                    <li><Link href="/testimonials" className={dropdownLinkClass}>Testimonials</Link></li>
                                    <li><Link href="/services" className={dropdownLinkClass}>Services</Link></li>
                                    <li><Link href="/history" className={dropdownLinkClass}>History</Link></li>
                                    <li><Link href="/pricing" className={dropdownLinkClass}>Pricing</Link></li>
                                    <li><Link href="/404" className={dropdownLinkClass}>404 Page</Link></li>
                                </ul>
                            </div>
                        </li>

                        {/* MENU */}
                        <li className="h-full group relative flex items-center">
                            <Link href="/Menu" className={navLinkClass}>
                                MENU
                                <svg className="w-4 h-4 ml-1 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </Link>
                        </li>

                        {/* ORDER */}
                        <li className="h-full group relative flex items-center">
                            <Link href="/order" className={navLinkClass}>
                                ORDER
                                <svg className="w-4 h-4 ml-1 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </Link>
                        </li>

                        {/* BLOG (No chevron in your image) */}
                        <li className="h-full group relative flex items-center">
                            <Link href="/blog" className={navLinkClass}>
                                BLOG
                            </Link>
                        </li>

                        {/* CONTACT (No chevron in your image) */}
                        <li className="h-full group relative flex items-center">
                            <Link href="/contact" className={navLinkClass}>
                                CONTACT
                            </Link>
                        </li>

                        {/* SHOP */}
                        <li className="h-full group relative flex items-center">
                            <Link href="/shop" className={navLinkClass}>
                                SHOP
                                <svg className="w-4 h-4 ml-1 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </Link>
                        </li>

                    </ul>
                </nav>

                {/* Right: Actions (Cart, Reservation, Hamburger) */}
                <div className="flex items-center gap-6 xl:gap-8">

                    {/* Cart Icon using DaisyUI */}
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

                    {/* Hamburger Menu Icon */}
                    <button className="text-white hover:text-[#E6B15F] transition-colors flex flex-col gap-[5px] items-end justify-center w-8 h-8">
                        <span className="w-full h-[2px] bg-current"></span>
                        <span className="w-full h-[2px] bg-current"></span>
                        <span className="w-[60%] h-[2px] bg-current"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
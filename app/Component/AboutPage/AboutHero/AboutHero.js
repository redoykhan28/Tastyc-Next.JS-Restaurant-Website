import Image from "next/image";
import Link from "next/link";
import { Fraunces, Urbanist } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600"] });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AboutHero() {
    return (
        <section className="relative w-full h-[50vh] min-h-[600px] flex flex-col items-center justify-center pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/gallery-2-big.jpg.webp" // Replace with your hero steak image
                    alt="About Us Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Single flat dark overlay to make text readable without any bottom fade */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 mt-10">
                <h1 className={`${fraunces.className} text-white text-[50px] md:text-[70px] leading-tight mb-4 drop-shadow-md`}>
                    About Us
                </h1>

                {/* Breadcrumbs */}
                <div className={`${urbanist.className} flex items-center gap-3 text-[13px] md:text-[14px] tracking-[0.15em] uppercase font-bold text-white/80`}>
                    <Link href="/" className="hover:text-[#E6B15F] transition-colors">
                        Home
                    </Link>
                    <span className="text-[#E6B15F]">•</span>
                    <span className="text-[#E6B15F]">About Us</span>
                </div>
            </div>
        </section>
    );
}
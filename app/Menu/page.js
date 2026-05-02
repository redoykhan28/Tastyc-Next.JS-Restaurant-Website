import Image from "next/image";
import Link from "next/link";
import { Fraunces, Urbanist, Herr_Von_Muellerhoff } from "next/font/google";
import Testimonial from "../Component/Homapage/Testimonial/Testimonial";
import Reservation from "../Component/Homapage/Reservation/Reservation";

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

const herrVonMuellerhoff = Herr_Von_Muellerhoff({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

export default async function MainMenuPage() {
    // Fetch all categories from your local JSON
    const res = await fetch("http://localhost:3000/data/menu.json", {
        cache: "no-store",
    });
    const menuItems = await res.json();

    return (
        <main className="bg-[#18312E] min-h-screen w-full flex flex-col">

            {/* --- HERO SECTION --- */}
            <section className="relative w-full h-[50vh] min-h-[500px] flex flex-col items-center justify-center pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/gallery-2-big.jpg.webp" // Reusing the hero image from previous sections
                        alt="Our Menu Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Flat dark overlay to match the About page style */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-6 mt-10">
                    <h1 className={`${fraunces.className} text-white text-[50px] md:text-[70px] leading-tight mb-4 drop-shadow-md`}>
                        Our Menu
                    </h1>

                    {/* Breadcrumbs */}
                    <div className={`${urbanist.className} flex items-center gap-3 text-[13px] md:text-[14px] tracking-[0.15em] uppercase font-bold text-white/80`}>
                        <Link href="/" className="hover:text-[#E6B15F] transition-colors">
                            Home
                        </Link>
                        <span className="text-[#E6B15F]">•</span>
                        <span className="text-[#E6B15F]">Menu</span>
                    </div>
                </div>
            </section>

            {/* --- MENU CATEGORY GRID SECTION --- */}
            <section className="relative py-24 md:py-32 bg-[#18312E] overflow-hidden flex justify-center px-6 md:px-12">
                {/* Background Stylish Text */}
                <div
                    className={`${herrVonMuellerhoff.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1c3834] text-[150px] md:text-[250px] lg:text-[400px] whitespace-nowrap opacity-50 pointer-events-none z-0`}
                >
                    Menu
                </div>

                <div className="relative z-10 w-full max-w-[1000px] flex flex-col items-center">

                    {/* Section Header */}
                    <div className="flex flex-col items-center text-center w-full mb-16 md:mb-24">
                        <span
                            className={`${urbanist.className} text-[#E6B15F] text-[12px] md:text-[14px] font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2`}
                        >
                            ✦ SPECIAL FINE DINE ✦
                        </span>

                        <h2
                            className={`${fraunces.className} text-[45px] md:text-[60px] leading-[1.1] text-white`}
                        >
                            Delicious Selections
                        </h2>
                    </div>

                    {/* Grid Layout: 2 Columns on desktop, 1 on mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 w-full justify-items-center">
                        {/* Mapping over ALL 4 items now instead of slicing */}
                        {menuItems.map((item) => (
                            <Link
                                key={item.categoryId}
                                href={`/Menu/${item.categoryId}`}
                                className="flex flex-col items-center group cursor-pointer w-full max-w-[380px]"
                            >
                                {/* Image Container with Arch Shape and Border */}
                                <div className="relative w-full aspect-[4/5] rounded-t-full border border-b-0 border-[#E6B15F]/40 p-4 mb-8 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="relative w-full h-full rounded-t-full overflow-hidden">
                                        <Image
                                            src={item.categoryImage}
                                            alt={item.category}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <h3
                                    className={`${fraunces.className} text-[32px] text-white mb-4 transition-colors group-hover:text-[#E6B15F] text-center`}
                                >
                                    {item.category === "Starter" ? "Appetizers" : item.category}
                                </h3>

                                <p
                                    className={`${urbanist.className} text-white/70 text-center text-[15px] leading-relaxed mb-6 max-w-[80%]`}
                                >
                                    {item.categoryDescription}
                                </p>

                                {/* View Menu Link styling matching design */}
                                <span
                                    className={`${urbanist.className} text-[#E6B15F] text-[13px] font-bold tracking-[0.15em] uppercase relative inline-block
                  after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#E6B15F] after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full`}
                                >
                                    VIEW MENU
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Reservation />
            <div className="py-30 bg-[#18312E]"></div>
        </main>
    );
}
import Image from "next/image";
import Link from "next/link";
import { Fraunces, Urbanist } from "next/font/google";
import Reservation from "@/app/Component/Homapage/Reservation/Reservation";
import allMenus from "@/public/data/menu.json";

// Initialize Fonts
const fraunces = Fraunces({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

const urbanist = Urbanist({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export default async function SingleCategoryPage({ params }) {
    // 1. Safely unwrap params (Required for Next.js 15+)
    const resolvedParams = await params;
    const requestedId = resolvedParams.id;

    // 3. Find the specific category using a case-insensitive match
    const currentCategory = allMenus.find(
        (cat) => cat.categoryId.toLowerCase() === requestedId.toLowerCase()
    );

    // Handle 404 if category is not found
    if (!currentCategory) {
        return (
            <div className="min-h-screen bg-[#18312E] flex flex-col items-center justify-center text-white">
                <h1 className={`${fraunces.className} text-5xl mb-4`}>Menu Not Found</h1>
                <p className={`${urbanist.className} mb-6 text-white/70`}>
                    We couldn't find the menu category: <span className="text-[#E6B15F]">{requestedId}</span>
                </p>
                <Link href="/" className={`${urbanist.className} text-[#E6B15F] hover:text-white border-b border-[#E6B15F] pb-1 transition-colors`}>
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <main className="bg-[#18312E] min-h-screen flex flex-col w-full">
            {/* --- HERO SECTION --- */}
            <section className="relative w-full h-[60vh] min-h-[400px] flex flex-col items-center justify-center">
                {/* Background Image with Overlays */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={currentCategory.categoryImage}
                        alt={currentCategory.category}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark gradient overlay to blend into the section below */}
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#18312E]/40 to-[#18312E]"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center text-center mt-16 px-4">
                    <h1
                        className={`${fraunces.className} text-white text-[50px] md:text-[70px] leading-tight drop-shadow-lg mb-2`}
                    >
                        {currentCategory.category}
                    </h1>
                    <p
                        className={`${urbanist.className} text-white/90 text-[16px] md:text-[18px] tracking-wide mb-6`}
                    >
                        A symphony of flavors in every bite — {currentCategory.category.toLowerCase()}
                    </p>

                    {/* Breadcrumbs */}
                    <div className={`${urbanist.className} flex items-center gap-2 text-[12px] md:text-[13px] tracking-[0.1em] uppercase font-medium`}>
                        <Link href="/" className="text-white hover:text-[#E6B15F] transition-colors">
                            Home
                        </Link>
                        <span className="text-white/50">•</span>
                        <span className="text-[#E6B15F]">{currentCategory.category}</span>
                    </div>
                </div>
            </section>

            {/* --- MENU LIST SECTION --- */}
            <section className="relative w-full py-20 px-6 md:px-12 flex justify-center z-10 bg-[#18312E]">
                <div className="w-full max-w-[1200px] flex flex-col items-center">

                    {/* Category Header (e.g. Starter) */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="w-8 h-[2px] bg-[#E6B15F] mb-4"></span>
                        <h2 className={`${fraunces.className} text-[40px] md:text-[50px] text-white mb-4`}>
                            {currentCategory.category}
                        </h2>
                        <p className={`${urbanist.className} text-white/70 max-w-[600px] text-[15px] md:text-[16px]`}>
                            {currentCategory.categoryDescription}
                        </p>
                    </div>

                    {/* Menu Items Grid (2 columns on desktop) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 w-full mb-16">
                        {currentCategory.items.map((item) => (
                            <div key={item.id} className="flex gap-4 md:gap-6 items-start group">

                                {/* Circular Image with Double Border Effect */}
                                <div className="relative shrink-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full border border-transparent p-1 outline outline-1 outline-[#E6B15F]/30 group-hover:outline-[#E6B15F] transition-all duration-500 overflow-hidden">
                                    <div className="relative w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* Item Details */}
                                <div className="flex-1 flex flex-col pt-2">
                                    {/* Title & Price Row with Dotted Line */}
                                    <div className="flex items-end w-full mb-2">
                                        <h3 className={`${fraunces.className} text-[18px] md:text-[22px] text-white uppercase tracking-wide`}>
                                            {item.name}
                                        </h3>

                                        {/* Dotted Line Spacer */}
                                        <div className="flex-grow border-b-2 border-dotted border-white/20 mx-3 mb-1.5 opacity-50"></div>

                                        <span className={`${urbanist.className} text-[#E6B15F] text-[18px] md:text-[20px] font-semibold`}>
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className={`${urbanist.className} text-white/60 text-[14px] leading-[1.6]`}>
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <p className={`${urbanist.className} text-[#E6B15F] text-[13px] tracking-[0.1em] text-center border-t border-white/10 pt-8 w-full max-w-[800px]`}>
                        During winter daily from 7:00 pm to 9:00 pm
                    </p>

                </div>
            </section>

            {/* --- RESERVATION SECTION --- */}
            <Reservation />
            <div className="py-30 bg-[#18312E]"></div>

        </main>
    );
}
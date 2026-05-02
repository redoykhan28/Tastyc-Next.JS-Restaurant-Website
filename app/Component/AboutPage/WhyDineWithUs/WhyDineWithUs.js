import Image from "next/image";
import { Fraunces, Urbanist } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600"] });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function WhyDineWithUs() {
    // Data for the 4 arch cards
    const features = [
        { id: 1, title: "Passionate Chefs", img: "/assets/adv-01.jpg.webp" }, // Replace paths
        { id: 2, title: "Fresh Ingredients", img: "/assets/adv-02.jpg.webp" },
        { id: 3, title: "Elegant Ambiance", img: "/assets/adv-03.jpg.webp" },
        { id: 4, title: "Exquisite Food", img: "/assets/adv-04.jpg.webp" },
    ];

    // Data for the 4 stats at the bottom
    const stats = [
        { num: "600 +", title: "Signature Dishes", desc: "Crafted with passion and precision to delight your senses." },
        { num: "450 +", title: "Daily Guests", desc: "Welcoming food lovers from around the world every single day." },
        { num: "155 +", title: "Expert Staff", desc: "Dedicated to providing you with an unforgettable experience." },
        { num: "25 +", title: "Years Experience", desc: "Perfecting the art of fine dining and hospitality since inception." },
    ];

    return (
        <section className="bg-[#18312E] py-24 px-6 md:px-12 flex justify-center w-full overflow-hidden">
            <div className="max-w-[1300px] w-full flex flex-col items-center">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className={`${urbanist.className} text-[#E6B15F] text-[12px] md:text-[14px] font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2`}>
                        ✦ WHY CHOOSE US ✦
                    </span>
                    <h2 className={`${fraunces.className} text-[40px] md:text-[55px] text-white`}>
                        Why Dine With Us
                    </h2>
                </div>

                {/* 4 Arch Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mb-20">
                    {features.map((feature) => (
                        <div key={feature.id} className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden group border border-white/10">
                            <Image
                                src={feature.img}
                                alt={feature.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient to make text readable */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#112421] via-transparent to-transparent"></div>
                            <h3 className={`${urbanist.className} absolute bottom-6 w-full text-center text-white text-[16px] tracking-wide font-medium uppercase z-10`}>
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Divider Line */}
                <hr className="w-full border-white/10 mb-16" />

                {/* 4 Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 w-full">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col border-l border-[#E6B15F]/30 pl-6">
                            <h3 className={`${fraunces.className} text-white text-[45px] md:text-[50px] leading-none mb-2`}>
                                {stat.num}
                            </h3>
                            <h4 className={`${urbanist.className} text-[#E6B15F] text-[15px] uppercase tracking-wider font-bold mb-3`}>
                                {stat.title}
                            </h4>
                            <p className={`${urbanist.className} text-white/50 text-[14px] leading-relaxed max-w-[250px]`}>
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
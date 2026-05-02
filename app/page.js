import Image from "next/image";
import Hero from "./Component/Homapage/Hero/Hero";
import Story from "./Component/Homapage/Story/Story";
import VideoBanner from "./Component/Homapage/VideoBanner/VideoBanner";
import MenuSection from "./Component/Homapage/MenuSection/MenuSection";
import Services from "./Component/Homapage/Services/Services";
import Testimonial from "./Component/Homapage/Testimonial/Testimonial";
import Reservation from "./Component/Homapage/Reservation/Reservation";
import MenuGrid from "./Component/Homapage/MenuGrid/MenuGrid";


export default function Home() {
  return (
    <>
      <Hero />
      <MenuGrid />
      <Story />
      <VideoBanner />
      <MenuSection />
      <Services />
      <Testimonial />
      <Reservation />
      <div className="py-10 bg-[#18312E]"></div>

    </>
  );
}

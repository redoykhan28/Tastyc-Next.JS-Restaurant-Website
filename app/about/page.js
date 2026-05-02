import AboutHero from "../Component/AboutPage/AboutHero/AboutHero";
import MeetTheChef from "../Component/AboutPage/MeetTheChef/MeetTheChef";
import WhyDineWithUs from "../Component/AboutPage/WhyDineWithUs/WhyDineWithUs";
import Story from "../Component/Homapage/Story/Story";
import Testimonial from "../Component/Homapage/Testimonial/Testimonial";
import VideoBanner from "../Component/Homapage/VideoBanner/VideoBanner";

export default
    async function about() {

    return (
        <>
            <AboutHero />
            <Story />
            <VideoBanner />
            <WhyDineWithUs />
            <MeetTheChef />
            <Testimonial />
        </>
    )
}
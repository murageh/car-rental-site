import HeroSection from "@/components/home/hero/HeroSection";
import SearchSection from "@/components/home/search/SearchSection";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import Testimonials from "@/components/home/testimonials/Testimonials";
import CallToActionSection from "@/components/home/cta/CallToActionSection";
import BlogSection from "@/components/home/read-our-stories/BlogSection";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {
    return (
        <main className="">
            <HeroSection/>
            <SearchSection/>
            <WhyChooseUs/>
            <Testimonials/>
            <CallToActionSection/>
            <BlogSection/>
            <Footer/>
        </main>
    )
}

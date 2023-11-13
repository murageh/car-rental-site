import HeroSection from "@/components/home/hero/HeroSection";
import SearchSection from "@/components/home/search/SearchSection";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import Testimonials from "@/components/home/testimonials/Testimonials";

export default function Home() {
    return (
        <main className="">
            <HeroSection/>
            <SearchSection/>
            <WhyChooseUs/>
            <Testimonials/>
        </main>
    )
}


import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicTestimonialCards from "@/components/MusicTestimonialCards";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.04] ">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicTestimonialCards />
      <UpcommingWebinars />
      <Instructors />
      <Footer/>
    </main>
  );
}

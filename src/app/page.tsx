import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCart from "@/components/TestimonialCart";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import WhyChoseUs from "@/components/WhyChoseUs";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] text-white antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChoseUs />
      <TestimonialCart />
      <UpcommingWebinar />
      <Instructor />
      <Footer />
    </main>
  );
}

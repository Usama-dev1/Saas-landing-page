import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import PriceSection from "@/components/PriceSection";
import Testimonial from "@/components/Testimonial";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <HeroSection />
        {/* Product Demo section */}
        <DemoSection />
        {/* Features section */}
        {/* Testimonial section */}
        <Testimonial />
        {/* Pricing section */}
        <PriceSection />
        {/* FAQ section */}
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

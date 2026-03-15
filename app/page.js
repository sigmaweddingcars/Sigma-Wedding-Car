import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import FeaturedCars from "@/components/FeaturedCars";
import SocialProof from "@/components/SocialProof";
import InstagramGallery from "@/components/InstagramGallery";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <HeroSection />
      <TrustSection />
      <FeaturedCars />
      <Testimonials />
      <InstagramGallery />
      <SocialProof />
      <FinalCTA />
    </main>
  );
}

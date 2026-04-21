import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import StorytellingSection from "@/components/StorytellingSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import EditorialBanner from "@/components/EditorialBanner";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CartDrawer />
      <Hero />
      <FeatureStrip />
      <StorytellingSection />
      <FeaturedProducts />
      <EditorialBanner />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryBanner from "@/components/CategoryBanner";
import Products from "@/components/Products";
import FlashSale from "@/components/FlashSale";
import BrandPartners from "@/components/BrandPartners";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <Hero />
      <CategoryBanner />
      <Products />
      <FlashSale />
      <BrandPartners />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

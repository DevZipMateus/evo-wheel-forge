import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-carbon-black">
      <TopBar />
      <Header />
      <Hero />
      
      {/* Products Preview Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Nossos </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Produtos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Descubra nossa linha completa de rodas esportivas e pneus de alta performance
            </p>
          </div>
          <ProductCarousel />
          <div className="text-center mt-12">
            <Link to="/produtos">
              <Button variant="hero" size="lg" className="group">
                Ver Todos os Produtos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

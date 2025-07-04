import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  return <div className="min-h-screen bg-carbon-black">
      <TopBar />
      <Header />
      <Hero />
      
      {/* Products Preview Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-slate-50">Nossos </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Produtos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Descubra nossa linha completa de rodas esportivas e pneus de alta performance
            </p>
          </div>
          <ProductCarousel />
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/produtos">
                <Button variant="hero" size="lg" className="group">
                  Veja alguns de nossos produtos
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="accent" size="lg" className="group" onClick={() => window.open('https://shopee.com.br/evolucaorodas', '_blank')}>
                Veja todos os modelos e tamanhos aqui
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>;
};
export default Index;
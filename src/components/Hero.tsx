import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Shield } from "lucide-react";
import heroWheel from "@/assets/hero-wheel.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden mt-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 sm:opacity-25 md:opacity-30 scale-105 sm:scale-100" style={{
      backgroundImage: `url(/lovable-uploads/c11551bc-2364-409b-b4e3-1c952d86414d.png)`
    }}></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-racing-orange" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">EVOLUÇÃO</span>
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  RODAS
                </span>
                <span className="text-foreground"> & </span>
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  PNEUS
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-md">
                Transforme seu veículo com rodas esportivas de alta performance 
                e pneus de qualidade premium. Evolua seu estilo.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <Zap className="w-6 h-6 text-tech-blue mx-auto mb-2" />
                <p className="text-sm font-medium">Performance</p>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <Shield className="w-6 h-6 text-tech-blue mx-auto mb-2" />
                <p className="text-sm font-medium">Qualidade</p>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <Star className="w-6 h-6 text-tech-blue mx-auto mb-2" />
                <p className="text-sm font-medium">Estilo</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Ver Produtos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-slate-50"
                onClick={() => window.open('https://wa.me/5511947783837', '_blank')}
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Company Logo */}
          <div className="relative lg:block hidden">
            <div className="relative w-96 h-96 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-accent rounded-full animate-pulse-glow opacity-10"></div>
              <div className="absolute inset-8 bg-carbon-black/80 rounded-full backdrop-blur-sm flex items-center justify-center border border-racing-orange/20">
                <img src="/lovable-uploads/9a933538-7e02-46bb-87a0-91794efe3f0e.png" alt="Evolução Rodas e Pneus - Logo" className="w-48 h-48 max-w-full object-contain rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        
      </div>
    </section>;
};
export default Hero;
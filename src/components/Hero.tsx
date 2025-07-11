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
      <div className="relative container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 bg-secondary/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-racing-orange" />
                <span className="text-xs sm:text-sm font-medium">Premium Quality</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">EVOLUÇÃO</span>
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  RODAS
                </span>
                <span className="text-slate-50"> & </span>
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  PNEUS
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg">
                Transforme seu veículo com rodas esportivas de alta performance 
                e pneus de qualidade premium. Evolua seu estilo.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <div className="text-center p-2 sm:p-3 md:p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-racing-orange mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">Performance</p>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-racing-orange mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">Qualidade</p>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-racing-orange mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">Estilo</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Ver Produtos
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-slate-50 w-full sm:w-auto" onClick={() => window.open('https://wa.me/5511947783837', '_blank')}>
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Company Logo */}
          <div className="relative hidden md:block lg:block">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-accent rounded-full animate-pulse-glow opacity-10"></div>
              <div className="absolute inset-6 lg:inset-8 bg-carbon-black/80 rounded-full backdrop-blur-sm flex items-center justify-center border border-racing-orange/20">
                <img src="/lovable-uploads/9a933538-7e02-46bb-87a0-91794efe3f0e.png" alt="Evolução Rodas e Pneus - Logo" className="w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 max-w-full object-contain rounded-full" />
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
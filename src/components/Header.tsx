import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-accent rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 w-8 h-8 border-2 border-tech-blue rounded-full"></div>
            </div>
            <div className="text-xl font-bold">
              <span className="text-foreground">EVOLUÇÃO</span>
              <div className="text-sm font-medium text-muted-foreground -mt-1">
                RODAS & PNEUS
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-tech-blue transition-colors">
              Início
            </a>
            <a href="#products" className="text-foreground hover:text-tech-blue transition-colors">
              Produtos
            </a>
            <a href="#services" className="text-foreground hover:text-tech-blue transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-foreground hover:text-tech-blue transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-foreground hover:text-tech-blue transition-colors">
              Contato
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-tech-blue" />
              <span className="text-muted-foreground">(11) 9999-9999</span>
            </div>
            <Button variant="hero" size="sm">
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, User, ShoppingCart, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-3">
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

          {/* Navigation & Search */}
          <div className="flex items-center space-x-8">
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

            {/* Search Bar */}
            <div className="hidden lg:flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 min-w-80">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar produtos..." 
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden lg:block">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-racing-orange text-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
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
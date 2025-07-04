import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, User, ShoppingCart, Phone } from "lucide-react";
const Header = () => {
  return <header className="fixed top-0 w-full bg-carbon-black/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/9a933538-7e02-46bb-87a0-91794efe3f0e.png" alt="Evolução Rodas e Pneus - Logo" className="h-12 w-auto" />
          </div>

          {/* Navigation & Search */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-racing-orange transition-colors">
                Início
              </a>
              <a href="/produtos" className="text-white hover:text-racing-orange transition-colors">
                Produtos
              </a>
              <a href="#services" className="text-white hover:text-racing-orange transition-colors">
                Serviços
              </a>
              <a href="/sobre" className="text-white hover:text-racing-orange transition-colors">
                Sobre
              </a>
              <a href="#contact" className="text-white hover:text-racing-orange transition-colors">
                Contato
              </a>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center space-x-2 rounded-full px-4 py-2 min-w-80 bg-gray-50">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input placeholder="Buscar produtos..." className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden lg:block text-white hover:text-racing-orange">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-racing-orange">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-white hover:text-racing-orange">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-racing-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-racing-orange">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;
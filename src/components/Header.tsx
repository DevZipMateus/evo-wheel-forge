import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, User, ShoppingCart, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <header className="fixed top-0 w-full bg-carbon-black/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/9a933538-7e02-46bb-87a0-91794efe3f0e.png" alt="Evolução Rodas e Pneus - Logo" className="h-10 sm:h-12 w-auto" />
          </div>

          {/* Navigation & Search */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link to="/" className="text-white hover:text-racing-orange transition-colors text-sm lg:text-base">
                Início
              </Link>
              <Link to="/produtos" className="text-white hover:text-racing-orange transition-colors text-sm lg:text-base">
                Produtos
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden xl:flex items-center space-x-2 rounded-full px-4 py-2 w-64 xl:w-80 max-w-[300px] bg-gray-50">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input placeholder="Buscar produtos..." className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-sm" />
            </div>
            
            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden items-center space-x-4">
              <Link to="/" className="text-white hover:text-racing-orange transition-colors text-sm">
                Início
              </Link>
              <Link to="/produtos" className="text-white hover:text-racing-orange transition-colors text-sm">
                Produtos
              </Link>
            </nav>
          </div>

      {/* Mobile Menu */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-racing-orange">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 bg-carbon-black border-l border-racing-orange/20">
          <div className="flex flex-col space-y-6 pt-6">
            {/* Logo */}
            <div className="flex justify-center">
              <img src="/lovable-uploads/9a933538-7e02-46bb-87a0-91794efe3f0e.png" alt="Evolução Rodas e Pneus" className="h-16 w-auto" />
            </div>
            
            {/* Search Bar Mobile */}
            <div className="flex items-center space-x-2 rounded-full px-4 py-3 bg-gray-50">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input placeholder="Buscar produtos..." className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent" />
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-racing-orange transition-colors text-lg py-2 border-b border-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/produtos" 
                className="text-white hover:text-racing-orange transition-colors text-lg py-2 border-b border-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
            </nav>
            
            {/* Contact Info */}
            <div className="flex flex-col space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-racing-orange" />
                <span className="text-white">(11) 94778-3837</span>
              </div>
              <Button 
                className="w-full bg-racing-orange hover:bg-warm-orange text-white"
                onClick={() => {
                  window.open('https://wa.me/5511947783837', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;
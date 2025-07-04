import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-carbon-black text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-accent rounded-full"></div>
                <div className="absolute inset-0 w-8 h-8 border-2 border-tech-blue rounded-full"></div>
              </div>
              <div className="text-xl font-bold">
                <span className="text-foreground">EVOLUÇÃO</span>
                <div className="text-sm font-medium text-muted-foreground -mt-1">
                  RODAS & PNEUS
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando veículos com rodas esportivas e pneus de alta performance desde 2020.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-tech-blue">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-tech-blue">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-tech-blue">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-tech-blue transition-colors">Início</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-tech-blue transition-colors">Produtos</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-tech-blue transition-colors">Serviços</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-tech-blue transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-tech-blue transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-tech-blue" />
                <span className="text-muted-foreground text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-tech-blue" />
                <span className="text-muted-foreground text-sm">contato@evolucaorodas.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-tech-blue mt-1" />
                <span className="text-muted-foreground text-sm">
                  Rua das Rodas, 123<br />
                  São Paulo - SP
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Receba ofertas exclusivas e novidades em primeira mão.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Seu e-mail" 
                className="bg-secondary/50 border-border"
              />
              <Button variant="hero" size="sm" className="w-full">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Evolução Rodas e Pneus. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-tech-blue text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-blue text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
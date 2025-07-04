import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, CreditCard, Truck, Shield, Clock } from "lucide-react";
const Footer = () => {
  return <footer className="bg-carbon-black text-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Payment & Shipping Info */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 pb-8 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-racing-orange/20 rounded-full flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-racing-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Pagamento Seguro</h3>
              <p className="text-sm text-muted-foreground">Cartão, PIX ou Boleto</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-tech-blue/20 rounded-full flex items-center justify-center">
              <Truck className="w-6 h-6 text-tech-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Entrega Rápida</h3>
              <p className="text-sm text-muted-foreground">Todo o Brasil</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-chrome-silver/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-chrome-silver" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Garantia Estendida</h3>
              <p className="text-sm text-muted-foreground">Até 5 anos</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-racing-orange/20 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-racing-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Instalação Rápida</h3>
              <p className="text-sm text-muted-foreground">Agendamento online</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/9a933538-7e02-46bb-87a0-91794efe3f0e.png" alt="Evolução Rodas e Pneus" className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando veículos com rodas esportivas e pneus de alta performance desde 2020.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-racing-orange">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-racing-orange">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-racing-orange">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-racing-orange transition-colors">Início</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-racing-orange transition-colors">Produtos</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-racing-orange transition-colors">Serviços</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-racing-orange transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-racing-orange transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Produtos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Produtos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-racing-orange transition-colors">Rodas Esportivas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-racing-orange transition-colors">Pneus Performance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-racing-orange transition-colors">Kits Completos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-racing-orange transition-colors">Acessórios</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-racing-orange transition-colors">Serviços</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-racing-orange transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-racing-orange transition-colors">Como Comprar</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-racing-orange transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-racing-orange transition-colors">Garantia</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-racing-orange transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-racing-orange" />
                <span className="text-muted-foreground text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-racing-orange" />
                <span className="text-muted-foreground text-sm">contato@evolucaorodas.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-racing-orange mt-1" />
                <span className="text-muted-foreground text-sm">
                  Rua das Rodas, 123<br />
                  São Paulo - SP
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Evolução Rodas e Pneus. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-racing-orange text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-racing-orange text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
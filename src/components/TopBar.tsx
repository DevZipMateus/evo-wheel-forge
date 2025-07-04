import { Phone, Mail, MapPin, Truck, CreditCard } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-carbon-black text-foreground py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 text-racing-orange" />
              <span>(11) 9999-9999</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 text-racing-orange" />
              <span>contato@evolucaorodas.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-3 h-3 text-racing-orange" />
              <span>São Paulo - SP</span>
            </div>
          </div>

          {/* Promo Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Truck className="w-3 h-3 text-racing-orange" />
              <span>Frete Grátis acima de R$ 299</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-3 h-3 text-racing-orange" />
              <span>Parcele em até 12x sem juros</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
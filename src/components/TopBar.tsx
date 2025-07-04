import { Phone, Mail, MapPin, Truck, CreditCard } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-carbon-black text-foreground py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Contact Info */}
          <div className="flex items-center space-x-3 sm:space-x-6 overflow-hidden">
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              <Phone className="w-3 h-3 text-racing-orange" />
              <span className="text-xs sm:text-sm whitespace-nowrap">(11) 9999-9999</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 flex-shrink-0">
              <Mail className="w-3 h-3 text-racing-orange" />
              <span className="text-xs sm:text-sm whitespace-nowrap">contato@evolucaorodas.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
              <MapPin className="w-3 h-3 text-racing-orange" />
              <span className="text-xs sm:text-sm whitespace-nowrap">São Paulo - SP</span>
            </div>
          </div>

          {/* Promo Info */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 overflow-hidden">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Truck className="w-3 h-3 text-racing-orange" />
              <span className="text-xs lg:text-sm whitespace-nowrap">Frete Grátis acima de R$ 299</span>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <CreditCard className="w-3 h-3 text-racing-orange" />
              <span className="text-xs lg:text-sm whitespace-nowrap">Parcele em até 12x sem juros</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
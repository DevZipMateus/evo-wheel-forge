import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ShoppingCart, Star } from "lucide-react";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashProducts = [
    {
      id: 1,
      name: "Rodas Esportivas Aro 18",
      originalPrice: "R$ 2.499",
      salePrice: "R$ 1.799",
      image: "/placeholder.svg",
      rating: 4.8,
      sold: 15,
      stock: 5
    },
    {
      id: 2,
      name: "Pneus Michelin 225/45R17",
      originalPrice: "R$ 899",
      salePrice: "R$ 649",
      image: "/placeholder.svg",
      rating: 4.9,
      sold: 23,
      stock: 8
    },
    {
      id: 3,
      name: "Kit Roda + Pneu Aro 17",
      originalPrice: "R$ 3.299",
      salePrice: "R$ 2.399",
      image: "/placeholder.svg",
      rating: 5.0,
      sold: 8,
      stock: 3
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-racing-orange/10 to-tech-blue/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-racing-orange" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-racing-orange">Ofertas</span>
              <span className="text-foreground"> Relâmpago</span>
            </h2>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="text-center">
              <div className="bg-racing-orange text-foreground px-4 py-2 rounded-lg font-bold text-2xl">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Horas</p>
            </div>
            <div className="text-2xl font-bold text-racing-orange">:</div>
            <div className="text-center">
              <div className="bg-racing-orange text-foreground px-4 py-2 rounded-lg font-bold text-2xl">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Min</p>
            </div>
            <div className="text-2xl font-bold text-racing-orange">:</div>
            <div className="text-center">
              <div className="bg-racing-orange text-foreground px-4 py-2 rounded-lg font-bold text-2xl">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Seg</p>
            </div>
          </div>
        </div>

        {/* Flash Sale Products */}
        <div className="grid md:grid-cols-3 gap-8">
          {flashProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-glow transition-all duration-300 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Product Image */}
                <div className="relative mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-racing-orange text-foreground">
                    FLASH SALE
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-racing-orange text-racing-orange" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.rating})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-racing-orange">{product.salePrice}</span>
                    <span className="text-sm line-through text-muted-foreground">{product.originalPrice}</span>
                  </div>

                  {/* Stock Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{product.sold} vendidos</span>
                    <span className="text-racing-orange">Restam apenas {product.stock}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-racing-orange h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(product.sold / (product.sold + product.stock)) * 100}%` }}
                    ></div>
                  </div>

                  {/* CTA Button */}
                  <Button variant="racing" size="sm" className="w-full group">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
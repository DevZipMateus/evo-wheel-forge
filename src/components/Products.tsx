import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Zap, Shield, Award } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Rodas Esportivas Aro 17",
      category: "RODAS",
      price: "R$ 1.899",
      image: "/placeholder.svg",
      rating: 4.9,
      features: ["Liga Leve", "Design Exclusivo", "5 Anos Garantia"],
      badge: "MAIS VENDIDO",
      badgeColor: "racing-orange"
    },
    {
      id: 2,
      name: "Pneus Performance 225/45R17",
      category: "PNEUS",
      price: "R$ 599",
      image: "/placeholder.svg",
      rating: 4.8,
      features: ["Aderência Superior", "Baixo Ruído", "Longa Durabilidade"],
      badge: "LANÇAMENTO",
      badgeColor: "tech-blue"
    },
    {
      id: 3,
      name: "Kit Completo Aro 18",
      category: "KITS",
      price: "R$ 3.299",
      image: "/placeholder.svg",
      rating: 5.0,
      features: ["4 Rodas + 4 Pneus", "Instalação Grátis", "Balanceamento"],
      badge: "OFERTA",
      badgeColor: "chrome-silver"
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            NOSSOS PRODUTOS
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Performance e </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">Estilo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa linha completa de rodas esportivas e pneus de alta performance
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                {/* Product Image */}
                <div className="relative mb-6">
                  <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Badge 
                    className={`absolute top-3 right-3 bg-${product.badgeColor} text-foreground`}
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <p className="text-tech-blue font-medium text-sm mb-1">{product.category}</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-racing-orange text-racing-orange" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({product.rating})</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{product.price}</p>
                      <p className="text-sm text-muted-foreground">à vista</p>
                    </div>
                    <Button variant="hero" size="sm" className="group">
                      Ver Mais
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Alta Performance</h3>
            <p className="text-muted-foreground">Produtos desenvolvidos para máxima performance e segurança</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Qualidade Garantida</h3>
            <p className="text-muted-foreground">Garantia estendida e suporte técnico especializado</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Melhor Preço</h3>
            <p className="text-muted-foreground">Preços competitivos com parcelamento facilitado</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos os Produtos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
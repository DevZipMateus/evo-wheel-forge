import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Zap, Shield, Award, ShoppingCart, Filter } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  
  const categories = ["TODOS", "RODAS", "PNEUS", "KITS", "ACESSÓRIOS"];
  
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
    },
    {
      id: 4,
      name: "Pneus Bridgestone 195/65R15",
      category: "PNEUS",
      price: "R$ 349",
      image: "/placeholder.svg",
      rating: 4.7,
      features: ["Economia de Combustível", "Durabilidade", "Conforto"],
      badge: "POPULAR",
      badgeColor: "tech-blue"
    },
    {
      id: 5,
      name: "Rodas Liga Leve Aro 16",
      category: "RODAS",
      price: "R$ 1.299",
      image: "/placeholder.svg",
      rating: 4.6,
      features: ["Acabamento Premium", "Leveza", "Resistência"],
      badge: "NOVO",
      badgeColor: "racing-orange"
    },
    {
      id: 6,
      name: "Calotas Esportivas Aro 14",
      category: "ACESSÓRIOS",
      price: "R$ 199",
      image: "/placeholder.svg",
      rating: 4.4,
      features: ["Fácil Instalação", "Design Moderno", "Resistente"],
      badge: "PROMOÇÃO",
      badgeColor: "chrome-silver"
    }
  ];

  const filteredProducts = selectedCategory === "TODOS" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "hero" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>{category}</span>
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
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
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-foreground">{product.price}</p>
                        <p className="text-sm text-muted-foreground">à vista</p>
                      </div>
                      <Button variant="outline" size="sm" className="group">
                        Ver Mais
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    <Button variant="hero" size="sm" className="w-full group">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Adicionar ao Carrinho
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
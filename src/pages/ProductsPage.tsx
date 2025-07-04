import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Zap, Shield, Award, ShoppingCart, Filter } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const categories = ["TODOS", "RODAS", "PNEUS", "KITS", "ACESSÓRIOS"];
  
  const products = [
    {
      id: 1,
      name: "Rodas Esportivas Aro 17",
      category: "RODAS",
      price: "R$ 1.899",
      image: "/lovable-uploads/br-11134207-7r98o-lyo4ibdffkb979_tn.jpg",
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
      image: "/lovable-uploads/br-11134207-7r98o-m00ir5regnc5b9_tn.jpg",
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
      image: "/lovable-uploads/br-11134207-7r98o-m0ahvvdj031l89_tn.jpg",
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
      image: "/lovable-uploads/br-11134207-7r98o-m0ivfr9555s1fe_tn.jpg",
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
      image: "/lovable-uploads/br-11134207-7r98o-m0rygokbytzx9a_tn.jpg",
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
      image: "/lovable-uploads/br-11134207-7r98o-m0rz6vunnqg068_tn.jpg",
      rating: 4.4,
      features: ["Fácil Instalação", "Design Moderno", "Resistente"],
      badge: "PROMOÇÃO",
      badgeColor: "chrome-silver"
    },
    {
      id: 7,
      name: "Rodas Esportivas Aro 20",
      category: "RODAS",
      price: "R$ 2.499",
      image: "/lovable-uploads/br-11134207-7r98o-m1rah1ebktd6d7_tn.jpg",
      rating: 4.8,
      features: ["Alto Brilho", "Resistente", "Design Exclusivo"],
      badge: "PREMIUM",
      badgeColor: "racing-orange"
    },
    {
      id: 8,
      name: "Kit Pneus + Rodas Premium",
      category: "KITS",
      price: "R$ 4.199",
      image: "/lovable-uploads/br-11134207-7r98o-m1rbcyaki4nc60_tn.jpg",
      rating: 4.9,
      features: ["Conjunto Completo", "Instalação Inclusa", "Garantia Estendida"],
      badge: "BEST SELLER",
      badgeColor: "chrome-silver"
    }
  ];

  const filteredProducts = selectedCategory === "TODOS" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              NOSSOS PRODUTOS
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Performance e </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Estilo</span>
            </h1>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
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
                      <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                        Para mais informações sobre tamanho, preço e modelo clique no botão abaixo
                      </h3>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button 
                        variant="hero" 
                        size="sm" 
                        className="w-full group"
                        onClick={() => window.open('https://shopee.com.br/evolucaorodas', '_blank')}
                      >
                        Ver mais informações
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ProductsPage;
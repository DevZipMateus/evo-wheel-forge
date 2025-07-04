import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Zap, Shield, Award, ShoppingCart } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
const ProductsPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = [{
    id: 1,
    name: "Rodas Esportivas Aro 17",
    category: "RODAS",
    price: "R$ 1.899",
    image: "/lovable-uploads/br-11134207-7r98o-lyo4ibdffkb979_tn.jpg",
    rating: 4.9,
    features: ["Liga Leve", "Design Exclusivo", "5 Anos Garantia"],
    badge: "MAIS VENDIDO",
    badgeColor: "racing-orange"
  }, {
    id: 2,
    name: "Pneus Performance 225/45R17",
    category: "PNEUS",
    price: "R$ 599",
    image: "/lovable-uploads/br-11134207-7r98o-m00ir5regnc5b9_tn.jpg",
    rating: 4.8,
    features: ["Aderência Superior", "Baixo Ruído", "Longa Durabilidade"],
    badge: "LANÇAMENTO",
    badgeColor: "tech-blue"
  }, {
    id: 3,
    name: "Kit Completo Aro 18",
    category: "KITS",
    price: "R$ 3.299",
    image: "/lovable-uploads/br-11134207-7r98o-m0ahvvdj031l89_tn.jpg",
    rating: 5.0,
    features: ["4 Rodas + 4 Pneus", "Instalação Grátis", "Balanceamento"],
    badge: "OFERTA",
    badgeColor: "chrome-silver"
  }, {
    id: 4,
    name: "Pneus Bridgestone 195/65R15",
    category: "PNEUS",
    price: "R$ 349",
    image: "/lovable-uploads/br-11134207-7r98o-m0ivfr9555s1fe_tn.jpg",
    rating: 4.7,
    features: ["Economia de Combustível", "Durabilidade", "Conforto"],
    badge: "POPULAR",
    badgeColor: "tech-blue"
  }, {
    id: 5,
    name: "Rodas Liga Leve Aro 16",
    category: "RODAS",
    price: "R$ 1.299",
    image: "/lovable-uploads/br-11134207-7r98o-m0rygokbytzx9a_tn.jpg",
    rating: 4.6,
    features: ["Acabamento Premium", "Leveza", "Resistência"],
    badge: "NOVO",
    badgeColor: "racing-orange"
  }, {
    id: 6,
    name: "Calotas Esportivas Aro 14",
    category: "ACESSÓRIOS",
    price: "R$ 199",
    image: "/lovable-uploads/br-11134207-7r98o-m0rz6vunnqg068_tn.jpg",
    rating: 4.4,
    features: ["Fácil Instalação", "Design Moderno", "Resistente"],
    badge: "PROMOÇÃO",
    badgeColor: "chrome-silver"
  }, {
    id: 7,
    name: "Rodas Esportivas Aro 20",
    category: "RODAS",
    price: "R$ 2.499",
    image: "/lovable-uploads/br-11134207-7r98o-m1rah1ebktd6d7_tn.jpg",
    rating: 4.8,
    features: ["Alto Brilho", "Resistente", "Design Exclusivo"],
    badge: "PREMIUM",
    badgeColor: "racing-orange"
  }, {
    id: 8,
    name: "Kit Pneus + Rodas Premium",
    category: "KITS",
    price: "R$ 4.199",
    image: "/lovable-uploads/br-11134207-7r98o-m1rbcyaki4nc60_tn.jpg",
    rating: 4.9,
    features: ["Conjunto Completo", "Instalação Inclusa", "Garantia Estendida"],
    badge: "BEST SELLER",
    badgeColor: "chrome-silver"
  }, {
    id: 9,
    name: "Pneus Continental 205/55R16",
    category: "PNEUS",
    price: "R$ 459",
    image: "/lovable-uploads/br-11134207-7r98o-m2ldnjbd9n9h08_tn.jpg",
    rating: 4.6,
    features: ["Tecnologia Alemã", "Aderência Molhado", "Silencioso"],
    badge: "IMPORTADO",
    badgeColor: "tech-blue"
  }, {
    id: 10,
    name: "Rodas Multiface Aro 19",
    category: "RODAS",
    price: "R$ 2.199",
    image: "/lovable-uploads/br-11134207-7r98o-m2qsvjs60ikz40_tn.jpg",
    rating: 4.7,
    features: ["Design Multiface", "Acabamento Diamantado", "Garantia 3 Anos"],
    badge: "EXCLUSIVO",
    badgeColor: "racing-orange"
  }, {
    id: 11,
    name: "Kit Esportivo Aro 17",
    category: "KITS",
    price: "R$ 2.799",
    image: "/lovable-uploads/br-11134207-7r98o-m3bcfpilqn9451_tn.jpg",
    rating: 4.8,
    features: ["4 Rodas Esportivas", "4 Pneus Performance", "Montagem Grátis"],
    badge: "COMPLETO",
    badgeColor: "chrome-silver"
  }, {
    id: 12,
    name: "Pneus Michelin 215/60R16",
    category: "PNEUS",
    price: "R$ 689",
    image: "/lovable-uploads/br-11134207-7r98o-m3gsehr88maj99_tn.jpg",
    rating: 4.9,
    features: ["Marca Premium", "Durabilidade Superior", "Economia Combustível"],
    badge: "PREMIUM",
    badgeColor: "tech-blue"
  }, {
    id: 13,
    name: "Rodas Spoke Aro 18",
    category: "RODAS",
    price: "R$ 1.799",
    image: "/lovable-uploads/br-11134207-7r98o-m4j07r9t6fqt5a_tn.jpg",
    rating: 4.5,
    features: ["Design Spoke", "Leveza Extrema", "Resistente à Corrosão"],
    badge: "LEVE",
    badgeColor: "racing-orange"
  }, {
    id: 14,
    name: "Calotas Premium Aro 15",
    category: "ACESSÓRIOS",
    price: "R$ 299",
    image: "/lovable-uploads/br-11134207-7r98o-m6rboqp2ctpj4c_tn.jpg",
    rating: 4.3,
    features: ["Material ABS", "Acabamento Cromado", "Encaixe Perfeito"],
    badge: "QUALIDADE",
    badgeColor: "chrome-silver"
  }, {
    id: 15,
    name: "Kit Racing Aro 20",
    category: "KITS",
    price: "R$ 5.199",
    image: "/lovable-uploads/br-11134207-7r98o-m6rboqp2e89z10_tn.jpg",
    rating: 5.0,
    features: ["Rodas Racing", "Pneus Ultra Performance", "Setup Completo"],
    badge: "RACING",
    badgeColor: "chrome-silver"
  }, {
    id: 16,
    name: "Pneus Pirelli 225/50R17",
    category: "PNEUS",
    price: "R$ 749",
    image: "/lovable-uploads/br-11134207-7r98o-m6rchz0403lc8f_tn.jpg",
    rating: 4.8,
    features: ["Tecnologia Italiana", "Performance Track", "Grip Máximo"],
    badge: "SPORT",
    badgeColor: "tech-blue"
  }, {
    id: 17,
    name: "Rodas Concave Aro 19",
    category: "RODAS",
    price: "R$ 2.699",
    image: "/lovable-uploads/br-11134207-7r98o-m7b8qhavyhxm57_tn.jpg",
    rating: 4.7,
    features: ["Design Concave", "Forjada", "Ultra Resistente"],
    badge: "FORJADA",
    badgeColor: "racing-orange"
  }, {
    id: 18,
    name: "Kit Luxury Aro 22",
    category: "KITS",
    price: "R$ 6.499",
    image: "/lovable-uploads/br-11134207-7r98o-m7b8qhaw447e26_tn.jpg",
    rating: 4.9,
    features: ["Rodas Luxury", "Pneus Premium", "Instalação VIP"],
    badge: "LUXURY",
    badgeColor: "chrome-silver"
  }, {
    id: 19,
    name: "Pneus Goodyear 195/60R15",
    category: "PNEUS",
    price: "R$ 389",
    image: "/lovable-uploads/br-11134207-7r98o-m7to1q2o842cea_tn.jpg",
    rating: 4.5,
    features: ["Qualidade Mundial", "Longa Vida Útil", "Conforto Garantido"],
    badge: "CONFIÁVEL",
    badgeColor: "tech-blue"
  }, {
    id: 20,
    name: "Rodas Split Spoke Aro 17",
    category: "RODAS",
    price: "R$ 1.599",
    image: "/lovable-uploads/br-11134207-7r98o-m7to1q2odqc47d_tn.jpg",
    rating: 4.6,
    features: ["Split Spoke Design", "Acabamento Polido", "Garantia Estendida"],
    badge: "DESIGN",
    badgeColor: "racing-orange"
  }, {
    id: 21,
    name: "Calotas Carbon Aro 16",
    category: "ACESSÓRIOS",
    price: "R$ 399",
    image: "/lovable-uploads/br-11134207-7r98o-m7to1q2ojclwc0_tn.jpg",
    rating: 4.4,
    features: ["Efeito Carbon", "Ultra Modernas", "Fácil Manutenção"],
    badge: "MODERNO",
    badgeColor: "chrome-silver"
  }, {
    id: 22,
    name: "Kit Performance Aro 19",
    category: "KITS",
    price: "R$ 4.899",
    image: "/lovable-uploads/br-11134207-7r98o-m7ts6nmcd9qs4e.jpg",
    rating: 4.8,
    features: ["Rodas Performance", "Pneus Esportivos", "Balanceamento Incluso"],
    badge: "PERFORMANCE",
    badgeColor: "chrome-silver"
  }, {
    id: 23,
    name: "Pneus Yokohama 235/45R18",
    category: "PNEUS",
    price: "R$ 799",
    image: "/lovable-uploads/br-11134207-7r98o-m8jb1vjaoemp3a_tn.jpg",
    rating: 4.7,
    features: ["Tecnologia Japonesa", "Grip Extremo", "Durabilidade Premium"],
    badge: "JAPONÊS",
    badgeColor: "tech-blue"
  }, {
    id: 24,
    name: "Rodas Mesh Aro 18",
    category: "RODAS",
    price: "R$ 1.999",
    image: "/lovable-uploads/br-11134207-7r98o-m8jb1vjawu1da3_tn.jpg",
    rating: 4.6,
    features: ["Design Mesh", "Liga Premium", "Peso Reduzido"],
    badge: "CLÁSSICO",
    badgeColor: "racing-orange"
  }, {
    id: 25,
    name: "Calotas Sport Aro 17",
    category: "ACESSÓRIOS",
    price: "R$ 349",
    image: "/lovable-uploads/br-11134207-7r98o-m8um88io9on66e_tn.jpg",
    rating: 4.2,
    features: ["Visual Esportivo", "Resistente a Impactos", "Instalação Simples"],
    badge: "ESPORTIVO",
    badgeColor: "chrome-silver"
  }, {
    id: 26,
    name: "Pneus Hankook 205/50R17",
    category: "PNEUS",
    price: "R$ 549",
    image: "/lovable-uploads/br-11134207-7r98o-m8uoxdwk41ky64_tn.jpg",
    rating: 4.5,
    features: ["Custo-Benefício", "Aderência Segura", "Baixo Ruído"],
    badge: "ECONÔMICO",
    badgeColor: "tech-blue"
  }, {
    id: 27,
    name: "Kit Street Aro 16",
    category: "KITS",
    price: "R$ 2.399",
    image: "/lovable-uploads/br-11134207-7r98o-m8uoxdwkdvk231_tn.jpg",
    rating: 4.4,
    features: ["Rodas Street", "Pneus Urbanos", "Garantia Total"],
    badge: "URBANO",
    badgeColor: "chrome-silver"
  }, {
    id: 28,
    name: "Rodas Turbo Aro 20",
    category: "RODAS",
    price: "R$ 2.899",
    image: "/lovable-uploads/br-11134207-7r98o-m8uoxdwkgooy0e_tn.jpg",
    rating: 4.8,
    features: ["Design Turbo", "Acabamento Espelhado", "Alta Resistência"],
    badge: "TURBO",
    badgeColor: "racing-orange"
  }, {
    id: 29,
    name: "Pneus Dunlop 185/65R15",
    category: "PNEUS",
    price: "R$ 299",
    image: "/lovable-uploads/br-11134207-7r98o-m8upf4mvk9oi64_tn.jpg",
    rating: 4.3,
    features: ["Entrada Premium", "Qualidade Comprovada", "Preço Acessível"],
    badge: "ENTRADA",
    badgeColor: "tech-blue"
  }, {
    id: 30,
    name: "Calotas Executive Aro 18",
    category: "ACESSÓRIOS",
    price: "R$ 499",
    image: "/lovable-uploads/br-11134207-7r98o-m8upf4mvu3nm9c_tn.jpg",
    rating: 4.5,
    features: ["Visual Executivo", "Material Premium", "Acabamento Perfeito"],
    badge: "EXECUTIVO",
    badgeColor: "chrome-silver"
  }];
  return <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          {/* Call to Action Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl p-8 backdrop-blur-sm border border-border/20">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                <span className="text-foreground">Loja Online Completa</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Temos uma loja online com todos os tamanhos e muito mais modelos de aros só esperando por você. 
                Não perca tempo e venha conferir nossa variedade completa de produtos!
              </p>
              <Button variant="accent" size="xl" className="animate-[pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-xl hover:shadow-2xl" onClick={() => window.open('https://shopee.com.br/evolucaorodas', '_blank')}>
                🛒 Visitar Nossa Loja Online
              </Button>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              NOSSOS PRODUTOS
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Performance e </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Estilo</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Veja parte de nossa linha  de rodas esportivas.</p>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {products.map(product => <Card key={product.id} className="group hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  {/* Product Image */}
                  <div className="relative mb-6">
                    <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <Badge className={`absolute top-3 right-3 bg-${product.badgeColor} text-foreground`}>
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
                      <Button variant="hero" size="sm" className="w-full group" onClick={() => window.open('https://shopee.com.br/evolucaorodas', '_blank')}>
                        Ver mais informações
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
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
    </div>;
};
export default ProductsPage;
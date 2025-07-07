import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Award, Users, Target, Heart, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Comprometimento com a qualidade",
      description: "Entrega no prazo com produtos de alta performance"
    },
    {
      icon: Heart,
      title: "Respeito e ética",
      description: "Em todas as relações comerciais e pessoais"
    },
    {
      icon: Star,
      title: "Excelência no atendimento",
      description: "Antes, durante e depois da compra"
    },
    {
      icon: Zap,
      title: "Inovação constante",
      description: "Acompanhando as tendências do mercado automotivo"
    },
    {
      icon: Shield,
      title: "Transparência e confiança",
      description: "Pilares do nosso relacionamento com clientes"
    }
  ];

  return <div className="min-h-screen bg-carbon-black">
      <TopBar />
      <Header />
      <Hero />

      {/* About Section - Estatísticas */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-3 sm:mb-4">
              NOSSA HISTÓRIA
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-slate-50">Evolução </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Rodas e Pneus</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tradição, Qualidade e Compromisso com Você
            </p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="text-center p-6 sm:p-8 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">15</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Anos no mercado automotivo</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 sm:p-8 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">10</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Anos de presença no e-commerce</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 sm:p-8 bg-card/80 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">5★</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Melhores avaliações do setor</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge variant="outline" className="mb-3 sm:mb-4">
                QUEM SOMOS
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-slate-50">Referência em </span>
                <span className="bg-gradient-accent bg-clip-text text-transparent">Qualidade</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Há 15 anos no mercado automotivo, a Evolução Rodas e Pneus se consolidou como 
                referência em qualidade, confiança e inovação no segmento de rodas e pneus.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Com uma década de presença no e-commerce, conquistamos as melhores avaliações 
                do setor, fruto de um trabalho sério, transparente e focado na satisfação 
                total dos nossos clientes.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/5511947783837', '_blank')}
              >
                Fale Conosco
              </Button>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square bg-gradient-accent rounded-full opacity-10 absolute inset-4"></div>
              <Card className="relative bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <Target className="w-10 h-10 sm:w-12 sm:h-12 text-tech-blue mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Nossa Missão</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Oferecer produtos de alta performance, com preços justos e atendimento 
                    diferenciado, sempre priorizando a segurança, o estilo e a experiência 
                    dos nossos consumidores.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-slate-50">Nossos </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Produtos</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
              Descubra nossa linha completa de rodas esportivas e pneus de alta performance
            </p>
          </div>
          <ProductCarousel />
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
              <Link to="/produtos" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                  <span className="hidden sm:inline">Veja alguns de nossos produtos</span>
                  <span className="sm:hidden">Ver Produtos</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="accent" size="lg" className="group w-full sm:w-auto" onClick={() => window.open('https://shopee.com.br/evolucaorodas', '_blank')}>
                <span className="hidden sm:inline">Veja todos os modelos e tamanhos aqui</span>
                <span className="sm:hidden">Ver Catálogo</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-3 sm:mb-4">
              NOSSOS VALORES
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              <span className="text-slate-50">A base de tudo </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">que fazemos</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossos valores são os pilares que sustentam nossa excelência e compromisso
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-3 sm:mb-4">
              NOSSO COMPROMISSO
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
              <span className="text-slate-50">Mais que um negócio, </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">uma relação duradoura</span>
            </h2>
            
            <Card className="bg-card/80 backdrop-blur-sm border-racing-orange/20">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  Acreditamos que cada cliente merece atenção especial e soluções personalizadas — 
                  por isso, investimos constantemente em capacitação, tecnologia e no aperfeiçoamento 
                  dos nossos processos.
                </p>
                
                <div className="bg-gradient-accent/10 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                  <p className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                    "Na Evolução Rodas e Pneus, cada venda é mais que um negócio — é o início de uma relação duradoura."
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Nosso foco está em entregar sempre o melhor, com responsabilidade, segurança e 
                    paixão por aquilo que fazemos.
                  </p>
                </div>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <strong>Evoluímos com o mercado, mas sem perder nossa essência:</strong> fazer com que 
                  você rode com tranquilidade, estilo e total confiança.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>;
};
export default Index;
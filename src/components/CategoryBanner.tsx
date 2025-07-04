import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CategoryBanner = () => {
  const categories = [
    {
      id: 1,
      name: "Rodas Esportivas",
      image: "/placeholder.svg",
      description: "Aro 17, 18, 19 e 20",
      discount: "Até 25% OFF"
    },
    {
      id: 2,
      name: "Pneus Performance",
      image: "/placeholder.svg",
      description: "Todas as medidas",
      discount: "Até 20% OFF"
    },
    {
      id: 3,
      name: "Kits Completos",
      image: "/placeholder.svg",
      description: "Roda + Pneu + Instalação",
      discount: "Até 30% OFF"
    },
    {
      id: 4,
      name: "Acessórios",
      image: "/placeholder.svg",
      description: "Calotas, Parafusos e mais",
      discount: "Até 15% OFF"
    }
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Categorias em </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre exatamente o que precisa para seu veículo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-racing-orange text-foreground px-2 py-1 rounded-full text-xs font-bold">
                    {category.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="outline" size="sm" className="w-full group">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

export default CategoryBanner;
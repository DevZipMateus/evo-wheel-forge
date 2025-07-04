import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    id: 1,
    name: "Carlos Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Excelente atendimento e produtos de qualidade. Meu carro ficou completamente transformado com as novas rodas!",
    avatar: "/placeholder.svg"
  }, {
    id: 2,
    name: "Maria Fernanda",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Melhor preço que encontrei na região. Instalação impecável e pneus de primeira qualidade.",
    avatar: "/placeholder.svg"
  }, {
    id: 3,
    name: "João Pedro",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Atendimento personalizado e produtos originais. Recomendo para todos que querem qualidade!",
    avatar: "/placeholder.svg"
  }, {
    id: 4,
    name: "Ana Carolina",
    location: "Brasília, DF",
    rating: 5,
    text: "Comprei um kit completo e não me arrependo. O carro ficou lindo e o desempenho melhorou muito!",
    avatar: "/placeholder.svg"
  }];
  return <section className="py-16 bg-carbon-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-slate-50">O que dizem nossos </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 5.000 clientes satisfeitos em todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="bg-card/80 backdrop-blur-sm border-border/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-tech-blue mb-2" />
                </div>
                
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-racing-orange text-racing-orange" />
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};
export default Testimonials;
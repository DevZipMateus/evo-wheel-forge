const BrandPartners = () => {
  const brands = [
    { name: "Michelin", logo: "/placeholder.svg" },
    { name: "Pirelli", logo: "/placeholder.svg" },
    { name: "Bridgestone", logo: "/placeholder.svg" },
    { name: "Continental", logo: "/placeholder.svg" },
    { name: "Goodyear", logo: "/placeholder.svg" },
    { name: "Dunlop", logo: "/placeholder.svg" },
    { name: "Yokohama", logo: "/placeholder.svg" },
    { name: "Hankook", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Marcas </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">Parceiras</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trabalhamos com as melhores marcas do mercado
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="flex items-center justify-center p-4 bg-card/50 rounded-lg hover:bg-card/80 transition-colors duration-300 cursor-pointer group"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-w-20 max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
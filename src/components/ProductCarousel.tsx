import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ProductCarousel = () => {
  const productImages = [
    "/lovable-uploads/br-11134207-7r98o-lyo4ibdffkb979_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m00ir5regnc5b9_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m0ahvvdj031l89_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m0ivfr9555s1fe_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m0rygokbytzx9a_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m0rz6vunnqg068_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m1rah1ebktd6d7_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m1rbcyaki4nc60_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m2ldnjbd9n9h08_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m2qsvjs60ikz40_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m3bcfpilqn9451_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m3gsehr88maj99_tn.jpg"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {productImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square sm:aspect-video rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm">
                <img
                  src={image}
                  alt={`Produto ${index + 1}`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/20 to-transparent"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
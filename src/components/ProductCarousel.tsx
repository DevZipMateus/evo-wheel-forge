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
    "/lovable-uploads/933b1231-052d-4516-88de-632863c9aa54.png",
    "/lovable-uploads/br-11134207-7r98o-m00ir5regnc5b9_tn.jpg",
    "/lovable-uploads/56c0f894-4e98-40a8-9051-4409c7d1d475.png",
    "/lovable-uploads/br-11134207-7r98o-m0ahvvdj031l89_tn.jpg",
    "/lovable-uploads/01afea53-dfaa-489c-9dfd-9627d08e3b96.png",
    "/lovable-uploads/br-11134207-7r98o-m0ivfr9555s1fe_tn.jpg",
    "/lovable-uploads/0067f25c-3ac4-4e2f-87c7-49d6cbf90803.png",
    "/lovable-uploads/br-11134207-7r98o-m0rygokbytzx9a_tn.jpg",
    "/lovable-uploads/507cd708-f01d-4b28-85b7-72700c07feba.png",
    "/lovable-uploads/br-11134207-7r98o-m0rz6vunnqg068_tn.jpg",
    "/lovable-uploads/0ca5b902-fef6-4375-a840-ea251430b31c.png",
    "/lovable-uploads/br-11134207-7r98o-m1rah1ebktd6d7_tn.jpg",
    "/lovable-uploads/74e27ead-468e-4b4c-9a8d-3c34374cf731.png",
    "/lovable-uploads/br-11134207-7r98o-m1rbcyaki4nc60_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m2ldnjbd9n9h08_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m2qsvjs60ikz40_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m3bcfpilqn9451_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m3gsehr88maj99_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m4j07r9t6fqt5a_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m6rboqp2ctpj4c_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m6rboqp2e89z10_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m6rchz0403lc8f_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m7b8qhavyhxm57_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m7b8qhaw447e26_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m7to1q2o842cea_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m7to1q2odqc47d_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m7to1q2ojclwc0_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m7ts6nmcd9qs4e.jpg",
    "/lovable-uploads/br-11134207-7r98o-m8jb1vjaoemp3a_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m8jb1vjawu1da3_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m8um88io9on66e_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m8uoxdwk41ky64_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m8uoxdwkdvk231_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m8uoxdwkgooy0e_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m8upf4mvk9oi64_tn.jpg",
    "/lovable-uploads/br-11134207-7r98o-m8upf4mvu3nm9c_tn.jpg"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {productImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm">
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
        <CarouselPrevious className="left-2 sm:left-4 h-8 w-8 sm:h-10 sm:w-10" />
        <CarouselNext className="right-2 sm:right-4 h-8 w-8 sm:h-10 sm:w-10" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
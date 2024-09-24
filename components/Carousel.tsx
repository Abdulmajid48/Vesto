import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Carouselsection = () => {
  const images = [
    "/ceo.svg",
    "/founder.svg",
    "/ceo.svg",
    "/founder.svg",
    "/ceo.svg",
    "/founder.svg",
    "/ceo.svg",
    "/founder.svg",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-md"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-[55%]">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                  width={250}
                  height={250}
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carouselsection;

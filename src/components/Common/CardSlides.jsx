import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import slideImg1 from "@/assets/slideImg1.png";
import slideImg2 from "@/assets/slideImg2.png";
import slideImg3 from "@/assets/slideImg3.png";

const SlideData = [
  {
    id: 0,
    img: slideImg1,
  },
  {
    id: 1,
    img: slideImg2,
  },
  {
    id: 2,
    img: slideImg3,
  },
  {
    id: 3,
    img: slideImg1,
  },
  {
    id: 4,
    img: slideImg2,
  },
  {
    id: 5,
    img: slideImg3,
  },
];

export default function CardSlides() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {SlideData.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="h-[87px]">
              <img className="w-full h-full object-cover" src={item.img} alt="not found" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

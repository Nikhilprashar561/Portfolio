"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const ImageSlider = ({ close }) => {
  const image = [
    "https://res.cloudinary.com/da9c3vejh/image/upload/v1767852886/IMG-20250324-WA0017_nk490z.jpg",
    "https://res.cloudinary.com/da9c3vejh/image/upload/v1767856626/IMG-20250324-WA0015_zrhnln.jpg",
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md">
      {/* GLOBAL CLOSE BUTTON (TOP RIGHT OF SCREEN) */}
      <Button
        onClick={close}
        className="
          fixed top-6 right-6 z-50
          flex h-10 w-10 items-center justify-center
          rounded-full
          cursor-pointer
        "
      >
        <X />
      </Button>

      {/* CENTERED SLIDER */}
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-sm rounded-xl bg-background">
          <Carousel className="w-full">
            <CarouselContent>
              {image.map((img, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <Image src={img} width={400} height={300} />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

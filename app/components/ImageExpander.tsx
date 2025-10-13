"use client";
import Image from "next/image";
import OverlayCard from "./OverlayCard";
import { useState } from "react";
import { X } from "lucide-react";

const ImageExpander = () => {
  const cards = [
    {
      id: 1,
      title: "GUT PRO",
      imageSrc: "/overlay-card/1.png",
      overlayImageSrc: "/uplife-products/gut-pro.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      title: "Weight Watchers",
      imageSrc: "/overlay-card/2.png",
      overlayImageSrc: "/uplife-products/oil-weight-watchers.png",

      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      title: "Active Lifestyle",
      imageSrc: "/overlay-card/3.jpg",
      overlayImageSrc: "/uplife-products/rice.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  return (
    <div className="hidden md:block container mx-auto px-6 md:px-16 relative w-full py-6 md:pt-[56px] md:pb-[112px] text-center">
      <Image
        src="/Group 13.png"
        alt="background F uplife logo"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-auto object-cover  opacity-25 pointer-events-none"
        width={600}
        height={600}
      />

      <h1 className="font-normal  text-[28px]/8  md:text-[42px]/16 ">
        What happens when you UP your Life?
      </h1>
      <h2 className="font-light text-sm md:text-2xl mt-[10px]">
        Smart choice for a lighter, better you
      </h2>

      <OverlayCard cards={cards} setSelectedCardId={setSelectedCardId} />

      {selectedCardId && (
        <div
          onClick={() => setSelectedCardId(null)}
          className="absolute inset-0 z-10 h-full p-16 text-left flex flex-col md:flex-row items-center justify-between text-white"
        >
          <div className="text-center md:text-left md:w-[45%]">
            <h2 className="text-2xl md:text-5xl">GUT PRO </h2>
            <p className="text-xs md:text-lg font-light">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>

          <Image
            src={cards[selectedCardId].overlayImageSrc}
            width={430}
            height={320}
            alt="uplife product"
          />

          <Image
            src={cards[selectedCardId].imageSrc}
            fill
            className="object-cover absolute inset-0 z-[-2]"
            alt="uplife product"
          />

          <span
            // onClick={() => setSelectedCardId(null)}
            className="absolute top-16 right-16 text-white  text-2xl/6 text-center"
          >
            <X size={24} color="#fff" />
          </span>

          <div className="absolute z-[-1] inset-0 bg-black/60 backdrop-blur-md"></div>
        </div>
      )}
    </div>
  );
};

export default ImageExpander;

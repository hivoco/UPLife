"use client";

import Image from "next/image";
import OverlayCard from "./OverlayCard";
import { useState } from "react";
import { log } from "console";

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
    <div className="container mx-auto px-6  md:px-16 relative w-full pt-[56px] pb-[112px] text-center">
      {!selectedCardId ? (
        <>
          <Image
            src="/Group 13.png"
            alt="background F uplife logo"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-auto object-cover  opacity-25 pointer-events-none"
            width={600}
            height={600}
          />

          <h1 className="font-normal text-[42px]/16 ">
            What happens when you UP your Life?
          </h1>
          <h2 className="font-light text-2xl mt-[10px]">
            Smart choice for a lighter, better you
          </h2>

          <OverlayCard cards={cards} setSelectedCardId={setSelectedCardId} />
        </>
      ) : (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md p-16 text-left flex items-center justify-between">
          <div>
            <h2 className="text-5xl">GUT PRO </h2>
            <p className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>

          <Image
            src={selectedCardId ? cards[selectedCardId].overlayImageSrc : ""}
            width={430}
            height={320}
            alt="uplife product"
          />
        </div>
      )}
    </div>
  );
};

export default ImageExpander;

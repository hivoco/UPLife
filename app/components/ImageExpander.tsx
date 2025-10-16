"use client";
import Image from "next/image";
import OverlayCard from "./OverlayCard";
import { useEffect, useRef, useState } from "react";
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
  const divRef = useRef<HTMLDivElement |null>(null);

  const handleClick = () => {
    setTimeout(() => {
      divRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCardId(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      className={`relative container mx-auto px-6 md:px-16  w-full py-6 md:pt-[56px] md:pb-[112px] text-center  
        ${
          selectedCardId
            ? "md:overflow-visible max-h-[90svh]  md:max-h-none rounded-4xl"
            : " "
        }
        `}
    >
      <Image
        src="/Group 13.png"
        alt="background F uplife logo"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-auto object-cover  opacity-25 pointer-events-none rounded-4xl "
        width={600}
        height={600}
      />

      <h1 className="font-normal  text-[28px]/8  md:text-[42px]/16 ">
        What happens when you UP your Life?
      </h1>
      <h2 className="font-light text-sm md:text-2xl mt-[10px]">
        Smart choice for a lighter, better you
      </h2>

      <OverlayCard
        cards={cards}
        selectedCardId={selectedCardId}
        setSelectedCardId={setSelectedCardId}
        divRef={divRef}
        // onCardClick={handleCardClick}
      />

      {/* {selectedCardId && ( */}
      {/* <div
        onClick={() => setSelectedCardId(null)}
        style={{
          transformOrigin: selectedCardId
            ? `${clickPosition.x}px ${clickPosition.y}px`
            : "center center",
        }}
        className={`absolute  inset-0 w-9/10 md:w-full z-10 mx-auto px-6 h-full  md:p-16 text-left flex flex-col md:flex-row items-center gap-16 justify-center md:justify-between text-white
           duration-700 transition-all ease-out cursor-pointer
          ${
            selectedCardId
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-[0.3] pointer-events-none"
          }
      `}
      >
        <div className="text-center md:text-left md:w-[45%]">
          <h2 className="text-2xl md:text-5xl">GUT PRO </h2>
          <p className="text-xs md:text-lg font-light">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </p>
        </div>
        {selectedCardId && (
          <Image
            src={cards[selectedCardId - 1].overlayImageSrc}
            width={430}
            height={320}
            alt="uplife product"
          />
        )}

        <span className="absolute top-6 right-6 md:top-16 md:right-16 text-white  text-2xl/6 text-center">
          <X size={24} color="#fff" />
        </span>

        {selectedCardId && (
          <Image
            src={cards[selectedCardId - 1].imageSrc}
            fill
            className="object-cover absolute inset-0 -z-[2] pointer-events-none rounded-4xl"
            alt="uplife product full width"
          />
        )}

        <div className="absolute z-[-1] inset-0 bg-black/60 backdrop-blur-md pointer-events-none rounded-4xl"></div>
      </div> */}
      {/* // )} */}
    </div>
  );
};

export default ImageExpander;

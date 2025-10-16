"use client";

import Image from "next/image";
import { useState } from "react";

const Cards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(1);
  const cards = [
    {
      id: 1,
      title: "Lighter meals, sustained energy",
      description:
        "Light food fuels body, keeps you active and energized all day.",
      image: "/cards/1.png",
      size: "large",
    },
    {
      id: 2,
      title: "Improved digestion, better sleep",
      description:
        "Light food fuels body, keeps you active and energized all day.",
      image: "/cards/2.png",
      size: "small",
    },
    {
      id: 3,
      title: "Mindful eating, stress-free life",
      description:
        "Light food fuels body, keeps you active and energized all day.",
      image: "/cards/3.png",
      size: "small",
    },
    {
      id: 4,
      title: "Renewed strength, joyful living",
      description:
        "Light food fuels body, keeps you active and energized all day.",

      image: "/cards/4.png",
      size: "small",
    },
    {
      id: 5,
      title: "Daily balance, long-term wellness",
      description:
        "Light food fuels body, keeps you active and energized all day.",

      image: "/cards/5.png",
      size: "small",
    },
    {
      id: 6,
      title: "Nourishing wellness in habits",
      description:
        "Light food fuels body, keeps you active and energized all day.",
      image: "/cards/6.jpeg",
      size: "small",
    },
  ];

  return (
    <div className="pt-6 md:pt-9">
      <div className="flex w-full h-full justify-between gap-2.5  overflow-x-auto overflow-y-hidden md:overflow-visible">
        {cards.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(1)}
            onClick={() => setHoveredCard(card.id)}
            // onTouchStart={() => setHoveredCard(card.id)}
            onTouchEnd={() => setHoveredCard(card.id)}
            className={`shrink-0
              group relative overflow-hidden rounded-2xl !h-[34svh]  md:!h-[70vh]  md:min-h-[500px]
              transition-all  duration-700 ease-in-out 
              ${
                hoveredCard === card.id
                  ? "w-[calc(80%-0.5rem)] md:w-[calc(37.5%-0.5rem)]"
                  : "w-[calc(20%-0.5rem)]  md:w-[calc(12.5%-0.5rem)]"
              } 
            `}
          >
            <div
              className={`absolute w-full h-full z-0 inset-0  transition-all duration-700 ease-in-out`}
            >
              <Image
                src={card.image}
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>

            <div
              style={{
                background:
                  hoveredCard === card.id
                    ? "linear-gradient(180deg, rgba(255, 255, 255, 0) 53%, rgba(81, 81, 81, 0.578558) 68.42%, rgba(0, 0, 0, 0.88) 79.98%, #000000 96.15%)"
                    : "rgba(0, 0, 0, 0.45)",
              }}
              className="absolute inset-0 transition-all duration-700  ease-in-out"
            />

            <div
              className={` relative z-10 text-white text-left h-full w-full flex flex-col  p-6
                transform transition-all duration-1000 delay-75 ease-in-out 
                ${
                  hoveredCard === card.id
                    ? "justify-end"
                    : "-rotate-90  items-center justify-center"
                }
              `}
            >
              <h3
                className={`
                    text-xs md:text-lg 
                ${hoveredCard === card.id ? "w-full" : "whitespace-nowrap"}
                `}
              >
                {card.title}
              </h3>

              <h4
                className={`text-[8px]/3  md:text-sm font-light
                    transform transition-all ease-in-out
                   ${
                     hoveredCard === card.id
                       ? "opacity-100 size-auto delay-1000 duration-1000"
                       : "duration-75 opacity-0 size-0"
                   }
                `}
              >
                {card.description}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

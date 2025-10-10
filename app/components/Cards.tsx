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
    <div className="pt-9">
      <div className="flex w-full h-full justify-between gap-2.5">
        {cards.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(1)}
            style={{
              width:
                hoveredCard === card.id
                  ? "calc(37.5% - 0.5rem)"
                  : "calc(12.5% - 0.5rem)",
            }}
            className={`
              group relative overflow-hidden rounded-2xl !h-[70vh]  min-h-[500px]
              transition-all  duration-700 ease-in-out  
            `}
          >
            <div
              className={`absolute w-full h-full z-0 inset-0  transition-all duration-700 ease-in-out`}
            >
              <Image
                src={card.image}
                alt="Logo"
                // width={hoveredCard === card.id ? 430 : 140}
                // height={500}
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
                    text-base md:text-lg 
                ${hoveredCard === card.id ? "w-full" : "whitespace-nowrap"}
                `}
              >
                {card.title}
              </h3>

              <h4
                className={`text-sms font-light 
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

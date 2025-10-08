"use client";

import { useState } from "react";

const Cards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(1);
  const cards = [
    {
      id: 1,
      title: "Lighter meals, sustained energy",
      description:
        "Light food fuels body, keeps you active and energized all day.",
      image: "/images/couple-dining.jpg",
      size: "large",
    },
    {
      id: 2,
      title: "Improved digestion, better sleep",
      image: "/images/man-sleeping.jpg",
      size: "small",
    },
    {
      id: 3,
      title: "Mindful eating, stress-free life",
      image: "/images/man-working.jpg",
      size: "small",
    },
    {
      id: 4,
      title: "Renewed strength, joyful living",
      image: "/images/man-exercising.jpg",
      size: "small",
    },
    {
      id: 5,
      title: "Daily balance, long-term wellness",
      image: "/images/woman-exercising.jpg",
      size: "small",
    },
    {
      id: 6,
      title: "Nourishing wellness in habits",
      image: "/images/woman-eating.jpg",
      size: "small",
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 ">
      <div
        className="flex w-full justify-between gap-2.5"
        //    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4"
      >
        {cards.map((card, index) => (
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
              group relative overflow-hidden rounded-2xl shadow-lg lg:row-span-1 min-h-[500px]
              transition-all  duration-1000 ease-in-out  
            `}
          >
            <div
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === 0
                  ? "bg-gradient-to-br from-indigo-600 to-purple-700"
                  : index === 1
                  ? "bg-gradient-to-br from-rose-500 to-pink-600"
                  : index === 2
                  ? "bg-gradient-to-br from-cyan-500 to-blue-600"
                  : index === 3
                  ? "bg-gradient-to-br from-amber-500 to-orange-600"
                  : index === 4
                  ? "bg-gradient-to-br from-violet-600 to-purple-700"
                  : "bg-gradient-to-br from-emerald-500 to-teal-600"
              }`}
            >
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-700" />
            </div>

            <div className="relative h-full flex items-end p-5">
              <h3
                className={`
                  text-white font-semibold text-base md:text-lg leading-tight 
                  writing-mode-vertical transform rotate-180
                  transition-all duration-700 ease-in-out
                  ${hoveredCard === card.id ? "scale-110" : "scale-100"}
                `}
              >
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default Cards;

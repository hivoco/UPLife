"use client";

import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";

type Item = {
  id: number;
  imgSrcSmall: string;
  imgSrcLarge: string;
  heading: string;
  subheading: string;
};

type AnimationStart = {
  x: number;
  y: number;
  centerX: number;
  centerY: number;
} | null;

export default function RadialLayout() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [returningItem, setReturningItem] = useState<Item | null>(null);
  const [animationStart, setAnimationStart] = useState<AnimationStart>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);

  const leftItems: Item[] = [
    {
      id: 1,
      imgSrcSmall: "/recipies/midday-fuel-sm.png",
      imgSrcLarge: "/recipies/midday-fuel-lg.png",
      heading: "Midday Fuel",
      subheading: "Power Through Noon",
    },
    {
      id: 2,
      imgSrcSmall: "/recipies/post-recovery-sm.png",
      imgSrcLarge: "/recipies/post-recovery-lg.png",
      heading: "Post-Recovery",
      subheading: "Restore With Care",
    },
    {
      id: 3,
      imgSrcSmall: "/recipies/evening-treat-sm.png",
      imgSrcLarge: "/recipies/evening-treat-lg.png",
      heading: "Evening Treat",
      subheading: "Tasty, Light, Lovely",
    },
  ];

  const rightItems: Item[] = [
    {
      id: 4,
      imgSrcSmall: "/recipies/morning-boost-sm.png",
      imgSrcLarge: "/recipies/morning-boost-lg.png",
      heading: "Morning Boost",
      subheading: "Energize Your Day",
    },
    {
      id: 5,
      imgSrcSmall: "/recipies/weekend-bliss-sm.png",
      imgSrcLarge: "/recipies/weekend-bliss-lg.png",
      heading: "Weekend Bliss",
      subheading: "Guilt-Free Joy",
    },
    {
      id: 6,
      imgSrcSmall: "/recipies/pre-workout-sm.png",
      imgSrcLarge: "/recipies/pre-workout-lg.png",
      heading: "Pre-Workout",
      subheading: "Fuel Before Move",
    },
  ];

  const handleItemClick = (item: Item, event: MouseEvent<HTMLDivElement>) => {
    const itemElement = event.currentTarget;
    const itemRect = itemElement.getBoundingClientRect();
    const container = document.querySelector(".radial-container");
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    if (selectedItem && selectedItem.id !== item.id) {
      setReturningItem(selectedItem);
      setTimeout(() => {
        setReturningItem(null);
        setAnimationStart({
          x: itemRect.left + itemRect.width / 2 - containerRect.left,
          y: itemRect.top + itemRect.height / 2 - containerRect.top,
          centerX: containerRect.width / 2,
          centerY: 64,
        });
        setSelectedItem(item);
      }, 500);
    } else {
      setAnimationStart({
        x: itemRect.left + itemRect.width / 2 - containerRect.left,
        y: itemRect.top + itemRect.height / 2 - containerRect.top,
        centerX: containerRect.width / 2,
        centerY: 64,
      });
      setSelectedItem(item);
    }
  };

  const handleCloseSelected = () => {
    if (selectedItem) {
      setReturningItem(selectedItem);
      setTimeout(() => {
        setReturningItem(null);
        setSelectedItem(null);
        setAnimationStart(null);
      }, 1000);
    }
  };

  const renderItem = (item: Item) => {
    const isSelected = selectedItem?.id === item.id;
    const isReturning = returningItem?.id === item.id;

    return (
      <div key={item.id} className="shrink-0">
        {/* Original position item */}
        <div
          className={`flex flex-row md:flex-col text-center cursor-pointer transition-opacity duration-700 
            ${isSelected || isReturning ? "opacity-50" : "opacity-100"}
          `}
          onClick={(e) => handleItemClick(item, e)}
        >
          <div className="space-y-1.5 md:space-y-2.5">
            <Image
              className={`object-cover max-w-[130px] md:max-w-[150px]  rounded-full  mx-auto ${
                isSelected ? "border-2 border-white border-dashed" : ""
              }`}
              src={item.imgSrcLarge}
              width={150}
              height={150}
              alt={"dish-" + item.id}
            />
            <div className=" text-center">
              <h2 className="text-base/6 md:text-2xl font-normal">
                {item.heading}
              </h2>
              <h3 className="text-xs/4.5 md:text-sm font-normal">
                {item.subheading}
              </h3>
            </div>
          </div>
        </div>

        {/* Animated clone moving to center */}
        {isSelected && animationStart && !isReturning && (
          <div
            className="hidden md:flex absolute z-50 w-full pointer-events-none  flex-col items-center"
            style={{
              left: `${animationStart.x}px`,
              top: `${animationStart.y}px`,
              // transform: "translate(-50%, -50%)",
              transform: "translateX(-50%)",
              animation: `moveToCenter-${item.id} 700ms ease-in-out forwards`,
            }}
          >
            <style>{`
              @keyframes moveToCenter-${item.id} {
                0% {
                opacity:0;
                  left: ${animationStart.x}px;
                  top: ${animationStart.y}px;
                }
                  10%{
                    opacity:0;
                  }
                100% {
                  left: ${animationStart.centerX}px;
                  // top: ${animationStart.centerY}px;
                  top:64px ;
                }
              }
              
              @keyframes growCircle-${item.id} {
                0% {
                  width: 100px;
                  height: 100px;
                }
                100% {
                  width: 320px;
                  height: 320px;
                }
              }
              
              @keyframes growInner-${item.id} {
                0% {
                  width: 112px;
                  height: 112px;
                }
                100% {
                  width: 500px;
                  height: 500px;
                }
              }
              
              @keyframes fadeInText {
                0% {
                  opacity: 0;
                  transform: translateY(20px);
                }
                70% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>

            <div className="pointer-events-auto">
              <div
                className="relative rounded-full flex items-center justify-center cursor-pointer border-white/60
                "
                onClick={handleCloseSelected}
              >
                <div className="absolute inset-0 border-2 border-dashed rounded-full [animation:fadeIn_700ms_ease-in-out_forwards]"></div>

                <Image
                  style={{
                    animation: `growInner-${item.id} 700ms ease-in-out forwards`,
                  }}
                  className="w-full h-full object-cover rounded-full"
                  src={item.imgSrcLarge}
                  width={150}
                  height={150}
                  alt={"dish-" + item.id}
                />
              </div>

              <div
                className="text-center mt-6"
                style={{
                  animation: "fadeInText 700ms ease-in-out forwards",
                }}
              >
                <h3 className="text-white font-bold text-3xl mb-2">
                  {item.heading}
                </h3>
                <p className="text-teal-100 text-lg mb-4">{item.subheading}</p>
                <button
                  onClick={handleCloseSelected}
                  className="bg-white text-teal-700 px-6 py-2 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Animated clone returning to original position */}
        {/* {isReturning && animationStart && (
          <div
            className="absolute z-50 pointer-events-none flex flex-col items-center"
            style={{
              left: `${animationStart.centerX}px`,
              top: `${animationStart.centerY}px`,
              transform: "translate(-50%,-50%)",
              animation: `returnToOrigin-${item.id} 499ms ease-in-out forwards`,
            }}
          >
            <style>{`
              @keyframes returnToOrigin-${item.id} {
                0% {
                  left: ${animationStart.centerX}px;
                  top: ${animationStart.centerY}px;
                  opacity:1;
                }

                70% {
                opacity:0;
                }

                100% {
                  left: ${animationStart.x}px;
                  top: ${animationStart.y}px;
                  opacity:0;
                }
              }
              
              @keyframes shrinkCircle-${item.id} {
                0% {
                  width: 320px;
                  height: 320px;
                }
                100% {
                  width: 128px;
                  height: 128px;
                }
              }
              
              @keyframes shrinkInner-${item.id} {
                0% {
                  width: 300px;
                  height: 300px;
                }
                100% {
                  width: 112px;
                  height: 112px;
                }
              }
              
              @keyframes fadeOutText {
                0% {
                  opacity: 1;
                  transform: translateY(0);
                }
                30% {
                  opacity: 0;
                  transform: translateY(-20px);
                }
                100% {
                  opacity: 0;
                  transform: translateY(-20px);
                }
              }
            `}</style>

            <div>
              <div
                className=" flex items-center justify-center"
                style={{
                  animation: `shrinkCircle-${item.id} 700ms ease-in-out forwards`,
                }}
              >
                <Image
                  className="w-full h-full object-cover rounded-full"
                  src={item.imgSrcLarge}
                  width={150}
                  height={150}
                  alt="dish"
                />
              </div>

              <div
                className="text-center mt-6"
                style={{
                  animation: "fadeOutText 700ms ease-in-out forwards",
                }}
              >
                <h3 className="text-white font-bold text-3xl mb-2">
                  {item.title}
                </h3>
                <p className="text-teal-100 text-lg mb-4">{item.subtitle}</p>
              </div>
            </div>
          </div>
        )} */}
      </div>
    );
  };
  return (
    <div
      className="relative  radial-container pt-11 md:pt-16 pb-8 text-white whitespace-nowrap overflow-hidden
      bg-[linear-gradient(180deg,#D9EBE2_-44.15%,#457E7F_4.22%,#457E7F_34.46%,#457E7F_52.45%,#457E7F_74.54%,#588F87_98.35%,#D9EBE2_140.62%)] 
      md:bg-[linear-gradient(180deg,#D9EBE2_-44.15%,#457E7F_19.19%,#457E7F_34.46%,#457E7F_52.45%,#457E7F_74.54%,#588F87_88.18%,#D9EBE2_140.62%)]
      "
    >
      <div className=" grid container mx-auto px-6 md:px-16 auto-rows[180px] md:auto-rows-auto md:grid-cols-5 gap-6 md:gap-20 md:items-center">
        {/* Left Column */}
        <div className="flex flex-row md:flex-col items-center gap-9 md:gap-7 row-span-1  md:col-span-1 overflow-x-auto overflow-y-hidden md:overflow-visible scrollbar-hide">
          {leftItems.map((item) => renderItem(item))}
          <div className="md:hidden flex flex-row gap-7">
            {rightItems.map((item) => renderItem(item))}
          </div>
        </div>

        {/* Center Circle */}
        <div
          ref={centerRef}
          className={`overflow-hidden md:max-w-none row-span-3 md:row-span-1  md:col-span-3 w-full flex text-white flex-col items-center justify-center transition-opacity duration-500 
            ${
              selectedItem || returningItem ? " md:opacity-0" : "md:opacity-100"
            }
          `}
        >
          <div className="w-full md:w-full md:max-w-[550px] aspect-square rounded-full border-2 border-dashed border-white/60 flex items-center justify-center mb-8">
            {selectedItem && (
              <Image
                width={327}
                height={327}
                src={selectedItem.imgSrcLarge}
                className="md:hidden w-full h-full object-cover"
                alt="dish image"
              />
            )}

            <div
              className={`text-center px-8 whitespace-nowrap ${
                selectedItem ? "hidden md:block" : ""
              }`}
            >
              <h1 className="text-[28px]/9 md:text-5xl/15 mb-2 ">
                How Are You
              </h1>
              <h1 className="text-[28px]/9 md:text-5xl/15">Feeling Today?</h1>
            </div>
          </div>

          <div className=" text-center mb-4">
            <h2 className="font-normal text-[24px]/9 md:text-[32px]/10">
              {selectedItem
                ? selectedItem.heading
                : "Your Journey, Our Solution "}
            </h2>
            <p className="font-light text-sm md:text-base ">
              {selectedItem
                ? selectedItem.subheading
                : "UpLife recipes for every version of you. Choose recipes that"}
            </p>
            {!selectedItem && (
              <p className="font-light text-sm md:text-base ">
                match your day and fuel your ambitions.
              </p>
            )}
          </div>

          {!selectedItem && (
            <button className="bg-white text-lg rounded-md py-2.5 px-6 font-normal text-black ">
              Explore All Recipes
            </button>
          )}
        </div>

        {/* Right Column */}
        <div className="hidden md:flex md:flex-col md:gap-7  md:col-span-1">
          {rightItems.map((item) => renderItem(item))}
        </div>
      </div>
    </div>
  );
}

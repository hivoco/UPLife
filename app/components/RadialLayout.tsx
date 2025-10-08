"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function RadialLayout() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [animationStart, setAnimationStart] = useState(null);
  const [returningItem, setReturningItem] = useState(null);
  const centerRef = useRef(null);

  useEffect(() => {
    const resetAllItems = () => {
      if (window.scrollY) {
        // setSelectedItem(null);
        // setReturningItem(null);
      }
    };

    window.addEventListener("scroll", resetAllItems);
    return () => window.removeEventListener("scroll", resetAllItems);
  }, []);

  const leftItems = [
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

  const rightItems = [
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

  // const handleItemClick = (item, event) => {
  //   const itemElement = event.currentTarget;
  //   const itemRect = itemElement.getBoundingClientRect();
  //   const centerRect = centerRef.current.getBoundingClientRect();

  //   // If there's already a selected item, mark it for return
  //   if (selectedItem && selectedItem.id !== item.id) {
  //     setReturningItem(selectedItem);

  //     // After return animation completes, set the new selected item
  //     setTimeout(() => {
  //       setReturningItem(null);
  //       setAnimationStart({
  //         x: itemRect.left + itemRect.width / 2,
  //         y: itemRect.top + itemRect.height / 2,
  //         centerX: centerRect.left + centerRect.width / 2,
  //         centerY: centerRect.top + centerRect.height / 2,
  //       });
  //       setSelectedItem(item);
  //     }, 1000);
  //   } else {
  //     setAnimationStart({
  //       x: itemRect.left + itemRect.width / 2,
  //       y: itemRect.top + itemRect.height / 2,
  //       centerX: centerRect.left + centerRect.width / 2,
  //       centerY: centerRect.top + centerRect.height / 2,
  //     });
  //     setSelectedItem(item);
  //   }
  // };

  const handleItemClick = (item, event) => {
    const itemElement = event.currentTarget;
    const itemRect = itemElement.getBoundingClientRect();
    const container = document.querySelector(".radial-container");
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
      }, 1000);
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

  const renderItem = (item, isLeft) => {
    const isSelected = selectedItem?.id === item.id;
    const isReturning = returningItem?.id === item.id;

    return (
      <div key={item.id} className="">
        {/* Original position item */}
        <div
          className={`flex flex-col  items-center text-center cursor-pointer transition-opacity duration-700 ${
            isSelected || isReturning ? "opacity-50" : "opacity-100"
          }`}
          onClick={(e) => handleItemClick(item, e)}
        >
          <div className=" rounded-full  flex items-center justify-center">
            <div className={` rounded-full `}>
              <Image
                className=" object-cover rounded-full"
                src={item.imgSrcLarge}
                width={150}
                height={150}
                alt={"dish-" + item.id}
              />
              <div className="mt-2.5 text-center">
                <h2 className="text-2xl font-normal">{item.heading}</h2>
                <h3 className="text-sm font-normal">{item.subheading}</h3>
              </div>
            </div>
          </div>
          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
          <p className="text-teal-100 text-sm">{item.subtitle}</p>
        </div>

        {/* Animated clone moving to center */}
        {isSelected && animationStart && !isReturning && (
          <div
            className="absolute z-50 w-full pointer-events-none flex flex-col items-center"
            style={{
              left: `${animationStart.x}px`,
              top: `${animationStart.y}px`,
              // transform: "translate(-50%, -50%)",
              transform: "translateX(-50%)",
              animation: `moveToCenter-${item.id} 1s ease-in-out forwards`,
            }}
          >
            <style>{`
              @keyframes moveToCenter-${item.id} {
                0% {
                  left: ${animationStart.x}px;
                  top: ${animationStart.y}px;
                }
                100% {
                  left: ${animationStart.centerX}px;
                  // top: ${animationStart.centerY}px;
                  top:64px ;
                }
              }
              
              @keyframes growCircle-${item.id} {
                0% {
                  width: 128px;
                  height: 128px;
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
                  // width: 300px;
                  // height: 300px;
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
                className="rounded-full flex items-center justify-center cursor-pointer border-2 border-dashed border-white/60"
                onClick={handleCloseSelected}
              >
                <Image
                  style={{
                    animation: `growInner-${item.id} 1s ease-in-out forwards`,
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
                  animation: "fadeInText 1s ease-in-out forwards",
                }}
              >
                <h3 className="text-white font-bold text-3xl mb-2">
                  {item.title}
                </h3>
                <p className="text-teal-100 text-lg mb-4">{item.subtitle}</p>
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
        {isReturning && animationStart && (
          <div
            className="absolute z-50 pointer-events-none flex flex-col items-center"
            style={{
              left: `${animationStart.centerX}px`,
              top: `${animationStart.centerY}px`,
              transform: "translate(-50%, -50%)",
              animation: `returnToOrigin-${item.id} 1s ease-in-out forwards`,
            }}
          >
            <style>{`
              @keyframes returnToOrigin-${item.id} {
                0% {
                  left: ${animationStart.centerX}px;
                  top: ${animationStart.centerY}px;
                  opacity:100;
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
                  animation: `shrinkCircle-${item.id} 1s ease-in-out forwards`,
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
                  animation: "fadeOutText 1s ease-in-out forwards",
                }}
              >
                <h3 className="text-white font-bold text-3xl mb-2">
                  {item.title}
                </h3>
                <p className="text-teal-100 text-lg mb-4">{item.subtitle}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #D9EBE2 -44.15%, #457E7F 19.19%, #457E7F 34.46%, #457E7F 52.45%, #457E7F 74.54%, #588F87 88.18%, #D9EBE2 140.62%)",
      }}
      className="relative  radial-container pt-16 pb-8 text-white whitespace-nowrap"
    >
      <div className="container mx-auto px-6  md:px-16">
        <div className=" grid grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-7 ">
            {leftItems.map((item) => renderItem(item, true))}
          </div>

          {/* Center Circle */}
          <div
            ref={centerRef}
            className={`w-full flex text-white flex-col items-center justify-center transition-opacity duration-500 ${
              selectedItem || returningItem ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="min-w-[500px] aspect-square rounded-full border-2 border-dashed border-white/60 flex items-center justify-center mb-8">
              <div className="text-center px-8 whitespace-nowrap">
                <h1 className=" text-5xl/15 mb-2 ">How Are You</h1>
                <h1 className=" text-5xl/15">Feeling Today?</h1>
              </div>
            </div>

            <div className=" text-center mb-4">
              <h2 className="font-normal  text-[32px]/10">
                Your Journey, Our Solution
              </h2>
              <p className="font-light text-base ">
                UpLife recipes for every version of you. Choose recipes that
              </p>

              <p className="font-light text-base ">
                match your day and fuel your ambitions.
              </p>
            </div>

            <button className="bg-white rounded-md py-2.5 px-6 font-normal text-black ">
              Explore All Recipes
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-7">
            {rightItems.map((item) => renderItem(item, false))}
          </div>
        </div>
      </div>
    </div>
  );
}

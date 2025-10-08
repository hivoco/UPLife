"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const RecipesData = [
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

  const [selected, setSelected] = useState<number | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const handleSrc = () => {
    const selectedRecipe = RecipesData.find((r) => r.id === selected);
    if (!selectedRecipe) return;
    return selectedRecipe.imgSrcLarge;
  };
  return (
    <div
      ref={parentRef}
      className="text-white flex justify-between  px-[6vw] py-15 relative"
      style={{
        background:
          "linear-gradient(180deg, #D9EBE2 -44.15%, #457E7F 19.19%, #457E7F 34.46%, #457E7F 52.45%, #457E7F 74.54%, #588F87 88.18%, #D9EBE2 140.62%)",
      }}
    >
      <RecipeCard
        arr={RecipesData.slice(0, 3)}
        selected={selected}
        setSelected={setSelected}
        parentRef={parentRef}
      />

      <div className="flex flex-col items-center gap-5">
        <div className="GOLA w-[43vw] aspect-square text-white rounded-full border-2 border-dashed border-white/60 flex flex-col items-center justify-center">
          {selected ? (
            <Image
              className="rounded-full w-full h-full"
              src={handleSrc() || ""}
              width={300}
              height={300}
              alt="recipe large image"
            />
          ) : (
            <>
              <h1 className=" text-5xl/15 mb-2">How Are You</h1>
              <h1 className=" text-5xl/15">Feeling Today?</h1>
            </>
          )}
        </div>

        <button className="bg-white rounded-md py-2.5 px-6 font-normal text-black ">
          Explore All Recipes
        </button>
      </div>

      <RecipeCard
        arr={RecipesData.slice(3)}
        selected={selected}
        setSelected={setSelected}
        parentRef={parentRef}
      />
    </div>
  );
};

export default Recipes;

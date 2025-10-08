import Image from "next/image";
import { useRef } from "react";

type Recipe = {
  id: number;
  imgSrcSmall: string;
  imgSrcLarge: string;
  heading: string;
  subheading: string;
};

type RecipeCardProps = {
  arr: Recipe[];
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
  parentRef: React.RefObject<HTMLDivElement | null>;
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  arr,
  selected,
  setSelected,
  parentRef,
}) => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleClick = (index: number) => {
    const clickedImage = imageRefs.current[index];

    if (!parentRef.current || !clickedImage) return;
    clickedImage.style.position = "absolute";

    const parent = parentRef.current;

    const parentRect = parent.getBoundingClientRect();
    const childRect = clickedImage.getBoundingClientRect();
    console.log(parentRect, childRect);

    const centerX = parentRect.width / 2 - childRect.width / 2;
    const centerY = parentRect.height / 2 - childRect.height / 2;

    clickedImage.style.transition = "all 5s ease-in-out;";
    clickedImage.style.transform = "scale(2)";
    clickedImage.style.left = `${centerX}px`;
    clickedImage.style.top = `${centerY}px`;
  };

  return (
    <div className=" flex flex-col gap-7 xx  items-center ">
      {arr.map((recipe, index) => {
        const { id, imgSrcSmall,  heading, subheading } = recipe;
        return (
          <div onClick={() => setSelected(id)} className="" key={id}>
            <Image
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              onClick={() => handleClick(index)}
              className={`object-cover h-[150px] ${
                selected === id ? "opacity-50" : "translate-x-0"
              } `}
              src={imgSrcSmall}
              width={150}
              height={150}
              alt="dish"
            />
            <div className="mt-2.5 text-center">
              <h2 className="text-2xl font-normal">{heading}</h2>
              <h3 className="text-sm font-normal">{subheading}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCard;

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Card {
  id: number;
  title: string;
  imageSrc: string;
  overlayImageSrc: string;
  description: string;
}

interface OverlayCardProps {
  cards: Card[];
  selectedCardId: number | null;
  setSelectedCardId: (id: number | null) => void;
  divRef: React.RefObject<HTMLDivElement | null>;
}

const OverlayCard = ({
  cards,
  selectedCardId,
  setSelectedCardId,
  divRef,
}: OverlayCardProps) => {
  const [clickedCardStyles, setClickedCardStyles] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = (cardId: number, event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const parentRect = divRef.current?.getBoundingClientRect();
    if (parentRect) {
      const position = {
        top: rect.top - parentRect.top,
        left: rect.left - parentRect.left,
        width: rect.width,
        height: rect.height,
      };

      setClickedCardStyles(position);
      setSelectedCardId(cardId);
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    if (!selectedCardId || !clickedCardStyles) return;
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 10);
    return () => clearTimeout(timer);
  }, [selectedCardId, clickedCardStyles]);

  return (
    <div
      className={`w-full flex flex-col md:flex-row  justify-center gap-3.5 md:gap-6 items-center pt-7 md:pt-[50px]
    `}
    >
      {cards.map((card) => (
        <div
          onClick={(e) => handleCardClick(card.id, e)}
          key={card.id}
          style={{
            ...(selectedCardId === card.id && isAnimating
              ? {
                  position: "absolute",
                  top: `${clickedCardStyles.top}px`,
                  left: `${clickedCardStyles.left}px`,
                  width: `${clickedCardStyles.width}px`,
                  height: `${clickedCardStyles.height}px`,
                }
              : {}),
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 78.85%, rgba(0, 0, 0, 0.5) 100%)",
          }}
          className={` ${
            selectedCardId === card.id
              ? `absolute  ease-in-out md:ease-out transition-all duration-500 md:duration-300 inset-0 md:left-1/2 md:-translate-x-1/2 top-0 md:right-auto md:bottom-auto w-9/10 md:w-9/10 h-full z-10  mx-auto px-6 md:p-16 text-left flex flex-col md:flex-row items-center gap-16 justify-center md:justify-between text-white
              cursor-pointer rounded-4xl last class is temp fix `
              : "relative  rounded-4xl outline-2 outline-[#20695F] h-[40vh]  text-white text-left"
          }
          ${
            selectedCardId && selectedCardId !== card.id
              ? "opacity-0 ease-out transition-all duration-500"
              : ""
          }
          `}
        >
          <Image
            className={` rounded-4xl  object-cover
              ${
                selectedCardId === card.id
                  ? "pointer-events-none -z-2 inset-0 absolute "
                  : "w-full h-full"
              }
            `}
            src={card.imageSrc}
            fill={selectedCardId === card.id}
            height={selectedCardId === card.id ? undefined : 300}
            width={selectedCardId === card.id ? undefined : 350}
            alt={"image"}
          />

          <div
            className={`
            ${
              selectedCardId === card.id
                ? " text-center md:text-left md:w-[45%] "
                : "absolute bottom-0  left-0 p-4"
            }
            `}
          >
            <h2
              className={`
               ${
                 selectedCardId === card.id
                   ? "text-2xl md:text-5xl"
                   : "text-[28px]/10"
               }
              `}
            >
              {card.title}
            </h2>
            <h3
              className={`font-light
                ${
                  selectedCardId === card.id
                    ? "text-xs md:text-lg "
                    : " text-xs/4.5"
                }
              `}
            >
              {card.description}
            </h3>
          </div>

          <Image
            className={`transition-all ease-in-out  ${
              selectedCardId === card.id
                ? "opacity-100 scale-100 delay-100 duration-700"
                : "opacity-0 scale-95"
            }`}
            src={card.overlayImageSrc}
            width={430}
            height={320}
            alt="uplife product"
          />

          {selectedCardId === card.id ? (
            <>
              <div className="absolute z-[-1] inset-0 bg-black/60 backdrop-blur-md pointer-events-none rounded-4xl"></div>
              <span
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click from bubbling to parent
                  setSelectedCardId(null);
                }}
                className="absolute top-6 right-6 md:top-16 md:right-16 text-white text-2xl/6 text-center cursor-pointer z-50"
              >
                <X size={24} color="#fff" />
              </span>{" "}
            </>
          ) : (
            <div className="absolute z-1 rounded-4xl inset-0 bg-black/10"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OverlayCard;

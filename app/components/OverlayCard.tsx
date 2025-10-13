import Image from "next/image";

interface Card {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
}

interface OverlayCardProps {
  cards: Card[];
  setSelectedCardId: (id: number | null) => void;
}

const OverlayCard = ({ cards, setSelectedCardId }: OverlayCardProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row  justify-center gap-3.5 md:gap-6 items-center pt-7 md:pt-[50px]">
      {cards.map((card) => (
        <div
          onClick={() => setSelectedCardId(card.id)}
          key={card.id}
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 78.85%, rgba(0, 0, 0, 0.5) 100%)",
          }}
          className="relative  rounded-4xl outline-2 outline-[#20695F] h-[40vh]  text-white text-left"
        >
          <Image
            className="rounded-4xl object-cover h-full w-full"
            src={card.imageSrc}
            height={300}
            width={350}
            alt={"image"}
          />

          <div className="absolute bottom-0  left-0 p-4">
            <h2 className="font-normal text-[28px]/10  uppercase">
              {card.title}
            </h2>
            <h3 className="font-light text-xs/4.5">{card.description}</h3>
          </div>

          <div className="absolute z-1 rounded-4xl inset-0 bg-black/10  ">

          </div>
        </div>
      ))}
    </div>
  );
};

export default OverlayCard;

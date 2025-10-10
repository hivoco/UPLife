import Image from "next/image";

const OverlayCard = () => {
  const cards = [
    {
      id: 1,
      title: "GUT PRO",
      imageSrc: "/overlay-card/1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      title: "Weight Watchers",
      imageSrc: "/overlay-card/2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      title: "Active Lifestyle",
      imageSrc: "/overlay-card/3.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <div className="w-full flex justify-center gap-6 items-center pt-[50px]">
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 78.85%, rgba(0, 0, 0, 0.5) 100%)",
          }}
          className="relative rounded-4xl outline-2 outline-[#20695F] min-h-[33vh] bg-gray-500 text-white text-left"
        >
          <Image
            className="rounded-4xl object-cover h-full w-auto"
            src={card.imageSrc}
            height={300}
            width={350}
            alt={"image"}
          />

          <div className="absolute bottom-0 left-0 p-4">
            <h2 className="font-normal text-[28px]/10  uppercase">
              {card.title}
            </h2>
            <h3 className="font-light text-xs/4.5">{card.description}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverlayCard;

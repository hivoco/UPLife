import Image from "next/image";

const OverlayCard = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 78.85%, rgba(0, 0, 0, 0.5) 100%)",
      }}
      className="relative rounded-4xl outline-2 outline-[#20695F] w-[380px] h-[277px] bg-gray-500 text-white text-left"
    >
      <Image
        className="rounded-4xl object-cover"
        src={"/img1.png"}
        width={380}
        height={277}
        alt={""}
      />

      <div className="absolute bottom-4 left-4">
        <h2 className="font-normal text-[28px]/10  uppercase">GUT PRO</h2>
        <h3 className="font-light text-xs/4.5">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur.
        </h3>
      </div>
    </div>
  );
};

export default OverlayCard;

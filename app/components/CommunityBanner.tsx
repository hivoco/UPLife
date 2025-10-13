import Image from "next/image";

const CommunityBanner = () => {
  return (
    <div
      className="relative w-full h-[350px] text-white flex items-end-safe pb-6 md:pb-0 md:items-center
        bg-[linear-gradient(180deg,rgba(252,252,252,0)_52.4%,rgba(0,0,0,0.7)_70.19%,rgba(0,0,0,0.7)_100%)]
        md:bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(53,53,53,0.5)_30.29%,rgba(255,255,255,0)_100%)]
      "
    >
      <div className="container mx-auto px-6  md:px-16 text-center md:text-start">
        <h2 className="text-2xl md:text-[44px]/16 capitalize font-normal">
          join the uplife movement
        </h2>

        <p className="text-sm md:text-lg font-light w-fit md:w-1/2 mb-6 pt-2 md:pt-0">
          Thousands of families have already discovered the difference. Share
          your transformation, inspire others, celebrate wellness wins together.
          Your journey matters, your story inspires.{" "}
        </p>

        <button className="text-sm md:text-2xl font-normal py-[6px] md:py-2.5 px-4 md:px-6 capitalize outline-1 outline-white rounded-full">
          discover life →
        </button>
      </div>

      <Image
        className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
        src="/banner-image.png"
        width={1280}
        height={350}
        alt="banner-image"
        quality={75}
      />
    </div>
  );
};

export default CommunityBanner;

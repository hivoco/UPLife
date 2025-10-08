import Image from "next/image";
import Cards from "./components/Cards";
import OverlayCard from "./components/OverlayCard";
import Recipes from "./components/Recipes";
import RadialLayout from "./components/RadialLayout";

export default function Home() {
  return (
    <div className="relative w-full mx-auto">
      <video
        src="/16-9.mp4"
        autoPlay={true}
        loop
        muted
        className="h-screen w-full object-cover"
      />

      <div
        style={{
          background:
            "linear-gradient(90deg, #BAB0F2 0%, #CAC4E8 0.01%, #9989D1 100%)",
        }}
        className="absolute right-10 bottom-10 rounded-full w-fit border-[.5px] border-white p-3.5"
      >
        <Image
          src="/whatsapp.png"
          alt="WhatsApp Logo"
          className="w-11 h-11"
          width={44}
          height={44}
        />
      </div>

      <div className="pt-9 pb-18 bg-white text-black text-center w-full mx-auto">
        <h1 className="font-normal text-[42px]/16 ">
          What happens when you UP your Life?
        </h1>

        <h2 className="font-light text-2xl mt-[10px]">
          Smart choice for a lighter, better you
        </h2>

        <Cards />
      </div>

      <div className="relative w-full pt-[56px] pb-[112px] text-center px-6">
        <Image
          src="/Group 13.png"
          alt="bg F"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-auto object-cover  opacity-25"
          width={44}
          height={44}
        />

        <h1 className="font-normal text-[42px]/16 ">
          What happens when you UP your Life?
        </h1>
        <h2 className="font-light text-2xl mt-[10px]">
          Smart choice for a lighter, better you
        </h2>

        <div className="w-full flex justify-between items-center pt-[50px]">
          <OverlayCard />
          <OverlayCard />
          <OverlayCard />
        </div>
      </div>

      <div className="py-16 flex  justify-between px-6">
        <section className="text-left">
          <h1 className="font-normal text-[34px]/12">
            From the house of World’s{" "}
          </h1>
          <h1 className="font-normal text-[34px]/12 ">
            No.1 Basmati Rice Brand{" "}
          </h1>

          <p className="font-normal text-lg">
            When tradition meets innovation, extraordinary wellness becomes
            possible.
          </p>
        </section>

        <video className="aspect-video w-[50vw]" controls autoPlay loop muted>
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full  flex justify-between gap-[6.7vw] px-16">
        <Image
          className="ml-[100px] h-[550px] w-auto"
          width={300}
          height={550}
          src={"/uplife-orange-oil.png"}
          alt="uplife-orange-oil"
        />
        <div className="w-1/2 pt-16">
          <h1 className="font-normal text-5xl ">Your health, your product </h1>

          <p className="font-light text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
            dolor sit amet consectetur.{" "}
          </p>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/recipies/top-curved-svg.svg"
          alt="top svg curved"
          width={1280}
          height={100}
          className="w-full h-auto"
        />

        {/* <Recipes /> */}
        <RadialLayout />

        <Image
          src="/recipies/bottom-curved-svg.svg"
          alt="top svg curved"
          width={1280}
          height={100}
          className="w-full h-auto"
        />
      </div>

      <div className="pt-11">
        <h2
        style={{
          animation:" marquee 15s linear infinite"
        }}
        aria-roledescription="marquee"
         className="font-normal text-[84px]/31.5 text-black whitespace-nowrap will-change-transform">
          Real Families. Real Results. Real Transformations.
        </h2>
      </div>
    </div>
  );
}

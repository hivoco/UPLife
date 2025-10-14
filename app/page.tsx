import Image from "next/image";
import Cards from "./components/Cards";
import RadialLayout from "./components/RadialLayout";
import Footer from "./components/Footer";
import FooterCard from "./components/FooterCard";
import CommunityBanner from "./components/CommunityBanner";
import Faqs from "./components/Faqs";
import BentoGrid from "./components/BentoGrid";
import HeroSection from "./components/HeroSection";
import ImageExpander from "./components/ImageExpander";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <HeroSection />

      <div className="py-6 md:pt-9  md:pb-18  container mx-auto px-6  md:px-16 bg-white text-black text-center w-full">
        <h1 className="font-normal text-2xl/8 md:text-[42px]/16 ">
          What happens when you UP your Life?
        </h1>

        <h2 className="font-light text-sm md:text-2xl mt-[10px]">
          Smart choice for a lighter, better you
        </h2>

        <Cards />
      </div>

      <ImageExpander />

      <div className="py-6 md:py-16 container mx-auto px-6  md:px-16 flex flex-col md:flex-row justify-between gap-5 md:gap-4 items-center">
        <section className="text-center md:text-left">
          <h1 className="font-normal text-2xl/7.5 md:text-[34px]/12 ">
            From the house of World’s{" "}
          </h1>
          <h1 className="font-normal text-2xl/7.5 md:text-[34px]/12">
            No.1 Basmati Rice Brand{" "}
          </h1>

          <p className="font-light md:font-normal text-xs md:text-lg">
            When tradition meets innovation, extraordinary wellness becomes
            possible.
          </p>
        </section>

        <video
          className="aspect-[9/16]  md:aspect-video object-cover md:object-contain w-full md:w-[45vw] rounded-xl md:rounded-3xl"
          src="/16-9.mp4"
          autoPlay={true}
          loop
          muted
        />
      </div>

      <div className=" md:block relative pb-[3.5vh] w-full">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between gap-7 md:gap-[6.7vw]">
          <Image
            className=" md:ml-[100px] h-[37svh] md:h-svh  md:max-h-[550px] w-auto object-contain order-2 md:order-0"
            width={240}
            height={550}
            src={"/uplife-orange-oil.png"}
            alt="uplife-orange-oil"
          />
          <div className="w-full md:w-1/2  space-y-2 md:space-y-4 pt-6 md:pt-16 order-1 md:order-0">
            <h1 className="font-normal text-2xl md:text-5xl ">
              Your health, your product{" "}
            </h1>
            <p className="font-light text-center md:text-left text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
              dolor sit amet consectetur.{" "}
            </p>
          </div>
        </div>

        <Image
          className="absolute z-[-1] w-full mx-auto md:m-0 h-[27svh] md:h-[55%] inset-0 top-auto object-center  md:object-center"
          width={1280}
          height={300}
          src={"/curved-brown-green-mobile.png"}
          alt="fluid-wave"
          sizes="100vw"
        />

        {/* desktop image */}
        <Image
          className="hidden md:block absolute z-[-1] w-full mx-auto h-[55%] inset-0 top-auto object-cover"
          width={1280}
          height={300}
          src={"/fluid-wave-green-top-gradient.png"}
          alt="fluid-wave"
          sizes="100vw"
        />
      </div>

      <div className="relative">
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
        <div className="overflow-hidden whitespace-nowrap">
          <h2
            aria-roledescription="marquee"
            className="font-normal text-5xl md:text-[84px]/31.5 text-black animate-marquee 
          "
          >
            Real Families. Real Results. Real Transformations.
          </h2>
        </div>

        <BentoGrid />
      </div>
      <CommunityBanner />
      <Faqs />

      <div className="bg-[#457E7F] relative mt-10 ">
        <div className="absolute -top-[80px] w-full h-[80px] ">
          <Image src="/wave.png" alt="My image" fill className="object-fill " />
        </div>
        <FooterCard />
        <Footer />
      </div>
    </div>
  );
}

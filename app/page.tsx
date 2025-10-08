import Image from "next/image";
import Cards from "./components/Cards";
import OverlayCard from "./components/OverlayCard";
import RadialLayout from "./components/RadialLayout";
import Footer from "./components/Footer";
import FooterCard from "./components/FooterCard";
import CommunityBanner from "./components/CommunityBanner";
import Faqs from "./components/Faqs";
import BentoGrid from "./components/BentoGrid";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div className="  w-full mx-auto">
      <div className="h-svh relative">
        <header className="container mx-auto px-6  md:px-16 pt-5 md:pt-10 absolute z-0 left-0 right-0 flex justify-between ">
          <Image
            src="/logo.png"
            width={90}
            height={100}
            alt="logo uplife"
            className="object-cover"
          />
          <Navbar />
        </header>

        <div className=" flex justify-between items-center w-full container mx-auto px-6  md:px-16 absolute top-1/2  -translate-y-1/2 object-cover text-white">
          <Image
            src="/UPLIFE-LOGO.png"
            width={450}
            height={400}
            alt="logo uplife"
            className=" object-cover h-[48vh] w-auto"
          />

          <div className="text-center">
            <h2 className="text-[40px]/15">Life at pace with your ambitions</h2>
            <p className="text-base">
              Scientifically crafted solutions that make healthy living
              liberating, not limiting
            </p>
          </div>
        </div>

        <video
          src="/16-9.mp4"
          autoPlay={true}
          loop
          muted
          className="h-screen w-full object-cover z-[-2] pointer-events-none"
        />
        <div
          style={{
            background:
              "linear-gradient(90deg, #BAB0F2 0%, #CAC4E8 0.01%, #9989D1 100%)",
          }}
          className=" absolute right-10 bottom-10 rounded-full w-fit border-[.5px] border-white p-3.5"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp Logo"
            className="w-11 h-11"
            width={44}
            height={44}
          />
        </div>
      </div>

      {/* hero section above this */}

      <div className="pt-9 pb-18  container mx-auto px-6  md:px-16 bg-white text-black text-center w-full">
        <h1 className="font-normal text-[42px]/16 ">
          What happens when you UP your Life?
        </h1>

        <h2 className="font-light text-2xl mt-[10px]">
          Smart choice for a lighter, better you
        </h2>

        <Cards />
      </div>

      <div className="container mx-auto px-6  md:px-16 relative w-full pt-[56px] pb-[112px] text-center">
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

        <div className="w-full flex justify-center gap-6 items-center pt-[50px]">
          <OverlayCard />
          <OverlayCard />
          <OverlayCard />
        </div>
      </div>

      <div className="py-16 container mx-auto px-6  md:px-16 flex justify-between gap-4 items-center">
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

        <video
          className="aspect-video w-[50vw] rounded-3xl"
          src="/16-9.mp4"
          autoPlay={true}
          loop
          muted
        />
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

        <RadialLayout />

        <Image
          src="/recipies/bottom-curved-svg.svg"
          alt="top svg curved"
          width={1280}
          height={100}
          className="w-full h-auto"
        />
      </div>

      {/* <div className="pt-11">
        <h2
          style={{
            animation: " marquee 15s linear infinite"
          }}
          aria-roledescription="marquee"
          className="font-normal text-[84px]/31.5 text-black whitespace-nowrap will-change-transform">
          Real Families. Real Results. Real Transformations.
        </h2>
      </div> */}

      <div className="pt-11">
        <div className="overflow-hidden whitespace-nowrap">
          <h2
            aria-roledescription="marquee"
            className="font-normal text-[84px]/31.5 text-black animate-marquee 
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

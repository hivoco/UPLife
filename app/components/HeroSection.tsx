"use client";
import Image from "next/image";
import Navbar from "./NavBar";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [animation, setAnimation] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-svh relative">
      <header className=" mx-auto px-6  md:px-16 container pt-5 md:pt-10  flex justify-between gap-12 ">
        <Image
          src="/logo.png"
          width={90}
          height={100}
          alt="logo uplife"
          className="object-cover cursor-pointer"
          priority={true}
        />
        <Navbar animation={animation} />
      </header>

      <div className="flex gap-[10vh] md:gap-0 flex-col md:flex-row  justify-between items-center w-full container mx-auto px-6  md:px-16 absolute  top-1/2 -translate-y-1/4  md:left-1/2 md:-translate-x-1/2  md:-translate-y-1/2 object-cover text-white ">
        <Image
          src="/UPLIFE-LOGO.png"
          width={450}
          height={400}
          alt="logo uplife"
          className={`object-cover h-[30svh] mx-auto md:m-0 md:h-[48vh] w-auto 
            transition-transform duration-1000 ease-in-out
            ${animation ? " scale-100 " : "scale-125 translate-x-[140%]"}
        `}
          priority={true}
        />

        <div
          className={`text-center bg-black/30 backdrop-blur-[10px] p-2.5 rounded-xl space-y-1.5 
            transition-transform duration-1000 ease-in-out
            ${animation ? "opacity-100" : "translate-x-[100%] opacity-0"}
        `}
        >
          <h2 className="text-lg md:text-[40px]/15 ">
            Life at pace with your ambitions
          </h2>
          <p className="font-light md:font-normal text-base ">
            Scientifically crafted solutions that make healthy living
            liberating, not limiting
          </p>
        </div>
      </div>

      <video
        poster={"true"}
        src="/16-9.mp4"
        autoPlay={true}
        preload={"metadata"}
        loop
        muted
        className="h-svh absolute inset-0  w-full object-cover z-[-2] pointer-events-none"
      />

      <div
        style={{
          background:
            "linear-gradient(90deg, #BAB0F2 0%, #CAC4E8 0.01%, #9989D1 100%)",
        }}
        className="fixed z-50 right-7 bottom-7 md:right-9 md:bottom-9 rounded-full w-fit border-[.5px] border-white p-2.5 md:p-3.5"
      >
        <Image
          src="/whatsapp.png"
          alt="WhatsApp Logo"
          className="w-8 h-8 md:w-11 md:h-11"
          width={44}
          height={44}
        />
      </div>
    </div>
  );
};

export default HeroSection;

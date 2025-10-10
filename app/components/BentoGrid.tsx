// import Image from "next/image";

// const BentoGrid = () => {
//   return (
//     <div className="grid grid-cols-6 auto-rows-[80px] gap-4 py-8  px-6   md:px-16">
//       {/* Top wide video/image */}
//       <div className="col-span-4 row-span-5">
//         <Image
//           className="w-full h-full object-cover rounded-3xl"
//           src="/bento-grid/1.png"
//           width={800}
//           height={600}
//           alt="Main visual"
//         />
//       </div>

//       {/* Billboard style image */}
//       <div className="col-span-2 row-span-5">
//         <Image
//           className="w-full h-full object-cover rounded-3xl"
//           src="/bento-grid/2.png"
//           width={400}
//           height={400}
//           alt="Billboard"
//         />
//       </div>

//       {/* Small stacked images */}
//       <div className="col-span-3 row-span-4 flex flex-col gap-4">
//         <Image
//           className="w-full h-full object-cover rounded-3xl"
//           src="/bento-grid/3.png"
//           width={400}
//           height={400}
//           alt="Stack 1"
//         />
//       </div>

//       {/* Quote or social style block */}
//       <div className="col-span-3 row-span-4  rounded-3xl">
//         <Image
//           className="w-full h-full object-cover rounded-3xl"
//           src="/bento-grid/4.png"
//           width={400}
//           height={400}
//           alt="Stack 2"
//         />
//       </div>

//       {/* Bottom three small items */}
//       <div className="col-span-2 row-span-4">
//         <Image
//           className="w-full h-full object-cover rounded-3xl"
//           src="/bento-grid/5.png"
//           width={400}
//           height={400}
//           alt="Myth"
//         />
//       </div>

//       <div className="col-span-2 row-span-4">
//         <Image
//           className="w-full h-full object-cover rounded-3xl"
//           src="/bento-grid/6.png"
//           width={400}
//           height={400}
//           alt="Product"
//         />
//       </div>

//       <div className="col-span-2 row-span-4">
//         <Image
//           className="w-full h-full object-cover rounded-3xl"
//           src="/bento-grid/7.png"
//           width={400}
//           height={400}
//           alt="Family"
//         />
//       </div>
//     </div>
//   );
// };

// export default BentoGrid;


'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BentoGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    { src: "/bento-grid/5.png", alt: "Myth" },
    { src: "/bento-grid/6.png", alt: "Product" },
    { src: "/bento-grid/7.png", alt: "Family" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="py-8 px-6 md:px-16">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-6 auto-rows-[80px] gap-4">
        {/* Top wide video/image */}
        <div className="col-span-4 row-span-5">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/bento-grid/1.png"
            alt="Main visual"
          />
        </div>
        
        {/* Billboard style image */}
        <div className="col-span-2 row-span-5">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/bento-grid/2.png"
            alt="Billboard"
          />
        </div>
        
        {/* Small stacked images */}
        <div className="col-span-3 row-span-4">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/bento-grid/3.png"
            alt="Stack 1"
          />
        </div>
        
        {/* Quote or social style block */}
        <div className="col-span-3 row-span-4">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/bento-grid/4.png"
            alt="Stack 2"
          />
        </div>
        
        {/* Bottom three small items */}
        <div className="col-span-2 row-span-4">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/bento-grid/5.png"
            alt="Myth"
          />
        </div>
        
        <div className="col-span-2 row-span-4">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/bento-grid/6.png"
            alt="Product"
          />
        </div>
        
        <div className="col-span-2 row-span-4">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/bento-grid/7.png"
            alt="Family"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Row 1: Full width image */}
        <div className="w-full aspect-[4/3]">
          <img
            className="w-full h-full object-fill rounded-3xl"
            src="/bento-grid/1.png"
            alt="Main visual"
          />
        </div>

        {/* Row 2: Two images side by side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square">
            <img
              className="w-full h-full object-fill rounded-3xl"
              src="/bento-grid/4.png"
              alt="Stack 1"
            />
          </div>
          <div className="aspect-square">
            <img
              className="w-full h-full object-fill rounded-3xl"
              src="/bento-grid/2.png"
              alt="Billboard"
            />
          </div>
        </div>

        {/* Row 3: Full width image */}
        <div className="w-full aspect-[4/3]">
          <img
            className="w-full h-full object-fill rounded-3xl"
            src="/bento-grid/3.png"
            alt="Stack 2"
          />
        </div>

        {/* Row 4: Carousel */}
        <div className="relative w-full aspect-[4/3]">
          <img
            className="w-full h-full object-fill rounded-3xl"
            src={carouselImages[currentSlide].src}
            alt={carouselImages[currentSlide].alt}
          />
          
          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white w-6'
                    : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const BentoGrid = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const carouselImages = [
    { src: "/bento-grid/card-5.png", alt: "Myth" },
    { src: "/bento-grid/card-6.png", alt: "Product" },
    { src: "/bento-grid/7.png", alt: "Family" }
  ];

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  // Auto-play functionality
  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [carouselImages.length]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    stopAutoPlay();
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    // Calculate drag offset for visual feedback
    const offset = currentTouch - touchStart;
    setDragOffset(offset);
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    setDragOffset(0);
    
    if (!touchStart || !touchEnd) {
      startAutoPlay();
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }
    
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    }
    
    // Restart auto-play after swipe
    startAutoPlay();
  };

  const nextSlide = () => {
    stopAutoPlay();
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    startAutoPlay();
  };

  const prevSlide = () => {
    stopAutoPlay();
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    startAutoPlay();
  };

  return (
    <div className="py-8 px-6 md:px-16">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-6 auto-rows-[80px] gap-4">
        {/* Top wide video/image */}
        <div className="col-span-4 row-span-5">
          <div className="relative w-full h-full aspect-[16/9]">
            <Image src="/bento-grid/1.png" alt="Wellness image" fill className="object-cover rounded-4xl" />
          </div>
        </div>
        
        {/* Billboard style image */}
        <div className="col-span-2 row-span-5">
          <div className="relative w-full h-full aspect-square">
            <Image src="/bento-grid/2.png" alt="Wellness image" fill className="object-cover rounded-4xl" />
          </div>
        </div>
        
        {/* Small stacked images */}
        <div className="col-span-3 row-span-4">
          <div className="relative w-full aspect-video">
            <Image src="/bento-grid/3.png" alt="Wellness image" fill className="object-cover rounded-4xl" />
          </div>
        </div>
        
        {/* Quote or social style block */}
        <div className="col-span-3 row-span-4">
          <div className="relative w-full aspect-video">
            <Image src="/bento-grid/card-4.png" alt="Stack 4" fill className="object-cover rounded-4xl" />
          </div>
        </div>
        
        {/* Bottom three small items */}
        <div className="col-span-2 row-span-4">
          <div className="relative w-full h-full aspect-square">
            <Image src="/bento-grid/card-5.png" alt="Stack 5" fill className="object-cover rounded-4xl" />
          </div>
        </div>
        
        <div className="col-span-2 row-span-4">
          <div className="relative w-full h-full aspect-square">
            <Image src="/bento-grid/card-6.png" alt="Stack 6" fill className="object-cover rounded-4xl" />
          </div>
        </div>
        
        <div className="col-span-2 row-span-4">
          <div className="relative w-full h-full aspect-square">
            <Image src="/bento-grid/7.png" alt="Stack 7" fill className="object-cover rounded-4xl" />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Row 1: Full width image */}
        <div className="w-full aspect-[4/3]">
          <div className="relative w-full h-full aspect-video">
            <Image src="/bento-grid/m1.png" alt="Mobile 1" fill className="object-cover rounded-3xl" />
          </div>
        </div>

        {/* Row 2: Two images side by side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square">
            <div className="relative w-full aspect-square">
              <Image src="/bento-grid/mcard-4.png" alt="Mobile card 4" fill className="object-cover rounded-3xl" />
            </div>
          </div>
          <div className="aspect-square">
            <div className="relative w-full aspect-square">
              <Image src="/bento-grid/2.png" alt="Mobile 2" fill className="object-cover rounded-3xl" />
            </div>
          </div>
        </div>

        {/* Row 3: Full width image */}
        <div className="w-full aspect-[4/3]">
          <div className="relative w-full h-full aspect-video">
            <Image src="/bento-grid/m3.png" alt="Mobile 3" fill className="object-cover rounded-3xl" />
          </div>
        </div>

        {/* Row 4: Carousel with Swipe */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <div 
              className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
              style={{ 
                transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`,
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative w-full aspect-square">
                    <Image 
                      src={image.src}
                      alt={image.alt} 
                      fill 
                      className="object-cover rounded-4xl pointer-events-none" 
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  stopAutoPlay();
                  setCurrentSlide(index);
                  startAutoPlay();
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-gray-800 w-6'
                    : 'bg-gray-800/40'
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
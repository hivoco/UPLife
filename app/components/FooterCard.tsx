


'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function FooterCard() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [touchStart, setTouchStart] = useState<number>(0)
  const [touchEnd, setTouchEnd] = useState<number>(0)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [dragOffset, setDragOffset] = useState<number>(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  
  const allImages = [
    '/t2.png',
    '/r1.png',
    '/r2.png',
    '/r3.png',
    '/r4.png',
    '/t2.png'
  ]

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50

  // Auto-play functionality
  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length)
    }, 3000)
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [allImages.length])

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    stopAutoPlay()
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentTouch = e.targetTouches[0].clientX
    setTouchEnd(currentTouch)
    
    // Calculate drag offset for visual feedback
    const offset = currentTouch - touchStart
    setDragOffset(offset)
  }

  const onTouchEnd = () => {
    setIsDragging(false)
    setDragOffset(0)
    
    if (!touchStart || !touchEnd) {
      startAutoPlay()
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % allImages.length)
    }
    
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
    }
    
    // Restart auto-play after swipe
    startAutoPlay()
  }

  const prevSlide = () => {
    stopAutoPlay()
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
    startAutoPlay()
  }

  const nextSlide = () => {
    stopAutoPlay()
    setCurrentIndex((prev) => (prev + 1) % allImages.length)
    startAutoPlay()
  }

  return (
    <div className='text-white container mx-auto px-6 pb-12 md:pb-40 md:px-16 w-full '>
      <h6 className='text-[27px] md:text-5xl font-normal pb-1'>Wellness That Fits Life</h6>
      <p className='text-base md:text-2xl font-light'>Everyday vitality made simple, guided by research and real life.</p>
      
      {/* Mobile Carousel with Swipe - visible below md breakpoint */}
      <div className="md:hidden mt-12 relative">
        <div className="relative overflow-hidden">
          <div 
            className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
            style={{ 
              transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {allImages.map((src, index) => (
              <div key={index} className="min-w-full px-2">
                <div className="relative w-full aspect-square">
                  <Image 
                    src={src} 
                    alt={`Wellness image ${index + 1}`} 
                    fill 
                    className="object-cover rounded-3xl pointer-events-none" 
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoPlay()
                setCurrentIndex(index)
                startAutoPlay()
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? 'bg-white w-6' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid - visible at md breakpoint and above */}
      <div className="hidden md:block">
        {/* Row 1 */}
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 mt-12">
          <div className="relative w-full aspect-[16/9]">
            <Image src="/t2.png" alt="Wellness image" fill className="object-cover rounded-4xl" />
          </div>
          <div className="relative w-full aspect-square">
            <Image src="/r1.png" alt="Wellness image" fill className="object-cover rounded-4xl" />
          </div>
          <div className="relative w-full aspect-square">
            <Image src="/r2.png" alt="Wellness image" fill className="object-cover rounded-4xl" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[1fr_1fr_2fr] gap-4 mt-4">
          <div className="relative w-full aspect-square">
            <Image src="/r3.png" alt="Wellness image" fill className="object-cover rounded-4xl" />
          </div>
          <div className="relative w-full aspect-square">
            <Image src="/r4.png" alt="Wellness image" fill className="object-cover rounded-4xl" />
          </div>
          <div className="relative w-full aspect-[16/9]">
            <Image src="/t2.png" alt="Wellness image" fill className="object-cover rounded-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCard
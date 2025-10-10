// import Image from 'next/image'
// import React from 'react'

// function FooterCard() {
//     return (

//         <div className=' text-white container mx-auto px-6 pb-40 md:px-16 w-full'>
           
//             <h6 className='text-[27px] md:text-5xl font-normal pb-1'>Wellness That Fits Life</h6>
//             <p className=' text-base md:text-2xl font-light'>Everyday vitality made simple, guided by research and real life.</p>
//             <div className="grid grid-cols-[2fr_1.5fr_1.5fr]  gap-4 mt-12">
//                 <div className="">
//                     <div className="relative w-full h-72">
//                         <Image src="/t2.png" alt="My image" fill className="object-fill" />
//                     </div>
//                 </div>
//                <div className="">
//                     <div className="relative w-full h-72">
//                         <Image src="/r1.png" alt="My image" fill className="object-fill" />
//                     </div>
//                 </div>
//                 <div className="">
//                     <div className="relative w-full h-72">
//                         <Image src="/r2.png" alt="My image" fill className="object-fill" />
//                     </div>
//                 </div>

            
//             </div>
//             <div className="grid grid-cols-[1.5fr_1.5fr_2fr]  gap-4 mt-4">
//                <div className="">
//                     <div className="relative w-full h-72">
//                         <Image src="/r3.png" alt="My image" fill className="object-fill" />
//                     </div>
//                 </div>
//                 <div className="">
//                     <div className="relative w-full h-72">
//                         <Image src="/r4.png" alt="My image" fill className="object-fill" />
//                     </div>
//                 </div>
//                 <div className="">
//                     <div className="relative w-full h-72">
//                         <Image src="/t2.png" alt="My image" fill className="object-fill" />
//                     </div>
//                 </div>

                
            
//             </div>
//         </div>


//     )
// }

// export default FooterCard


'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function FooterCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const allImages = [
    '/t2.png',
    '/r1.png',
    '/r2.png',
    '/r3.png',
    '/r4.png',
    '/t2.png'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [allImages.length])

  return (
    <div className='text-white container mx-auto px-6 pb-12 md:pb-40 md:px-16 w-full '>
      <h6 className='text-[27px] md:text-5xl font-normal pb-1'>Wellness That Fits Life</h6>
      <p className='text-base md:text-2xl font-light'>Everyday vitality made simple, guided by research and real life.</p>
      
      {/* Mobile Carousel - visible below md breakpoint */}
      <div className="md:hidden mt-12 relative overflow-hidden ">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {allImages.map((src, index) => (
            <div key={index} className="min-w-full px-2">
              <div className="relative w-full h-72">
                <Image src={src} alt={`Wellness image ${index + 1}`} fill className="object-fill " />
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
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
        <div className="grid grid-cols-[2fr_1.5fr_1.5fr] gap-4 mt-12">
          <div className="">
            <div className="relative w-full h-72">
              <Image src="/t2.png" alt="Wellness image" fill className="object-fill" />
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-72">
              <Image src="/r1.png" alt="Wellness image" fill className="object-fill" />
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-72">
              <Image src="/r2.png" alt="Wellness image" fill className="object-fill" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1.5fr_1.5fr_2fr] gap-4 mt-4">
          <div className="">
            <div className="relative w-full h-72">
              <Image src="/r3.png" alt="Wellness image" fill className="object-fill" />
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-72">
              <Image src="/r4.png" alt="Wellness image" fill className="object-fill" />
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-72">
              <Image src="/t2.png" alt="Wellness image" fill className="object-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCard
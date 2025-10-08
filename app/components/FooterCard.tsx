import Image from 'next/image'
import React from 'react'

function FooterCard() {
    return (

        <div className=' text-white container mx-auto px-6 pb-40 md:px-16 w-full'>
           
            <h6 className='text-5xl font-normal pb-1'>Wellness That Fits Life</h6>
            <p className='text-2xl font-light'>Everyday vitality made simple, guided by research and real life.</p>

            {/* <div className="grid grid-cols-4 gap-4 mt-12">

                <div className=" border col-span-2 ...">
                    <div className="relative w-full h-72">  
                        <Image
                            src="/t2.png"
                            alt="My image"
                            fill={true}
                            className="object-fill"
                        />
                    </div>
                </div>
                <div className=" border ...">02</div>
                <div className=" border ...">03</div>


                <div className=" border ...">05</div>
                <div className=" border ...">06</div>
                <div className=" border col-span-2 ...">04</div>

            </div> */}


            <div className="grid grid-cols-[2fr_1.5fr_1.5fr]  gap-4 mt-12">
                <div className="">
                    <div className="relative w-full h-72">
                        <Image src="/t2.png" alt="My image" fill className="object-fill" />
                    </div>
                </div>
               <div className="">
                    <div className="relative w-full h-72">
                        <Image src="/r1.png" alt="My image" fill className="object-fill" />
                    </div>
                </div>
                <div className="">
                    <div className="relative w-full h-72">
                        <Image src="/r2.png" alt="My image" fill className="object-fill" />
                    </div>
                </div>

            
            </div>
            <div className="grid grid-cols-[1.5fr_1.5fr_2fr]  gap-4 mt-4">
               <div className="">
                    <div className="relative w-full h-72">
                        <Image src="/r3.png" alt="My image" fill className="object-fill" />
                    </div>
                </div>
                <div className="">
                    <div className="relative w-full h-72">
                        <Image src="/r4.png" alt="My image" fill className="object-fill" />
                    </div>
                </div>
                <div className="">
                    <div className="relative w-full h-72">
                        <Image src="/t2.png" alt="My image" fill className="object-fill" />
                    </div>
                </div>

                
            
            </div>
        </div>


    )
}

export default FooterCard
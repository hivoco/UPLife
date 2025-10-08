import Image from "next/image";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-6 auto-rows-[80px] gap-4 py-8  px-6  md:px-16">
      {/* Top wide video/image */}
      <div className="col-span-4 row-span-5">
        <Image
          className="w-full h-full object-cover rounded-3xl"
          src="/bento-grid/1.png"
          width={800}
          height={600}
          alt="Main visual"
          quality={100}
        />
      </div>

      {/* Billboard style image */}
      <div className="col-span-2 row-span-5">
        <Image
          className="w-full h-full object-cover rounded-3xl"
          src="/bento-grid/2.png"
          width={300}
          height={300}
          alt="Billboard"
          quality={100}
        />
      </div>

      {/* Small stacked images */}
      <div className="col-span-3 row-span-4 flex flex-col gap-4">
        <Image
          className="w-full h-full object-cover rounded-3xl"
          src="/bento-grid/3.png"
          width={300}
          height={300}
          alt="Stack 1"
          quality={100}
        />
      </div>

      {/* Quote or social style block */}
      <div className="col-span-3 row-span-4  rounded-3xl">
        <Image
          className="w-full h-full object-cover rounded-3xl"
          src="/bento-grid/4.png"
          width={300}
          height={300}
          alt="Stack 2"
          quality={100}
        />
      </div>

      {/* Bottom three small items */}
      <div className="col-span-2 row-span-4">
        <Image
          className="w-full h-full object-cover rounded-3xl"
          src="/bento-grid/5.png"
          width={300}
          height={300}
          alt="Myth"
          quality={100}
        />
      </div>

      <div className="col-span-2 row-span-4">
        <Image
          className="w-full h-full object-cover rounded-3xl"
          src="/bento-grid/6.png"
          width={300}
          height={300}
          alt="Product"
          quality={100}
        />
      </div>

      <div className="col-span-2 row-span-4">
        <Image
          className="w-full h-full object-cover rounded-3xl"
          src="/bento-grid/7.png"
          width={300}
          height={300}
          alt="Family"
          quality={100}
        />
      </div>
    </div>
  );
};

export default BentoGrid;

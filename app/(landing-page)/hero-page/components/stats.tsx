import React from "react";

export default function Stats() {
  return (
    <section className=" ">
      <div className=" uppercase text-[14px] m-16 grid gap-2 justify-center lg:flex">
        <div className="flex items-center justify-center gap-7 ">
          <div className="space-x-4">
            <span className="font-bold">height</span>
            <span className="font-extralight">5&rdquo;9&rdquo;</span>
          </div>
          <div className="space-x-4">
            <span className="font-bold">bust</span>
            <span className="font-extralight">24</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          <div className="space-x-4">
            <span className="font-bold">waist</span>
            <span className="font-extralight">26</span>
          </div>
          <div className="space-x-4">
            <span className="font-bold">hips</span>
            <span className="font-extralight">36</span>
          </div>
          <div className="space-x-4">
            <span className="font-bold">shoe</span>
            <span className="font-extralight">39</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-7 ">
          <div className="space-x-4">
            <span className="font-bold">hair</span>
            <span className="font-extralight">Black</span>
          </div>
          <div className="space-x-4">
            <span className="font-bold">eyes</span>
            <span className="font-extralight">black</span>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[70vh] bg-bgImage1 bg-cover bg-no-repeat bg-center   ">
        {/* <Image
          src={babe4}
          className="w-full h-[35vh] lg:h-[60vh] object-cover  "
          alt="stats"
          width={300}
          height={200}
        /> */}

        <div className="uppercase lg:text-[44px] text-2xl absolute  z-10 right-5 bottom-20 flex  flex-col justify-center  items-center gap-5">
          <p className="font-extrabold text-[52px]">my work</p>
          {/* <ArrowRight /> */}
          <span className="font-thin">view portfolio</span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      </div>
      <div className="mt-10 mx-5 flex gap-5 justify-center ">
        <video
          autoPlay
          loop
          muted
          className=" w-[22%] h-[33vh] lg:h-[70vh] object-cover"
        >
          <source src="/girl2.MOV" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className=" w-[22%] h-[33vh] lg:h-[70vh] object-cover mt-20 "
        >
          <source src="/girl1.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className=" w-[22%] h-[33vh] lg:h-[70vh] object-cover"
        >
          <source src="/girl2.MOV" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className=" w-[22%] h-[33vh] lg:h-[70vh] object-cover mt-20 "
        >
          <source src="/girl1.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

{
  /* <div>
          <h1 className="uppercase relative bottom-36 lg:bottom- text-[32px] z-10 lg:text-7xl  font-extrabold text-center tracking-tighter">
            View instagram
          </h1>
        </div> */
}

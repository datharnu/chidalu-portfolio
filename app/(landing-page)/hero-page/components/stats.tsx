"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Stats() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);

    // Simulate a loading delay before navigating
    setTimeout(() => {
      router.push("/portfolio");
    }, 1000); // 1 second delay for the loading screen
  };
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

      {loading && (
        <div className="fixed inset-0 bg-black opacity-50 z-20 flex justify-center items-center">
          <div className="loader">Loading...</div>
        </div>
      )}
      <div
        onClick={handleClick}
        className="relative w-full cursor-pointer h-[70vh] bg-bgImage1 bg-cover bg-no-repeat bg-center   "
      >
        <div className="uppercase  lg:text-[44px] text-2xl absolute  z-10 right-5 bottom-20 flex  flex-col justify-center  items-center lg:gap-5">
          <p className="font-extrabold lg:text-[52px] text-3xl">my work</p>
          {/* <ArrowRight /> */}
          <span className="font-extrabold text-sm lg:text-2xl  mr-20 ">
            view portfolio
          </span>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      </div>

      <a href="https://www.instagram.com/chidaluobiakwala/" className=" ">
        <div className="mt-20 mx-5 flex gap-5 justify-center cursor-pointer ">
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
        <div className="uppercase relative bottom-20   z-10   font-extrabold text-center tracking-tighter">
          <h1 className="text-[32px] lg:text-7xl">My World</h1>
          <span className="font-thin">view Instagram</span>
        </div>
      </a>
    </section>
  );
}

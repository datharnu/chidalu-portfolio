import Navbar from "@/components/shared/navbar";

import React from "react";
import Stats from "./components/stats";

export default function HeroPage() {
  return (
    <div className=" mb-20">
      <Navbar />
      {/* hero video */}
      <div className="relative w-full h-[33vh] lg:h-[70vh]">
        <video autoPlay loop muted className=" w-full h-full object-cover">
          <source src="/hero-video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div> */}
        <div>
          <h1 className="uppercase relative bottom-36 lg:bottom- text-[32px] z-10 lg:text-7xl  font-extrabold text-center tracking-tighter">
            Rose Obiakwala
          </h1>
        </div>
        <div className="uppercase z-10 lg:-mt-[20px] flex items-center justify-between lg:justify-center mx-2 gap-5 relative bottom-28 text-[12px] font-extrabold text-center">
          <p>portfolio</p>
          <p>instagram</p>
          <p>digitals</p>
          <p>video</p>
          <p>shows</p>
        </div>
      </div>
      {/* stats */}
      <Stats />
    </div>
  );
}
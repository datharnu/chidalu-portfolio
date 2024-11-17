import React from "react";
import Stats from "./components/stats";
import OptimizedVideo from "./components/optimised-video";

export default function HeroPage() {
  return (
    <div className=" mb-20">
      {/* hero video */}
      <div className="relative w-full h-[33vh] lg:h-[70vh]">
        {/* <video autoPlay loop muted className=" w-full h-full object-cover">
          <source src="./IMG_0137.MOV" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <OptimizedVideo src="/IMG_0137.MOV" posterImage="/babe33.JPG" />
        <div>
          <h1 className="uppercase relative bottom-36 lg:bottom- text-[32px] z-10 lg:text-7xl  font-extrabold text-center tracking-tighter">
            Rose Obiakwala
          </h1>
        </div>
        <div className="uppercase z-10 lg:-mt-[20px] flex items-center justify-between lg:justify-center mx-2 gap-5 relative bottom-28 text-[12px] font-extrabold text-center">
          <a href="/portfolio">
            <p>portfolio</p>
          </a>
          <a href="https://www.instagram.com/chidaluobiakwala/">
            <p>instagram</p>
          </a>
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

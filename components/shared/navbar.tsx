import React from "react";
import { Equal, Instagram } from "lucide-react";
import ArrowLeft from "../icons/ArrowLeft";

export default function Navbar() {
  return (
    <div className="p-2 lg:border-0 lg:px-10 lg:pt-5 border-b-[1px] border-gray-500 fixed top-0 left-0 z-10 w-full">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <ArrowLeft width={30} height={30} className="text-white" />
          <span className="uppercase font-bold lg:text-3xl"></span>
        </div>
        <div className="flex items-center gap-5 lg:gap-20">
          <Instagram className="size-7" />

          <Equal className="size-10" />
        </div>
      </section>
    </div>
  );
}

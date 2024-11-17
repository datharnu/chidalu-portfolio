"use client";
import React from "react";
import { Equal, Instagram } from "lucide-react";
import ArrowLeft from "../icons/ArrowLeft";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push("/"); // fallback to home if no history
    }
  };

  // Only show back button if not on home page
  const showBackButton = pathname !== "/";

  return (
    <div className="p-2 lg:border-0 lg:px-10 lg:pt-5 border-b-[1px] border-gray-500 fixed top-0 left-0 z-10 w-full ">
      <section className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-5">
          {showBackButton && (
            <button
              onClick={handleBack}
              className="group hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
              aria-label="Go back"
            >
              <ArrowLeft
                width={30}
                height={30}
                className="text-white group-hover:text-gray-300 transition-colors duration-200"
              />
            </button>
          )}
          <span className="uppercase font-bold lg:text-3xl"></span>
        </div>

        <Link
          href="https://www.instagram.com/chidaluobiakwala/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 lg:gap-20"
        >
          <Instagram className="size-7 hover:scale-110 hover:text-gray-300 transition-all duration-200" />
          <Equal className="size-10 hover:scale-110 hover:text-gray-300 transition-all duration-200" />
        </Link>
      </section>
    </div>
  );
}

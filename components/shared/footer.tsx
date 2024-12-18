import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="lg:mx-10 mx-5 text-sm font-thin text-gray-400 lg:flex items-center gap-10 pb-10">
      <Link href="/" className="hover:text-blue-500 hover:underline">
        <h1>Privacy Policy</h1>
      </Link>

      <Link href="/" className="hover:text-blue-500 hover:underline">
        <h1>Cookie Privacy</h1>
      </Link>

      <Link href="/" className="hover:text-blue-500 hover:underline">
        <h1>Scouting Privacy</h1>
      </Link>

      <Link href="/" className="hover:text-blue-500 hover:underline">
        <h1>Talent Guidelines and Resources</h1>
      </Link>

      <Link href="/" className="hover:text-blue-500 hover:underline">
        <h1>Booking Conditions</h1>
      </Link>
    </div>
  );
}

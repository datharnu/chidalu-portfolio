import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import React from "react";

export default function HomePagelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

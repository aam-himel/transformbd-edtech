import Navbar from "@/components/layout/Navbar";
import React from "react";

export default function SpecialOfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="relative bg-animated bg-gradient-to-br from-[#e81c24] via-slate-950 to-[#f90212] text-white">
        <div className="">
          {children}
        </div>
      </div>
    </div >
  );
}

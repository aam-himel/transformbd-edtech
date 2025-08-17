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
            <div className=" bg-gray-950 text-white">
                <div className=" max-w-[1140px] mx-auto">
                    {children}
                </div>
            </div>

        </div>
    );
}

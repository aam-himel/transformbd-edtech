// import Footer from '@/components/layout/Footer'
// import Navbar from '@/components/layout/Navbar'
// import React from 'react'

// export default function CourseDetails() {
//   return (
//     <div>
//       <Navbar />

//       <Footer />
//     </div>
//   )
// }


"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseHeroSection from "@/components/course-details/CourseHeroSection";

export default function CourseDetails() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="bg-[#0F172A] text-white">
        <CourseHeroSection />
      </div>
      <Footer />
    </div>
  );
}




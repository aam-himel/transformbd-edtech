"use client";

import Footer from "@/components/layout/Footer";
import CourseHeroSection from "@/components/course-details/CourseHeroSection";
import Navbar from "@/components/layout/Navbar";
import { useEffect } from "react";

export default function CourseDetails() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-animated bg-gradient-to-br from-[#e81c24] via-slate-950 to-[#f90212] text-white">
        <CourseHeroSection />
      </div>
      <Footer />
    </div>
  );
}




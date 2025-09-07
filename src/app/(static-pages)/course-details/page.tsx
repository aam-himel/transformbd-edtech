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


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseHeroSection from "@/components/course-details/CourseHeroSection";

export default function CourseDetails() {

  return (
    <div>
      <Navbar />
      <div className="bg-white text-slate-900">
        <CourseHeroSection />
      </div>
      <Footer />
    </div>
  );
}




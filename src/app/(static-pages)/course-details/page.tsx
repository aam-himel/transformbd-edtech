

import Footer from "@/components/layout/Footer";
import CourseHeroSection from "@/components/course-details/CourseHeroSection";
import Navbar from "@/components/layout/Navbar";

export default function CourseDetails() {

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




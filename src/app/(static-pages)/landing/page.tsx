"use client";

import CourseFacilities from "@/components/landing/CourseFacilities";
import HeroSection from "@/components/landing/HeroSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { useCourseStore } from "@/store/courseStore";
import React from "react";

const LandingPage = () => {
  // Courses are available globally via useCourseStore() 
  // and are already fetched by CoursesProvider in the root layout
  const { courses } = useCourseStore();
  const featuredCourses = courses?.filter(course => course.preview_homepage === "0")
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CourseFacilities courses={featuredCourses} />
        {/* <BannerLarge /> */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

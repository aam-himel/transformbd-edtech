'use client'
import BannerLarge from '@/components/landing/BannerLarge';
import CourseDemoCards from '@/components/landing/CourseDemoCards';
import CourseFacilities from '@/components/landing/CourseFacilities';
import HeroSection from '@/components/landing/HeroSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useCourseStore } from '@/store/courseStore';
import { ICoursesResponse } from '@/types/api';
import React, { useEffect } from 'react';

const LandingPage = () => {
  const { setCourses } = useCourseStore();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchData = async () => {
    const res = await fetch('https://course.transformbd.com/api/courses');
    const data: ICoursesResponse = await res.json();
    setCourses(data.data);

  }
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CourseDemoCards />
      <CourseFacilities />
      <BannerLarge />
      <Footer />
    </div>
  );
};

export default LandingPage;

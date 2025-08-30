import BannerLarge from '@/components/landing/BannerLarge';
import CourseDemoCards from '@/components/landing/CourseDemoCards';
import CourseFacilities from '@/components/landing/CourseFacilities';
import HeroSection from '@/components/landing/HeroSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import React from 'react';

const LandingPage = () => {
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

'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const HeroSection = () => {
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);
  const handleOfflineCourse = () => {
    setIsOfflineModalOpen(true);
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden hero-gradient-bg noise-overlay">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main red orb - animated */}
        <div className="orb orb-red w-[600px] h-[600px] -top-20 left-1/4 animate-blob opacity-60"></div>

        {/* Secondary orange orb */}
        <div className="orb orb-orange w-[400px] h-[400px] top-1/2 right-0 animate-blob-delay-2 opacity-50"></div>

        {/* Purple accent orb */}
        <div className="orb orb-purple w-[500px] h-[500px] bottom-0 left-0 animate-blob-delay-4 opacity-40"></div>

        {/* Small floating accent */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#EE1B24]/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>

      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 relative z-10 flex flex-col justify-center min-h-[85vh] md:min-h-[90vh]">
        {/* Headline with enhanced styling */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-float-slow">
            <span className="w-2 h-2 bg-[#EE1B24] rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white/80">Transform Your Future Today</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[.8] tracking-tight">
            Start Your Learning
            <span className="block text-gradient-animate mt-2 pb-4">
              Journey Here
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Empowering learners with world-class offline & online programs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/courses"
              className="group relative px-8 py-4 bg-[#EE1B24] hover:bg-[#d11920] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(238,27,36,0.3)] flex items-center gap-2"
            >
              <span>Explore Courses</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button
              onClick={handleOfflineCourse}
              className="px-8 py-4 glass-card hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>Offline Programs</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards with glassmorphic design */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 - Online Courses */}
          <Link href="/courses" className="group">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden glass-card-dark card-hover-lift glow-red-sm">
              <Image
                src="/images/landing/online.gif"
                alt="Online Courses"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating label */}
              <div className="absolute bottom-4 left-4 right-4 glass-card px-4 py-3 rounded-xl opacity-10 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-white font-semibold flex items-center justify-between">
                  <span>Online Courses</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2 - Offline Courses */}
          <div
            onClick={handleOfflineCourse}
            className="group cursor-pointer"
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden glass-card-dark card-hover-lift">
              <Image
                src="/images/landing/offline.gif"
                alt="Offline Courses"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating label */}
              <div className="absolute bottom-4 left-4 right-4 glass-card px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-white font-semibold flex items-center justify-between">
                  <span>Offline Programs</span>
                  <span className="text-xs bg-[#EE1B24]/80 px-2 py-1 rounded-full">Coming Soon</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: '10K+', label: 'Active Students' },
            { value: '50+', label: 'Expert Instructors' },
            { value: '100+', label: 'Courses' },
            { value: '95%', label: 'Success Rate' },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-4 md:p-6 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>

      <Dialog open={isOfflineModalOpen} onOpenChange={setIsOfflineModalOpen}>
        <DialogContent className="py-8 glass-card-light">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">Coming Soon</DialogTitle>
            <DialogDescription>
              Offline courses are not available yet. Stay tuned for updates!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;

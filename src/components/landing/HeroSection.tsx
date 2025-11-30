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
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Subtle gradient background - less red, more neutral */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.03)_0%,_transparent_50%)]'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(238,27,36,0.08)_0%,_transparent_40%)]'></div>

      {/* Single subtle accent orb */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EE1B24]/5 rounded-full blur-[200px]'></div>

      {/* Grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

      <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-20 relative z-10">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Start Your Learning
            <span className="block text-[#EE1B24] mt-1">
              Journey Here
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Empowering learners with world-class offline & online programs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 - Online Courses */}
          <Link href="/courses" className="group">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-xl">
              <Image
                src="/images/landing/online.gif"
                alt="Online Courses"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
          </Link>

          {/* Card 2 - Offline Courses */}
          <div
            onClick={handleOfflineCourse}
            className="group cursor-pointer"
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-xl">
              <Image
                src="/images/landing/offline.gif"
                alt="Offline Courses"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <Dialog open={isOfflineModalOpen} onOpenChange={setIsOfflineModalOpen}>
          <DialogContent className="py-8">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold">Coming Soon</DialogTitle>
              <DialogDescription>
                Offline courses are not available yet. Stay tuned for updates!
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default HeroSection;

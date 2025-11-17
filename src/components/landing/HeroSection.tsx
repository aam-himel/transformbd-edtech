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
    <div className="relative bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-[1140px] mx-auto px-6 py-6 md:pt-16 md:pb-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#EE1B24]  via-[#151216] to-[#EE1B24] via-30% bg-clip-text text-transparent">
            Start Your Learning Journey Here
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering learners with world-class offline & online programs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Link href="/courses">
            <div className="relative rounded-xl transition bg-[#0d0103] border border-gray-200 py-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/banner11.jpeg"
                  alt="Online Courses"
                  fill
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <div onClick={handleOfflineCourse} className="cursor-pointer relative rounded-xl transition bg-[#da802e] border border-gray-200 py-2 flex items-center justify-center">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/images/banner11.png"
                alt="Offline Courses"
                fill
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        <Dialog open={isOfflineModalOpen} onOpenChange={setIsOfflineModalOpen}>
          <DialogContent className="py-8">
            <DialogHeader>
              <DialogTitle className="text-4xl font-bold">Coming Soon</DialogTitle>
              <DialogDescription>
                Offline courses are not available yet. Stay tuned for updates!
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default HeroSection;

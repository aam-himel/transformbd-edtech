"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ICourse } from '@/types/api'
import { useAuth } from '@/hooks/useAuth'
import ProfileDropdown from '../auth/ProfileDropdown'
import { useCourseStore } from '@/store/courseStore'

// Menu data with Bangla content
const menuData = {
  classMenu: {
    title: 'Class 6-12',
    items: [
      { icon: '🎓', label: 'HSC', href: '/courses/hsc', color: 'bg-purple-100' },
      { icon: '🔟', label: 'Class 10', href: '/courses/class-10', color: 'bg-yellow-100' },
      { icon: '9️⃣', label: 'Class 9', href: '/courses/class-9', color: 'bg-green-100' },
      { icon: '8️⃣', label: 'Class 8', href: '/courses/class-8', color: 'bg-blue-100' },
      { icon: '7️⃣', label: 'Class 7', href: '/courses/class-7', color: 'bg-yellow-50' },
      { icon: '6️⃣', label: 'Class 6', href: '/courses/class-6', color: 'bg-orange-100' },
    ]
  },
  skillsMenu: {
    title: 'স্কিলস',
    items: [
      { icon: '💼', label: 'ফ্রিল্যান্সিং', href: '/skills/freelancing', color: 'bg-blue-100' },
      { icon: '💻', label: 'ওয়েব ডেভেলপমেন্ট', href: '/skills/web-development', color: 'bg-purple-100' },
      { icon: '📱', label: 'অ্যাপ ডেভেলপমেন্ট', href: '/skills/app-development', color: 'bg-green-100' },
      { icon: '🎨', label: 'গ্রাফিক ডিজাইন', href: '/skills/graphic-design', color: 'bg-pink-100' },
      { icon: '📈', label: 'ডিজিটাল মার্কেটিং', href: '/skills/digital-marketing', color: 'bg-orange-100' },
      { icon: '🗣️', label: 'ইংরেজি শেখা', href: '/skills/english', color: 'bg-yellow-100' },
    ]
  },
  jobPrepMenu: {
    title: 'জব প্রস্তুতি',
    items: [
      { icon: '🏛️', label: 'বিসিএস প্রস্তুতি', href: '/job-prep/bcs', color: 'bg-red-100' },
      { icon: '🏦', label: 'ব্যাংক জব', href: '/job-prep/bank', color: 'bg-green-100' },
      { icon: '📝', label: 'প্রাইমারি শিক্ষক', href: '/job-prep/primary-teacher', color: 'bg-blue-100' },
      { icon: '🎖️', label: 'সরকারি চাকরি', href: '/job-prep/govt-job', color: 'bg-purple-100' },
      { icon: '🏢', label: 'বেসরকারি চাকরি', href: '/job-prep/private-job', color: 'bg-orange-100' },
    ]
  }
};

// Dropdown component
const HoverDropdown = ({ title, items }: { title: string; items: typeof menuData.classMenu.items; isScrolled?: boolean }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-[#EE1B24] hover:bg-gray-100">
        {title}
        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white/98 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <span className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-lg shadow-sm`}>
                {item.icon}
              </span>
              <span className="text-gray-800 font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Online Courses Dropdown component with matching style
const OnlineCoursesDropdown = ({ courses }: { courses: ICourse[]; isScrolled?: boolean }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-[#EE1B24] hover:bg-gray-100">
        Online Courses
        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 p-4 w-[320px] sm:w-[380px]">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Online Courses</h3>
            <p className="text-xs text-gray-500">Learn at your own pace from anywhere</p>
          </div>
          <div className="space-y-2 max-h-[320px] overflow-y-auto">
            {courses && courses.slice(0, 5).map((course: ICourse) => (
              <Link
                key={course.course_id}
                href={`/courses/${course.course_id}`}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
              >
                {/* Image Container */}
                <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                  <Image
                    src={course.featured_image_url || '/images/course-placeholder.png'}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-800 group-hover/item:text-[#EE1B24] transition-colors text-sm line-clamp-2">
                    {course.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <Link
              href="/courses"
              className="text-[#EE1B24] hover:text-red-600 font-medium text-sm flex items-center gap-1 group/link"
            >
              View all courses
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const { isAuthenticated } = useAuth();
  const { courses } = useCourseStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white shadow-lg border-b border-gray-200/50'
        : 'bg-white/95 backdrop-blur-md shadow-sm'
        }`}>
        <div className='flex items-center h-[72px] justify-between max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/'>
              <Image
                src='/images/logo.svg'
                alt='logo'
                width={160}
                height={80}
                className='w-32 sm:w-40 lg:w-44 h-auto transition-all duration-300'
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-1 xl:space-x-2'>
            {/* Home Link */}
            <Link href="/" className='px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 text-gray-700 hover:text-[#EE1B24] hover:bg-gray-100'>
              Home
            </Link>

            {/* About Link */}
            <Link href="/about" className='px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 text-gray-700 hover:text-[#EE1B24] hover:bg-gray-100'>
              About
            </Link>

            {/* Dropdown Menus */}
            <HoverDropdown title={menuData.classMenu.title} items={menuData.classMenu.items} isScrolled={true} />

            {/* Online Courses Dropdown */}
            <OnlineCoursesDropdown courses={courses || []} isScrolled={true} />
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 rounded-lg transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Contact & CTA */}
          <div className='hidden sm:flex items-center gap-3 lg:gap-4'>
            <div className='hidden md:flex space-x-2 items-center px-3 py-1.5 rounded-lg transition-colors text-gray-600 bg-gray-100'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
              </svg>
              <span className='text-sm font-medium'>01723329440</span>
            </div>

            {/* Show Profile Dropdown if authenticated, otherwise show Join Us button */}
            {isAuthenticated ? (
              <ProfileDropdown />
            ) : (
              <Link href="/signup" className='px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#EE1B24] hover:bg-[#d11920] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25'>
                Join Us
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div className={`absolute top-[72px] left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}>
          <div className='max-w-[1200px] mx-auto px-6 py-6'>
            <div className='flex flex-col space-y-2'>
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className='px-4 py-3 text-gray-700 hover:text-[#EE1B24] hover:bg-gray-100 rounded-lg font-medium transition-colors'
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className='px-4 py-3 text-gray-700 hover:text-[#EE1B24] hover:bg-gray-100 rounded-lg font-medium transition-colors'
              >
                About
              </Link>
              <Link
                href="/courses"
                onClick={() => setIsMobileMenuOpen(false)}
                className='px-4 py-3 text-gray-700 hover:text-[#EE1B24] hover:bg-gray-100 rounded-lg font-medium transition-colors'
              >
                Online Courses
              </Link>

              {/* Class Menu Items */}
              <div className='pt-2 border-t border-gray-200'>
                <p className='px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider'>Classes</p>
                {menuData.classMenu.items.slice(0, 4).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-[#EE1B24] hover:bg-gray-50 rounded-lg transition-colors'
                  >
                    <span className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center text-base`}>
                      {item.icon}
                    </span>
                    <span className='font-medium'>{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className='pt-4'>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='block w-full px-6 py-3 rounded-xl text-center text-white font-semibold bg-[#EE1B24] hover:bg-[#d11920] transition-colors'
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className='h-[72px]'></div>
    </>
  )
}
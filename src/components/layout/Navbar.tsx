"use client"
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import Image from 'next/image'
import { ICourse } from '@/types/api'
import { useAuth } from '@/hooks/useAuth'
import ProfileDropdown from '../auth/ProfileDropdown'
import { useCourseStore } from '@/store/courseStore'

export default function Navbar() {
  const { isAuthenticated } = useAuth();
  const { courses } = useCourseStore();

  const navLinks = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
  ];

  return (
    <div className='h-[64px] bg-white border-b border-b-gray-500/20 shadow-xs'>
      <div className='flex items-center h-full justify-between max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Link href='/'>
            <Image
              src='/images/logo.svg'
              alt='logo'
              width={160}
              height={80}
              className='w-32 sm:w-40 lg:w-48 h-auto'
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
          {/* Regular Nav Links */}
          <ul className='flex items-center gap-4 xl:gap-6'>
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className='text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base'
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Navigation Menu for Courses */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Online Courses Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-gray-700 hover:text-blue-600 font-medium text-sm xl:text-base'>
                  Online Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent className='left-0 top-0 w-[100vw] sm:w-auto'>
                  <div className="max-w-[90vw] sm:w-[500px] lg:w-[600px] xl:w-[700px] p-4 sm:p-6">
                    <div className="mb-4">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Online Courses</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Learn at your own pace from anywhere</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {courses && courses.slice(0, 5).map((course: ICourse) => (
                        <NavigationMenuLink key={course.course_id} asChild>
                          <Link
                            href={`/courses/${course.course_id}`}
                            className="flex flex-row items-center space-x-3 p-3 rounded-lg border border-gray-200/5 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all group"
                          >
                            {/* Image Container - Left Side */}
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={course.featured_image_url || '/images/course-placeholder.png'}
                                alt={course.title}
                                fill
                                className="object-cover"
                              />
                            </div>

                            {/* Content - Right Side */}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base line-clamp-2">
                                {course.title}
                              </h4>
                              {/* <p className="text-xs text-gray-500 line-clamp-1 mt-1">
                                {course.tagline || course.description}
                              </p> */}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link
                        href="/courses"
                        className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
                      >
                        View all online courses →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Offline Courses Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-gray-700 hover:text-blue-600 font-medium text-sm xl:text-base'>
                  Offline Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent className='left-0 top-0 w-[100vw] sm:w-auto'>

                  <div className="w-full max-w-[50vw] sm:w-[500px] lg:w-[600px] xl:w-[700px] p-4 sm:p-6">
                    <div className="mb-4">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Offline Courses</h3>
                      <p className="text-xs sm:text-sm text-gray-600">In-person intensive programs with direct mentorship</p>
                    </div>
                    <div className=' py-8 pr-8'>
                      <p className='text-green-600'>Offline Courses Coming Soon</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button - You'll need to implement mobile menu */}
        <div className='lg:hidden'>
          <button className='p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Contact & CTA */}
        <div className='hidden sm:flex items-center gap-2 lg:gap-4'>
          <div className='hidden md:flex space-x-1 items-center text-gray-600'>
            <Image src={'/images/phone.svg'} alt='phone' width={18} height={18} />
            <span className='text-xs lg:text-sm font-medium'>01723329440</span>
          </div>

          {/* Show Profile Dropdown if authenticated, otherwise show Join Us button */}
          {isAuthenticated ? (
            <ProfileDropdown />
          ) : (
            <Link href="/signup" className='px-3 py-2 lg:px-6 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold bg-[#EE1B24] hover:bg-[#EE1B24]/90 text-white transition-colors duration-200 transform hover:scale-105'>
              Join Us
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
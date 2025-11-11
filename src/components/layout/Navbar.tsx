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
import { Button } from '../ui/button'
import Image from 'next/image'
import { BookOpen, Users, Clock, MapPin } from 'lucide-react'
import { useCourses } from '@/hooks/useCourses'
import { ICourse } from '@/types/api'

export default function Navbar() {
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

  const offlineCourses = [
    {
      id: 1,
      title: 'Full-Stack Bootcamp',
      description: 'Intensive 6-month program with job placement',
      image: '/images/bootcamp.jpg',
      location: 'New York',
      duration: '6 months',
      href: '/course-details'
    },
    {
      id: 2,
      title: 'UI/UX Design Workshop',
      description: 'Hands-on design thinking and prototyping',
      image: '/images/uiux-workshop.jpg',
      location: 'San Francisco',
      duration: '3 weeks',
      href: '/course-details'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Build iOS and Android apps from scratch',
      image: '/images/mobile-dev.jpg',
      location: 'Austin',
      duration: '4 months',
      href: '/course-details'
    },
    {
      id: 4,
      title: 'DevOps & Cloud Computing',
      description: 'Learn AWS, Docker, and deployment strategies',
      image: '/images/devops.jpg',
      location: 'Seattle',
      duration: '8 weeks',
      href: '/course-details'
    }
  ];

  const { data: courses } = useCourses();

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
                  <div className="w-full max-w-[90vw] sm:w-[600px] lg:w-[700px] xl:w-[800px] p-4 sm:p-6">
                    <div className="mb-4">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Online Courses</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Learn at your own pace from anywhere</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {courses && courses.map((course: ICourse) => (
                        <NavigationMenuLink key={course.course_id} asChild>
                          <Link
                            href={`/courses/${course.course_id}`}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1 text-sm sm:text-base">
                                {course.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                                {course.description}
                              </p>
                              <div className="flex items-center space-x-2 sm:space-x-4 text-xs text-gray-2000">

                                <div className="flex items-center space-x-1">
                                  <Users className="w-3 h-3" />
                                  <span>{course.capacity}</span>
                                </div>
                              </div>
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
                  {/* <div className="w-full max-w-[90vw] sm:w-[600px] lg:w-[700px] xl:w-[800px] p-4 sm:p-6">
                    <div className="mb-4">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Offline Courses</h3>
                      <p className="text-xs sm:text-sm text-gray-600">In-person intensive programs with direct mentorship</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {offlineCourses.map((course) => (
                        <NavigationMenuLink key={course.id} asChild>
                          <Link
                            href={course.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                              <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors mb-1 text-sm sm:text-base">
                                {course.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                                {course.description}
                              </p>
                              <div className="flex items-center space-x-2 sm:space-x-4 text-xs text-gray-2000">
                                <div className="flex items-center space-x-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{course.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{course.duration}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link
                        href="/special-offer"
                        className="text-green-600 hover:text-green-700 font-medium text-xs sm:text-sm"
                      >
                        View all offline courses →
                      </Link>
                    </div>
                  </div> */}
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
            <span className='text-xs lg:text-sm font-medium'>12345678911</span>
          </div>

          <Link href="/signup" className='px-3 py-2 lg:px-6 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold bg-[#EE1B24] hover:bg-[#EE1B24]/90 text-white transition-colors duration-200 transform hover:scale-105'>
            Join Us
          </Link>
        </div>
      </div>
    </div>
  )
}
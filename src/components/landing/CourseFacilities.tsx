import { ICourse } from '@/types/api';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  courses: ICourse[];
}

export default function CourseFacilities({ courses }: Props) {
  return (
    <section className='relative py-20 md:py-28 bg-[#0f0f0f] overflow-hidden noise-overlay'>
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className='orb orb-red w-[500px] h-[500px] top-0 left-1/4 animate-blob-delay-2 opacity-40'></div>
        <div className='orb orb-orange w-[400px] h-[400px] bottom-0 right-1/4 animate-blob opacity-30'></div>
        <div className='orb orb-purple w-[300px] h-[300px] top-1/2 right-0 animate-blob-delay-4 opacity-25'></div>
      </div>

      {/* Grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]'></div>

      <div className='max-w-[1200px] mx-auto px-6 relative z-10'>
        {/* Main container with glassmorphic design */}
        <div className='glass-card-dark rounded-3xl p-8 md:p-12 lg:p-16'>
          {/* Section Header */}
          <div className='text-center mb-12 md:mb-16'>
            <span className='inline-flex items-center gap-2 px-5 py-2 glass-card rounded-full mb-6'>
              <span className='w-2 h-2 bg-[#EE1B24] rounded-full animate-pulse'></span>
              <span className='text-sm font-semibold text-white/80'>Our Courses</span>
            </span>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
              Guided by Experts <br />
              <span className='text-gradient-animate'>
                Designed for Your Growth
              </span>
            </h2>
            <p className='mt-6 text-gray-400 max-w-2xl mx-auto text-lg'>
              Transform your skills with industry-leading courses crafted by professionals
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {courses.map((course) => (
              <Link
                key={course.course_id}
                href={`/courses/${course.course_id}`}
                className='group'
              >
                <div className='flex flex-col h-full glass-card rounded-2xl hover:bg-white/10 card-hover-lift overflow-hidden'>
                  {/* Image Container */}
                  <div className='relative w-full aspect-video overflow-hidden'>
                    <Image
                      src={course.featured_image_url || '/images/course-placeholder.png'}
                      alt={course.title}
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-700'
                      sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    />
                    {/* Hover overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                    {/* Play button overlay */}
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                      <div className='w-14 h-14 rounded-full bg-[#EE1B24]/90 flex items-center justify-center backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform duration-500'>
                        <svg className='w-6 h-6 text-white ml-1' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M8 5v14l11-7z' />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className='flex flex-col flex-1 p-5 md:p-6'>
                    <h3 className='text-lg md:text-xl font-bold text-white mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-[#EE1B24] transition-colors duration-300'>
                      {course.title}
                    </h3>
                    <p className='text-gray-400 text-sm md:text-base line-clamp-3 flex-1 leading-relaxed'>
                      {course.description}
                    </p>

                    {/* CTA */}
                    <div className='mt-5 pt-5 border-t border-white/10 flex items-center justify-between'>
                      <span className='text-sm font-semibold text-[#EE1B24] group-hover:underline'>View Course</span>
                      <div className='w-8 h-8 rounded-full bg-[#EE1B24]/10 group-hover:bg-[#EE1B24] flex items-center justify-center transition-all duration-300'>
                        <svg className='w-4 h-4 text-[#EE1B24] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className='text-center mt-12'>
            <Link
              href="/courses"
              className='inline-flex items-center gap-2 px-8 py-4 bg-[#EE1B24] hover:bg-[#d11920] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(238,27,36,0.3)]'
            >
              <span>View All Courses</span>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

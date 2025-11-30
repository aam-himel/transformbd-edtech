import { ICourse } from '@/types/api';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  courses: ICourse[];
}

export default function CourseFacilities({ courses }: Props) {
  return (
    <section className='relative py-16 md:py-24 bg-[#111111]'>
      {/* Subtle red glow accents */}
      <div className='absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#EE1B24]/8 rounded-full blur-[150px]'></div>
      <div className='absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#EE1B24]/5 rounded-full blur-[120px]'></div>
      
      {/* Subtle grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

      <div className='max-w-[1140px] mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <span className='inline-block px-4 py-1.5 bg-[#EE1B24]/15 text-[#EE1B24] text-sm font-semibold rounded-full mb-4'>
            Our Courses
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
            Guided by Experts <br />
            <span className='text-[#EE1B24]'>
              Designed for Your Growth
            </span>
          </h2>
          <p className='mt-4 text-gray-400 max-w-2xl mx-auto'>
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
              <div className='flex flex-col h-full bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-[#EE1B24]/30 hover:shadow-xl hover:shadow-[#EE1B24]/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden'>
                {/* Image Container */}
                <div className='relative w-full aspect-video overflow-hidden'>
                  <Image
                    src={course.featured_image_url || '/images/course-placeholder.png'}
                    alt={course.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
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
                  <div className='mt-4 pt-4 border-t border-white/10 flex items-center justify-between'>
                    <span className='text-sm font-medium text-[#EE1B24] group-hover:underline'>View Course</span>
                    <svg className='w-5 h-5 text-[#EE1B24] group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

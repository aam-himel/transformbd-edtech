import { ICourse } from '@/types/api';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  courses: ICourse[];
}

export default function CourseFacilities({ courses }: Props) {
  return (
    <div className='max-w-[1140px] mx-auto md:py-16 py-6 px-6'>
      <h2 className='brand-h2 text-center'>Guided by Experts <br />Designed for Your Growth</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-12'>
        {courses.map((course) => (
          <Link
            key={course.course_id}
            href={`/courses/${course.course_id}`}
            className='group'
          >
            <div className='flex flex-col h-full text-center border border-gray-500/10 shadow-sm rounded-lg p-2.5 md:p-6 hover:shadow-lg hover:border-gray-500/20 transition-all duration-300 cursor-pointer'>
              {/* Image Container - Fixed aspect ratio */}
              <div className='relative w-full aspect-square rounded-xl overflow-hidden mb-4'>
                <Image
                  src={course.featured_image_url || '/images/course-placeholder.png'}
                  alt={course.title}
                  fill
                  className='object-cover rounded-xl group-hover:scale-105 transition-transform duration-300'
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                />
              </div>

              {/* Content Container - Consistent spacing */}
              <div className='flex flex-col flex-1'>
                <h3 className='brand-h3 mt-4 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors'>
                  {course.title}
                </h3>
                <p className='text-gray-600 text-sm md:text-base line-clamp-3 flex-1'>
                  {course.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

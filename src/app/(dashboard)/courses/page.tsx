'use client'
import CourseGrid from '@/components/shared/CourseGrid';
import { useCourseStore } from '@/store/courseStore';
import React from 'react'

export default function CourseList() {
  const { courses } = useCourseStore();
  return (
    <div>
      <div className=' py-12'>
        <div className=' flex flex-col gap-4 items-center py-12'>
          <h1 className='text-3xl font-bold text-primary'>স্পেশাল অফার</h1>
          <p>স্পেশাল অফারে এখনি জয়েন করুন আমাদের অন্যান্য কোর্স গুলোতে  </p>
        </div>

        <CourseGrid courses={courses} />
      </div>
    </div>
  )
}

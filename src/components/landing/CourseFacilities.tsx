import { courseFacilitiesData } from '@/app/(static-pages)/landing/data'
import Image from 'next/image'
import React from 'react'

export default function CourseFacilities() {
  return (
    <div className=' max-w-[1140px] mx-auto md:py-16 py-6 px-6'>
      <h2 className='brand-h2 text-center'>Guided by Experts <br />Designed for Your Growth</h2>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-12 '>
        {courseFacilitiesData.map((item, index) => (
          <div key={index} className=' flex flex-col items-center justify-center text-center border border-gray-500/5 rounded-lg p-2.5 md:p-6 hover:shadow-sm'>
            <Image src={item.imagePath} alt='Online Classes' width={300} height={300} className='w-full h-full  rounded-xl' />
            <h3 className='brand-h3 mt-12'>
              {item.title}
            </h3>
            <p className=' text-center'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

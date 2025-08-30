import { courseFacilitiesData } from '@/app/(static-pages)/landing/data'
import Image from 'next/image'
import React from 'react'

export default function CourseFacilities() {
  return (
    <div className=' max-w-[1140px] mx-auto py-24'>
      <h2 className='brand-h2 text-center'>আপনি কী কী সুবিধা পাবেন ?</h2>
      <div className=' grid grid-cols-3 gap-6 mt-12'>
        {courseFacilitiesData.map((item, index) => (
          <div key={index} className=' flex flex-col items-center justify-center text-center border border-gray-500/20 rounded-lg p-8 hover:shadow-sm'>
            <Image src="/images/icon1.svg" alt='Online Classes' width={100} height={100} />
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

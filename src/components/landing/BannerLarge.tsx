import Image from 'next/image'
import React from 'react'

export default function BannerLarge() {
  return (
    <section className='bg-gray-50 py-12 md:py-16'>
      <div className='max-w-[1140px] mx-auto px-6'>
        <div className='relative w-full rounded-2xl overflow-hidden shadow-lg'>
          <Image
            src="/images/banner11.png"
            alt='Online Classes'
            width={1140}
            height={0}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  )
}

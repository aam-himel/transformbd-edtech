import Image from 'next/image'
import React from 'react'

export default function BannerLarge() {
  return (
    <div className=' max-w-[1140px] mx-auto px-6 mb-4 md:mb-12 '>
      <div className=' w-full '>
        <Image src="/images/banner11.png" alt='Online Classes' width={1140} height={0}
          className=' w-full h-full object-cover rounded-lg' />
      </div>
    </div>
  )
}

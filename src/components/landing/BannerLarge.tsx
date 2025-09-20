import Image from 'next/image'
import React from 'react'

export default function BannerLarge() {
  return (
    <div className=' max-w-[1140px] mx-auto'>
      <div className=' w-full min-h-[400px]'>
        <Image src="/images/banner3.jpg" alt='Online Classes' width={1140} height={0}
          className=' w-full h-full object-cover rounded-lg' />
      </div>
    </div>
  )
}

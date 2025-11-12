
import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'

const CourseDemoCards = () => {

  return (
    <div className=' max-w-[1140px] mx-auto px-6 mb-4 md:mb-10'>
      <div className="flex flex-col items-center mb-4 md:mb-10">
        <span className='flex items-center justify-center gap-2 pb-3 text-sm font-medium md:pb-4 md:text-lg'></span>
        <Badge variant='outline' className='text-sm font-medium md:text-lg'>ক্লাস ৬-১০</Badge>
        <p className='mb-2 mt-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] text-[#111827] text-center'>New Horizons of Online Learning</p>
        <p className='mb-7 text-sm font-normal leading-[22px] md:mb-4 md:text-lg md:leading-7 md:tracking-normal text-[#4B5563] max-w-2xl mx-auto text-center'>দেশের যেকোন প্রান্ত থেকে প্রযুক্তির শক্তিতে এগিয়ে যাক শিক্ষার ভবিষ্যৎ, সেরা শিক্ষকদের সঙ্গে নিরবচ্ছিন্ন শেখার যাত্রায়।</p>
      </div>
      <div className=' w-full min-h-auto md:min-h-[400px]'>
        <Image src="/images/banner11.jpeg" alt='Online Classes' width={1140} height={0}
          className=' w-full h-full object-cover rounded-lg' />
      </div>

    </div>
  )
}

export default CourseDemoCards
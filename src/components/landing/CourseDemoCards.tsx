
import Image from 'next/image'
import React from 'react'

const CourseDemoCards = () => {
  const courseDemoData = [
    {
      id: 1,
      title: '',
      description: '',
      thumbnail: '/images/landing/9.png',
    },
    {
      id: 2,
      title: '',
      description: '',
      thumbnail: '/images/landing/10.png',
    },
    {
      id: 3,
      title: '',
      description: '',
      thumbnail: '/images/landing/11.png',
    },
    {
      id: 4,
      title: '',
      description: '',
      thumbnail: '/images/landing/12.png',
    },
    {
      id: 5,
      title: '',
      description: '',
      thumbnail: '/images/landing/13.png',
    },
    {
      id: 6,
      title: '',
      description: '',
      thumbnail: '/images/landing/14.png',
    },
    {
      id: 7,
      title: '',
      description: '',
      thumbnail: '/images/landing/15.png',
    },
    {
      id: 8,
      title: '',
      description: '',
      thumbnail: '/images/landing/16.png',
    },
    {
      id: 9,
      title: '',
      description: '',
      thumbnail: '/images/landing/17.png',
    },
  ]
  return (
    <div className=' max-w-[1140px] mx-auto py-24'>
      <div className="flex flex-col items-center mb-10">
        <span className='flex items-center justify-center gap-2 pb-3 text-sm font-medium md:pb-6 md:text-lg'>ক্লাস ৬-১০</span>
        <p className='mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] text-[#111827]'>বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে? </p>
        <p className='mb-7 text-sm font-normal leading-[22px] md:mb-4 md:text-lg md:leading-7 md:tracking-normal text-[#4B5563]'>সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক পড়াশুনার অগ্রযাত্রা</p>
      </div>
      <div className=' w-full min-h-[400px]'>
        <Image src="/images/banner11.jpeg" alt='Online Classes' width={1140} height={0}
          className=' w-full h-full object-cover rounded-lg' />
      </div>

    </div>
  )
}

export default CourseDemoCards
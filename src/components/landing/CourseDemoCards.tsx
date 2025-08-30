import React from 'react'

const CourseDemoCards = () => {
  return (
    <div className=' max-w-[1140px] mx-auto py-24'>
      <div className="flex flex-col items-center mb-10">
        <span className='flex items-center justify-center gap-2 pb-3 text-sm font-medium md:pb-6 md:text-lg'>ক্লাস ৬-১০</span>
        <p className='mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] text-[#111827]'>বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে? </p>
        <p className='mb-7 text-sm font-normal leading-[22px] md:mb-4 md:text-lg md:leading-7 md:tracking-normal text-[#4B5563]'>সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক পড়াশুনার অগ্রযাত্রা</p>
      </div>
      <div className=' grid grid-cols-3 gap-6'>
        {[1, 2, 3, 4, 5, 6].map((item, index) =>
          <div key={index} className=' min-h-[140px] rounded-sm bg-blue-400'>
          </div>)
        }
      </div>


    </div>
  )
}

export default CourseDemoCards
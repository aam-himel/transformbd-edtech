import React from 'react'

export default function CourseSectionTitle({ title }: { title: string }) {
  return (
    <div className=' flex items-center justify-center w-full'>
      <h2 className='relative mb-12 inline-block bg-primary px-1.5 text-3xl font-bold text-center font-mono tracking-wider text-white uppercase dark:text-sky-300'>
        <span className='absolute inset-0 border border-dashed border-amber-300/90 bg-emerald-400-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30'></span>
        {title}
        <svg
          width='5'
          height='5'
          viewBox='0 0 5 5'
          className='absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50'
        >
          <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
        </svg>
        <svg
          width='5'
          height='5'
          viewBox='0 0 5 5'
          className='absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50'
        >
          <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
        </svg>
        <svg
          width='5'
          height='5'
          viewBox='0 0 5 5'
          className='absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50'
        >
          <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
        </svg>
        <svg
          width='5'
          height='5'
          viewBox='0 0 5 5'
          className='absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50'
        >
          <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
        </svg>
      </h2>
    </div>
  )
}

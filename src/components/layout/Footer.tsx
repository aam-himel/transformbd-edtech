import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='relative bg-[#0a0a0a] overflow-hidden'>
      {/* Subtle gradient orbs */}
      <div className='absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#EE1B24]/5 rounded-full blur-[120px]'></div>
      <div className='absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-[#EE1B24]/3 rounded-full blur-[100px]'></div>

      {/* Grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]'></div>

      <div className='max-w-[1200px] mx-auto pt-12 md:pt-16 pb-8 px-6 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16'>
          {/* col 1 */}
          <div className='mb-6 md:mb-0'>
            <Image src="/images/logo.svg" alt='Transform BD' width={180} height={90} />
            <p className='text-gray-400 mt-4 leading-relaxed'>ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>

            {/* App download buttons placeholder */}
            {/* <div className='flex gap-3 mt-4'>
              <div className='glass-card rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z' />
                </svg>
                <span className='text-xs text-white font-medium'>App Store</span>
              </div>
              <div className='glass-card rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M3.18 20.4c-.23-.09-.52-.27-.52-.8V4.4c0-.53.29-.71.52-.8L12.18 12l-9 8.4zm10.52-7.18l2.19-2.04-2.19-2.04-1.52 1.42c-.29.27-.29.71 0 .98l1.52 1.68zm1.83-6.96L5.15 1.25c-.33-.15-.72.07-.72.45 0 .13.04.26.12.36l8.98 8.36 2-1.86zm.11 11.48l-2.11-1.96-8.88 8.28c-.08.1-.12.23-.12.36 0 .38.39.6.72.45l10.39-5.01v-2.12z' />
                </svg>
                <span className='text-xs text-white font-medium'>Play Store</span>
              </div>
            </div> */}
          </div>

          {/* col 2 */}
          <div>
            <div className='flex gap-12'>
              <div className='flex-1'>
                <h3 className='font-semibold text-white mb-5'>কোর্সসমূহ</h3>
                <ul className='space-y-3'>
                  <li><Link href="/courses" className='text-gray-400 hover:text-[#EE1B24] transition-colors flex items-center gap-2 group'><span className='w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#EE1B24] transition-colors'></span>অনলাইন কোর্স</Link></li>
                  <li><Link href="/courses" className='text-gray-400 hover:text-[#EE1B24] transition-colors flex items-center gap-2 group'><span className='w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#EE1B24] transition-colors'></span>অফলাইন কোর্স</Link></li>
                </ul>
              </div>
              <div className='flex-1'>
                <h3 className='font-semibold text-white mb-5'>অন্যান্য</h3>
                <ul className='space-y-3'>
                  <li><Link href="/about" className='text-gray-400 hover:text-[#EE1B24] transition-colors flex items-center gap-2 group'><span className='w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#EE1B24] transition-colors'></span>আমাদের সম্পর্কে</Link></li>
                  <li><Link href="/privacy-policy" className='text-gray-400 hover:text-[#EE1B24] transition-colors flex items-center gap-2 group'><span className='w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#EE1B24] transition-colors'></span>প্রাইভেসি পলিসি</Link></li>
                  <li><Link href="/terms-and-conditions" className='text-gray-400 hover:text-[#EE1B24] transition-colors flex items-center gap-2 group'><span className='w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#EE1B24] transition-colors'></span>শর্তাবলী এবং নিয়ম</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* col 3 */}
          <div>
            <h3 className='font-semibold text-white mb-5'>আমাদের যোগাযোগ মাধ্যম</h3>
            <div className='glass-card rounded-xl p-4 mb-6'>
              <p className='text-gray-400 text-sm'>কল করুন</p>
              <p className='text-2xl font-bold text-white mt-1'>
                <span className='text-[#EE1B24]'>16910</span>
                <span className='text-sm font-normal text-gray-500 ml-2'>(24x7)</span>
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <a href="https://www.facebook.com/Transformconsultancybd" target="_blank" rel="noopener noreferrer" className='group'>
                <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-[#1877F2] group-hover:text-white group-hover:border-[#1877F2] transition-all duration-300 group-hover:scale-110">
                  <FaFacebookF size={18} />
                </div>
              </a>

              <a href="https://www.youtube.com/@Transform-BD" target="_blank" rel="noopener noreferrer" className='group'>
                <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-[#FF0000] group-hover:text-white group-hover:border-[#FF0000] transition-all duration-300 group-hover:scale-110">
                  <FaYoutube size={18} />
                </div>
              </a>

              <a href="https://www.instagram.com/transform.bd" target="_blank" rel="noopener noreferrer" className='group'>
                <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-gradient-to-tr group-hover:from-[#F58529] group-hover:via-[#DD2A7B] group-hover:to-[#8134AF] group-hover:text-white group-hover:border-transparent transition-all duration-300 group-hover:scale-110">
                  <FaInstagram size={18} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='flex flex-col md:flex-row items-center justify-between w-full pt-8 mt-10 border-t border-white/10'>
          <p className='text-gray-500 text-sm'>Copyright © 2025 Transform BD. All rights reserved.</p>
          <div className='flex items-center gap-6 mt-4 md:mt-0'>
            <Link href="/privacy-policy" className='text-gray-500 hover:text-white text-sm transition-colors'>Privacy</Link>
            <Link href="/terms-and-conditions" className='text-gray-500 hover:text-white text-sm transition-colors'>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

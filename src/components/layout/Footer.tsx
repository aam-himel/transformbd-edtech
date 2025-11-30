import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='bg-white border-t border-gray-200'>
      <div className='max-w-[1140px] mx-auto pt-8 md:pt-12 px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-4'>
          {/* col 1 */}
          <div className='mb-6 md:mb-0'>
            <Image src="/images/logo.svg" alt='Transform BD' width={200} height={100} />
            <p className='text-gray-600 mt-3'>ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
          </div>
          {/* col 2 */}
          <div>
            <div className='flex gap-8'>
              <div className='flex-1'>
                <h3 className='font-semibold text-gray-900 mb-4'>কোর্সসমূহ</h3>
                <ul className='space-y-2'>
                  <li><Link href="/courses" className='text-gray-600 hover:text-[#EE1B24] transition-colors'>অনলাইন কোর্স</Link></li>
                  <li><Link href="/courses" className='text-gray-600 hover:text-[#EE1B24] transition-colors'>অফলাইন কোর্স</Link></li>
                </ul>
              </div>
              <div className='flex-1'>
                <h3 className='font-semibold text-gray-900 mb-4'>অন্যান্য</h3>
                <ul className='space-y-2'>
                  <li><Link href="/about" className='text-gray-600 hover:text-[#EE1B24] transition-colors'>আমাদের সম্পর্কে</Link></li>
                  <li><Link href="/privacy-policy" className='text-gray-600 hover:text-[#EE1B24] transition-colors'>প্রাইভেসি পলিসি</Link></li>
                  <li><Link href="/terms-and-conditions" className='text-gray-600 hover:text-[#EE1B24] transition-colors'>শর্তাবলী এবং নিয়ম</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* col 3 */}
          <div>
            <h3 className='font-semibold text-gray-900 mb-4'>আমাদের যোগাযোগ মাধ্যম</h3>
            <p className='text-gray-600'>কল করুন: <span className='text-[#EE1B24] font-semibold'>16910</span> (24x7)</p>

            <div className="flex items-center space-x-3 mt-6">
              <a href="https://www.facebook.com/Transformconsultancybd" target="_blank" rel="noopener noreferrer">
                <div className="h-10 w-10 rounded-lg bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition">
                  <FaFacebookF size={18} />
                </div>
              </a>

              <a href="https://www.youtube.com/@Transform-BD" target="_blank" rel="noopener noreferrer">
                <div className="h-10 w-10 rounded-lg bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition">
                  <FaYoutube size={18} />
                </div>
              </a>

              <a href="https://www.instagram.com/transform.bd" target="_blank" rel="noopener noreferrer">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white hover:opacity-90 transition">
                  <FaInstagram size={18} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <footer className='flex items-center justify-center w-full py-6 border-t border-gray-200 mt-4'>
          <p className='text-gray-500 text-sm'>Copyright © 2025 Transform BD. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

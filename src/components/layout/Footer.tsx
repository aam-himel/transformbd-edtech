import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className=' max-w-[1140px] mx-auto pt-4 mt-4'>
      <div className=' grid grid-cols-3 py-4'>
        {/* col 1 */}
        <div className=''>
          <Image src="/images/logo.svg" alt='Online Classes' width={200} height={100} />
          <p>ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
        </div>
        {/* col 2 */}
        <div>
          <div className='flex gap-2'>
            <div className='flex-1'>
              <h3 className='brand-subtitle mb-6'>কোর্সসমূহ</h3>
              <ul>
                <Link href="/courses" className='hover:underline'><li>অনলাইন কোর্স</li></Link>
                <Link href="/courses" className='hover:underline'><li>অফলাইন কোর্স</li></Link>
              </ul>
            </div>
            <div className='flex-1'>
              <h3 className='brand-subtitle mb-6'>অন্যান্য</h3>
              <ul>
                <li><Link href="/about" className='hover:underline'>আমাদের সম্পর্কে</Link></li>
                <li><Link href="/privacy-policy" className='hover:underline'>প্রাইভেসি পলিসি </Link></li>
                <li><Link href="/terms-and-conditions" className='hover:underline'>শর্তাবলী এবং নিয়ম</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* col 3 */}
        <div>
          <h3 className='brand-subtitle mb-6'>আমাদের যোগাযোগ মাধ্যম</h3>
          <p>কল করুন: 16910 (24x7)</p>

          <div className="flex items-center space-x-3 mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="h-10 w-10 rounded-lg bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition">
                <FaFacebookF size={18} />
              </div>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="h-10 w-10 rounded-lg bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition">
                <FaYoutube size={18} />
              </div>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white hover:opacity-90 transition">
                <FaInstagram size={18} />
              </div>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="h-10 w-10 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition">
                <FaLinkedin size={18} />
              </div>
            </a>
          </div>

        </div>

      </div>
      <footer className=' flex items-center justify-center w-full py-4 border-t border-gray-500/20'>
        <p>Copyright © 2025 Transform BD. All rights reserved.</p>
      </footer>
    </div>
  )
}

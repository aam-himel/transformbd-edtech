'use client';

import LoginForm from '@/components/auth/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      {/* Left Section - Image */}
      <div className='hidden md:block flex-1 h-full overflow-hidden'>
        <Image
          src='/auth/auth1.jpg'
          alt='Login'
          width={1000}
          height={0}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Right Section - Login Form */}
      <LoginForm />
    </div>
  );
}

'use client';
import OTPInput from '@/components/auth/OTPInput';
import VerifyEmailForm from '@/components/auth/VerifyEmailForm';
import { useAuthStore } from '@/store/authStore';
import Image from 'next/image';

export default function SignUpPage() {
  const step = useAuthStore((s) => s.step);

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      {step === 'verify-email' && <VerifyEmailForm />}
      {step === 'otp' && <OTPInput />}
      <div className='hidden md:block flex-1 h-full overflow-hidden'>
        <Image
          src='/auth/auth1.jpg'
          alt='Signup'
          width={1000}
          height={0}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
}

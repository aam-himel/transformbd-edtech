'use client';
import OTPInput from '@/components/auth/OTPInput';
import RegistrationForm from '@/components/auth/RegistrationForm';
import VerifyEmailForm from '@/components/auth/VerifyEmailForm';
import { useAuthStore } from '@/store/authStore';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SignUpPage() {
  const step = useAuthStore((s) => s.step);

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      {step === 'verify-email' && <VerifyEmailForm />}
      {step === 'otp' && <OTPInput />}
      {step === 'registration-info' && <RegistrationForm />}
      {step === 'complete' && (
        <div className='flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-green-50 to-emerald-50'>
          <div className='w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center'>
            <div className='flex justify-center mb-6'>
              <CheckCircle2 className='w-20 h-20 text-green-500' />
            </div>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Registration Successful! 🎉
            </h2>
            <p className='text-gray-600 mb-8'>
              Your account has been created successfully. You can now explore our courses and start learning!
            </p>
            <Link href='/'>
              <Button className='w-full h-12 text-lg'>
                Go to Homepage
              </Button>
            </Link>
          </div>
        </div>
      )}

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

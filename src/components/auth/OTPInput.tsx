import Image from 'next/image';
import React from 'react';
import { Label } from '../ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { Button } from '../ui/button';
import { useAuthMutations } from '@/hooks/useAuthMutations';
import { useAuthStore } from '@/store/authStore';

const OTPInput = () => {
  const { verifyOTPMutation } = useAuthMutations();
  const { email } = useAuthStore();
  const [inputOTP, setInputOTP] = React.useState('');

  const handleOTPSubmit = () => {
    if (inputOTP.length !== 6) {
      alert('Please enter a valid 6-digit code');
      return;
    }

    const data = {
      email,
      otp: inputOTP,
    };

    verifyOTPMutation.mutate(data);
  };

  return (
    <div className='flex-1 bg-black text-center text-white p-8 md:p-16 flex items-center justify-center'>
      <div className='w-full max-w-md space-y-6'>
        <div className='flex flex-col items-center gap-2'>
          <Image src='/logo.svg' alt='Logo' width={200} height={100} />
          <h2 className='text-3xl font-semibold text-center'>
            Just a bit more step...{' '}
          </h2>
          <p className='text-sm text-center text-gray-300'>
            A code and a verification link will be sent to your register email
            address.
          </p>
        </div>

        {/* otp  */}
        <div className='text-center'>
          <Label className=' inline-block'>Email Verification</Label>
        </div>
        <div className=' flex flex-col text-center gap-4 justify-center items-center'>
          <InputOTP
            maxLength={6}
            value={inputOTP}
            onChange={(value) => setInputOTP(value)}
            onComplete={handleOTPSubmit}
          >
            <InputOTPGroup>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div>
          <Button className='w-full bg-primary text-white'>Continue</Button>
        </div>
        {/* Login Link */}
        <p className='text-sm text-center'>
          Send again within 02:00 min{' '}
          <Button variant='link' className='pl-1'>
            Resend Code
          </Button>
        </p>
      </div>
    </div>
  );
};

export default OTPInput;

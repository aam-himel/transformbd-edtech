import Image from 'next/image';
import React from 'react';
import { Label } from '../ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { Button } from '../ui/button';

const OTPInput = () => {
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
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
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

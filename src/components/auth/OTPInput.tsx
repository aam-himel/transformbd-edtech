import Image from 'next/image';
import React from 'react';
import { Label } from '../ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { Button } from '../ui/button';
import { useAuthMutations } from '@/hooks/useAuthMutations';
import { useAuthStore } from '@/store/authStore';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const OTPInput = () => {
  const { verifyOTPMutation } = useAuthMutations();
  const { email } = useAuthStore();
  const [inputOTP, setInputOTP] = React.useState('');

  const handleOTPSubmit = () => {
    if (inputOTP.length !== 5) {
      toast.error('Please enter a valid 5-digit code');
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
            A code has been sent to your registered email address: <strong>{email}</strong>
          </p>
        </div>

        {/* otp  */}
        <div className='text-center'>
          <Label className=' inline-block'>Email Verification</Label>
        </div>
        <div className=' flex flex-col text-center gap-4 justify-center items-center'>
          <InputOTP
            maxLength={5}
            value={inputOTP}
            onChange={(value) => setInputOTP(value)}
          >
            <InputOTPGroup>
              {[0, 1, 2, 3, 4].map((i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div>
          <Button
            className='w-full bg-primary text-white'
            onClick={handleOTPSubmit}
            disabled={verifyOTPMutation.isPending || inputOTP.length !== 5}
          >
            {verifyOTPMutation.isPending ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Verifying...
              </>
            ) : (
              'Continue'
            )}
          </Button>
        </div>
        {/* Login Link */}
        <p className='text-sm text-center'>
          Didn&apos;t receive the code?{' '}
          <Button variant='link' className='pl-1 text-primary'>
            Resend Code
          </Button>
        </p>
      </div>
    </div>
  );
};

export default OTPInput;

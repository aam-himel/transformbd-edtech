import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

import Image from 'next/image';

export default function SignUpPage() {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      {/* {renderSignUpForm()} */}
      {/* {renderOTPView()} */}
      { renderAfterVerificationView()}

      {/* Right Section */}
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

const renderSignUpForm = () => {
  return (
    <div className='flex-1 bg-black text-white p-8 md:p-16 flex items-center justify-center'>
      <div className='w-full max-w-md space-y-6'>
        <div className='flex flex-col items-center gap-2'>
          <Image src='/logo.svg' alt='Logo' width={200} height={100} />
          <h2 className='text-3xl font-semibold text-center'>
            Join & Upgrade your future through Skill Development
          </h2>
          <p className='text-sm text-center text-gray-300'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>

        {/* Email Input */}
        <div className='space-y-2'>
          <Label htmlFor='email'>Email*</Label>
          <Input
            id='email'
            type='email'
            placeholder='example@gmail.com'
            className='bg-[#101010] border border-[#4A4A4A] placeholder:text-[#878787]'
          />
        </div>

        {/* Buttons */}
        <div className='flex flex-col gap-3 pt-6'>
          <Button className='w-full bg-primary text-white'>Continue</Button>
          <Button
            variant='outline'
            className='w-full bg-transparent border border-gray-500 text-white hover:border-primary hover:bg-transparent'
          >
            <Image
              src='/google.svg'
              alt='Google'
              width={20}
              height={20}
              className='mr-2'
            />
            Register with Google
          </Button>
        </div>

        {/* Login Link */}
        <p className='text-sm text-center'>
          Already have an account?
          <Button variant='link' className='pl-1'>
            Login
          </Button>
        </p>
      </div>
    </div>
  );
};
const renderOTPView = () => {
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

const renderAfterVerificationView = () => {
  return (
     <div className='flex-1 bg-black text-white p-8 md:p-16 flex items-center justify-center'>
      <div className='w-full max-w-md space-y-6'>
        <div className='flex flex-col items-center gap-2'>
          <Image src='/logo.svg' alt='Logo' width={200} height={100} />
          <h2 className='text-3xl font-semibold text-center'>
            Join & Upgrade your future through Skill Development
          </h2>
          <p className='text-sm text-center text-gray-300'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>

        {/* username Input */}
        <div className='space-y-2'>
          <Label htmlFor='username'>* Name</Label>
          <Input
            id='username'
            type='text'
            placeholder='username'
            className='bg-[#101010] border border-[#4A4A4A] placeholder:text-[#878787]'
          />
        </div>
          {/* password */}
        <div className='space-y-2'>
          <Label htmlFor='password'>* Name</Label>
          <Input
            id='password'
            type='password'
            placeholder='password'
            className='bg-[#101010] border border-[#4A4A4A] placeholder:text-[#878787]'
          />
        </div>
          {/* confirm password */}
        <div className='space-y-2'>
          <Label htmlFor='confirmPassword'>* Name</Label>
          <Input
            id='confirmPassword'
            type='password'
            placeholder='confirm password'
            className='bg-[#101010] border border-[#4A4A4A] placeholder:text-[#878787]'
          />
        </div>

        {/* Buttons */}
        <div className='flex flex-col gap-3 pt-2'>
          <Button className='w-full bg-primary text-white'>Getting started</Button>
          <Button
            variant='outline'
            className='w-full bg-transparent border border-gray-500 text-white hover:border-primary hover:bg-transparent'
          >
            <Image
              src='/google.svg'
              alt='Google'
              width={20}
              height={20}
              className='mr-2'
            />
            Register with Google
          </Button>
        </div>

        {/* Login Link */}
        <p className='text-sm text-center'>
          Already have an account?
          <Button variant='link' className='pl-1'>
            Login
          </Button>
        </p>
      </div>
    </div>
  )
}
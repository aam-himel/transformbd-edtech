import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      {/* Left Section */}
      <div className='hidden md:block flex-1 h-full overflow-hidden'>
        <Image
          src='/auth/auth1.jpg'
          alt='Signup'
          width={1000}
          height={0}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Right Section */}
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

          <div className='space-y-2'>
            <Label htmlFor='email'>Email*</Label>
            <Input
              id='email'
              type='email'
              placeholder='example@gmail.com'
              className='bg-[#101010] border border-[#4A4A4A] placeholder:text-[#878787]'
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='password'>Password* </Label>
            <Input
              id='password'
              type='password'
              placeholder='password'
              className='bg-[#101010] border border-[#4A4A4A] placeholder:text-[#878787]'
            />
          </div>

          {/* <p className='text-sm text-center'>
            Forgot password?
            <Button variant='link' className='pl-1 text-base'>
              Reset now
            </Button>
          </p> */}

          {/* Buttons */}
          <div className='flex flex-col gap-3 pt-2'>
            <Button className='w-full bg-primary text-white'>Sign In</Button>
            {/* <Button
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
            </Button> */}
          </div>

          <p className='text-sm text-center'>
            Don’t have an account?
            <Button variant='link' className='pl-1 text-base'>
              <Link href="/signup" className='pl-1'>Register</Link>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

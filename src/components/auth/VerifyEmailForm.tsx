import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useForm } from '@tanstack/react-form';
import { useAuthMutations } from '@/hooks/useAuthMutations';

const VerifyEmailForm = () => {
  const { emailVerifyMutation } = useAuthMutations();
  const { isPending } = emailVerifyMutation;

  const { handleSubmit, Field } = useForm({
    defaultValues: { email: '' },
    onSubmit: async ({ value }) => {
      emailVerifyMutation.mutate(value);
    },
  });
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Field
            name='email'
            validators={{
              onChange: ({ value }) =>
                !value.includes('@') ? 'Invalid email' : undefined,
            }}
          >
            {(field) => (
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='example@gmail.com'
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className='bg-[#101010] border border-[#4A4A4A] placeholder:text-[#878787]'
                />
                {field.state.meta.errors?.[0] && (
                  <p className='text-sm text-red-500'>
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            )}
          </Field>

          {/* Buttons */}
          <div className='flex flex-col gap-3 pt-6'>
            <Button
              type='submit'
              disabled={isPending}
              className='w-full bg-primary text-white'
            >
              {isPending ? 'Submitting...' : 'Continue'}
            </Button>
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
        </form>

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

export default VerifyEmailForm;

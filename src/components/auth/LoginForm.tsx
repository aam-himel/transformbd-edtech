'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { login, fetchUserProfile } from '@/services/authApi';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { IAuthErrorResponse } from '@/types/api';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const setToken = useAuthStore((s) => s.setToken);
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: async (response) => {
      const token = response.data.data.token;
      setToken(token);
      toast.success('Login successful!');

      // Fetch user profile after login
      try {
        const profileResponse = await fetchUserProfile(token);
        setUser(profileResponse.data.data);

        // Redirect to dashboard or home
        setTimeout(() => {
          router.push('/');
        }, 1000);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        toast.error('Login successful but failed to load profile');
        // Still redirect to home
        setTimeout(() => {
          router.push('/');
        }, 1000);
      }
    },
    onError: (err: AxiosError<IAuthErrorResponse>) => {
      if (err.response?.data?.data) {
        const errors = err.response.data.data;
        Object.values(errors).forEach((errorMessages: string[]) => {
          if (Array.isArray(errorMessages)) {
            errorMessages.forEach((msg) => toast.error(msg));
          }
        });
      } else if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };

  return (
    <div className='flex-1 bg-black text-white p-8 md:p-16 flex items-center justify-center'>
      <div className='w-full max-w-md space-y-6'>
        <div className='flex flex-col items-center gap-2'>
          <Image src='/logo.svg' alt='Logo' width={200} height={100} />
          <h2 className='text-3xl font-semibold text-center'>
            Welcome Back!
          </h2>
          <p className='text-sm text-center text-gray-300'>
            Sign in to continue your learning journey
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            {/* Email */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='example@gmail.com'
                      className='bg-[#101010] border border-[#4A4A4A] placeholder:text-[#878787]'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password *</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='••••••••'
                      className='bg-[#101010] border border-[#4A4A4A] placeholder:text-[#878787]'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Forgot Password Link */}
            <div className='text-right'>
              <Link
                href='/forgot-password'
                className='text-sm text-gray-400 hover:text-primary transition-colors'
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type='submit'
              className='w-full bg-primary text-white h-12 text-lg'
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? (
                <>
                  <Loader2 className='mr-2 h-5 w-5 animate-spin' />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </Form>

        {/* Sign Up Link */}
        <p className='text-sm text-center'>
          Don&apos;t have an account?{' '}
          <Link href='/signup' className='text-primary hover:underline font-medium'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

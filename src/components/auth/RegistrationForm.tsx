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
import { useAuthMutations } from '@/hooks/useAuthMutations';
import { useAuthStore } from '@/store/authStore';
import { Loader2 } from 'lucide-react';

const registrationSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    conf_password: z.string().min(6, 'Password must be at least 6 characters'),
    deviceID: z.string().min(1, 'Device ID is required'),
    deviceName: z.string().min(1, 'Device name is required'),
    profession: z.string().min(1, 'Profession is required'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    education: z.string().min(1, 'Education is required'),
    address: z.string().min(1, 'Address is required'),
  })
  .refine((data) => data.password === data.conf_password, {
    message: "Passwords don't match",
    path: ['conf_password'],
  });

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export default function RegistrationForm() {
  const email = useAuthStore((s) => s.email);
  const { registrationMutation } = useAuthMutations();

  // Generate a simple device ID based on browser info
  const getDeviceID = () => {
    const userAgent = navigator.userAgent;
    const hash = userAgent.split('').reduce((acc, char) => {
      return ((acc << 5) - acc) + char.charCodeAt(0);
    }, 0);
    return `DEV${Math.abs(hash).toString(16).toUpperCase().substring(0, 8)}`;
  };

  // Get device name (browser + OS)
  const getDeviceName = () => {
    const userAgent = navigator.userAgent;
    let browserName = 'Unknown Browser';
    let osName = 'Unknown OS';

    if (userAgent.includes('Chrome')) browserName = 'Chrome';
    else if (userAgent.includes('Firefox')) browserName = 'Firefox';
    else if (userAgent.includes('Safari')) browserName = 'Safari';
    else if (userAgent.includes('Edge')) browserName = 'Edge';

    if (userAgent.includes('Windows')) osName = 'Windows';
    else if (userAgent.includes('Mac')) osName = 'Mac';
    else if (userAgent.includes('Linux')) osName = 'Linux';
    else if (userAgent.includes('Android')) osName = 'Android';
    else if (userAgent.includes('iOS')) osName = 'iOS';

    return `${browserName} on ${osName}`;
  };

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: email,
      password: '',
      conf_password: '',
      deviceID: getDeviceID(),
      deviceName: getDeviceName(),
      profession: '',
      phone: '',
      education: '',
      address: '',
    },
  });

  const onSubmit = (data: RegistrationFormValues) => {
    registrationMutation.mutate(data);
  };

  return (
    <div className='flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50'>
      <div className='w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8'>
        <div className='mb-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>
            Complete Your Registration
          </h2>
          <p className='text-gray-600'>
            Fill in your details to create your account
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Name */}
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder='John Doe' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email (read-only) */}
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        {...field}
                        readOnly
                        className='bg-gray-100'
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
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name='conf_password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password *</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='••••••••'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input
                        type='tel'
                        placeholder='+1234567890'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Profession */}
              <FormField
                control={form.control}
                name='profession'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profession *</FormLabel>
                    <FormControl>
                      <Input placeholder='Software Engineer' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Education */}
              <FormField
                control={form.control}
                name='education'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Education *</FormLabel>
                    <FormControl>
                      <Input placeholder='BSc, MSc, etc.' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address */}
              <FormField
                control={form.control}
                name='address'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address *</FormLabel>
                    <FormControl>
                      <Input placeholder='Your address' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Device Info (hidden/readonly) */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60'>
              <FormField
                control={form.control}
                name='deviceID'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Device ID</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly className='bg-gray-100' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='deviceName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Device Name</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly className='bg-gray-100' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type='submit'
              className='w-full h-12 text-lg'
              disabled={registrationMutation.isPending}
            >
              {registrationMutation.isPending ? (
                <>
                  <Loader2 className='mr-2 h-5 w-5 animate-spin' />
                  Creating Account...
                </>
              ) : (
                'Complete Registration'
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

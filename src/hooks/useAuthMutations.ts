import {
  emailVerify,
  verifyOTP,
  completeRegistration,
  fetchUserProfile,
} from '@/services/authApi';
import { useAuthStore } from '@/store/authStore';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { IAuthErrorResponse } from '@/types/api';

export const useAuthMutations = () => {
  const setStep = useAuthStore((s) => s.setStep);
  const setEmail = useAuthStore((s) => s.setEmail);
  const setOtpNumber = useAuthStore((s) => s.setOtpNumber);
  const setToken = useAuthStore((s) => s.setToken);
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  const emailVerifyMutation = useMutation({
    mutationFn: emailVerify,
    onSuccess: (data, variables) => {
      setEmail(variables.email);
      setStep('otp');
      if (!data.data) {
        setOtpNumber(0);
      } else {
        setOtpNumber(data.data);
      }
      toast.success('OTP sent to your email!');
    },
    onError: (err: AxiosError<IAuthErrorResponse>) => {
      // Handle validation errors from API
      if (err.response?.data?.data) {
        const errors = err.response.data.data;
        Object.values(errors).forEach((errorMessages: string[]) => {
          if (Array.isArray(errorMessages)) {
            errorMessages.forEach((msg) => toast.error(msg));
          }
        });
      } else if (err.response?.data?.message) {
        toast.warning(err.response.data.message);
      } else {
        toast.error(err.message || 'An error occurred');
      }
    },
  });

  const verifyOTPMutation = useMutation({
    mutationFn: verifyOTP,
    onSuccess: () => {
      setStep('registration-info');
      toast.success('OTP verified successfully!');
    },
    onError: (err: AxiosError<IAuthErrorResponse>) => {
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Invalid OTP. Please try again.');
      }
    },
  });

  const registrationMutation = useMutation({
    mutationFn: completeRegistration,
    onSuccess: async (response) => {
      const token = response.data.data;
      setToken(token);
      toast.success('Registration successful!');

      // Fetch user profile after registration
      try {
        const profileResponse = await fetchUserProfile(token);
        setUser(profileResponse.data.data);
        setStep('complete');

        // Redirect to dashboard or home
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        toast.error('Registration successful but failed to load profile');
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
        toast.error('Registration failed. Please try again.');
      }
    },
  });

  return {
    emailVerifyMutation,
    verifyOTPMutation,
    registrationMutation,
  };
};

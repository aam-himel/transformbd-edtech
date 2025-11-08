import { emailVerify, signUp, verifyOTP } from '@/services/authApi';
import { useAuthStore } from '@/store/authStore';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useAuthMutations = () => {
  const setStep = useAuthStore((s) => s.setStep);
  const setEmail = useAuthStore((s) => s.setEmail);
  const setOtpNumber = useAuthStore((s) => s.setOtpNumber);

  const emailVerifyMutation = useMutation({
    mutationFn: emailVerify,
    onSuccess: (data, variables) => {
      setEmail(variables.email);
      setStep('otp');
      if (!data.data) {
        setOtpNumber(Number('000000'));
      } else {
        setOtpNumber(data.data);
      }
    },
    onError: (err: any) => {
      // Handle validation errors from API
      if (err.response?.data?.data) {
        const errors = err.response.data.data;
        Object.values(errors).forEach((errorMessages: any) => {
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
    },
  });
  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (_, variables) => {
      setEmail(variables?.email);
      setStep('complete');
    },
  });

  return {
    emailVerifyMutation,
    signUpMutation,
    verifyOTPMutation,
  };
};

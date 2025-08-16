import { emailVerify, signUp, verifyOTP } from '@/services/authApi';
import { useAuthStore } from '@/store/authStore';
import { useMutation } from '@tanstack/react-query';

export const useAuthMutations = () => {
  const setStep = useAuthStore((s) => s.setStep);
  const setEmail = useAuthStore((s) => s.setEmail);

  const emailVerifyMutation = useMutation({
    mutationFn: emailVerify,
    onSuccess: (_, variables) => {
      setEmail(variables.email);
      setStep('otp');
    },
  });

  const verifyOTPMutation = useMutation({
    mutationFn: verifyOTP,
    onSuccess: () => {
      setStep('complete');
    },
  });
  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (_, variables) => {
      setEmail(variables?.email);
      setStep('otp');
    },
  });

  return {
    emailVerifyMutation,
    signUpMutation,
    verifyOTPMutation,
  };
};

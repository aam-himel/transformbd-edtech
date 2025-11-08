import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
interface AuthState {
  email: string;
  otpNumber: number;
  step: 'verify-email' | 'otp' | 'registration-info' | 'complete';
  setEmail: (email: string) => void;
  setOtpNumber: (otpNumber: number) => void;
  setStep: (step: AuthState['step']) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    email: '',
    otpNumber: '00000',
    step: 'verify-email',
    setEmail: (email: string) => set({ email }),
    setOtpNumber: (otpNumber: string) => set({ otpNumber: Number(otpNumber) }),
    setStep: (step: AuthState['step']) => set({ step }),
  }))
);

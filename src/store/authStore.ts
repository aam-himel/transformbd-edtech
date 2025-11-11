import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IUserProfile } from '@/types/api';

interface AuthState {
  email: string;
  otpNumber: number;
  step: 'verify-email' | 'otp' | 'registration-info' | 'complete';
  token: string | null;
  user: IUserProfile | null;
  isAuthenticated: boolean;
  setEmail: (email: string) => void;
  setOtpNumber: (otpNumber: number) => void;
  setStep: (step: AuthState['step']) => void;
  setToken: (token: string | null) => void;
  setUser: (user: IUserProfile | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        email: '',
        otpNumber: 0,
        step: 'verify-email',
        token: null,
        user: null,
        isAuthenticated: false,
        setEmail: (email: string) => set({ email }),
        setOtpNumber: (otpNumber: number) => set({ otpNumber }),
        setStep: (step: AuthState['step']) => set({ step }),
        setToken: (token: string | null) =>
          set({ token, isAuthenticated: !!token }),
        setUser: (user: IUserProfile | null) => set({ user }),
        logout: () =>
          set({
            token: null,
            user: null,
            isAuthenticated: false,
            email: '',
            step: 'verify-email',
          }),
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({
          token: state.token,
          user: state.user,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    )
  )
);

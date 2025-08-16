import { create } from 'zustand';

interface AuthState {
  email: string;
  step: 'verify-email' | 'otp' | 'complete';
  setEmail: (email: string) => void;
  setStep: (step: AuthState['step']) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: '',
  step: 'verify-email',
  setEmail: (email: string) => set({ email }),
  setStep: (step: AuthState['step']) => set({ step }),
}));

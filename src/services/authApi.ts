import { apiconfigs } from '@/lib/apiConfig';
import api from '@/lib/axios';

export const emailVerify = async(data: { email: string }) =>
  api.post(apiconfigs.auth.verifyEmail, JSON.stringify(data));

export const signUp = async(data: { email: string }) =>
  api.post(apiconfigs.auth.register, data);

export const verifyOTP = async(data: { email: string; otp: string }) =>
  api.post(apiconfigs.auth.verifyOTP, data);

// export const completeRegistration = async(data: { email: string; password: string }) =>
//   api.post('/auth/complete', data);

import { apiconfigs } from '@/lib/apiConfig';
import axios from 'axios';
export const emailVerify = async (data: { email: string }) =>
  axios.post(apiconfigs.auth.verifyEmail, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const signUp = async (data: { email: string }) =>
  axios.post(apiconfigs.auth.register, data);

export const verifyOTP = async (data: { email: string; otp: string }) =>
  axios.post(apiconfigs.auth.verifyOTP, data);

// export const completeRegistration = async(data: { email: string; password: string }) =>
//   api.post('/auth/complete', data);

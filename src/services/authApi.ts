import { apiconfigs } from '@/lib/apiConfig';
import {
  ILoginRequest,
  ILoginResponse,
  IRegistrationRequest,
  IRegistrationResponse,
  IUserProfileResponse,
} from '@/types/api';
import axios from 'axios';

export const emailVerify = async (data: { email: string }) =>
  axios.post(apiconfigs.auth.verifyEmail, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const verifyOTP = async (data: { email: string; otp: string }) =>
  axios.post(apiconfigs.auth.verifyOTP, data);

export const completeRegistration = async (data: IRegistrationRequest) =>
  axios.post<IRegistrationResponse>(apiconfigs.auth.register, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const login = async (data: ILoginRequest) =>
  axios.post<ILoginResponse>(apiconfigs.auth.login, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const fetchUserProfile = async (token: string) =>
  axios.get<IUserProfileResponse>(apiconfigs.auth.myProfile, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });

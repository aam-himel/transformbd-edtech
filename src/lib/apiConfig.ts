export const API_BASE_URL = 'https://auth.transformbd.com/api';
export const apiconfigs = {
  baseUrl: API_BASE_URL,
  auth: {
    login: `${API_BASE_URL}/login`,
    register: `${API_BASE_URL}/register`,
    verifyEmail: `${API_BASE_URL}/verifyEmail`,
    verifyOTP: `${API_BASE_URL}/verifyOTP`,
    myProfile: `${API_BASE_URL}/myProfile`,
  },
};

import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor to add authorization token
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const authStorage = localStorage.getItem('auth-storage');
    if (authStorage) {
      try {
        const { state } = JSON.parse(authStorage);
        const token = state?.token;

        if (token) {
          config.headers.Authorization = token;
        }
      } catch (error) {
        console.error('Error parsing auth storage:', error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear auth storage on unauthorized
      localStorage.removeItem('auth-storage');

      // Redirect to login page
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;

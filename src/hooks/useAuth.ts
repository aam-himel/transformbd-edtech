import { useAuthStore } from '@/store/authStore';

/**
 * Custom hook for accessing auth state and methods
 * Provides easy access to user, token, and auth status
 */
export const useAuth = () => {
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const logout = useAuthStore((s) => s.logout);

  return {
    user,
    token,
    isAuthenticated,
    logout,
    isLoading: false, // Can be enhanced later if needed
  };
};

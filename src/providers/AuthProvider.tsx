'use client';

import { useAuthStore } from '@/store/authStore';
import { fetchUserProfile } from '@/services/authApi';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);
  const setToken = useAuthStore((s) => s.setToken);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      // If we have a token but no user data, fetch the profile
      if (token && !user) {
        try {
          const profileResponse = await fetchUserProfile(token);
          setUser(profileResponse.data.data);
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
          // Clear invalid token
          setToken(null);
          toast.error('Session expired. Please login again.');
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, [token, user, setUser, setToken]);

  // Optionally show a loading state while checking auth
  if (isLoading && token) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto'></div>
          <p className='mt-4 text-gray-600'>Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

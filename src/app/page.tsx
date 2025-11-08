'use client'
import { useCourses } from '@/hooks/useCourses';
import LandingPage from './(static-pages)/landing/page';

export default function Home() {
  // Fetch courses in the background for caching
  useCourses();
  return <LandingPage />;
}

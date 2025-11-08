'use client'
import { useEffect } from 'react';
import LandingPage from './(static-pages)/landing/page';
import { useCourseStore } from '@/store/courseStore';
import { ICoursesResponse } from '@/types/api';

export default function Home() {
  const { setCourses } = useCourseStore();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchData = async () => {
    const res = await fetch('https://course.transformbd.com/api/courses');
    const data: ICoursesResponse = await res.json();
    setCourses(data.data);

  }
  return <LandingPage />;
}

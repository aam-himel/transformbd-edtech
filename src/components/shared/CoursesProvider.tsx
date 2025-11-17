"use client";

import { useCourseStore } from "@/store/courseStore";
import { useEffect } from "react";

/**
 * CoursesProvider component that fetches courses on mount and stores them in Zustand
 * This ensures courses are fetched once and available globally
 */
export default function CoursesProvider({ children }: { children: React.ReactNode }) {
  const { fetchCourses, courses } = useCourseStore();

  useEffect(() => {
    // Only fetch if we don't have courses already
    if (courses.length === 0) {
      fetchCourses();
    }
  }, [fetchCourses, courses.length]);

  return <>{children}</>;
}

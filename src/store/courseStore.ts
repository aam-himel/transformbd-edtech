import { ICourse, ICoursesResponse } from '@/types/api';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ICourseState {
  courses: ICourse[];
  isLoading: boolean;
  error: string | null;
  setCourses: (courses: ICourse[]) => void;
  fetchCourses: () => Promise<void>;
}

export const useCourseStore = create<ICourseState>()(
  persist(
    (set) => ({
      courses: [],
      isLoading: false,
      error: null,
      setCourses: (courses: ICourse[]) => set({ courses }),
      fetchCourses: async () => {
        set({ isLoading: true, error: null });
        try {
          const res = await fetch('https://course.transformbd.com/api/courses');
          if (!res.ok) {
            throw new Error('Failed to fetch courses');
          }
          const data: ICoursesResponse = await res.json();
          set({ courses: data.data, isLoading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'An error occurred',
            isLoading: false,
          });
        }
      },
    }),
    {
      name: 'course-store', // name of the item in localStorage
    }
  )
);

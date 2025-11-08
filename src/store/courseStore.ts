import { ICourse } from '@/types/api';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ICourseState {
  courses: ICourse[];
  setCourses: (courses: ICourse[]) => void;
}

export const useCourseStore = create<ICourseState>()(
  persist(
    (set) => ({
      courses: [],
      setCourses: (courses: ICourse[]) => set({ courses }),
    }),
    {
      name: 'course-store', // name of the item in localStorage
    }
  )
);

import { ICourse } from '@/types/api';
import { create } from 'zustand';

interface ICourseState {
  courses: ICourse[];
  setCourses: (courses: ICourse[]) => void;
}

export const useCourseStore = create<ICourseState>((set) => ({
  courses: [],
  setCourses: (courses: ICourse[]) => set({ courses }),
}));

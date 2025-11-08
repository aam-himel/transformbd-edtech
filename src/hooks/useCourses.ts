import { useQuery } from '@tanstack/react-query';
import { ICoursesResponse } from '@/types/api';

export const useCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await fetch('https://course.transformbd.com/api/courses');
      const data: ICoursesResponse = await res.json();
      return data.data;
    },
  });
};

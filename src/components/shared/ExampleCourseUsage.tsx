/**
 * Example: How to use the global course store in any component
 * 
 * The courses are automatically fetched on app load by CoursesProvider
 * and stored in Zustand store with persistence.
 */

import { useCourseStore } from "@/store/courseStore";

export function ExampleCourseUsage() {
  // Access courses from anywhere in your app
  const { courses, isLoading, error } = useCourseStore();

  if (isLoading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Available Courses: {courses.length}</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.course_id}>
            {course.title} - {course.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

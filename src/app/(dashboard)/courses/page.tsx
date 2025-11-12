"use client";
import CourseGrid from "@/components/shared/CourseGrid";
import { useCourses } from "@/hooks/useCourses";
import React from "react";

export default function CourseList() {
  const { data: courses, isLoading, error } = useCourses();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading courses</div>;
  }

  return (
    <div>
      <div className=" py-12">
        <div className=" flex flex-col gap-4 items-center py-12">
          <h1 className="text-3xl font-bold text-primary">অনলাইন কোর্স</h1>
          <p>স্পেশাল অফারে এখনি জয়েন করুন আমাদের অনলাইন কোর্স গুলোতে </p>
        </div>

        <CourseGrid courses={courses} />
      </div>
    </div>
  );
}

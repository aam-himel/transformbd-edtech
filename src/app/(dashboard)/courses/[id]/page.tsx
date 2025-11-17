'use client'
import Footer from "@/components/layout/Footer";
import CourseHeroSection from "@/components/course-details/CourseHeroSection";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Course {
  course_id: number;
  title: string;
  description: string;
  price: string;
  featured_video_url: string | null;
  featured_image_url: string | null;
  tagline: string;
  location: string;
  time: string | null;
  capacity: string;
  type: string;
  preview_homepage: string | null;
  other_information: string | null;
  created_at: string | null;
  updated_at: string | null;
}

interface Instructor {
  account_id: number;
  name: string;
}

interface Module {
  module_id: number;
  course_id: number;
  title: string;
  description: string;
  module_order: number;
  created_at: string | null;
  updated_at: string | null;
}

interface CourseDetailsResponse {
  code: number;
  message: string;
  data: {
    course: Course;
    instructors: Instructor[];
    modules: Module[];
  };
}

export default function CourseDetails() {
  const params = useParams();
  const [courseData, setCourseData] = useState<CourseDetailsResponse['data'] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when page loads or course ID changes
    window.scrollTo({ top: 0, behavior: 'smooth' });

    fetchCourseDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const fetchCourseDetails = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://course.transformbd.com/api/courseDetails/${params.id}`);
      const data: CourseDetailsResponse = await res.json();
      setCourseData(data.data);
    } catch (error) {
      console.error('Error fetching course details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">কোর্স খুঁজে পাওয়া যায়নি</h2>
          <p className="text-gray-600">দুঃখিত, এই কোর্সটি পাওয়া যায়নি।</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <CourseHeroSection
          course={courseData.course}
          instructors={courseData.instructors}
          modules={courseData.modules}
        />
      </div>

      {/* Course Details Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 ">
        {/* Course Description */}
        {courseData?.course?.other_information && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">কোর্সের সুবিধাসমূহ</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-700 text-lg leading-relaxed">{courseData.course.other_information}</p>

            </div>
          </div>
        )}

        {/* Course Description */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">কোর্স সম্পর্কে</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-700 text-lg leading-relaxed">{courseData.course.description}</p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-gray-600">মূল্য</p>
                <p className="text-xl font-bold text-primary">৳{courseData.course.price}</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-gray-600">লোকেশন</p>
                <p className="text-xl font-bold text-slate-700">{courseData.course.location}</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-gray-600">সিট সংখ্যা</p>
                <p className="text-xl font-bold text-slate-700">{courseData.course.capacity}</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-gray-600">টাইপ</p>
                <p className="text-xl font-bold capitalize text-slate-700">{courseData.course.type}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">প্রশিক্ষকগণ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.instructors.map((instructor) => (
              <div key={instructor.account_id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {instructor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-700">{instructor.name}</h3>
                    <p className="text-gray-600">ইন্সট্রাক্টর</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Enroll Button */}
        <div className="text-center py-8">
          <button className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl">
            এখনই ভর্তি হন
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}




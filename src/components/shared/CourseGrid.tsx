import React from 'react';
import { Clock, Users, Star, MapPinned } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    created_at: string | null;
    updated_at: string | null;
}

interface CourseGridProps {
    courses?: Course[];
}

const CourseGrid = ({ courses: apiCourses }: CourseGridProps = {}) => {


    // Transform API courses to match the display format
    const displayCourses = apiCourses || [];

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayCourses.map((course) => (
                        <Link href={`/courses/${course.course_id}`} key={course.course_id} className="block">
                            <div
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                            >
                                {/* Course Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        width={400}
                                        height={200}
                                        src={course.featured_image_url || '/images/course-placeholder.png'}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>


                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.type === 'pre-online' ? 'bg-green-500' : 'bg-red-500'}`}>
                                            {course.type.toUpperCase()}
                                        </span>
                                    </div>

                                    {/* Duration Badge */}
                                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                        <MapPinned className="w-4 h-4 text-slate-800" />
                                        <span className="text-xs text-slate-900 font-medium">{course.location}</span>
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-2 leading-tight">
                                        {course.title}
                                    </h3>

                                    <p className='text-sm text-gray-600 mb-3'>{course.tagline}</p>

                                    {/* Price Section */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-red-600">{course.price}</span>
                                            {/* <span className="text-sm text-gray-600 line-through">{course.price}</span> */}
                                        </div>

                                    </div>


                                    {/* Action Button */}
                                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]">
                                        এনরোল করুন
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseGrid;
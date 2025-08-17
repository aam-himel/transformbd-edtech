import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

const CourseGrid = () => {
    const courses = [
        {
            id: 1,
            title: 'Full Stack Web Development with Python, Django & React',
            category: 'PD26',
            categoryColor: 'bg-emerald-100 text-emerald-700',
            price: '৳৫,৯২০',
            originalPrice: '৳৮,০০০',
            discount: '২৬%',
            duration: '৯ দিন বাকি',
            image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop',
            tech: ['Python', 'Django', 'React']
        },
        {
            id: 2,
            title: 'Full Stack Web Development with ASP.Net Core',
            category: 'ASP35',
            categoryColor: 'bg-blue-100 text-blue-700',
            price: '৳৫,১০০',
            originalPrice: '৳৮,০০০',
            discount: '৩৬%',
            duration: '৮ ঘন্টা বাকি',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
            tech: ['ASP.NET', 'C#', 'SQL Server']
        },
        {
            id: 3,
            title: 'Full Stack Web Development with PHP, Laravel & Vue Js',
            category: 'PHP26',
            categoryColor: 'bg-purple-100 text-purple-700',
            price: '৳৫,৯২০',
            originalPrice: '৳৮,০০০',
            discount: '২৬%',
            duration: '৪ ঘন্টা বাকি',
            image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400&h=200&fit=crop',
            tech: ['PHP', 'Laravel', 'Vue.js']
        },
        {
            id: 4,
            title: 'Mastering DevOps: From Fundamentals to Advanced Practices',
            category: 'DEVOPS',
            categoryColor: 'bg-orange-100 text-orange-700',
            price: '৳৬,৫০০',
            originalPrice: '৳৯,০০০',
            discount: '২৮%',
            duration: '৫ দিন বাকি',
            image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=200&fit=crop',
            tech: ['Docker', 'Kubernetes', 'Jenkins']
        },
        {
            id: 5,
            title: 'SQA Manual & Automated Testing Complete Course',
            category: 'QA42',
            categoryColor: 'bg-yellow-100 text-yellow-700',
            price: '৳৪,৮০০',
            originalPrice: '৳৭,০০০',
            discount: '৩১%',
            duration: '৬ দিন বাকি',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
            tech: ['Selenium', 'TestNG', 'API Testing']
        },
        {
            id: 6,
            title: 'Mastering Python: From Zero to Hero',
            category: 'PY101',
            categoryColor: 'bg-green-100 text-green-700',
            price: '৳৩,৯০০',
            originalPrice: '৳৫,৫০০',
            discount: '২৯%',
            duration: '৭ দিন বাকি',
            image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop',
            tech: ['Python', 'Data Science', 'Machine Learning']
        },
        {
            id: 7,
            title: 'Complete React Native Mobile App Development',
            category: 'RN88',
            categoryColor: 'bg-cyan-100 text-cyan-700',
            price: '৳৫,২০০',
            originalPrice: '৳৭,৫০০',
            discount: '৩১%',
            duration: '৩ দিন বাকি',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
            tech: ['React Native', 'JavaScript', 'Mobile Dev']
        },
        {
            id: 8,
            title: 'Advanced JavaScript & Node.js Backend Development',
            category: 'JS99',
            categoryColor: 'bg-indigo-100 text-indigo-700',
            price: '৳৪,৬০০',
            originalPrice: '৳৬,৮০০',
            discount: '৩২%',
            duration: '২ দিন বাকি',
            image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop',
            tech: ['JavaScript', 'Node.js', 'Express']
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                        >
                            {/* Course Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Tech Stack Overlay */}
                                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                                    {course.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-black/70 text-white text-xs rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.categoryColor}`}>
                                        {course.category}
                                    </span>
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                                    <Clock className="w-3 h-3 text-gray-600" />
                                    <span className="text-xs text-gray-700 font-medium">{course.duration}</span>
                                </div>
                            </div>

                            {/* Course Content */}
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 leading-tight">
                                    {course.title}
                                </h3>

                                {/* Price Section */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-red-600">{course.price}</span>
                                        <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                                    </div>
                                    <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                                        {course.discount}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>১২৫+ শিক্ষার্থী</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                        <span>৪.৮</span>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]">
                                    এনরোল করুন
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseGrid;
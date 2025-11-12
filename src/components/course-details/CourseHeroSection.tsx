'use client';
import React, { useState } from 'react';
import {
    Play,
    X,
    Users,
    Calendar,
    ChevronDown,
    PlayCircle,
    ArrowRight,
} from 'lucide-react';
import InstructorGrid from './InstructorGrid';
import Image from 'next/image';

export type Instructor = {
    id: string;
    name: string;
    title: string;
    avatar: string; // local / public image path or remote URL
    rating?: number; // 0-5
    students?: number;
    tags?: string[];
    links?: {
        website?: string;
        twitter?: string;
        linkedin?: string;
    };
};

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

interface InstructorProp {
    account_id: number;
    name: string;
}

interface ModuleProp {
    module_id: number;
    course_id: number;
    title: string;
    description: string;
    module_order: number;
    created_at: string | null;
    updated_at: string | null;
}

interface CourseHeroSectionProps {
    course?: Course;
    instructors?: InstructorProp[];
    modules?: ModuleProp[];
}

const CourseHeroSection = ({ course, instructors: apiInstructors, modules: apiModules }: CourseHeroSectionProps = {}) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [activeModule, setActiveModule] = useState(0);

    // Dummy YouTube video ID - replace with actual video ID
    const videoId = 'dQw4w9WgXcQ';

    // Use API data if available, otherwise use dummy data
    const modules = apiModules && apiModules.length > 0 ? apiModules.map(m => ({
        id: m.module_id,
        number: `মডিউল ${m.module_order}`,
        title: m.title,
        icon: '📚',
        color: 'bg-orange-500',
        lessons: [m.description],
    })) : []

    const instructors = apiInstructors && apiInstructors.length > 0 ? apiInstructors.map(i => ({
        name: i.name,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        role: 'ইন্সট্রাক্টর',
    })) : [
        {
            name: 'Shadman Rahman',
            avatar:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
            role: 'Senior Product Manager',
        },
        {
            name: 'S M Aliuzzaman Tushar',
            avatar:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
            role: 'Product Strategy Expert',
        },
    ];

    const willLearn: { icon: string, title: string }[] = [
        { icon: '🎯', title: 'প্রোডাক্ট আইডিয়া জেনারেশন টেকনিক' },
        { icon: '🎯', title: 'কম্পিটিটর অ্যানালাইসিস করার পদ্ধতি' },
        { icon: '🎯', title: 'SWOT অ্যানালাইসিস এবং এর প্রয়োগ' },
        { icon: '🎯', title: 'টার্গেট অডিয়েন্স নির্ধারণ' },
    ]



    const toggleModule = (moduleId: number) => {
        setActiveModule(activeModule === moduleId ? 0 : moduleId);
    };

    return (
        <div className='min-h-screen  text-white relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20'></div>
                <div
                    className='absolute inset-0'
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
                    }}
                ></div>
            </div>

            <div className='relative z-10'>
                {/* Main Content */}
                <div className='container mx-auto px-6 py-16 bg-pattern text-white'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        {/* Left Content */}
                        <div className='space-y-8'>
                            {/* Live Badge */}
                            <div className='inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2'>
                                <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse'></div>
                                <span className='text-sm font-medium'>লাইভ কোর্স</span>
                            </div>

                            {/* Title */}
                            <div>
                                <h1 className='text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
                                    {course?.title || 'Digital Product Management'}
                                </h1>
                                <p className='text-lg text-gray-200 leading-relaxed'>
                                    {course?.tagline || course?.description || 'প্রোডাক্ট ম্যানেজমেন্টের ব্যাসিক থেকে অ্যাডভান্সড ক্রিয়েটিভ, মার্কেট অনুগত এক্সপেরিমেন্ট, তার বিশ্লেষণের জন্য সর্বোচ্চ নিয়ে সাজানো ডিজিটাল প্রোডাক্ট ম্যানেজমেন্ট লাইভ কোর্স। ইতালি এক্সপার্টদের ২০ বছরের এক্সপেরিমেন্টেরা থেকে শিখুন প্রোডাক্ট অপটিমাইজেশন থেকে শুরু করে প্রফেবর লঞ্চ পর্যন্ত।'}
                                </p>
                            </div>

                            {/* CTA Button */}
                            <button className='bg-[#EE1B24] hover:bg-[#EE1B24]/90 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105'>
                                পরবর্তী ব্যাচের জন্য বুকিং দিন
                            </button>

                            {/* Stats */}
                            <div className='flex items-center space-x-3 flex-wrap text-sm text-white'>
                                <div className='flex items-center gap-1 bg-slate-800 px-3 py-2 rounded-full'>
                                    <Play className='w-4 h-4 text-green-400' />
                                    <span className=' text-xs inline-block'>লাইভ ক্লাস</span>
                                </div>
                                <div className='flex items-center gap-1 bg-slate-800 px-4 py-2 rounded-full'>
                                    <Users className='w-4 h-4 text-green-400' />
                                    <span className='text-xs inline-block'>তথ্য প্রোজেক্ট সাপোর্ট</span>
                                </div>
                                <div className='flex items-center gap-1 bg-slate-800 px-4 py-2 rounded-full'>
                                    <Calendar className='w-4 h-4 text-green-400' />
                                    <span className='text-xs inline-block'>ক্লাস রেকর্ড এ লাইফটাইম এক্সেস</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Video Section */}
                        <div className='relative'>
                            <div className='bg-gradient-to-r from-[#101828] to-slate-900 rounded-2xl p-6 border border-slate-600/50'>
                                <div className='flex items-center gap-2 mb-4'>
                                    <PlayCircle className='w-5 h-5 text-cyan-400' />
                                    <span className='text-sm font-medium text-white'>
                                        কিভাবে দেখে নিন কোর্সের ডেমো ক্লাস
                                    </span>
                                </div>

                                {/* Video Thumbnail */}
                                <div
                                    className='relative bg-slate-900 rounded-xl overflow-hidden cursor-pointer group'
                                    onClick={() => setIsVideoOpen(true)}
                                >
                                    <div className='aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center'>
                                        <div className='text-center'>
                                            <div className='w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition-colors'>
                                                <Play
                                                    className='w-8 h-8 text-white ml-1'
                                                    fill='currentColor'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className='absolute top-4 right-4 w-12 h-12 border-2 border-white/20 rounded-lg transform rotate-12'></div>
                                    <div className='absolute bottom-4 left-4 w-8 h-8 border-2 border-white/20 rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=' border-[.1px] border-gray-50/10' />
                {/* Curriculum Section */}
                <div className='my-4 md:my-12 '>
                    <div className=' flex items-center justify-center w-full'>
                        <h2 className='relative mb-12 inline-block px-1.5 text-3xl font-bold text-center font-mono tracking-wider text-white uppercase dark:text-sky-300'>
                            <span className='absolute inset-0 border border-dashed border-orange-300/60 bg-emerald-400-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30'></span>
                            কারিকুলাম
                            <svg
                                width='5'
                                height='5'
                                viewBox='0 0 5 5'
                                className='absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50'
                            >
                                <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                            </svg>
                            <svg
                                width='5'
                                height='5'
                                viewBox='0 0 5 5'
                                className='absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50'
                            >
                                <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                            </svg>
                            <svg
                                width='5'
                                height='5'
                                viewBox='0 0 5 5'
                                className='absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50'
                            >
                                <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                            </svg>
                            <svg
                                width='5'
                                height='5'
                                viewBox='0 0 5 5'
                                className='absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50'
                            >
                                <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                            </svg>
                        </h2>
                    </div>
                    {/* Course Module Header */}
                    <div className='text-center mb-12'>
                        <h3 className='text-xl font-semibold text-cyan-400 mb-4'>
                            {course?.title} (Module 1-{modules.length})
                        </h3>

                        {/* Instructors */}
                        <div className='flex items-center justify-center gap-6 text-sm text-gray-300'>
                            <span>কোর্স নিরদেশ:</span>
                            {instructors.map((instructor, index) => (
                                <div key={index} className='flex items-center gap-2'>
                                    {/* <Image
                                        width={32}
                                        height={32}
                                        src={''}
                                        alt={instructor.name}
                                        className='w-8 h-8 rounded-full border-2 border-gray-600 bg-blue-500'
                                    /> */}
                                    <div className='w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center'>
                                        <span className='text-white font-bold'>{instructor.name.charAt(0)}</span>
                                    </div>
                                    <span>{instructor.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modules */}
                    <div className='max-w-4xl mx-auto space-y-4'>
                        {modules.map((module) => (
                            <div
                                key={module.id}
                                className='bg-slate-900 text-white rounded-xl border border-slate-700/50 overflow-hidden'
                            >
                                <button
                                    className='w-full flex items-center justify-between p-6 text-left hover:bg-slate-700/30 transition-colors'
                                    onClick={() => toggleModule(module.id)}
                                >
                                    <div className='flex items-center gap-4'>
                                        <div
                                            className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center text-xl`}
                                        >
                                            {module.icon}
                                        </div>
                                        <div>
                                            <div className='text-sm text-white'>
                                                {module.number}
                                            </div>
                                            <div className='text-lg font-semibold'>
                                                {module.title}
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        className={`w-6 h-6 text-gray-400 transition-transform ${activeModule === module.id ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {activeModule === module.id && (
                                    <div className='px-6 pb-6 pt-2'>
                                        <div className='bg-slate-900/50 rounded-lg p-4'>
                                            <h4 className='font-semibold mb-3 text-cyan-400'>
                                                এই মডিউলে যা শিখবেন:
                                            </h4>
                                            <ul className='space-y-2'>
                                                {module.lessons.map((lesson, index) => (
                                                    <li
                                                        key={index}
                                                        className='flex items-start gap-3 text-gray-300'
                                                    >
                                                        <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0'></div>
                                                        <span>{lesson}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='my-6 md:my-12 max-w-4xl mx-auto space-y-4'>
                    {/* <div className='mb-24'>
                        <InstructorGrid />
                    </div> */}


                    <div className=' py-4 md:py-12'>
                        <div className=' flex items-center justify-center w-full'>
                            <h2 className='relative mb-12 inline-block px-1.5 text-3xl font-bold text-center font-mono tracking-wider text-white uppercase dark:text-sky-300'>
                                <span className='absolute inset-0 border border-dashed border-orange-300/60 bg-emerald-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30'></span>
                                কোর্সটি থেকে কী কী শিখবেন?
                                <svg
                                    width='5'
                                    height='5'
                                    viewBox='0 0 5 5'
                                    className='absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50'
                                >
                                    <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                                </svg>
                                <svg
                                    width='5'
                                    height='5'
                                    viewBox='0 0 5 5'
                                    className='absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50'
                                >
                                    <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                                </svg>
                                <svg
                                    width='5'
                                    height='5'
                                    viewBox='0 0 5 5'
                                    className='absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50'
                                >
                                    <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                                </svg>
                                <svg
                                    width='5'
                                    height='5'
                                    viewBox='0 0 5 5'
                                    className='absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50'
                                >
                                    <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                                </svg>
                            </h2>
                        </div>
                        <div className='grid grid-cols-3 gap-3 p-2'>
                            {willLearn.map((item, index) => (
                                <div key={index} className=' flex items-center gap-2 bg-slate-800 p-2 rounded-sm'>
                                    <ArrowRight className=' bg-green-600' size={20} />
                                    <p className='text-white'>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Video Modal */}
                {isVideoOpen && (
                    <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'>
                        <div className='relative w-full max-w-4xl aspect-video'>
                            <button
                                className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors'
                                onClick={() => setIsVideoOpen(false)}
                            >
                                <X className='w-8 h-8' />
                            </button>
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                className='w-full h-full rounded-lg'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseHeroSection;

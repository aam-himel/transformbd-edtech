import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className='max-w-[1200px] mx-auto py-24 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold text-center mb-8 text-slate-900'>আমাদের সম্পর্কে</h1>

          <div className='prose prose-lg max-w-none'>
            <div className='text-center mb-12'>
              <p className='text-xl text-gray-600 leading-relaxed'>
                TransformBD বাংলাদেশের শীর্ষস্থানীয় অনলাইন শিক্ষা প্ল্যাটফর্ম, যা শিক্ষার্থীদের জন্য আধুনিক এবং মানসম্মত শিক্ষা প্রদান করে।
              </p>
            </div>

            <h2 className='text-2xl font-semibold mb-6 text-slate-900'>আমাদের মিশন</h2>
            <p className='mb-6 text-gray-700 leading-relaxed'>
              আমাদের মিশন হলো বাংলাদেশের প্রতিটি শিক্ষার্থীকে বিশ্বমানের শিক্ষা প্রদান করা। আমরা বিশ্বাস করি যে প্রত্যেকেরই সমান সুযোগ থাকা উচিত শিক্ষা গ্রহণের, এবং প্রযুক্তির মাধ্যমে আমরা সেই সুযোগ তৈরি করে দিচ্ছি।
            </p>

            <h2 className='text-2xl font-semibold mb-6 text-slate-900'>আমাদের ভিশন</h2>
            <p className='mb-6 text-gray-700 leading-relaxed'>
              ২০৩০ সালের মধ্যে বাংলাদেশের সবচেয়ে বড় এবং সবচেয়ে বিশ্বস্ত শিক্ষা প্ল্যাটফর্ম হয়ে উঠা। আমরা চাই যেন কোনো শিক্ষার্থীই অর্থনৈতিক বা ভৌগলিক কারণে শিক্ষা থেকে বঞ্চিত না হয়।
            </p>

            <div className='grid md:grid-cols-2 gap-8 mb-12'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-4 text-slate-900'>আমাদের মূল্যবোধ</h3>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span><strong>মানসম্মত শিক্ষা:</strong> সর্বোচ্চ মানের কনটেন্ট এবং শিক্ষক</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span><strong>সাশ্রয়ী মূল্য:</strong> সকলের নাগালের মধ্যে শিক্ষা</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span><strong>স্বচ্ছতা:</strong> সকল কার্যক্রমে পূর্ণ স্বচ্ছতা</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span><strong>উদ্ভাবন:</strong> শিক্ষায় নতুন প্রযুক্তির ব্যবহার</span>
                  </li>
                </ul>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-4 text-slate-900'>আমাদের সাফল্য</h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-700'>মোট শিক্ষার্থী</span>
                    <span className='font-bold text-slate-900'>৫০,০০০+</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-700'>কোর্স সংখ্যা</span>
                    <span className='font-bold text-slate-900'>২০০+</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-700'>অভিজ্ঞ শিক্ষক</span>
                    <span className='font-bold text-slate-900'>৫০+</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-700'>সন্তুষ্টি রেট</span>
                    <span className='font-bold text-slate-900'>৯৮%</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className='text-2xl font-semibold mb-6 text-slate-900'>আমাদের টিম</h2>
            <p className='mb-6 text-gray-700 leading-relaxed'>
              TransformBD-এর পিছনে রয়েছে একটি অভিজ্ঞ এবং উদ্যমী টিম। আমাদের শিক্ষক এবং প্রযুক্তিবিদরা দেশের শীর্ষ বিশ্ববিদ্যালয় থেকে উচ্চশিক্ষিত এবং বহুবছরের অভিজ্ঞতা সম্পন্ন।
            </p>

            <h2 className='text-2xl font-semibold mb-6 text-slate-900'>যোগাযোগ করুন</h2>
            <p className='mb-6 text-gray-700 leading-relaxed'>
              আপনার কোনো প্রশ্ন বা পরামর্শ থাকলে আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনার সহায়তার জন্য প্রস্তুত।
            </p>

            <div className='bg-gray-50 p-6 rounded-lg'>
              <div className='grid md:grid-cols-3 gap-6 text-center'>
                <div>
                  <h4 className='font-semibold text-slate-900 mb-2'>ফোন</h4>
                  <p className='text-gray-700'>+880 1723 329440</p>
                </div>
                <div>
                  <h4 className='font-semibold text-slate-900 mb-2'>ইমেইল</h4>
                  <p className='text-gray-700'>info@transformbd.com</p>
                </div>
                <div>
                  <h4 className='font-semibold text-slate-900 mb-2'>ঠিকানা</h4>
                  <p className='text-gray-700'>ঢাকা, বাংলাদেশ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

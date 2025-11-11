import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className='max-w-[1200px] mx-auto py-24 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold text-center mb-8 text-slate-900'>প্রাইভেসি পলিসি </h1>

          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-600 mb-6'>
              এই প্রাইভেসি পলিসি  বর্ণনা করে যে কীভাবে TransformBD (এখানে &quot;আমরা&quot;, &quot;আমাদের&quot; বা &quot;TransformBD&quot; হিসেবে উল্লেখিত) আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষা করে যখন আপনি আমাদের ওয়েবসাইট বা পরিষেবা ব্যবহার করেন।
            </p>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>১. তথ্য যা আমরা সংগ্রহ করি</h2>
            <h3 className='text-xl font-medium mb-2'>১.১ ব্যক্তিগত তথ্য</h3>
            <p className='mb-4'>আমরা নিম্নলিখিত ব্যক্তিগত তথ্য সংগ্রহ করতে পারি:</p>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>নাম, ইমেইল ঠিকানা, ফোন নম্বর</li>
              <li>শিক্ষাগত তথ্য এবং যোগ্যতা</li>
              <li>পেমেন্ট তথ্য (যখন কোর্স ক্রয় করেন)</li>
              <li>প্রোফাইল তথ্য এবং ছবি</li>
            </ul>

            <h3 className='text-xl font-medium mb-2'>১.২ স্বয়ংক্রিয়ভাবে সংগৃহীত তথ্য</h3>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>আইপি ঠিকানা এবং অবস্থান তথ্য</li>
              <li>ব্রাউজারের ধরন এবং সংস্করণ</li>
              <li>ওয়েবসাইটে ভিজিটের সময় এবং তারিখ</li>
              <li>পেজ ভিউ এবং ক্লিকের তথ্য</li>
            </ul>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>২. তথ্যের ব্যবহার</h2>
            <p className='mb-4'>আমরা সংগৃহীত তথ্য ব্যবহার করি:</p>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>কোর্স রেজিস্ট্রেশন এবং অ্যাকাউন্ট তৈরি</li>
              <li>পেমেন্ট প্রসেসিং</li>
              <li>শিক্ষা সামগ্রী এবং সার্টিফিকেট প্রদান</li>
              <li>গ্রাহক সেবা এবং সহায়তা</li>
              <li>ওয়েবসাইটের উন্নতি এবং ব্যবহারকারী অভিজ্ঞতা</li>
              <li>আইনি প্রয়োজনীয়তা পূরণ</li>
            </ul>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৩. তথ্য ভাগাভাগি</h2>
            <p className='mb-4'>আমরা আপনার তথ্য ভাগ করি না তৃতীয় পক্ষের সাথে, যদি না:</p>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>আপনার অনুমতি থাকে</li>
              <li>আইন দ্বারা প্রয়োজন হয়</li>
              <li>পরিষেবা প্রদানের জন্য প্রয়োজন (যেমন পেমেন্ট প্রসেসর)</li>
              <li>ব্যবসায়িক লেনদেনের অংশ হিসেবে</li>
            </ul>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৪. তথ্য সুরক্ষা</h2>
            <p className='mb-4'>
              আমরা আপনার তথ্য সুরক্ষার জন্য যুক্তিসঙ্গত প্রযুক্তিগত এবং সাংগঠনিক ব্যবস্থা গ্রহণ করি। তবে, ইন্টারনেটের মাধ্যমে কোনো তথ্য ১০০% নিরাপদ নয়।
            </p>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৫. কুকিজ</h2>
            <p className='mb-4'>
              আমরা কুকিজ ব্যবহার করি ওয়েবসাইটের কার্যকারিতা উন্নত করতে এবং ব্যবহারকারীর অভিজ্ঞতা বাড়াতে। আপনি ব্রাউজার সেটিংস থেকে কুকিজ নিয়ন্ত্রণ করতে পারেন।
            </p>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৬. আপনার অধিকার</h2>
            <p className='mb-4'>আপনার রয়েছে:</p>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>আপনার তথ্য অ্যাক্সেস করার অধিকার</li>
              <li>তথ্য সংশোধন করার অধিকার</li>
              <li>তথ্য মুছে ফেলার অধিকার</li>
              <li>তথ্য প্রসেসিং সীমিত করার অধিকার</li>
            </ul>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৭. যোগাযোগ</h2>
            <p className='mb-4'>
              প্রাইভেসি পলিসি সম্পর্কে প্রশ্ন থাকলে, আমাদের সাথে যোগাযোগ করুন:
            </p>
            <div className='bg-gray-50 p-4 rounded-lg mb-6'>
              <p><strong>ইমেইল:</strong> privacy@transformbd.com</p>
              <p><strong>ফোন:</strong> +880 1234 567890</p>
              <p><strong>ঠিকানা:</strong> ঢাকা, বাংলাদেশ</p>
            </div>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৮. নীতি আপডেট</h2>
            <p className='mb-4'>
              আমরা এই প্রাইভেসি পলিসি যেকোনো সময় আপডেট করতে পারি। পরিবর্তনগুলি এই পেজে প্রকাশিত হবে এবং গুরুত্বপূর্ণ পরিবর্তনের ক্ষেত্রে ইমেইলের মাধ্যমে জানানো হবে।
            </p>

            <p className='text-sm text-gray-500 mt-8'>
              শেষ আপডেট: নভেম্বর ২০২৫
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

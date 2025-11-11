import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import React from 'react'

export default function TermsAndConditions() {
  return (
    <div>
      <Navbar />
      <div className='max-w-[1200px] mx-auto py-24 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold text-center mb-8 text-slate-900'>শর্তাবলী এবং নিয়ম</h1>

          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-600 mb-6'>
              এই শর্তাবলী এবং নিয়ম (&quot;শর্তাবলী&quot;) TransformBD ওয়েবসাইট এবং পরিষেবা ব্যবহারের জন্য প্রযোজ্য। এই শর্তাবলী গ্রহণ করে আপনি এই চুক্তিতে আবদ্ধ হন।
            </p>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>১. সাধারণ শর্তাবলী</h2>
            <p className='mb-4'>
              TransformBD একটি অনলাইন শিক্ষা প্ল্যাটফর্ম যা বিভিন্ন কোর্স এবং শিক্ষা সামগ্রী প্রদান করে। আমাদের পরিষেবা ব্যবহার করে আপনি এই শর্তাবলী মেনে চলতে সম্মত হন।
            </p>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>২. ব্যবহারকারীর যোগ্যতা</h2>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>আপনি অবশ্যই ১৮ বছর বা তার বেশি বয়সী হতে হবে</li>
              <li>অথবা আপনার অভিভাবকের অনুমতি থাকতে হবে</li>
              <li>আপনার অ্যাকাউন্ট তথ্য সঠিক এবং আপ-টু-ডেট রাখতে হবে</li>
              <li>আপনি আইনত এই পরিষেবা ব্যবহার করার যোগ্য হতে হবে</li>
            </ul>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৩. অ্যাকাউন্ট রেজিস্ট্রেশন</h2>
            <p className='mb-4'>কোর্সে এনরোল করার জন্য আপনাকে একটি অ্যাকাউন্ট তৈরি করতে হবে। রেজিস্ট্রেশনের সময়:</p>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>সঠিক তথ্য প্রদান করুন</li>
              <li>একটি শক্তিশালী পাসওয়ার্ড বেছে নিন</li>
              <li>আপনার অ্যাকাউন্টের নিরাপত্তার জন্য দায়ী থাকুন</li>
              <li>অননুমোদিত অ্যাক্সেসের ক্ষেত্রে তাৎক্ষণিকভাবে জানান</li>
            </ul>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৪. কোর্স এনরোলমেন্ট এবং পেমেন্ট</h2>
            <h3 className='text-xl font-medium mb-2'>৪.১ কোর্স ক্রয়</h3>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>সকল কোর্সের মূল্য ওয়েবসাইটে উল্লেখিত</li>
              <li>পেমেন্ট সম্পন্ন হওয়ার পর এনরোলমেন্ট কনফার্ম হয়</li>
              <li>পেমেন্ট ফেরতের নীতি কোর্স অনুসারে ভিন্ন হতে পারে</li>
            </ul>

            <h3 className='text-xl font-medium mb-2'>৪.২ রিফান্ড পলিসি</h3>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>কোর্স শুরু হওয়ার ৭ দিনের মধ্যে রিফান্ডের আবেদন করা যাবে</li>
              <li>রিফান্ড প্রসেসিংয়ে ১৪-৩০ কার্যদিবস লাগতে পারে</li>
              <li>বিশেষ ক্ষেত্রে রিফান্ড নীতি ভিন্ন হতে পারে</li>
            </ul>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৫. ইন্টেলেকচুয়াল প্রপার্টি</h2>
            <p className='mb-4'>
              TransformBD-এর সকল কনটেন্ট, কোর্স ম্যাটেরিয়াল, লোগো এবং ডিজাইন আমাদের বা আমাদের লাইসেন্সধারীদের সম্পত্তি। আপনি:
            </p>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>ব্যক্তিগত ব্যবহারের জন্য কনটেন্ট ডাউনলোড করতে পারেন</li>
              <li>কনটেন্ট কপি, বিতরণ বা বাণিজ্যিক ব্যবহার করতে পারবেন না</li>
              <li>কনটেন্টে থাকা কপিরাইট নোটিশ মুছে ফেলতে পারবেন না</li>
            </ul>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৬. ব্যবহারকারীর আচরণ</h2>
            <p className='mb-4'>আপনি সম্মত যে আপনি:</p>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>পরিষেবাটি আইনসম্মত উদ্দেশ্যে ব্যবহার করবেন</li>
              <li>অন্য ব্যবহারকারীদের সম্মান করবেন</li>
              <li>স্প্যাম বা অশ্লীল কনটেন্ট পোস্ট করবেন না</li>
              <li>পরিষেবার নিরাপত্তা ভঙ্গ করার চেষ্টা করবেন না</li>
              <li>ভুল তথ্য প্রদান করবেন না</li>
            </ul>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৭. পরিষেবা প্রাপ্যতা</h2>
            <p className='mb-4'>
              আমরা পরিষেবার ১০০% আপটাইম গ্যারান্টি দিই না। পরিষেবা মেইনটেনেন্স বা অন্যান্য কারণে সাময়িকভাবে বন্ধ থাকতে পারে।
            </p>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৮. লায়াবিলিটি</h2>
            <p className='mb-4'>
              TransformBD কোনো ক্ষতির জন্য দায়ী নয় যা পরিষেবা ব্যবহার থেকে উদ্ভূত হয়। আমাদের দায়িত্ব সীমিত থাকবে আপনার প্রদত্ত ফি পর্যন্ত।
            </p>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>৯. অ্যাকাউন্ট টার্মিনেশন</h2>
            <p className='mb-4'>
              আমরা যেকোনো সময় আপনার অ্যাকাউন্ট বন্ধ করতে পারি যদি আপনি এই শর্তাবলী লঙ্ঘন করেন। অ্যাকাউন্ট বন্ধ হলে আপনার অ্যাক্সেস বন্ধ হয়ে যাবে।
            </p>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>১০. শর্তাবলী পরিবর্তন</h2>
            <p className='mb-4'>
              আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করতে পারি। পরিবর্তনগুলি ওয়েবসাইটে প্রকাশিত হবে এবং গুরুত্বপূর্ণ পরিবর্তনের ক্ষেত্রে ইমেইলের মাধ্যমে জানানো হবে।
            </p>

            <h2 className='text-2xl font-semibold mb-4 text-slate-900'>১১. যোগাযোগ</h2>
            <p className='mb-4'>
              এই শর্তাবলী সম্পর্কে প্রশ্ন থাকলে যোগাযোগ করুন:
            </p>
            <div className='bg-gray-50 p-4 rounded-lg mb-6'>
              <p><strong>ইমেইল:</strong> legal@transformbd.com</p>
              <p><strong>ফোন:</strong> +880 1234 567890</p>
              <p><strong>ঠিকানা:</strong> ঢাকা, বাংলাদেশ</p>
            </div>

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

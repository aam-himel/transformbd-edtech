// import { Button } from '../ui/button';
// import { ArrowRightCircle } from 'lucide-react';
// const HeroSection = () => {
//   return (
//     <div className=' bg-pattern relative'>
//       <div className=' max-w-[1140px] mx-auto  py-8'>
//         <div className=' px-4'>
//           <h1 className="text-center text-6xl font-extrabold py-16 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent">
//             Start Your Learning Journey Here
//           </h1>


//           <div className=' w-full flex items-center justify-center gap-12'>
//             <div className='flex-1 flex-col gap-4  p-6 rounded-lg  bg-[linear-gradient(111.96deg,rgba(232,28,36,0)_-5.3%,rgba(185,35,41,0)_36.92%,rgba(108,14,18,0)_93.85%),linear-gradient(0deg,#DAEEFF,#DAEEFF)]'>
//               <div className=''>
//                 <h2 className=' text-center text-3xl capitalize text-[#085AA6]'>
//                   Admit now to start Your
//                   <br />
//                   offline Classes
//                 </h2>

//                 <div className=' grid grid-cols-3 gap-4 my-8'>
//                   {[1, 2, 3].map((item, index) => (
//                     <div
//                       key={index}
//                       className=' min-h-[140px] rounded-sm bg-blue-400'
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//               <div className=' w-full flex items-center justify-center'>
//                 <p className=' flex items-center gap-2.5'>
//                   View our Offline Plan{' '}
//                   <ArrowRightCircle className='text-2xl' />{' '}
//                 </p>
//               </div>
//             </div>

//             <div className='flex-1 flex-col gap-4  p-6 rounded-lg bg-[linear-gradient(180deg,rgba(150,96,20,0)_0%,rgba(59,37,6,0)_100%),linear-gradient(0deg,#FFEED7,#FFEED7)]'>
//               <div className=''>
//                 <h2 className=' text-center text-3xl capitalize text-[#085AA6]'>
//                   Admit now to start Your
//                   <br />
//                   offline Classes
//                 </h2>

//                 <div className=' grid grid-cols-3 gap-4 my-8'>
//                   {[1, 2, 3].map((item, index) => (
//                     <div
//                       key={index}
//                       className=' min-h-[140px] rounded-sm bg-orange-400'
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//               <div className=' w-full flex items-center justify-center'>
//                 <p className=' flex items-center gap-2.5'>
//                   View our Offline Plan{' '}
//                   <ArrowRightCircle className='text-2xl' />{' '}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       ;
//     </div>
//   );
// };

// export default HeroSection;



import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-[1140px] mx-auto py-16 px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#EE1B24]  via-[#151216] to-[#EE1B24] via-30% bg-clip-text text-transparent">
            Start Your Learning Journey Here
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering learners with world-class offline & online programs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Link href="/course-details">
            <div className="relative rounded-xl transition">
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/images/banner2.jpeg"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/course-details">
            <div className="relative rounded-xl transition">
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/images/banner2.jpeg"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

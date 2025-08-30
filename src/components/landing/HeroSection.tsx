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



import { Button } from "../ui/button";
import { ArrowRightCircle, GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-[1140px] mx-auto py-16 px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent">
            Start Your Learning Journey Here
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering learners with world-class offline & online programs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-md hover:shadow-lg transition">
            <div className="flex flex-col items-center">
              <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold text-blue-700 text-center">
                Admit Now to Start Your <br /> Offline Classes
              </h2>

              <div className="grid grid-cols-3 gap-4 my-8 w-full">
                {[1, 2, 3].map((item, i) => (
                  <div
                    key={i}
                    className="min-h-[120px] rounded-xl bg-blue-400"
                  ></div>
                ))}
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
                View Offline Plan <ArrowRightCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-md hover:shadow-lg transition">
            <div className="flex flex-col items-center">
              <GraduationCap className="h-12 w-12 text-orange-500 mb-4" />
              <h2 className="text-2xl font-semibold text-orange-700 text-center">
                Admit Now to Start Your <br /> Online Classes
              </h2>

              <div className="grid grid-cols-3 gap-4 my-8 w-full">
                {[1, 2, 3].map((item, i) => (
                  <div
                    key={i}
                    className="min-h-[120px] rounded-xl bg-orange-400"
                  ></div>
                ))}
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2">
                View Online Plan <ArrowRightCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { Button } from '../ui/button';
import { ArrowRightCircle } from 'lucide-react'
const HeroSection = () => {
  return <div className=' max-w-[1140px] mx-auto'>
    <div className=' h-[calc(100vh-64px)] px-4'>
      <h1 className=' text-center text-6xl font-bold my-16'>Start Your Learning Journey Here</h1>

      <div className=' w-full flex items-center justify-center gap-12'>
        <div className='flex-1 flex-col gap-4  p-6 rounded-lg  bg-[linear-gradient(111.96deg,rgba(232,28,36,0)_-5.3%,rgba(185,35,41,0)_36.92%,rgba(108,14,18,0)_93.85%),linear-gradient(0deg,#DAEEFF,#DAEEFF)]'>
          <div className=''>
            <h2 className=' text-center text-3xl capitalize text-[#085AA6]'>Admit now to start Your<br />
              offline Classes</h2>

            <div className=' grid grid-cols-3 gap-4 my-8'>
              {[1, 2, 3].map((item, index) =>
                <div key={index} className=' min-h-[140px] rounded-sm bg-blue-400'>
                </div>)
              }
            </div>
          </div>
          <div className=' w-full flex items-center justify-center'>
            <p className=' flex items-center gap-2.5'>View our Offline Plan <ArrowRightCircle className='text-2xl' /> </p>
          </div>
        </div>

        <div className='flex-1 flex-col gap-4  p-6 rounded-lg bg-[linear-gradient(180deg,rgba(150,96,20,0)_0%,rgba(59,37,6,0)_100%),linear-gradient(0deg,#FFEED7,#FFEED7)]'>
          <div className=''>
            <h2 className=' text-center text-3xl capitalize text-[#085AA6]'>Admit now to start Your<br />
              offline Classes</h2>

            <div className=' grid grid-cols-3 gap-4 my-8'>
              {[1, 2, 3].map((item, index) =>
                <div key={index} className=' min-h-[140px] rounded-sm bg-orange-400'>
                </div>)
              }
            </div>
          </div>
          <div className=' w-full flex items-center justify-center'>
            <p className=' flex items-center gap-2.5'>View our Offline Plan <ArrowRightCircle className='text-2xl' /> </p>
          </div>
        </div>
      </div>


    </div>

  </div>;
};

export default HeroSection;

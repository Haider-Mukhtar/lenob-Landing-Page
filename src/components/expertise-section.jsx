import Marquee from 'react-fast-marquee';
import { FaRegHeart } from "react-icons/fa";
import { expertise } from '../lib/constants';
import MaxWidthWrapper from './max-width-wrapper';
import HeadingWithEllipse from './ui/heading-with-ellipse';

const ExpertiseSection = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="pt-20 w-full">
          <HeadingWithEllipse heading={"Grow Smarter, Faster, and Stronger with Our Proven Expertise"} />
          <Marquee pauseOnHover>
            {
              expertise.map((expertise)=>(
                <div key={expertise.id} className='relative my-12 mx-2 md:mx-4 p-4 w-80 sm:w-96 md:w-[500px] rounded-xl duration-500 hover:scale-105 drop-shadow-lg bg-white/50 '>
                  <div className='flex flex-col justify-between items-center'>
                    <img src={expertise.banner} className='object-cover w-full h-60 bg-black rounded-lg border-2 border-gray-200' alt={`${expertise.title} banner`} />
                    <div className='my-4 md:my-6 text-black'>
                      <p className='font-bold text-lg sm:text-xl md:text-2xl'>{expertise.title}</p>
                      <p className='text-xs mt-1 text-gray-800'>{expertise.tag}</p>
                      <p className='text-base md:text-lg mt-4 text-gray-900'>{expertise.description}</p>
                    </div>
                  </div>
                  <button className='bg-black p-1.5 rounded-full absolute top-8 right-8 drop-shadow-md hover:scale-105 duration-200'>
                    <FaRegHeart className='size-5 fill-white aspect-square' />
                  </button>
                </div>
              ))
            }
          </Marquee>
          <div className="flex items-center justify-center">
            <button className="rounded-xl border-[2.5px] border-black bg-black px-8 py-3.5 text-xl font-semibold text-white transition-colors duration-200 hover:bg-transparent hover:text-black">
              Get a Free Digital Audit
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default ExpertiseSection;
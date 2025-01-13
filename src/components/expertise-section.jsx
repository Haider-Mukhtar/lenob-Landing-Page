import Marquee from 'react-fast-marquee';
import { expertise } from '../lib/constants';
import MaxWidthWrapper from './max-width-wrapper';
import HeadingWithEllipse from './ui/heading-with-ellipse';

const ExpertiseSection = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="pt-20 w-full">
          <HeadingWithEllipse heading={"Grow Smarter, Faster, and Stronger with Our Proven Expertise"} />
          <Marquee pauseOnHover pauseOnClick >
            {
              expertise.map((expertise)=>(
                <div key={expertise.id} className='my-12 mx-4 p-4 w-[500px] rounded-xl duration-500 hover:scale-105 drop-shadow-lg bg-white/50 '>
                  <div className=' bg-black overflow-hidden rounded-lg h-60'>
                      <img src={expertise.banner} className='object-cover w-full h-full' alt={`${expertise.title} banner`} />
                  </div>
                  <div className='my-6 text-black'>
                    <p className='font-bold text-2xl'>{expertise.title}</p>
                    <p className='text-xs mt-1 text-gray-800'>{expertise.tag}</p>
                    <p className='text-lg mt-4 text-gray-900'>{expertise.description}</p>
                  </div>
                </div>
              ))
            }
          </Marquee>
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-10">
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
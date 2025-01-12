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
          <Marquee>
            {
              expertise.map((expertise)=>(
                <div className='bg-white my-12 mx-3 p-3 w-[500px]'>
                  <div className=' bg-red-600 '>
                      <img src={expertise.banner} className='object-cover h-60' alt={`${expertise.title} banner`} />
                  </div>
                  <div className='my-8'>
                    <p>{expertise.title}</p>
                    <p>{expertise.tag}</p>
                    <p>{expertise.description}</p>
                  </div>

                </div>
              ))
            }
          </Marquee>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default ExpertiseSection;
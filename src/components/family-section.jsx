import Marquee from "react-fast-marquee";
import { familyData } from "../lib/constants";
import MaxWidthWrapper from "./max-width-wrapper";
import HeadingWithEllipse from "./ui/heading-with-ellipse";

const FamilySection = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="pt-20 w-full">
          <HeadingWithEllipse heading={"Our Family Businesses we have helped Grow"} />
          <Marquee pauseOnHover>
            {
              familyData.map((familyData)=>(
                <div key={familyData.id} className='my-12 mx-2 md:mx-4 p-6 w-80 sm:w-96 md:w-[500px] rounded-xl duration-500 hover:scale-105 drop-shadow-lg bg-white/50 space-y-4'>
                  <p className="font-bold text-lg sm:text-xl md:text-3xl text-center">{familyData.title}</p>                
                    <div className="text-base md:text-lg">
                      <span className="font-bold">Challenge:</span>&nbsp;
                      {familyData.challenge}
                    </div>                
                    <div className="text-base md:text-lg">
                      <span className="font-bold">Solution:</span>&nbsp;
                      {familyData.solution}
                    </div>                
                    <div className="text-base md:text-lg">
                      <span className="font-bold">Results:</span>&nbsp;
                      {familyData.results}
                    </div>
                    <div className="flex items-start justify-start">
                      <button className="rounded-xl border-[2px] border-black bg-black px-6 py-2 text-base font-base text-white transition-colors duration-200 hover:bg-transparent hover:text-black">
                        Read More
                      </button>
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

export default FamilySection;
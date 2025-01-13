import { stepsData } from "../lib/constants";

import MaxWidthWrapper from "./max-width-wrapper"
import HeadingWithEllipse from "./ui/heading-with-ellipse"

const StepsSection = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="pt-20 w-full">
          <HeadingWithEllipse heading={"From Traffic to Conversions"} />
          <p className="text-4xl font-medium mt-10 text-center">The Complete Solution for Your Business Growth</p>
          <div className="grid grid-cols-4 gap-8">
            {
              stepsData.map((stepsData)=>(
                <div key={stepsData} className="text-black flex flex-col items-center gap-8 my-10">
                  <p className="font-bold text-5xl">{stepsData.step}</p>
                  <p className="font-bold text-3xl text-center px-8">{stepsData.title}</p>
                  <p className="text-xl text-center">{stepsData.description}</p>
                </div>
              ))
            }
          </div>
          <div className="flex items-center justify-center">
            <button className="rounded-xl border-[2.5px] border-black bg-black px-8 py-3.5 text-xl font-semibold text-white transition-colors duration-200 hover:bg-transparent hover:text-black">
              Book a Discovery Call
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default StepsSection;
import { growthContent } from "../lib/constants";
import MaxWidthWrapper from "./max-width-wrapper";
import HeadingWithEllipse from "./ui/heading-with-ellipse";
import growthRateImage from "../assets/img/growth-chart-image.png";

const GrowthSection = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="pt-20 w-full">
          <HeadingWithEllipse heading={"Why Businesses out there Trust Lenob for Growth"} />
          <div className="grid grid-cols-1 md:grid-cols-3 pt-10 lg:px-10 xl:px-24">
            <div className="col-span-2">
              {
                growthContent.map((growthContent)=>(
                  <div key={growthContent.id} className="space-y-4 my-4 md:space-y-6 md:my-6">
                    <p className="font-bold text-2xl md:text-3xl">{growthContent.title}</p>
                    <p className="text-lg md:text-2xl">{growthContent.description}</p>
                  </div>
                ))
              }
            </div>
            <div className="flex justify-center items-center">
              <img src={growthRateImage} alt="growthRateImage" className="aspect-square size-72 sm:size-80 md:size-auto object-fit -rotate-12" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default GrowthSection;
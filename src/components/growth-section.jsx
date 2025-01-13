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
          <div className="grid grid-cols-3 my-12 px-24">
            <div className="col-span-2">
              {
                growthContent.map((growthContent)=>(
                  <div key={growthContent.id} className="space-y-6 my-6">
                    <p className="font-bold text-3xl">{growthContent.title}</p>
                    <p className="text-2xl">{growthContent.description}</p>
                  </div>
                ))
              }
            </div>
            <div className="flex justify-center items-center -rotate-12">
              <img src={growthRateImage} alt="growthRateImage" className="aspect-square object-fill" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default GrowthSection;
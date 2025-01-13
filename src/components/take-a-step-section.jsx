import MaxWidthWrapper from "./max-width-wrapper";
import HeadingWithEllipse from "./ui/heading-with-ellipse";

const TakeAStepSection = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="pt-20 w-full">
          <HeadingWithEllipse heading={"Take the First Step Toward Growth"} />
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium mt-10 text-center">Your success story starts here. Partner with Lenob.co to harness the power of expertly crafted digital marketing strategies. From driving traffic to converting leads, we're dedicated to achieving results that matter.</p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium mt-10 text-center">Schedule your free consultation today and let's create something extraordinary together!</p>
          <div className="flex items-center justify-center mt-10">
            <button className="rounded-xl border-[2.5px] border-black bg-black px-8 py-3.5 text-xl font-semibold text-white   transition-colors duration-200 hover:bg-transparent hover:text-black">
            Book a Discovery Call
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default TakeAStepSection;
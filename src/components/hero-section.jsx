import GooglePartner from "../assets/img/google-partner.png";
import MetaPartner from "../assets/img/meta-partner.png";
import Upwork from "../assets/img/upwork.png";
import MaxWidthWrapper from "./max-width-wrapper";

const HeroSection = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center py-20 gap-12">
          <div className="mt-16 sm:mt-8 md:mt-14 xl:mt-20 flex flex-row items-center justify-center gap-3 rounded-full bg-white px-2.5 py-1 drop-shadow-md">
            <div className="size-3 rounded-full bg-red-500"></div>
            <span className="text-base capitalize text-black">
              Make your growth unstoppable!
            </span>
            <div className="size-3 rounded-full bg-red-500"></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-10 xl:gap-10 w-full xl:w-[80%]">
            <span className="text-center text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-bold text-black">
              A Game Changing Transformation with Meta and Google Ads
            </span>
            <div className="text-center text-xl md:text-2xl xl:text-3xl tracking-wide text-black">
              We helped a single mom in her 40s, turning her hair care business,
              to reach&nbsp;
              <span className="font-bold text-red-500 underline underline-offset-4">
                $1M
              </span>
              &nbsp;in annual revenue with targeted Meta and Google Ads.
            </div>
          </div>
          <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] rounded-xl bg-gray-500">
            <video
              className="aspect-video h-full w-full rounded-xl"
              controls
              muted
            >
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-6 lg:gap-10">
            <button className="rounded-xl border-[2.5px] border-black bg-black px-8 py-3.5 text-xl font-semibold text-white transition-colors duration-200 hover:bg-transparent hover:text-black">
              Get a Free Audit Report
            </button>
            <button className="rounded-xl border-[2.5px] border-black bg-transparent px-8 py-3.5 text-xl font-semibold text-black transition-colors duration-200 hover:text-white hover:bg-black">
              Schedule an Ice Breaker
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-0 md:gap-10 lg:gap-40">
            <img
              src={MetaPartner}
              className="aspect-square object-cover"
              alt="meta-partner-img"
            />
            <img
              src={Upwork}
              className="aspect-square object-cover"
              alt="upwork-partner-img"
            />
            <img
              src={GooglePartner}
              className="aspect-square object-cover"
              alt="google-partner-img"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;

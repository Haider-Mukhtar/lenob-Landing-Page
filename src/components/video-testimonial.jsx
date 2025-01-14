import MaxWidthWrapper from "./max-width-wrapper"
import HeadingWithEllipse from "./ui/heading-with-ellipse"
import { videoTestimonial } from "../lib/constants"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import { useRef, useState } from "react";

const VideoTestimonial = () => {
  let length =  videoTestimonial.length;
  // console.log(length);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    beforeChange: (next) => {
      setActiveSlide(++next);
    }
  };

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="pt-20 w-full  lg:px-10 xl:px-40">
          <HeadingWithEllipse heading={"Client Testimonial"} />
          <div className="flex flex-col md:flex-row justify-between gap-2 items-center mt-10">
            <p className="font-bold text-3xl sm:text-4xl md:text-4xl xl:text-5xl">What Clients say about us</p>
            <div className="flex gap-3 items-center">
              <button className="bg-white/50 p-2 rounded-full drop-shadow-md hover:bg-black group transition-colors duration-200" onClick={previous}>
              <FaAngleLeft className="md:size-6 lg:size-7 fill-gray-500 group-hover:fill-white transition-colors duration-200" />
              </button>
              <div className="text-lg md:text-2xl font-semibold text-black">{activeSlide}&nbsp;
                <span className="text-gray-500">/&nbsp;{length}</span>
              </div>
              <button className="bg-white/50 p-2 rounded-full drop-shadow-md hover:bg-black group transition-colors duration-200" onClick={next}>
              <FaAngleRight className="md:size-6 lg:size-7 fill-gray-500 group-hover:fill-white transition-colors duration-200" />
              </button>
            </div>
          </div>
            <Slider ref={slider => { sliderRef = slider; }} {...settings}>
            {
              videoTestimonial.map((item)=>(
                <div key={item.id} className="h-[500px] w-full pt-10 pb-4 px-0 sm:px-4">
                  <div className="flex w-full h-full -space-x-20 lg:-space-x-32">
                    <div className="w-full h-full mt-auto flex flex-col justify-end items-end">
                    <div className="bg-white/50 rounded-xl p-4 md:p-8 space-y-4 h-fill drop-shadow-xl">
                        <div className="w-full flex flex-col justify-start items-start mb-auto md:hidden">
                          <video
                            className="aspect-video h-full w-full rounded-xl "
                            controls
                            muted
                          >
                            <source
                              src={item.videoURL}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <p className="font-bold text-lg sm:text-xl md:text-2xl">{item.title}</p>
                        <p className="text-base md:text-xl sm:pr-12 lg:pr-28">{item.description}</p>
                        <div className="flex items-center gap-3">
                          <img src={item.clientImage} className="aspect-square w-14 rounded-full" alt="client profile image" />
                          <div>
                            <p className="text-base font-semibold">{item.clientName}</p>
                            <p className="text-xs">{item.clientDetail}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:flex flex-col justify-start items-start mb-auto hidden">
                      <video
                        className="aspect-video h-full w-full rounded-xl "
                        controls
                        muted
                      >
                        <source
                          src={item.videoURL}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              ))
            }  
            </Slider>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default VideoTestimonial


// {
//   videoTestimonial.map((e)=>(
//     <div key={e.id} className="mt-10 flex w-full relative h-[500px]">
//     <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[35%] rounded-xl bg-white/50 absolute left-40 top-40 h-fit p-4 md:p-8 space-y-4">
      // <p className="font-bold text-lg sm:text-xl md:text-2xl">{e.title}</p>
      // <p className="text-base md:text-xl pr-32">{e.description}</p>
      // <div className="flex items-center gap-3">
      //   <img src={e.clientImage} className="aspect-square w-14 rounded-full" alt="client profile image" />
      //   <div>
      //     <p className="text-base font-semibold">{e.clientName}</p>
      //     <p className="text-xs">{e.clientDetail}</p>
      //   </div>
      // </div>
//     </div>
//     <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] rounded-xl bg-gray-500 absolute right-40">
      // <video
      //   className="aspect-video h-full w-full rounded-xl"
      //   controls
      //   muted
      // >
      //   <source
      //     src={e.videoURL}
      //     type="video/mp4"
      //   />
      //   Your browser does not support the video tag.
      // </video>
//     </div>
//   </div>
//   ))
// }
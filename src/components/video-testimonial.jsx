import MaxWidthWrapper from "./max-width-wrapper"
import HeadingWithEllipse from "./ui/heading-with-ellipse"
import { videoTestimonial } from "../lib/constants"

const VideoTestimonial = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="pt-20 w-full">
          <HeadingWithEllipse heading={"Client Testimonial"} />
          <p className="font-bold text-3xl sm:text-4xl md:text-4xl xl:text-5xl mt-10">What Clients say about us</p>
          {
            videoTestimonial.map((e)=>(
              <div key={e.id} className="mt-10 flex w-full relative h-[500px]">
              <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[35%] rounded-xl bg-white/50 absolute left-40 top-40 h-fit p-4 md:p-8 space-y-4">
                <p className="font-bold text-lg sm:text-xl md:text-2xl">{e.title}</p>
                <p className="text-base md:text-xl pr-32">{e.description}</p>
                <div className="flex items-center gap-3">
                  <img src={e.clientImage} className="aspect-square w-14 rounded-full" alt="client profile image" />
                  <div>
                    <p className="text-base font-semibold">{e.clientName}</p>
                    <p className="text-xs">{e.clientDetail}</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] rounded-xl bg-gray-500 absolute right-40">
                <video
                  className="aspect-video h-full w-full rounded-xl"
                  controls
                  muted
                >
                  <source
                    src={e.videoURL}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            ))
          }
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default VideoTestimonial
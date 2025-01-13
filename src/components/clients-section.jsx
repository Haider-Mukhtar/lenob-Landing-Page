import Marquee from "react-fast-marquee"
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { clientsReviews } from "../lib/constants"
import MaxWidthWrapper from "./max-width-wrapper"
import HeadingWithEllipse from "./ui/heading-with-ellipse"

const ClientsSection = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="pt-20 w-full">
          <HeadingWithEllipse heading={"What Our Clients Say"} />
          <p className="text-xl sm:text-2xl lg:text-4xl font-medium mt-10 text-center">Happy customer feedback</p>
            <Marquee pauseOnHover>
              {
                clientsReviews.map((clientsReviews)=>(
                  <div key={clientsReviews.id} className={`my-12 mx-2 md:mx-4 p-8 w-80 sm:w-96 md:w-[500px] rounded-xl duration-500 hover:scale-105 drop-shadow-lg space-y-4 flex flex-col ${clientsReviews.bgColor}`}>
                    <div className={`${clientsReviews.iconColor} p-2 rounded-full size-14 flex justify-center items-center`}>
                      <FaQuoteRight className="size-8 fill-white" />
                    </div>
                    <p className="font-bold text-lg sm:text-xl">{clientsReviews.title}</p>
                    <p className="text-base md:text-lg">{clientsReviews.description}</p>
                    <div className="sm:flex justify-between">
                      <div className="flex items-center gap-3">
                        <img src={clientsReviews.clientImage} className="aspect-square w-14 sm:w-16 rounded-full" alt="client profile image" />
                        <div>
                          <p className="text-base font-semibold">{clientsReviews.clientName}</p>
                          <p className="text-xs">{clientsReviews.clientDetail}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center justify-center">
                        <FaStar className={`${clientsReviews.starColor} size-5`} />
                        <FaStar className={`${clientsReviews.starColor} size-5`} />
                        <FaStar className={`${clientsReviews.starColor} size-5`} />
                        <FaStar className={`${clientsReviews.starColor} size-5`} />
                        <FaStar className={`${clientsReviews.starColor} size-5`} />
                      </div>
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

export default ClientsSection
const HeadingWithEllipse = ({heading}) => {
  return (
      <div className="flex justify-center items-center">
        <div className="relative w-full lg:w-[90%] xl:w-4/5 flex items-center justify-center">
          <div className="w-full text-center border border-black rounded-[60%_/_60%] rotate-3 absolute top-0 bottom-0"></div>
          <div className="w-full text-center border border-black rounded-[60%_/_60%] -rotate-3 absolute top-0 bottom-0"></div>
          <div className="font-bold text-4xl sm:text-5xl md:text-5xl xl:text-6xl w-full sm:w-3/4 text-center my-10">{heading}</div>
        </div>
      </div>
  )
}

export default HeadingWithEllipse;                        
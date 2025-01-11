const HeadingWithEllipse = ({heading, width}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="relative w-full flex items-center justify-center">
        <div className={`h-56 ${width} text-center border-2 border-black rounded-[60%_/_60%] rotate-3 absolute top-0`}></div>
        <div className={`h-56 ${width} text-center border-2 border-black rounded-[60%_/_60%] -rotate-3 absolute top-0`}></div>
      </div>
      <div className="font-bold text-6xl w-3/4 text-center my-16">{heading}</div>
    </div>
  )
}

export default HeadingWithEllipse;
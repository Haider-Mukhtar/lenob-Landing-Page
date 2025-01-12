import RedEllipse from "../../assets/img/red-ellipse.png";

const MessageHighlightedText = () => {
  return (
    <div className="relative h-14 flex justify-start items-center w-fit">
      <img src={RedEllipse} className="absolute h-full w-full top-0 bottom-0 -z-[1]" alt="red-ellipse-shape" />
      <p className="font-bold">The next step? It's right below.</p>
    </div>
  )
}

export default MessageHighlightedText
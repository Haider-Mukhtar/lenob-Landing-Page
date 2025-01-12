import MaxWidthWrapper from "./max-width-wrapper";
import HeadingWithEllipse from "./ui/heading-with-ellipse";
import MessageHighlightedText from "./ui/message-highlighted-text";

const MessageSection = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="py-12 w-full px-2 sm:px-4 md:px-6 lg:px-14 xl:px-32 bg-gradient-to-r from-[#B4E7DD] to-[#91D8F7] rounded-3xl drop-shadow-md">
          <HeadingWithEllipse heading={"A Message to Ambitious Entrepreneurs"} width={"w-3/4"} />
          <div className="text-black text-xl sm:text-2xl lg:text-3xl space-y-3 sm:space-y-4 lg:space-y-6 mt-10 w-full lg:w-4/5 xl:w-4/6">
            <h2 className="font-bold"> Dear visionary business owner, </h2>
            <p>We understand. Growing a business can feel like running a marathon with no finish line.</p>
            <p>The hustle is endless-juggling budgets, clients, employees, and chasing the next breakthrough.</p>
            <p>Late nights, early mornings, and pouring your heart into your dream often leaves you stuck in a whirlwind of endless tasks:</p>
            <p>Should you focus on ads or SEO?</p>
            <p>Is rebranding the next move?</p>
            <p>Are you missing out on TikTok, email campaigns, or LinkedIn?</p>
            <p>It's overwhelming, and that nagging question persists:</p>
            <p>"Shouldn't this be easier by now?"</p>
            <p>Here's the truth: You don't have to do it all alone.</p>
            <p>It all begins with clarity, focus, and doubling down on what works.</p>
            <p className="bg-yellow-400">At Lenob, we make growth simple, so you can focus on what really matters, do what you love, and build a business you enjoy.</p>
            <p>Let Lenob help turn your big dreams into reality.</p>
            <MessageHighlightedText />
            <p>Let's Build Something Great Together.</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default MessageSection;
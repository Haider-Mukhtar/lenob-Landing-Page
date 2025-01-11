import MaxWidthWrapper from './max-width-wrapper';
import HeadingWithEllipse from './ui/heading-with-ellipse';

const ExpertiseSection = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="pt-20 w-full">
          <HeadingWithEllipse heading={"Grow Smarter, Faster, and Stronger with Our Proven Expertise"} width={"w-4/5"} />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default ExpertiseSection;
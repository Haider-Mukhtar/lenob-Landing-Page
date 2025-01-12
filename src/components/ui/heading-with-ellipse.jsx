import React, { useEffect, useRef } from "react";
import { animate } from "motion";

const HeadingWithEllipse = ({ heading }) => {
  const outerEllipseRef = useRef(null);
  const innerEllipseRef = useRef(null);

  useEffect(() => {
    const outerEllipse = outerEllipseRef.current;
    const innerEllipse = innerEllipseRef.current;

    if (outerEllipse && innerEllipse) {
      // Animate the outer ellipse on hover
      outerEllipse.addEventListener("mouseenter", () => {
        animate(
          outerEllipse,
          { transform: "scale(1.1) rotate(3deg)" },
          { duration: 0.8, easing: "ease-in-out" }
        );
      });
      outerEllipse.addEventListener("mouseleave", () => {
        animate(
          outerEllipse,
          { transform: "scale(1) rotate(3deg)" },
          { duration: 0.8, easing: "ease-in-out" }
        );
      });

      // Animate the inner ellipse on hover
      innerEllipse.addEventListener("mouseenter", () => {
        animate(
          innerEllipse,
          { transform: "scale(1.2) rotate(-3deg)" },
          { duration: 0.8, easing: "ease-in-out" }
        );
      });
      innerEllipse.addEventListener("mouseleave", () => {
        animate(
          innerEllipse,
          { transform: "scale(1) rotate(-3deg)" },
          { duration: 0.8, easing: "ease-in-out" }
        );
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full lg:w-[90%] xl:w-4/5 flex items-center justify-center">
        {/* Outer Ellipse */}
        <div
          ref={outerEllipseRef}
          className="absolute top-0 bottom-0 w-full h-full border border-black rounded-[60%_/_60%] rotate-3"
        ></div>
        {/* Inner Ellipse */}
        <div
          ref={innerEllipseRef}
          className="absolute top-0 bottom-0 w-full h-full border border-black rounded-[60%_/_60%] -rotate-3"
        ></div>
        {/* Heading */}
        <div className="font-bold text-4xl sm:text-5xl md:text-5xl xl:text-6xl w-full sm:w-3/4 text-center my-10">
          {heading}
        </div>
      </div>
    </div>
  );
};

export default HeadingWithEllipse;

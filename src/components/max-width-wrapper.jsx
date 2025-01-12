import { cn } from "../lib/utils";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={cn("mx-auto h-full w-full max-w-screen-2xl px-4 sm:px-6 md:px-8", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

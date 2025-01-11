import { Link } from "react-router";
import { IoMdArrowDropdown } from "react-icons/io";

import logo from "../assets/img/lenob-logo.png";
import MaxWidthWrapper from "./max-width-wrapper";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-[1] flex w-full items-center justify-center backdrop-blur-md">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between">
          <Link to={"/"}>
            <img
              src={logo}
              alt="lenob-logo"
              className="aspect-[16/6] w-36 object-fill"
            />
          </Link>
          <div className="flex items-center justify-center gap-10 text-lg font-medium text-gray-700">
            <Link to={"/"}> Home </Link>
            <Link to={"/"}> Our Services </Link>
            <Link to={"/"} className="flex items-center justify-center gap-1">
              <span>Case Studies</span>
              <IoMdArrowDropdown className="size-8" />
            </Link>
            <Link to={"/"}> About us </Link>
          </div>
          <button className="w-36 rounded-xl bg-black py-4 text-xl font-semibold text-white hover:bg-black/80 transition-colors duration-200">
            Contact us
          </button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

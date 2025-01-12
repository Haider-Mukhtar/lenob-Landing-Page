import { Link } from "react-router";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";

import logo from "../assets/img/lenob-logo.png";
import MaxWidthWrapper from "./max-width-wrapper";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="fixed left-0 top-0 z-[1] flex w-full items-center justify-center backdrop-blur-md">
      <MaxWidthWrapper>
        {/*Desktop*/}
        <div className="hidden md:flex h-20 items-center justify-between">
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
        {/*Mobile*/}
        <div className="flex md:hidden h-20 items-center justify-between">
          <Link to={"/"}>
            <img
              src={logo}
              alt="lenob-logo"
              className="aspect-[16/6] w-32 object-fill"
            />
          </Link>
          <div className="relative">
            <button type="button" className="" onClick={()=>setToggleMenu(!toggleMenu)} >
              <CgMenuRightAlt className="size-10" />
            </button>
            {toggleMenu && (
              <div
                // ref={menuRef}
                className="w-64 shadow-xl rounded-xl bg-transparent absolute top-12 right-0 flex flex-col items-center justify-center gap-6 p-6 text-lg font-medium text-gray-700 border border-gray-200"
              >
                <Link to={"/"}> Home </Link>
                <Link to={"/"}> Our Services </Link>
                <Link to={"/"} className="flex items-center justify-center gap-1">
                  <span>Case Studies</span>
                  <IoMdArrowDropdown className="size-8" />
                </Link>
                <Link to={"/"}> About us </Link>
                <button className="w-full rounded-xl bg-black py-4 text-xl font-semibold text-white hover:bg-black/80 transition-colors duration-200">
                  Contact us
                </button>
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

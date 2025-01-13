import { Link } from "react-router";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";

import { useRef, useState } from "react";
import logo from "../assets/img/lenob-logo.png";
import MaxWidthWrapper from "./max-width-wrapper";
import { useOnClickOutside } from "../hooks/use-on-click-outside";

const Navbar = () => {
  const menuRef = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false)
  useOnClickOutside(menuRef, () => setToggleMenu(false));

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-center backdrop-blur-md">
      <MaxWidthWrapper>
        {/*Desktop*/}
        <div className="hidden lg:flex h-20 items-center justify-between">
          <Link to={"/"}>
            <img
              src={logo}
              alt="lenob-logo"
              className="aspect-[16/6] w-36 object-fill"
            />
          </Link>
          <div className="flex items-center justify-center gap-10 text-lg font-medium text-black">
            <Link to={"/"}> Home </Link>
            <Link to={"/"}> Our Services </Link>
            <Link to={"/"} className="flex items-center justify-center gap-1">
              <span>Case Studies</span>
              <IoMdArrowDropdown className="size-8" />
            </Link>
            <Link to={"/"}> About us </Link>
          </div>
          <button className="w-36 rounded-xl bg-black py-3.5 text-xl font-semibold text-white hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-200">
            Contact us
          </button>
        </div>
        {/*Mobile*/}
        <div className="flex lg:hidden h-20 items-center justify-between">
          <Link to={"/"}>
            <img
              src={logo}
              alt="lenob-logo"
              className="aspect-[16/6] w-32 object-fill"
            />
          </Link>
          <div className="relative">
            <button type="button" className="" onClick={()=>setToggleMenu(true)} >
              <CgMenuRightAlt className="size-10" />
            </button>
            {toggleMenu && (
              <div
                ref={menuRef}
                className="w-64 shadow-xl rounded-xl bg-transparent absolute top-12 right-0 flex flex-col items-center justify-center gap-6 p-6 text-lg font-medium text-black border border-gray-200 bg-gradient-to-l from-emerald-100 via-blue-100 to-emerald-100"
              >
                <Link to={"/"}> Home </Link>
                <Link to={"/"}> Our Services </Link>
                <Link to={"/"} className="flex items-center justify-center gap-1">
                  <span>Case Studies</span>
                  <IoMdArrowDropdown className="size-8" />
                </Link>
                <Link to={"/"}> About us </Link>
                <button className="w-full rounded-xl bg-black py-3.5 text-xl font-semibold text-white hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-200">
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

import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const navLinks = ["home", "about", "skills", "projects", "contact"];
  const menuIcon = new URL("../assets/icon-hamburger.svg", import.meta.url)
    .href;
  return (
    <div className="backdrop-blur-md fixed top-0 left-0 w-full mx-[0.5rem]">
      <div className="flex justify-between mt-[1rem] text-white">
        <h1 className="text-[1.5rem]">NIFEMI</h1>
        <ul className="hidden lg:flex mx-[1rem]">
          {navLinks.map((link) => (
            <li key={link} className="capitalize cursor-pointer">
              <Link
                to={link}
                smooth={true}
                duration={700}
                offset={-80}
                className="hover:text-green-400 ml-[0.5rem] text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex mx-[1rem]">
          <img src={menuIcon} alt="menu" className="h-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;

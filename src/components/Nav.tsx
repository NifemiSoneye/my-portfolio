import { Link } from "react-scroll";
const Nav = () => {
  const navLinks = ["home", "about", "skills", "projects", "contact"];
  const menuIcon = new URL("../assets/icon-hamburger.svg", import.meta.url)
    .href;
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="backdrop-blur-md fixed top-0 left-0 w-full  border-b border-gray-600 bg-[#111113]/60 z-50">
      <div className="flex justify-between mt-[1rem] text-white pb-[1rem] lg:mt-[2rem] items-center lg:mx-[1.5rem]">
        <h1 className="text-[1.5rem]">NIFEMI.DEV</h1>
        <ul className="hidden lg:flex mx-[2rem] text-[22px] ">
          {navLinks.map((link) => (
            <li key={link} className="capitalize cursor-pointer">
              <Link
                to={link}
                smooth={true}
                duration={700}
                offset={-80}
                className="hover:text-green-400 ml-[1rem] text-white"
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

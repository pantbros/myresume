import React, { useState } from "react";
import { TiSocialFacebookCircular, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import { LuUserRound } from "react-icons/lu";
import { PiCodeBlockLight, PiNewspaperClipping, PiPaperPlaneTilt } from "react-icons/pi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import Button from "../../components/Buttons/Button";
import profilePic from '../../assets/profile.png';
import { NavLink, Link } from "react-router-dom";

function LeftSidePane({ name, designation }) {
  const socialIcons = [
    { icon: <TiSocialFacebookCircular />, link: "https://www.facebook.com/" },
    { icon: <TiSocialTwitter />, link: "https://www.twitter.com/" },
    { icon: <TiSocialInstagram />, link: "https://www.instagram.com/" },
    { icon: <TiSocialLinkedin />, link: "https://www.linkedin.com/" },
  ];

  const appLinks = [
    { icon: <LuUserRound />, link: "/about", content: "About Me" },
    { icon: <PiCodeBlockLight />, link: "/portfolio", content: "Portfolio" },
    { icon: <BsHandbag />, link: "/service-and-pricing", content: "Services & Pricing" },
    { icon: <IoNewspaperOutline />, link: "/resume", content: "Resume" },
    { icon: <MdOutlineShoppingBag />, link: "/products", content: "Products" },
    { icon: <PiNewspaperClipping />, link: "/blog", content: "Blog" },
    { icon: <FaRegEnvelope />, link: "/contact", content: "Contact Me" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle the toggle action
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Toggle button visible only on mobile */}
      <button
        className="w-[32px] h-[32px] border bg-white border-black rounded-full flex md:hidden items-center justify-center absolute top-[1%] right-[3%] z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </button>

      {/* Side menu visible on mobile and larger screens */}
      <div
        className={`w-[100%] md:w-[20%] z-40 bg-[#fafafa] p-1 h-[100vh] overflow-hidden overflow-y-auto 
        [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-[#ccc]
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
        ${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative`}>
        <div className="flex flex-col mx-auto text-center text-black gap-3 my-10">
          <div className="flex w-[90%] flex-col mx-auto text-center text-black gap-3">
            <div className="relative w-max mx-auto">
              <div className="w-[80px] h-[80px] bg-blue-500 rounded-full overflow-hidden flex items-center justify-center">
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center text-lg absolute left-[70%] top-[55%]">
                &#128075;
              </div>
            </div>
            <h1 className="text-2xl font-bold">{name = 'Chris Evans'}</h1>
            <p>{designation = 'Senior Software Engineer'}</p>
            <ul className="list-none flex justify-center items-center gap-2">
              {socialIcons.map((social, index) => (
                <li key={index} className="w-[25px] h-[25px] hover:bg-primary-theme-clr hover:text-white border flex justify-center items-center rounded-full">
                  <a href={social.link} target="_blank" rel="noopener noreferrer" className="p-2">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div>
            <ul className="list-none flex flex-col justify-center items-center gap-4 mt-7">
              {appLinks.map((appLink, index) => (
                <li key={index} className="rounded-md w-[80%]">
                  <NavLink
                    to={appLink.link}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-2 rounded-md transition duration-200 ${
                        isActive ? "bg-primary-theme-clr text-[#ffffff]" : "hover:bg-gray-200"
                      }`
                    }
                  >
                    {appLink.icon} <span>{appLink.content}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to={'/contact'}>
            <Button
              icon={<PiPaperPlaneTilt />}
              label='Hire Me'
              color={'bg-primary-theme-clr text-[#ffffff] hover:bg-black hover:text-[#ffffff] w-max mx-auto'}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default LeftSidePane;
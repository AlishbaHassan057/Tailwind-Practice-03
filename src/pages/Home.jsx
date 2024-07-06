import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="bg-black text-white fixed top-0 right-0 left-0  py-6 md:py-4 ">
        <nav className="px-4:py-4  flex items-center justify-between self-center max-w-7xl w-[90%]  mx-auto ">
          <a href="/" className="text-3xl font-bold text-white">
            Design<span className="text-orange-500 text-xl">DK</span>
          </a>
          <ul className="md:flex items-center justify-between self-center gap-12 text-lg hidden mt-3">
            <li className=" hover:text-orange-500 transition-all cursor-pointer">
              Home
            </li>
            <li className=" hover:text-orange-500 transition-all cursor-pointer">
              Service
            </li>
            <li className=" hover:text-orange-500 transition-all cursor-pointer">
              About
            </li>
            <li className=" hover:text-orange-500 transition-all cursor-pointer">
              Blogs{" "}
            </li>
            <li className=" hover:text-orange-500 transition-all cursor-pointer">
              Contact
            </li>
          </ul>
          <div className="lg:flex items-center justify-between self-center mt-3 gap-3 hidden text-[1.2rem]">
            <div className="facebook  hover:text-orange-500 transition-all cursor-pointer">
              {" "}
              <FaFacebook />
            </div>

            <div className="twitter  hover:text-orange-500 transition-all cursor-pointer">
              <FaSquareXTwitter />
            </div>
            <div className="whattsapp  hover:text-orange-500 transition-all cursor-pointer">
              <IoLogoWhatsapp />
            </div>

            <button className="bg-orange-500 px-5 py-1 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in ">
              {" "}
              Login
            </button>
          </div>
          <div className="md:hidden py-[.5rem]">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <GiHamburgerMenu size={30} />
              ) : (
                <ImCross size={15} />
              )}
            </button>
          </div>
        </nav>
        <div className="div">
          <ul
            className={`md:hidden gap-12 text-lg block space-y-4 mt-[5rem] font-bold px-4 py-6 mt-[6rem] bg-orange-500 text-white ${
              isMenuOpen
                ? "hidden"
                : "fixed top-0 left-0 text-center text-[1.3rem] w-full transition-all ease-out  duration-150"
            }`}
          >
            <li className=" hover:text-black font-bold transition-all cursor-pointer">
              Home
            </li>
            <li className=" hover:text-black font-bold transition-all cursor-pointer">
              Service
            </li>
            <li className=" hover:text-black font-bold transition-all cursor-pointer">
              About
            </li>
            <li className=" hover:text-black font-bold transition-all cursor-pointer">
              Blogs{" "}
            </li>
            <li className=" hover:text-black font-bold transition-all cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Home;

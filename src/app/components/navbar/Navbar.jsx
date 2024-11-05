/**
 * The function returns an Image component displaying a logo with specified source, alt text, width,
 * and height.
 * @returns The code is attempting to import the `Image` component from "next/image" and define a new
 * component named `Image` that uses the imported `Image` component. The new `Image` component is
 * returning an `<Image>` element with the specified `src`, `alt`, `width`, and `height` props.
 */
// "use client";

// import logo from '../../../../public/assets/myweblogo.svg';


"use client";

import React, { useState, useEffect } from "react";
import Button from "../buttons/Button";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for mobile menu
import logo from '../../../../public/assets/myweblogo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    // const section = document.getElementById(id);
    // if (section) {
    //   section.scrollIntoView({ behavior: "smooth", block: "start" });
    // }

    const section = document.getElementById(id);
    const navbarHeight = document.querySelector('nav').offsetHeight; // Get the navbar height
  
    if (section) {
      const sectionPosition = section.offsetTop - navbarHeight - 10; // Adjust with extra margin
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close the mobile menu if open
    }
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0  transition-colors duration-300 ${
        isScrolled ? "bg-black border-gray-700" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://nexdyno.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={logo}
            className="h-11"
            alt="nexdyno Logo"
            // width={8}
            // height={100}
          />
        </a>
        <div className="hidden lg:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button onClick={() => handleScrollToSection("contact")}  />
        </div>

 {/* Mobile Hamburger Icon */}
 <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-white text-2xl"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
  {/* Mobile Menu */}
  <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-3/4 h-full bg-black transition-transform duration-300 lg:hidden p-6`}
        >
          <div className="flex items-center justify-between mb-8">
            {/* Logo inside the menu */}
            <a
              href="https://nexdyno.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} className="h-11" alt="nexdyno Logo" />
            </a>

            {/* Close Icon */}
            {/* <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl"
            >
              <AiOutlineClose />
            </button> */}
          </div>

          <ul className="flex flex-col space-y-4">
            {["home", "about", "services", "blogs", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => handleScrollToSection(section)}
                    className="block py-2 px-3 text-white hover:text-gray-400 transition-colors duration-300"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-2 lg:space-x-8 p-4 md:p-0 mt-4 md:mt-0">
            {["home", "about", "services", "blogs", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => handleScrollToSection(section)}
                    className={`block py-2 px-3 text-white transition-colors duration-300 ${
                      isScrolled
                        ? "hover:bg-black hover:text-white"
                        : "hover:text-gray-400"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

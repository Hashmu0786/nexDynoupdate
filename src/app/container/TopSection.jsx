"use client";

import Image from "next/image";
import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ContactForm from "../components/form/ContactForm";

export default function TopSection() {
  return (
    <section id="home" className="w-full h-screen flex items-center justify-center bg-black/20 ">
      {/* Left Section with Company Info */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/nexdyno-4a07d.appspot.com/o/top.mp4?alt=media&token=66ae6552-f6a2-48d9-8f23-e51a27b26eb8" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-5"></div>

      <div className=" z-10 flex flex-col justify-center w-full lg:w-[70%] px-4 py-5 ">
        <div className="mx-auto lg:mx-0"></div>
        <h1 className="text-white font-bold text-2xl  lg:text-4xl mt-5 text-center ">
          Innovate IT Solutions
        </h1>
        <h2 className="text-2xl font-medium text-white mt-4 text-center px-5 ">
          Empowering Businesses with Cutting-Edge IT Solutions
        </h2>
        <h3 className="text-lg font-normal text-white lg:pr-10 mt-6 px-5 text-center hidden md:block">
          We provide a full range of IT services, including cloud computing,
          software development, cybersecurity, and IT consulting to help your
          business thrive in the digital age.
        </h3>
        <div className="mt-6 text-center flex items-center justify-center">
          <a
            href="https://nexdyno.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-4 bg-transparent text-white border border-white rounded px-8 py-3 text-lg font-semibold hover:scale-y-110 transition duration-200 ease-in-out">
              <div className="h-5 w-5 rounded-full bg-white animate-pulse"></div>
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

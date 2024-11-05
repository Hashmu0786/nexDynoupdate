"use client"; // Add this line to make it a Client Component
import React from "react";
// import { Container } from "@/components/Container";
import { Container } from "../components/Container";

const Cta = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    const navbarHeight = document.querySelector("nav").offsetHeight; // Get navbar height

    if (contactSection) {
      const sectionPosition = contactSection.offsetTop - navbarHeight - 10; // Offset with extra margin
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Want to get in touch with us?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Contact us today to discuss your project needs.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button
            onClick={handleScrollToContact}
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5"
          >
            Contact Us
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cta;

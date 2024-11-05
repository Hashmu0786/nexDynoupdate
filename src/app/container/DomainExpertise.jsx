import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing FaCheckCircle
import Image from "next/image";

const data = [
  "Content Management Systems (CMS)",
  "E-commerce Platforms",
  "Online Marketplaces",
  "Dating and Auction Portals",
  "Reservation Systems",
  "eLearning Platforms",
];

export default function DomainExpertise() {
  return (
    <section className="w-full h-full lg:flex items-start my-12 ">
      <div className="m-5 ml-8 lg:w-1/2">
        <div className="lg:ml-10">
          <h2 className="font-semibold text-2xl  font-sans md:text-3xl text-black mb-4 md:mt-0 mt-8">
            Our Web Development Expertise
          </h2>
          <p className="text-base text-desc text-body-color font-sans text-gray-600">
            We specialize in building robust, scalable, and secure web systems
            tailored to meet the needs of diverse industries. Our expertise
            ensures seamless integration, efficient data handling, and reliable
            performance for your applications.
          </p>
        </div>
        <div className="mt-5 lg:ml-10">
          <ul className="text-base mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-500">
            {data?.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-base text-desc text-black font-medium font-sans"
              >
                <FaCheckCircle className="h-4 w-4 mt-2 flex-shrink-0 text-blue-500" />
                <p>
                  <strong>{item.split(":")[0]}</strong> {item.split(":")[1]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 px-4">
        <div className="relative aspect-[800/600]">
          <Image
            src="/assets/web-expertise.png"
            fill={true}
            alt="domain expertise"
          />
        </div>
      </div>
    </section>
  );
}

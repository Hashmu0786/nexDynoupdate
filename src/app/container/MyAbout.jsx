"use client";
import Image from "next/image";
import { useState } from "react";

export default function MyAbouts() {
  const [activeTab, setActiveTab] = useState("about");

  const tabContent = {
    about: {
      title: "About Us",
      content: `
      We are a leading IT solutions provider dedicated to transforming businesses through innovation and expertise. 
      Our team combines technical proficiency with a deep understanding of industry needs to deliver high-quality, 
      customized solutions. From digital transformation to robust software development, we are committed to driving 
      success for our clients and partners.
    `,
    },
    mission: {
      title: "Our Mission",
      content: `
      Our mission is to empower businesses by providing innovative, reliable, and efficient IT solutions. 
      We aim to enhance productivity and competitiveness for companies of all sizes, offering seamless 
      technology integration and support that enables them to thrive in a fast-evolving digital landscape.
    `,
    },
    vision: {
      title: "Our Vision",
      content: `
      We envision a world where technology serves as a bridge for people and businesses, enabling growth 
      and collaboration across industries. By leveraging the latest advancements, we aspire to create 
      solutions that not only solve today's challenges but also anticipate future needs, fostering a 
      digitally connected and sustainable future.
    `,
    },
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex justify-center items-center">
      <div className="w-[60%]  p-6 h-[80%]">
        {/* Tabs */}
        <div className="flex justify-around border-b border-gray-700 mb-6">
          {[
            { label: "About Us", key: "about" },
            { label: "Our Mission", key: "mission" },
            { label: "Our Vision", key: "vision" },
          ].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.key)}
              className={`py-2 px-4 rounded transition-colors duration-300 text-lg font-semibold ${
                activeTab === tab.key
                  ? "bg-blue-500 text-white border-b-2 border-blue-400"
                  : "bg-transparent text-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="md:w-1/2 mb-4 md:mb-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              <Image
                src="/assets/aboutimage.jpg" // Replace with actual image path
                alt="Office"
                width={250}
                height={350}
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-bold mb-2 pt-2">
              {tabContent[activeTab]?.title}
            </h2>
            <p className="text-gray-300 whitespace-pre-line py-2">
              {tabContent[activeTab]?.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

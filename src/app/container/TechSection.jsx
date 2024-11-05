import Image from "next/image";
import React from "react";

const techStack = [
  { icon: "/assets/techIcons/nodejs.svg" }, // Uncommented this line
  { icon: "/assets/techIcons/cloud.svg" },
  { icon: "/assets/techIcons/mongodb.svg" },
  { icon: "/assets/techIcons/css-3.png" },
  { icon: "/assets/techIcons/js.png" },
  { icon: "/assets/techIcons/java.svg" },
  { icon: "/assets/techIcons/html-5.png" },
  { icon: "/assets/techIcons/next.svg" },
  { icon: "/assets/techIcons/react.svg" },
  { icon: "/assets/techIcons/flutter.svg" },
];

export default function TechSection() {
  return (
    <section className="w-full h-full py-10 flex items-center justify-center">
      <div className="w-[95%] h-full">
        <div className="flex flex-col gap-4 w-full items-center justify-center">
          <div className="flex flex-col gap-4 md:w-[80%] items-center justify-center">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-black">
              Technology Stack
            </h1>
          </div>
        </div>

        {/* Cards section */}
        <div className="w-full h-full mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center space-y-10">
            {techStack.map((tech, index) => (
              <div key={index} className="w-20 h-20 relative">
                <Image
                  src={tech.icon}
                  fill
                  className={`object-contain ${index === 0 ? "lg:mt-8" : ""}`}
                  alt={`Tech Icon ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

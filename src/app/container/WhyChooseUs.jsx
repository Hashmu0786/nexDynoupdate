"use client";
import Image from "next/image";
import mobileDevelopment from "../../../public/assets/why-choose/mobile-app-development.webp";
import uiux from "../../../public/assets/why-choose/UIUX Design.jpg";
// import uiux from "../../../public"

const data = {
  title: "Why Choose NexDyno for IT Development & Design",
  description:
    "Unlock the potential of your business with NexDyno cutting-edge IT solutions. From software development to design, we deliver top-notch services that drive results.",
  cards: [
    {
      title: "Custom Software",
      icon: "RiCodeLine",
      description:
        "Tailored software solutions built to meet your business needs, ensuring seamless integration and scalability.",
      image: "/assets/why-choose/Custom Software Development.jpg",
    },
    {
      title: "UI/UX Design",
      icon: "RiBrushLine",
      description:
        "Create intuitive and visually appealing designs that enhance user experience and increase engagement.",
      image: uiux,
    },
    {
      title: "Mobile App Development",
      icon: "RiSmartphoneLine",
      description:
        "Develop high-performance mobile apps across platforms with a focus on user-friendly design and functionality.",
      image: mobileDevelopment,
    },
    {
      title: "Cloud Solutions",
      icon: "RiCloudLine",
      description:
        "Leverage the power of cloud computing for scalable and flexible IT infrastructure tailored to your business needs.",
      image: "/assets/why-choose/cloud_solutions.svg",
    },
  ],
  button: {
    text: "Explore Our Services",
    link: "/services",
  },
};

const WhyChooseUs = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 md:gap-10 py-20 md:py-20  bg-[#F2F4F8]">
      <div className="w-[90%] md:w-[65%] lg:w-[50%] text-center flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-bold md:font-black capitalize text-black pb-4">
          {data?.title}
        </h3>
        <p className="text-sm text-gray-500">{data?.description}</p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 sm:gap-10 gap-y-4 px-5 md:px-10 xl:px-20">
        {data?.cards?.map((card, i) => (
          <div
            className="w-full py-5 flex flex-col items-start gap-4 border border-gray-200 bg-white rounded-md p-4 xl:p-5"
            key={i}
          >
            <div className=" w-full flex items-end justify-between">
              <h4 className="text-xl lg:text-lg xl:text-xl font-semibold w-3/5 xl:w-full text-black">
                {card?.title}
              </h4>
              <div
                className={`!w-14 !h-12 rounded-md flex items-center justify-center relative`}
              >
                <Image src={card?.image} fill alt={card?.title} />
              </div>
            </div>
            <p className="text-sm text-gray-500">{card?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

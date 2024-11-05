"use client";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const faqData = {
  title: "Frequently Asked Questions",
  questions: [
    {
      ques: "What services does Nextdyno provide?",
      ans: {
        key: "Ans",
        value:
          "Nextdyno offers web development, SEO, digital marketing, branding, and marketing services to enhance your online presence and drive growth.",
      },
    },
    {
      ques: "How long does it take to develop a website?",
      ans: {
        key: "Ans",
        value:
          "The development time depends on the project scope. A basic website may take 2-4 weeks, while larger, customized projects can take several months.",
      },
    },
    {
      ques: "Do you offer SEO along with web development?",
      ans: {
        key: "Ans",
        value:
          "Yes, SEO is integrated into our web development process. We also provide ongoing SEO services to improve your search rankings and attract organic traffic.",
      },
    },
    {
      ques: "Can you help with digital marketing and branding?",
      ans: {
        key: "Ans",
        value:
          "Absolutely! Our digital marketing team creates strategies tailored to your brand, helping you engage with your audience across multiple platforms.",
      },
    },
    {
      ques: "How do you ensure website security and reliability?",
      ans: {
        key: "Ans",
        value:
          "We follow industry best practices, including SSL integration, regular updates, and security audits, to ensure your website is secure and reliable.",
      },
    },
    {
      ques: "What makes Nextdyno stand out from other agencies?",
      ans: {
        key: "Ans",
        value:
          "Our unique approach blends creativity with technology to deliver personalized solutions aligned with your business goals. We prioritize customer satisfaction and long-term support.",
      },
    },
    {
      ques: "Can I update the content on my website myself?",
      ans: {
        key: "Ans",
        value:
          "Yes! We provide user-friendly CMS solutions, making it easy for you to update content without technical expertise. We can also provide training if needed.",
      },
    },
    {
      ques: "What support do you offer after project completion?",
      ans: {
        key: "Ans",
        value:
          "We offer post-launch support to ensure everything runs smoothly and provide maintenance packages to keep your website up-to-date and secure.",
      },
    },
  ],
};


const FaqSection = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="w-full flex flex-col items-center gap-6 px-4 md:px-10 lg:px-20">
        <h2 className="text-center capitalize font-extrabold text-2xl lg:text-4xl text-indigo-700 mb-6">
          {faqData.title}
        </h2>
        <div className="flex flex-col items-center w-full max-w-2xl gap-4">
          {faqData.questions.map((item, i) => (
            <FAQ
              item={item}
              key={i}
              index={i}
              selectedFaq={selectedFaq}
              setSelectedFaq={setSelectedFaq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = ({ item, index, selectedFaq, setSelectedFaq }) => {
  const isSelected = index === selectedFaq;

  return (
    <div className="w-full flex flex-col justify-center items-center px-6 py-3 border-b border-gray-300 transition-all duration-300">
      <div
        className={`w-full flex justify-between items-center py-4 cursor-pointer hover:bg-gray-100 rounded-md ${
          isSelected ? "bg-indigo-100" : "bg-white"
        }`}
        onClick={() => {
          if (isSelected) {
            setSelectedFaq(null); // Collapse if already selected
          } else {
            setSelectedFaq(index); // Expand if not selected
          }
        }}
      >
        <h4 className="text-base lg:font-bold lg:text-lg text-gray-800 font-semibold">
          {item.ques}
        </h4>
        <MdKeyboardArrowDown
          className={`transition-transform duration-200 text-gray-600 ${
            isSelected ? "rotate-180" : "rotate-0"
          }`}
          size={24}
        />
      </div>
      {isSelected && (
        <div className="w-full flex items-start text-sm gap-2 py-3 pl-6 bg-gray-50 rounded-lg transition-all">
          <p className="font-semibold text-gray-700">{item.ans.key}:</p>
          <p className="text-gray-600">{item.ans.value}</p>
        </div>
      )}
    </div>
  );
};

export default FaqSection;

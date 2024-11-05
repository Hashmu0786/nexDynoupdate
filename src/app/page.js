import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import TopSection from "./container/TopSection";
import About from "./container/About";
import MyAbout from "./container/MyAbout";
import ServiceSection from "./container/ServiceSection";
import FooterA from "./container/FooterA";
import Cta from "./container/Cta";
import ContactUs from "./container/ContactUs";
import FaqSection from "./container/FaqSection";
import BlogSection from "./container/BlogSection";
import TechSection from "./container/TechSection";
import WhyChooseUs from "./container/WhyChooseUs";
import DomainExpertise from "./container/DomainExpertise";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Nextdyno</title>
        <meta
          name="description"
          content="Welcome to Nextdyno. We offer web development, SEO, and digital marketing services."
        />
        {/* Add any other meta tags you want here */}
      </Head>
      <TopSection />
      {/* <About /> */}
      <MyAbout />
      <ServiceSection />
      <DomainExpertise />
      <WhyChooseUs />
      <TechSection />
      <BlogSection />
      <FaqSection />
      <Cta />
      <ContactUs />
    </>
  );
}

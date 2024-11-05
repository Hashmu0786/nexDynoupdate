// pages/about.js

import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Nexdyno</title>
        <meta
          name="description"
          content="Learn more about Nexdyno, our mission, values, and the digital solutions we offer."
        />
      </Head>

      <section id="about" className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/assets/aboutimage.jpg"
                alt="About Nexdyno"
                className="object-cover rounded-lg shadow-lg"
                width={400} // specify your width
                height={400} // specify your height
              />
            </div>

            {/* About Us Text Section */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                About Nexdyno
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Nexdyno, we are dedicated to empowering businesses through
                innovative web development, SEO, digital marketing, and branding
                solutions. Our mission is to provide exceptional digital
                services that help businesses thrive in the digital landscape.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a team of experienced professionals, we specialize in
                crafting tailored solutions that address the unique challenges
                of each client. Our goal is to drive digital transformation and
                help companies achieve their full potential.
              </p>

              {/* Values Section */}
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Values
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Innovation:</strong> We embrace new ideas and
                  innovative approaches to ensure our clients stay ahead of the
                  curve.
                </li>
                <li>
                  <strong>Integrity:</strong> Nexdyno operates with transparency
                  and honesty in every project we undertake.
                </li>
                <li>
                  <strong>Customer-Centric:</strong> We put our clients first,
                  providing tailored solutions that meet their specific needs.
                </li>
                <li>
                  <strong>Excellence:</strong> We strive for excellence in all
                  aspects of our work, from strategy to execution.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

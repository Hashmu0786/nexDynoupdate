// pages/contact.js
"use client"; // Add this line to make it a Client Component
import Head from "next/head";
import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const ContactUs = () => {
  // State to manage loading
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Set loading state to true
    setLoading(true);

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Reset loading state after response
      setLoading(false);

      if (result.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully.",
        });
        event.target.reset(); // Reset the form
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send the message. Please try again later.",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: `<a href="#">Why do I have this issue?</a>`,
      });
    }
  };

  return (
    <>
      <section id="contact" className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
            {/* Contact Information Section */}
            <div className="w-full md:w-1/2  md:px-10 h-full md:flex md:flex-col md:gap-5 mb-10">
              <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 lg:pr-10 my-5">
                We &apos;re here to answer any questions you may have. Reach out
                to us and we &apos;ll respond as soon as we can.
              </p>
              <ul className="space-y-2 text-gray-600 flex flex-col gap-4 lg:mt-10">
                <li>
                  <strong>Email:</strong> nexdyno.business@gmail.com
                </li>

                <li>
                  <strong>Working Hours:</strong> Mon - Fri, 9 AM - 5 PM
                </li>
              </ul>
              <div className="lg:mt-10">
                <p className="text-gray-600">
                  You can also follow us on social media:
                </p>
                <div className="flex space-x-4">
                  {/* Replace # with actual social media links */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61567797684798&mibextid=LQQJ4d"
                    target="blank"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <i className="fab fa-facebook-f"></i> Facebook
                  </a>

                  <a
                    href="https://www.instagram.com/nex_dyno/"
                    className="text-pink-500 hover:text-pink-700"
                    target="blank"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full md:w-1/2 lg:p-6 ">
              <div className="w-full lg:w-[80%] bg-white p-6 shadow-md rounded-lg py-5">
                <form className="space-y-6 text-black" onSubmit={handleSubmit}>
                  <div className="flex flex-col text-black">
                    <label className="text-gray-600 mb-2 font-semibold pl-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name" // Add this line
                      className="border border-gray-300 py-2 pl-2 text-sm rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-2 font-semibold pl-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email" // Add this line
                      className="border border-gray-300 py-2 pl-2 text-sm rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-2 font-semibold pl-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone" // Add this line
                      className="border border-gray-300 py-2 pl-2 text-sm rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-2 font-semibold pl-1">
                      Your Message
                    </label>
                    <textarea
                      className="border border-gray-300 py-2 pl-2 text-sm rounded-lg focus:outline-none focus:border-blue-500"
                      rows="5"
                      name="message" // Add this line
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading} // Disable button while loading
                    className="bg-blue-900 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg w-full transition-colors"
                  >
                    {loading ? "Sending..." : "Submit Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

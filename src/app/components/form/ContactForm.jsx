"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Message Sent Successfully!");
    reset(); // Clear the form after submission
  };

  // Input field configurations
  const inputFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Full Name",
      label: "Name",
      validation: { required: "Name is required" },
    },
    {
      name: "email",
      type: "email",
      placeholder: "example@domain.com",
      label: "Email",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "Enter a valid email address",
        },
      },
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Subject of your message",
      label: "Subject",
      validation: { required: "Subject is required" },
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-transparent  ">
      <div className="rounded-lg p-8 max-w-lg w-[65%] bg-opacity-50 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Mapping input fields */}
          {inputFields.map(({ name, type, placeholder, label, validation }) => (
            <div key={name} className="mb-4">
              <label className="block text-sm font-semibold text-white mb-2">
                {label}
              </label>
              <input
                type={type}
                {...register(name, validation)}
                className={`w-full p-2 bg-transparent border border-gray-100 rounded-lg focus:outline-none text-white placeholder-gray-400 text-sm ${
                  errors[name] ? "border-red-500" : "border-gray-100"
                }`}
                placeholder={placeholder}
              />
              {errors[name] && (
                <p className="text-red-500 text-xs mt-2">
                  {errors[name].message}
                </p>
              )}
            </div>
          ))}

          {/* Message Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-white mb-2">
              Message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message should be at least 10 characters long",
                },
              })}
              rows={4}
              className={`w-full p-3  resize-none text-sm bg-transparent border border-gray-100 rounded-lg text-white placeholder-gray-400 focus:outline-none ${
                errors.message ? "border-red-500" : "border-gray-100"
              }`}
              placeholder="Your message here..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-2">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!isValid}
              className={`w-[45%] py-3 text-lg   border border-gray-200 text-white rounded-lg  font-semibold shadow-md transition-all transform hover:bg-white hover:text-black duration-200 ease-in-out`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

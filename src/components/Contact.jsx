"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, message } = data;
    const whatsappMessage = `Hello, I am ${name}. My email is ${email}. Message: ${message}`;
    const phone = "918445581177";
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="px-4 py-8 md:px-16 lg:px-24  ">
      <h2 className="text-center text-2xl font-bold mb-8">
        We would Love to Hear From You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Section with Image */}
        <div>
          <Image
            src="/assets/Homepic/contactimg.png"
            alt="Contact"
            width={800}
            height={600}
            className="w-full rounded-lg shadow-md h-auto"
          />
        </div>

        {/* Right Section with Form */}
        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
          >
            {/* Name Field */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="contact-name"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 rounded border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="contact-email"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-2 rounded border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="contact-message"
              >
                Message
              </label>
              <textarea
                rows="4"
                id="contact-message"
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 rounded border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="w-full bg-rose-600 text-white font-medium py-2 rounded hover:bg-rose-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

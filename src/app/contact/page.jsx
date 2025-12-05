"use client"
import React, { useState } from "react";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    const whatsappMessage = `Hello, I am ${name}. My email is ${email}. Message: ${message}`;
    const phone = "918445581177";
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className=" h-full bg-pink-100">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/assets/contact/contact.png"
          alt="Welcome"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Your Dream Stay Starts Here
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 px-6 md:px-16 lg:px-32 bg-pink-100">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Details */}
          <div className="md:w-1/2 items-center mt-11">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Feel Free to Connect, We will Be Happy to Assist You
            </h2>
            <div className="space-y-4 text-gray-700">
             <div>
             <p>
                <strong>Address:</strong> Bus Stand, Picture Palace Road, Near
                Kulri, Mussoorie, Uttarakhand, 248179
              </p>
              <p>
                <strong>Email:</strong>{" "}
                thenovellobyhotelevergreen@gmail.com
              </p>
             </div>
              <p>
                <strong>Phone:</strong> +91 8445581177, +91 8266966987
              </p>
              <p>
                <strong>Check in :</strong> 01:00 PM,
              </p>
              <p>
                <strong>Check out :</strong> 11:00 AM,
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Your Details
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-pink-600 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-pink-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

     <div className="h-[40vh] ">
     <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.2268462357038!2d78.0833388748108!3d30.451225299184497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d10033880bf7%3A0xa441c4f2cb76f975!2sThe%20Novello%20By%20Hotel%20Evergreen!5e1!3m2!1sen!2sin!4v1734286269475!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
     </div>
    </div>
  );
};

export default ContactPage;

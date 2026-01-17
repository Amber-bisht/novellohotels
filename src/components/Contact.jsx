"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Send, MapPin, Phone, Mail } from "lucide-react";

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
    <section className="py-20 px-6 md:px-12 bg-cream/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-brand uppercase tracking-widest font-bold text-sm mb-2">Get in Touch</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-navy">
            We would <span className="italic text-gold">Love</span> to Hear From You
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Section with Image & Overlay Info */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-auto group">
            <Image
              src="/assets/Homepic/contactimg.webp"
              alt="Contact Novello"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-navy/60 mix-blend-multiply transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent"></div>

            {/* Floating Contact Info */}
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              <div className="space-y-4 font-light">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm"><MapPin size={20} className="text-gold" /></div>
                  <p className="max-w-xs text-sm leading-relaxed">Bus Stand, Picture Palace Road, Near Kulri, Mussoorie, Uttarakhand, 248179</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm"><Phone size={20} className="text-gold" /></div>
                  <p className="text-sm">+91 8445581177</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm"><Mail size={20} className="text-gold" /></div>
                  <p className="text-sm">thenovellobyhotelevergreen@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full peer pt-6 pb-2 border-b-2 border-gray-200 focus:border-gold outline-none bg-transparent transition-colors placeholder-transparent text-gray-800"
                />
                <label
                  htmlFor="contact-name"
                  className="absolute left-0 top-6 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gold"
                >
                  Name
                </label>
                {errors.name && (
                  <p className="text-xs text-brand mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="contact-email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full peer pt-6 pb-2 border-b-2 border-gray-200 focus:border-gold outline-none bg-transparent transition-colors placeholder-transparent text-gray-800"
                />
                <label
                  htmlFor="contact-email"
                  className="absolute left-0 top-6 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gold"
                >
                  Email
                </label>
                {errors.email && (
                  <p className="text-xs text-brand mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  rows="4"
                  id="contact-message"
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                  className="w-full peer pt-6 pb-2 border-b-2 border-gray-200 focus:border-gold outline-none bg-transparent transition-colors placeholder-transparent text-gray-800 resize-none"
                ></textarea>
                <label
                  htmlFor="contact-message"
                  className="absolute left-0 top-6 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gold"
                >
                  Message
                </label>
                {errors.message && (
                  <p className="text-xs text-brand mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-brand text-white font-medium py-4 rounded-lg hover:bg-brand-dark transition-all duration-300 shadow-lg hover:shadow-brand/30"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

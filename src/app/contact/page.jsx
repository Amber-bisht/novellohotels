"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

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
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="/assets/contact/contact.webp"
          alt="Contact Us"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold animate-fadeIn">
            Get in Touch
          </h3>
          <h1 className="text-white text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
            We&apos;d Love to <span className="italic text-gold">Hear From You</span>
          </h1>
        </div>
      </div>

      {/* --- SPLIT CONTENT START --- */}
      <div className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* LEFT: Contact Info */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">Contact Information</h2>
              <p className="text-gray-600 font-light text-lg">
                Feel free to connect. Whether you have a booking inquiry or just want to say hello, we are here to assist you.
              </p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-navy font-bold uppercase tracking-wide mb-2 text-sm">Address</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Bus Stand, Picture Palace Road,<br />
                    Near Kulri, Mussoorie,<br />
                    Uttarakhand, 248179
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-navy font-bold uppercase tracking-wide mb-2 text-sm">Phone</h4>
                  <p className="text-gray-600 font-light">
                    +91 8445581177<br />
                    +91 8266966987
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-navy font-bold uppercase tracking-wide mb-2 text-sm">Email</h4>
                  <p className="text-gray-600 font-light break-all">
                    thenovellobyhotelevergreen@gmail.com
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-navy font-bold uppercase tracking-wide mb-2 text-sm">Check-in / Check-out</h4>
                  <p className="text-gray-600 font-light">
                    Check-in: 01:00 PM<br />
                    Check-out: 11:00 AM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:w-1/2">
            <div className="bg-cream p-8 md:p-12 rounded-2xl shadow-lg border border-white/50">
              <h3 className="text-2xl font-serif text-navy mb-8">Send us a Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="space-y-8"
              >
                <div className="group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-navy placeholder-transparent focus:outline-none focus:border-gold transition-colors peer"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-sm">
                    Your Name
                  </label>
                </div>

                <div className="group relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-navy placeholder-transparent focus:outline-none focus:border-gold transition-colors peer"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-sm">
                    Your Email
                  </label>
                </div>

                <div className="group relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-navy placeholder-transparent focus:outline-none focus:border-gold transition-colors peer resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-sm">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-white text-lg font-medium py-4 rounded-sm hover:bg-brand transition-colors shadow-xl flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* MAP SECTION */}
      <div className="h-[50vh] w-full grayscale hover:grayscale-0 transition-all duration-700">
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

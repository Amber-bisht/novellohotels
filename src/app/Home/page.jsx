"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import About from "@/components/About";
import Link from "next/link";
import Rooms from "@/components/Rooms";
import TestimonialCard from "@/components/TestimonalCard";
import Contact from "@/components/Contact";
import { ArrowRight, Wifi, Tv, Coffee, Wind, Sparkles, Monitor } from "lucide-react";
import Travel from "@/components/Travel";
import Availaibility from "@/components/Availaibility";
import Gallery from "@/components/Gallery";

const Page = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="bg-cream min-h-screen text-gray-800 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Homepic/bghome.webp"
            alt="Luxury Novello Hotel"
            fill
            priority
            className="object-cover"
          />
          {/* Darker, premium overlay */}
          <div className="absolute inset-0 bg-navy/40 mix-blend-multiply"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h2 className="text-sm md:text-lg tracking-widest uppercase mb-4 text-gold font-bold">
              Novello Globe Hotels & Resorts
            </h2>
            <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
              A Serene Getaway <br />
              <span className="italic text-gray-200">Amidst the Hills</span>
            </h1>
            <p className="text-lg md:text-xl md:max-w-2xl mx-auto mb-10 text-gray-100 font-light">
              Experience the perfect blend of natural beauty and modern luxury in Mussoorie.
            </p>

            <Link href="/rooms">
              <button className="group relative inline-flex items-center gap-2 bg-brand text-white px-10 py-4 rounded-full overflow-hidden transition-all duration-300 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30">
                <span className="text-lg font-medium tracking-wide">Book Your Stay</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>



      {/* --- COURTESIES SECTION --- */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-brand uppercase tracking-widest font-bold text-sm mb-2">Why Choose Us</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">
              Our Courtesies
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px]">
              <Image
                src="/assets/Homepic/pic1.webp"
                alt="Wifi and Internet"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">High-Speed Wifi</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Stay connected with the world while enjoying your serene retreat.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px]">
              <Image
                src="/downloaded-webp/balcony_image_hyl9hw.webp"
                alt="Private Balcony"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">Private Balconies</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Wake up to breathtaking views of the Mussoorie hills every morning.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px]">
              <Image
                src="/assets/Homepic/comfortable.webp"
                alt="Comfortable Rooms"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">Luxury Comfort</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Premium bedding and modern amenities for your ultimate relaxation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="bg-white">
        <About />
      </section>

      {/* --- DESTINATIONS --- */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif">Explore Nearby</h2>
            <div className="w-24 h-1 bg-gold mt-4"></div>
          </div>
          <Travel />
        </div>
      </section>

      {/* --- ROOMS SECTION --- */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <Rooms />
        </div>
      </section>

      {/* --- AMENITIES SECTION --- */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-brand uppercase tracking-widest font-bold text-sm mb-2">Our Facilities</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">
              Premium <span className="text-brand">Amenities</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-light">
              Everything you need for a comfortable and productive stay.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { id: 1, title: "Free WIFI", Icon: Wifi },
              { id: 2, title: "TV", Icon: Tv },
              { id: 3, title: "Coffee", Icon: Coffee },
              { id: 4, title: "AC", Icon: Wind },
              { id: 5, title: "Toiletries", Icon: Sparkles },
              { id: 6, title: "Desk", Icon: Monitor }
            ].map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center justify-center gap-6 border border-gray-100 group cursor-default">
                <div className="text-gray-800 group-hover:text-gold transition-colors duration-300">
                  <item.Icon strokeWidth={1.5} size={48} />
                </div>
                <h3 className="text-xl md:text-2xl font-sans font-medium text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <div className="bg-cream py-10">
        <Gallery />
      </div>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 bg-navy relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <TestimonialCard />
      </section>

      {/* --- CONTACT --- */}
      <Contact />
    </div>
  );
};

export default Page;

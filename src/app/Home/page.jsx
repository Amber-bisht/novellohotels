"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import About from "@/components/About";
import Link from "next/link";
import Rooms from "@/components/Rooms";
import TestimonialCard from "@/components/TestimonalCard";
import Contact from "@/components/Contact";
import { ArrowRight } from "lucide-react";
import Travel from "@/components/Travel";
import Availaibility from "@/components/Availaibility";
import Gallery from "@/components/Gallery";

const Page = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  return (
    <div>
      <div>
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="/assets/Homepic/bghome.png"
              alt="Luxury Hotel"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif mb-6">
                Welcome to Novello
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Experience luxury redefined
              </p>
              <Link href="/rooms">
                <button className="inline-flex items-center bg-[#9A3D50] text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300">
                  Book Your Stay
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* checkavailaibility  before div*/}

      <Availaibility />

      {/* Courtesies */}
      <div className="py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          Our <span className="text-[#9A3D50]">Courtesies</span>
        </h1>
        <div className="flex flex-col md:flex-row mx-auto items-center justify-evenly mt-10 space-y-6 md:space-y-0">
          <div className="relative">
            <Image
              src="/assets/Homepic/pic1.png"
              alt="Wifi and Internet"
              width={384}
              height={256}
              className="rounded-lg shadow-lg w-80 md:w-96 h-auto"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-0 text-white text-lg font-semibold px-4 py-2 rounded">
              Wifi and Internet
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1752485920/balcony_image_hyl9hw.jpg"
              alt="Private Balcony"
              width={384}
              height={256}
              className="rounded-lg shadow-lg w-80 md:w-96 h-auto"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-0 text-white text-lg font-semibold px-4 py-2 rounded">
              Private Balcony
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/Homepic/comfortable.png"
              alt="Comfortable Rooms"
              width={384}
              height={256}
              className="rounded-lg shadow-lg w-80 md:w-96 h-auto"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-0 text-white text-lg font-semibold px-2 py-2 rounded text-center">
              Comfortable Rooms
            </div>
          </div>
        </div>
      </div>

      {/* about */}

      <About />

      {/* travel destinations*/}

      <Travel />

      {/* rooms */}
      <Rooms />

      {/* Amenities */}

      <div className="mt-10 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          Our Best<span className="text-[#9A3D50]">Amenities</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-9 place-items-center">
          <Image src="/assets/Amenities/Ameniteies1.png" alt="Amenity 1" width={400} height={250} className="h-auto w-full max-w-[400px]" />
          <Image src="/assets/Amenities/Ameniteies2.png" alt="Amenity 2" width={400} height={250} className="h-auto w-full max-w-[400px]" />
          <Image src="/assets/Amenities/Ameniteies3.png" alt="Amenity 3" width={400} height={250} className="h-auto w-full max-w-[400px]" />
          <Image src="/assets/Amenities/Ameniteies4.png" alt="Amenity 4" width={400} height={250} className="h-auto w-full max-w-[400px]" />
          <Image src="/assets/Amenities/Ameniteies5.png" alt="Amenity 5" width={400} height={250} className="h-auto w-full max-w-[400px]" />
          <Image src="/assets/Amenities/Ameniteies6.png" alt="Amenity 6" width={400} height={250} className="h-auto w-full max-w-[400px]" />
        </div>
      </div>

      {/* Gallery */}

      <Gallery/>

      {/* Testimonals */}
      <TestimonialCard />

      {/* contact */}
      <Contact />
    </div>
  );
};

export default Page;

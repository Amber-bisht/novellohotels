"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const rooms = [
  {
    title: "Deluxe Room",
    // price: "₹ 5,000/Night",
    image: "/assets/Homepic/room1.png",
  },
  {
    title: "Executive Room with Balcony",
    // price: "₹ 7,500/Night",
    image: "/assets/Homepic/room2.png",
  },
  {
    title: "Executive Room with Mountain View",
    // price: "₹ 10,000/Night",
    image: "/assets/Homepic/room3.png",
  },
];

export default function RoomPreviewSection() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-gray-900 font-semibold mb-4">Rooms & Suites</h2>
          <p className="text-xl text-gray-600">
            Explore our luxurious rooms designed to provide ultimate comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={room.image}
                alt={room.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl text-white font-semibold mb-2">{room.title}</h3>
                  {/* <p className="text-gray-200 mb-4">{room.price}</p> */}
                  <Link
                    href="/rooms"
                    className="inline-flex items-center text-white hover:text-red-400 transition-colors duration-300"
                  >
                    Book Now <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

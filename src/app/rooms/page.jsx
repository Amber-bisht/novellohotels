"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchRooms } from "../../lib/apis";
import { ArrowRight, Users, BedDouble, Wifi, Maximize } from "lucide-react";

const RoomsPage = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description: "Indulge in luxury at our Deluxe Rooms in the heart of Mussoorie.",
      image: "./assets/Homepic/room1.webp",
      link: "https://live.ipms247.com/booking/book-rooms-thenovelloglobehotel",
      size: "250 sq.ft",
      occupancy: "2 Adults",
    },
    {
      id: 2,
      name: "Executive With View",
      description: "Experience breathtaking valley views from your refined sanctuary.",
      image: "./assets/Homepic/room3.webp",
      link: "https://live.ipms247.com/booking/book-rooms-thenovelloglobehotel",
      size: "300 sq.ft",
      occupancy: "2 Adults, 1 Child",
    },
    {
      id: 3,
      name: "Executive With Balcony",
      description: "Step out onto your private balcony and breathe in the fresh mountain air.",
      image: "./assets/Homepic/room2.webp",
      link: "https://live.ipms247.com/booking/book-rooms-thenovelloglobehotel",
      size: "350 sq.ft",
      occupancy: "3 Adults",
    },
  ];

  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const data = await fetchRooms();
        // console.log("rooms data", data?.room)
        setAllRooms(data?.room);
      } catch (err) {
        // setError("Failed to fetch users.");
      }
    };

    getRooms();
  }, []);


  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/assets/rooms/roomimg.webp"
          alt="Rooms Designed for Your Comfort"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold animate-fadeIn">
            Stay With Us
          </h3>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
            Sanctuaries of <span className="italic text-gold">Comfort</span>
          </h1>
          <p className="text-gray-200 text-lg font-light max-w-xl">
            Every room is a masterpiece of design, offering warmth and luxury in the hills.
          </p>
        </div>
      </div>

      {/* --- ROOMS GRID --- */}
      <div className="container mx-auto my-20 px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-navy mb-4">Our Accommodations</h2>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div key={room.id} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image.replace("./", "/")}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-gold transition-colors">{room.name}</h3>
                <p className="text-gray-600 font-light mb-6 flex-grow leading-relaxed">{room.description}</p>

                {/* Amenities Row (Mock Data for Visuals) */}
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1"><Maximize className="w-4 h-4" /> <span>{room.size}</span></div>
                  <div className="flex items-center gap-1"><Users className="w-4 h-4" /> <span>{room.occupancy}</span></div>
                  <div className="flex items-center gap-1"><Wifi className="w-4 h-4" /> <span>Free Wifi</span></div>
                </div>

                {/* Footer / Action */}
                <div className="mt-auto">
                  <Link href={room.link} target="_blank" className="block">
                    <button className="w-full bg-navy text-white py-4 px-6 rounded-sm hover:bg-brand transition-colors flex items-center justify-center gap-2 uppercase tracking-wider text-sm font-medium">
                      Book Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Rooms Section (Hidden/Placeholder if needed really, but matching style) */}
        {/* If user uncommented dynamic code, they should use similar styling */}

      </div>
    </div>
  );
};

export default RoomsPage;

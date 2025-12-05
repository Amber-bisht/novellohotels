import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 md:p-12 rounded-lg shadow-md gap-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/assets/Homepic/About.webp"
          alt="Hotel Evergreen"
          width={450}
          height={300}
          className="rounded-xl shadow-lg max-w-full md:max-w-[450px] transform hover:scale-105 transition-transform duration-300 h-auto"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6">
        <h1 className="text-4xl font-extrabold text-[#333333]">
          Welcome to <span className="text-[#9A3D50]">The Novello</span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Tucked amidst the picturesque hills of Mussoorie, The Novello by Hotel
          Evergreen promises an unparalleled experience of tranquility and
          luxury. Escape the mundane with our lavishly curated rooms and bask
          in the serene charm of nature.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed hidden md:block">
          With 15 meticulously designed rooms, we cater to every travelers
          desire for comfort and style. Whether its a romantic retreat, a
          family holiday, or a business escape, we ensure a memorable stay
          tailored to your needs.
        </p>
        <Link href="/about">
          <button className="bg-[#9A3D50] hover:bg-[#872D42] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            Discover More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

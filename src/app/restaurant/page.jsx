import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/assets/restaurant/restaurantImg.webp"
          alt="Welcome"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            The Ultimate Rooftop Rendezvous
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mt-4 font-medium text-center">
            Join us for flavors, vibes, and views beyond compare
          </p>
        </div>
      </div>

      {/* Flavors Section */}
      <div className="py-12 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
            🍴 Our Journey of Flavors 🍴
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At The Novello by Hotel Evergreen, our in-house restaurant offers a
            delightful culinary experience that caters to all palates. Set in a
            warm and welcoming ambiance, we serve a wide variety of dishes,
            from authentic Indian delicacies to international favorites,
            prepared with the finest ingredients. Whether youre enjoying a
            hearty breakfast, a light lunch, or an elegant dinner, our skilled
            chefs craft every meal with care. With impeccable service and a
            focus on freshness, dining at The Novellos restaurant ensures a
            memorable gastronomic journey for families, couples, and solo
            travelers alike.
          </p>
          <Link href="/contact" >
          <button className="px-6 py-3 bg-red-700 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-red-800">
            Contact us
          </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/restaurant/restaurant.webp"
            alt="The Novello"
            width={800}
            height={600}
            className="rounded-lg shadow-lg h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

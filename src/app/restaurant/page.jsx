import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Coffee, Sun, Moon } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src="/assets/restaurant/restaurantImg.webp"
          alt="Restaurant Ambiance"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold animate-fadeIn">
            Culinary Excellence
          </h3>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
            A Journey of <span className="italic text-gold">Flavors</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl font-light max-w-2xl">
            Vibes, views, and tastes beyond compare
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-brand uppercase tracking-widest font-bold text-sm">Our Dining Experience</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              Savor the <span className="text-gold italic">Authentic</span> Taste
            </h2>

            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                At <span className="font-semibold text-navy">The Novello by Hotel Evergreen</span>, our in-house restaurant offers a delightful culinary experience that caters to all palates.
                Set in a warm and welcoming ambiance, we serve a wide variety of dishes, from authentic Indian delicacies to international favorites, prepared with the finest ingredients.
              </p>
              <p>
                Whether you're enjoying a hearty breakfast, a light lunch, or an elegant dinner, our skilled chefs craft every meal with care.
                With impeccable service and a focus on freshness, dining at The Novello's restaurant ensures a memorable gastronomic journey for families, couples, and solo travelers alike.
              </p>
            </div>

            <div className="mt-10">
              <Link href="/contact" >
                <button className="px-8 py-4 bg-navy text-white font-medium text-lg rounded-sm hover:bg-gold transition-colors duration-300 shadow-xl tracking-wide uppercase">
                  Reserve a Table
                </button>
              </Link>
            </div>
          </div>

          {/* Image composition */}
          <div className="md:w-1/2 relative order-1 md:order-2">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/restaurant/restaurant.webp"
                alt="Dining at Novello"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl hidden lg:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-gold/10 p-3 rounded-full">
                  <Utensils className="text-gold w-8 h-8" />
                </div>
                <div>
                  <p className="text-navy font-serif text-xl">Multi-Cuisine</p>
                  <p className="text-gray-500 text-sm">Expertly Crafted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Sun className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-serif text-navy mb-2">Breakfast Buffet</h3>
            <p className="text-gray-500 font-light">Start your day with a spread of fresh fruits, bakeries, and hot dishes.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Coffee className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-serif text-navy mb-2">All Day Dining</h3>
            <p className="text-gray-500 font-light">From quick bites to elaborate meals, we serve you throughout the day.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Moon className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-serif text-navy mb-2">Elegant Dinner</h3>
            <p className="text-gray-500 font-light">Experience the magic of evening dining with mood lighting and music.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

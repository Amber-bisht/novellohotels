import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative Background Text */}
      <h2 className="absolute top-10 -left-10 text-[10rem] md:text-[15rem] font-serif text-gray-50 opacity-50 select-none -z-10 leading-none">
        Novello
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/Homepic/About.webp"
              alt="Hotel Evergreen"
              width={600}
              height={450}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 -z-0 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy/5 -z-0 rounded-full blur-2xl"></div>

          <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-gold/30 rounded-full -z-0 hidden md:block"></div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-brand uppercase tracking-widest font-bold text-sm mb-4">Our Story</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight">
            Welcome to <br /> <span className="text-gold italic">The Novello</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
            Tucked amidst the picturesque hills of Mussoorie, <span className="font-medium text-navy">The Novello by Hotel Evergreen</span> promises an unparalleled experience of tranquility and luxury. Escape the mundane with our lavishly curated rooms and bask in the serene charm of nature.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10 font-light text-lg hidden md:block">
            With 15 meticulously designed rooms, we cater to every traveler&apos;s desire for comfort and style. Whether it&apos;s a romantic retreat, a family holiday, or a business escape, we ensure a memorable stay tailored to your needs.
          </p>

          <Link href="/about">
            <button className="group flex items-center gap-3 text-navy font-medium tracking-wide border-b border-gold pb-1 hover:text-brand transition-colors duration-300">
              Discover More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

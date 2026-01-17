import React from "react";
import Image from "next/image";
import { ArrowRight, Star, Heart, MapPin, Coffee } from "lucide-react";

const page = () => {
  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src="/assets/about/imgabout.webp"
          alt="Welcome to Novello"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold animate-fadeIn">
            Discover Our Story
          </h3>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
            Heart of <span className="italic text-gold">Comfort</span>
          </h1>
          <div className="w-24 h-1 bg-gold rounded-full"></div>
        </div>
      </div>

      {/* --- ESSENCE SECTION --- */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-12">
            The Essence of Us
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-brand">The Novello by Hotel Evergreen</span>, your home away from home.
              Nestled in the Queen of Hills, <span className="text-navy font-medium">Mussoorie</span>, our hotel offers a perfect blend of modern comfort and warm, personalized service.
            </p>

            <p>
              Whether you're here for <span className="italic text-gray-800">business, leisure, or a special occasion</span>, we provide a unique experience that caters to your every need.
              Our beautifully designed rooms and suites are thoughtfully equipped with state-of-the-art amenities and plush furnishings to ensure a relaxing and enjoyable stay.
            </p>

            <div className="py-8">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            </div>

            <p>
              We believe in creating memories, not just stays. From our <span className="text-brand font-medium">Rooftop Restaurant</span> with breathtaking views to our dedicated team committed to exceptional hospitality, everything is curated for you.
            </p>

            <p className="font-serif text-2xl text-navy italic mt-8">
              "We look forward to welcoming you!"
            </p>
          </div>
        </div>
      </section>

      {/* --- VALUES GRID --- */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Personalized Care", desc: "We treat every guest like family." },
              { icon: MapPin, title: "Prime Location", desc: "Heart of Mussoorie, close to Mall Road." },
              { icon: Coffee, title: "Modern Comfort", desc: "State-of-the-art amenities & plush warmth." },
              { icon: Star, title: "Memorable Stays", desc: "Creating moments that last a lifetime." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group border border-gray-100">
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand/10 transition-colors">
                  <item.icon className="w-8 h-8 text-navy group-hover:text-brand transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-navy mb-3">{item.title}</h3>
                <p className="text-gray-500 font-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

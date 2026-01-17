import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gift, Calendar, Sparkles } from 'lucide-react';

const Page = () => {
  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src="/assets/packages/packageImg.webp"
          alt="Exclusive Packages"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold animate-fadeIn">
            Curated Experiences
          </h3>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
            Exclusive <span className="italic text-gold">Offers</span>
          </h1>
          <p className="text-gray-200 text-lg font-light max-w-xl">
            Enhance your stay with our specially designed packages, crafted for unforgettable memories.
          </p>
        </div>
      </div>

      {/* --- PACKAGES GRID --- */}
      <div className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-navy mb-4">Limited Time Specials</h2>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Package 1: Honeymoon */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/assets/packages/roomImg.webp"
                alt="Honeymoon Special"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                Best Seller
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-4 text-gold">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide text-navy">Romance</span>
              </div>
              <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-gold transition-colors">Honeymoon Special</h3>
              <p className="text-gray-600 font-light mb-6 flex-grow leading-relaxed">
                Celebrate love with our romantic getaway package including candlelit dinner and flower decorations.
              </p>
              <Link href="/contact" className="mt-auto">
                <button className="w-full border border-navy text-navy py-3 rounded-sm hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm font-medium">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Package 2: Breakfast */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/assets/packages/BreakfastImg.webp"
                alt="Breakfast Special"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-4 text-gold">
                <Gift className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide text-navy">Inclusive</span>
              </div>
              <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-gold transition-colors">Breakfast Special</h3>
              <p className="text-gray-600 font-light mb-6 flex-grow leading-relaxed">
                Start your day right with our complimentary varying breakfast spread included with your stay.
              </p>
              <Link href="/contact" className="mt-auto">
                <button className="w-full border border-navy text-navy py-3 rounded-sm hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm font-medium">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Package 3: Early Bird (Placeholder/Example) */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-64 overflow-hidden bg-navy flex items-center justify-center">
              <Calendar className="text-white/20 w-20 h-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-4 text-gold">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide text-navy">Advance Purchase</span>
              </div>
              <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-gold transition-colors">Early Bird Offer</h3>
              <p className="text-gray-600 font-light mb-6 flex-grow leading-relaxed">
                Plan ahead and save up to 15% when you book your stay 30 days in advance.
              </p>
              <Link href="/contact" className="mt-auto">
                <button className="w-full border border-navy text-navy py-3 rounded-sm hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm font-medium">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;

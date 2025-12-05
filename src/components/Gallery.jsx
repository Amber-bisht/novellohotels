import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ImageCarousel = () => {
  // Hard-coded images (no API call)
  const images = [
    {
      url: "https://res.cloudinary.com/dvz0d0bdb/image/upload/v1740146256/hvwpgsg3c9rp8pf8glfq.jpg",
      orientation: "landscape"
    },
    {
      url: "https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741677094/tidkepodsxahu7k9mq46.jpg",
      orientation: "portrait"
    },
    {
      url: "https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741588068/yhdrqposgkdqx7eqwtr1.jpg",
      orientation: "landscape"
    },
    {
      url: "https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741339520/w8nwgpts09rwwptcbnqq.jpg",
      orientation: "landscape"
    },
    {
      url: "https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741670475/rkb1mccwjdezeehmvbhs.jpg",
      orientation: "portrait"
    },
    {
      url: "https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741677467/fc4epsh3jhpenmihm7ul.jpg",
      orientation: "landscape"
    },
    {
      url: "https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741677094/tidkepodsxahu7k9mq46.jpg",
      orientation: "landscape"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Our Gallery
      </h1>
      
      <div className="relative">
        {/* Main carousel container */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
          <div className="flex h-full">
            {/* Mobile view (single image) */}
            <div className="w-full h-full block md:hidden">
              <img
                src={images[currentIndex].url}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop view (3 images) */}
            <div className="hidden md:flex w-full h-full gap-4">
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + images.length) % images.length;
                return (
                  <div
                    key={index}
                    className="w-1/3 h-full"
                  >
                    <img
                      src={images[index].url}
                      alt={`Slide ${index + 1}`}
                      className={`w-full h-full ${
                        images[index].orientation === 'portrait' 
                          ? 'object-contain bg-gray-100' 
                          : 'object-cover'
                      } rounded-lg`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link href="/gallery">
          <button className="bg-pink-200 hover:bg-pink-300 text-gray-800 font-semibold py-3 px-8 rounded-lg">
            View Full Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImageCarousel;
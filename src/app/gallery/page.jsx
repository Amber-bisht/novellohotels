'use client';

import { fetchGallery } from '@/lib/apis';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalImage, setModalImage] = useState(null);
  const [error, setError] = useState(null);

  // Hard-coded fallback images from public/assets
  const fallbackGallery = [
    // --- ROOMS ---
    { id: 'r1', category: 'Rooms', photoLink: '/assets/Homepic/room1.webp' },
    { id: 'r2', category: 'Rooms', photoLink: '/assets/Homepic/room2.webp' },
    { id: 'r3', category: 'Rooms', photoLink: '/assets/Homepic/room3.webp' },
    { id: 'r4', category: 'Rooms', photoLink: '/assets/Homepic/balcony.webp' },
    { id: 'r5', category: 'Rooms', photoLink: '/assets/Homepic/comfortable.webp' },
    { id: 'r6', category: 'Rooms', photoLink: '/assets/rooms/roomimg.webp' },
    { id: 'r7', category: 'Rooms', photoLink: '/assets/rooms/Rooms_page_img.webp' },
    { id: 'r8', category: 'Rooms', photoLink: '/assets/packages/roomImg.webp' },

    // --- DINING ---
    { id: 'd1', category: 'Dining', photoLink: '/assets/restaurant/restaurant.webp' },
    { id: 'd2', category: 'Dining', photoLink: '/assets/restaurant/restaurantImg.webp' },
    { id: 'd3', category: 'Dining', photoLink: '/assets/packages/BreakfastImg.webp' },

    // --- OUTDOORS / NEARBY ---
    { id: 'o1', category: 'Outdoors', photoLink: '/assets/Homepic/place1.webp' },
    { id: 'o2', category: 'Outdoors', photoLink: '/assets/Homepic/place2.webp' },
    { id: 'o3', category: 'Outdoors', photoLink: '/assets/Homepic/place3.webp' },
    { id: 'o4', category: 'Outdoors', photoLink: '/assets/Homepic/place4.webp' },
    { id: 'o5', category: 'Outdoors', photoLink: '/assets/Homepic/kempty.webp' },
    { id: 'o6', category: 'Outdoors', photoLink: '/assets/Homepic/Landour.webp' },
    { id: 'o7', category: 'Outdoors', photoLink: '/assets/Homepic/George.webp' },
    { id: 'o8', category: 'Outdoors', photoLink: '/assets/Homepic/Lal.webp' },

    // --- HOTEL / MISC ---
    { id: 'h1', category: 'Hotel', photoLink: '/assets/Homepic/About.webp' },
    { id: 'h2', category: 'Hotel', photoLink: '/assets/Homepic/bghome.webp' },
    { id: 'h3', category: 'Hotel', photoLink: '/assets/Homepic/contactimg.webp' },
    { id: 'h4', category: 'Hotel', photoLink: '/assets/Homepic/pic1.webp' },
    { id: 'h5', category: 'Hotel', photoLink: '/assets/about/imgabout.webp' },
    { id: 'h6', category: 'Hotel', photoLink: '/assets/contact/contact.webp' },
    { id: 'h7', category: 'Hotel', photoLink: '/assets/packages/packageImg.webp' },
  ];

  const [allGallery, setAllGallery] = useState(fallbackGallery);

  useEffect(() => {
    // COMMENTED OUT API CALL to ensure only verified local images are shown as per user request
    // const getGallery = async () => {
    //   try {
    //     const data = await fetchGallery();
    //     if (data?.allPics?.length) {
    //       setAllGallery(data.allPics);
    //     }
    //   } catch (err) {
    //     setError('');
    //     setAllGallery(fallbackGallery);
    //   }
    // };
    // getGallery();
  }, []);

  const filteredImages =
    selectedCategory === 'All'
      ? allGallery
      : allGallery.filter((image) => image.category === selectedCategory);

  const uniqueCategories = ['All', ...Array.from(new Set(allGallery.map((image) => image.category)))];

  return (
    <div className="bg-white min-h-screen">

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="/assets/Homepic/place1.webp"
          alt="Gallery Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold animate-fadeIn">
            Visual Journey
          </h3>
          <h1 className="text-white text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
            Moments at <span className="italic text-gold">The Novello</span>
          </h1>
        </div>
      </div>

      <div className="py-20 px-6 max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {error && (
            <p className="text-sm text-red-500 text-center w-full mb-2 hidden">{error}</p>
          )}
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ring-1 ring-inset transition-all duration-300 tracking-wide font-light text-sm md:text-base ${selectedCategory === category
                ? 'bg-navy text-gold ring-navy shadow-lg scale-105'
                : 'bg-transparent text-gray-500 ring-gray-200 hover:text-navy hover:ring-navy/30'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, btnIdx) => (
            <div
              key={btnIdx}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
              onClick={() => setModalImage(image.photoLink)}
            >
              <Image
                src={image.photoLink}
                alt={`${image.category} - The Novello`}
                width={800}
                height={600}
                className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-navy/95 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300"
            onClick={() => setModalImage(null)}
          >
            <div
              className="relative w-full max-h-[90vh] max-w-6xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={modalImage}
                  alt="Gallery View"
                  fill
                  className="object-contain rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
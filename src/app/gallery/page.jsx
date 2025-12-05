'use client';

import { fetchGallery } from '@/lib/apis';
import { useEffect, useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalImage, setModalImage] = useState(null);
  const [error, setError] = useState(null);

  // Hard-coded fallback images so the page always shows content
  const fallbackGallery = [
    {
      id: '1',
      category: 'Rooms',
      photoLink: 'https://res.cloudinary.com/dvz0d0bdb/image/upload/v1740146256/hvwpgsg3c9rp8pf8glfq.jpg',
    },
    {
      id: '2',
      category: 'Spa',
      photoLink: 'https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741677094/tidkepodsxahu7k9mq46.jpg',
    },
    {
      id: '3',
      category: 'Dining',
      photoLink: 'https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741588068/yhdrqposgkdqx7eqwtr1.jpg',
    },
    {
      id: '4',
      category: 'Lobby',
      photoLink: 'https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741339520/w8nwgpts09rwwptcbnqq.jpg',
    },
    {
      id: '5',
      category: 'Rooms',
      photoLink: 'https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741670475/rkb1mccwjdezeehmvbhs.jpg',
    },
    {
      id: '6',
      category: 'Outdoors',
      photoLink: 'https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741677467/fc4epsh3jhpenmihm7ul.jpg',
    },
    {
      id: '7',
      category: 'Dining',
      photoLink: 'https://res.cloudinary.com/dvz0d0bdb/image/upload/v1741677094/tidkepodsxahu7k9mq46.jpg',
    },
  ];

  const [allGallery, setAllGallery] = useState(fallbackGallery);

  useEffect(() => {
    const getGallery = async () => {
      try {
        const data = await fetchGallery();
        if (data?.allPics?.length) {
          setAllGallery(data.allPics);
        } else {
          setError('Using fallback images (no data from API).');
        }
      } catch (err) {
        setError('');
        setAllGallery(fallbackGallery);
      }
    };

    getGallery();
  }, []);

  const filteredImages =
    selectedCategory === 'All'
      ? allGallery
      : allGallery.filter((image) => image.category === selectedCategory);

  const uniqueCategories = ['All', ...Array.from(new Set(allGallery.map((image) => image.category)))];

  return (
    <div>
      <div className="p-6">
        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-6 mt-24">
          {error && (
            <p className="text-sm text-red-500 text-center w-full mb-2">{error}</p>
          )}
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-lg transition ${
                selectedCategory === category
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid mb-4 cursor-pointer"
              onClick={() => setModalImage(image.photoLink)}
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.photoLink}
                  alt={`${image.category} ${image._id}`}
                  className="w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Improved Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setModalImage(null)}
          >
            <div 
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-0 right-0 text-white bg-red-500 rounded-full p-2 m-4 hover:bg-red-600 z-10"
              >
                ✕
              </button>
              <img
                src={modalImage}
                alt="Modal view"
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
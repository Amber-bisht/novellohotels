import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MapPin } from 'lucide-react';

const DestinationCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardData = [
    { src: "/assets/Homepic/Lal.webp", title: "Lal Tibba", subtitle: "Mussoorie's Highest Peak" },
    { src: "/assets/Homepic/kempty.webp", title: "Kempty Falls", subtitle: "Cascading Waterfalls" },
    { src: "/assets/Homepic/George.webp", title: "George Everest", subtitle: "Historic Peak & Views" },
    { src: "/assets/Homepic/Landour.webp", title: "Landour", subtitle: "Colonial Charm & Silence" },
  ];

  return (
    <div className="w-full relative">
      {/* Custom styles for slick dots */}
      <style jsx global>{`
          .slick-dots li button:before {
            color: #C6A87C !important;
            opacity: 0.5;
            font-size: 10px;
          }
          .slick-dots li.slick-active button:before {
            color: #C6A87C !important;
            opacity: 1;
            font-size: 14px;
          }
          .slick-slide {
            padding: 0 10px; // Gap between slides
          }
        `}</style>

      <Slider {...settings} className="-mx-3">
        {cardData.map((card, index) => (
          <div key={index} className="outline-none">
            <div className="group relative h-[450px] w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-gold mb-2 opacity-80">
                  <MapPin size={16} />
                  <span className="bg-gold/20 px-2 py-0.5 rounded text-xs uppercase tracking-wider font-semibold">Nearby</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">
                  {card.title}
                </h2>
                <p className="text-gray-300 font-light text-sm transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {card.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationCards;

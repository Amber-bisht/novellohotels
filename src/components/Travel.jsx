import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestinationCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardData = [
    { src: "/assets/Homepic/Lal.webp", title: "Lal Tibba  - Mussoorie" },
    { src: "/assets/Homepic/kempty.webp", title: "Kempty falls - Mussoorie" },
    { src: "/assets/Homepic/George.webp", title: "George Everest - Mussoorie" },
    { src: "/assets/Homepic/Landour.webp", title: "Landour - Mussoorie" },
  ];

  return (
    <div className=" mt-12 mb-8 flex justify-center items-center ">
      <div className="w-full max-w-7xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Beautiful Travel Destinations
          </h1>
        </div>
        {/* Large screens - All cards visible */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8 lg:justify-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={card.src}
                alt={card.title}
                width={400}
                height={256}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-900 mb-2 truncate">
                  {card.title}
                </h2>
                {/* <p className="text-gray-600">
                  Discover the beauty of this destination.
                </p> */}
              </div>
            </div>
          ))}
        </div>
        {/* Small screens - Carousel */}
        <div className="lg:hidden">
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index} className="px-3">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h2 className="font-semibold text-lg text-gray-900 mb-2 truncate">
                      {card.title}
                    </h2>
                    <p className="text-gray-600">
                      Discover the beauty of this destination.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DestinationCards;

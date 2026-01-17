import React from 'react';

const TestimonialCard = () => {
  const testimonials = [
    {
      text: "The stay at Novello Hotel was a dream! The staff was incredibly courteous, and the rooms were spotless.",
      name: "Rohit Kumar",
      initial: "R",
    },
    {
      text: "Amazing ambiance and top-notch service. The breakfast buffet was the highlight of my stay. I’ll definitely visit again!",
      name: "Aarushi Mehta",
      initial: "A",
    },
    {
      text: "From check-in to check-out, everything was seamless. The attention to detail in decor and comfort made my trip unforgettable.",
      name: "Vikram Singh",
      initial: "V",
    },
  ];

  return (
    <section className="relative z-10 px-4 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-gold uppercase tracking-widest font-bold text-sm mb-3">Guest Reviews</h2>
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          Experiences that <span className="italic text-gold">Speak</span>
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Stars */}
            <div className="flex mb-6 space-x-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-4 h-4 text-gold"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.857 1.515 8.241-7.452-3.957-7.452 3.957 1.515-8.241-6.063-5.857 8.332-1.151z" />
                  </svg>
                ))}
            </div>

            {/* Quote Icon */}
            <div className="text-gold text-4xl font-serif leading-none mb-4">“</div>

            <p className="text-gray-300 italic mb-6 leading-relaxed font-light">
              {testimonial.text}
            </p>

            <div className="mt-auto flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gold to-yellow-600 text-white font-serif font-bold text-xl shadow-lg">
                {testimonial.initial}
              </div>
              <div className="text-left">
                <p className="text-white font-serif tracking-wide">{testimonial.name}</p>
                <p className="text-xs text-gold uppercase tracking-wider">Verified Guest</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCard;

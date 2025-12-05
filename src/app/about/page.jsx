import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="w-full h-full ">
        <div>
          {/* welcome section */}
          <div className="relative w-full h-[500px]">
            <Image
              src="/assets/about/imgabout.png"
              alt="Welcome"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                Welcome to the Heart of Comfort
              </h1>
            </div>
          </div>
          {/* the essence of use */}
          <div className="w-full flex flex-col   bg-[#F7ECEE] mt-5">
            <h1 className="pt-5 font-['Roboto_Serif'] text-center text-3xl font-semibold leading-[48px]">
              The Essence of Us
            </h1>
            <div className="w-[90%] mx-auto   ">
              <p className="font-open-sans p-4 text-xl font-light leading-8  font-w-300">
                Welcome to{" "}
                <span className="font-bold">The Novello by evergreen</span>, you
                re home away from home. Nestled in the Queen of hills{" "}
                <span className="font-bold">Mussoorie Dehradun</span> , our
                hotel offers a perfect blend of modern comfort and warm,
                personalised service. Whether youre here for business, leisure,
                or a special occasion, we provide a unique experience that
                caters to your every need. Our beautifully designed rooms and
                suites, each thoughtfully equipped with state-of-the-art
                amenities and plush furnishings to ensure a relaxing and
                enjoyable stay. We strive to make every guest feel like family,
                offering exceptional hospitality with attention to detail. At
                The Novello by evergreen, we believe in creating memories, not
                just stays. From our{" "}
                <span className="font-bold">
                  Roof top restaurant to Beautiful View
                </span>
                , we offer everything you need for a truly memorable experience.
                Our dedicated team is committed to delivering outstanding
                service and ensuring that your visit is as comfortable and
                enjoyable as possible. Whether you re here to explore the
                vibrant local culture, relax and unwind, or attend a business
                meeting, we re here to make your stay extraordinary. Thank you
                for choosing{" "}
                <span className="font-bold">The Novello by evergreen</span>. We
                look forward to welcoming you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

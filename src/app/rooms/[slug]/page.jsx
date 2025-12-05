// "use client";
// import React, { useEffect, useState } from "react";
// import BookingForm from "@/components/BookingForm";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import RoomSelecter from "@/components/RoomSelecter";
// import { usePathname } from "next/navigation";
// import { fetchSingleRoom } from "@/lib/apis";

// const Page = () => {

//     const pathname = usePathname();
//     const slug = pathname.split("/").filter(Boolean)[1];

//     const [roomData, setRoomData] = useState(null);
//     const [isFormOpen, setIsFormOpen] = useState(false);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [error, setError] = useState(null);

//     const openForm = () => setIsFormOpen(true);
//     const closeForm = () => setIsFormOpen(false);

//     const handleNext = () => {
//         if (roomData?.roomImage?.length) {
//             setCurrentSlide((prev) => (prev + 1) % roomData.roomImage.length);
//         }
//     };

//     const handlePrev = () => {
//         if (roomData?.roomImage?.length) {
//             setCurrentSlide((prev) =>
//                 prev === 0 ? roomData.roomImage.length - 1 : prev - 1
//             );
//         }
//     };

//     useEffect(() => {
//         if (!slug) return;

//         const getRooms = async () => {
//             try {
//                 const data = await fetchSingleRoom(slug);
//                 if (data?.room?.length) {
//                     setRoomData(data.room[0]);
//                 } else {
//                     setError("Room not found.");
//                     setRoomData(null);
//                 }
//             } catch (err) {
//                 setError("Failed to fetch room.");
//                 setRoomData(null);
//             }
//         };

//         getRooms();
//     }, [slug]);

//     console.log("roomData", roomData);


//     return (
//         <div className="mt-0">
//             <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-20">
//                 <div className="max-w-5xl w-full p-4">

//                     <div className="grid md:grid-cols-2 gap-6 bg-white rounded-lg shadow-md overflow-hidden">

//                         <div>

//                             <h2 className="block md:hidden text-xl font-bold p-4 text-center">
//                                 {roomData?.roomName}
//                             </h2>
//                             {
//                                 roomData?.roomImage.length > 0 ? (<div className="relative">
//                                     <Image
//                                         src={roomData?.roomImage[currentSlide]}
//                                         alt={`Slide ${currentSlide + 1}`}
//                                         width={800}
//                                         height={533}
//                                         className="w-full h-auto object-cover rounded-t-lg transition-all duration-500 ease-in-out"
//                                     />
//                                     <button
//                                         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700"
//                                         onClick={handlePrev}
//                                     >
//                                         <FaChevronLeft />
//                                     </button>
//                                     <button
//                                         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700"
//                                         onClick={handleNext}
//                                     >
//                                         <FaChevronRight />
//                                     </button>
//                                 </div>) : (<></>)
//                             }

//                             <div className="p-4">
//                                 <p className="text-sm text-gray-700">
//                                     At The Novello by Hotel Evergreen, we go above and beyond to
//                                     provide services that make your stay extraordinary. Enjoy our
//                                     range of facilities including:
//                                 </p>
//                                 <h3 className="text-lg font-semibold mt-4">Amenities</h3>
//                                 <div className="flex flex-wrap space-x-4 mt-2">
//                                     <span className="text-sm text-gray-600">🛜 Free WiFi</span>
//                                     <span className="text-sm text-gray-600">☕ Tea / Coffee</span>
//                                     <span className="text-sm text-gray-600">🛁 Toiletries</span>
//                                 </div>
//                                 <h3 className="text-lg font-semibold mt-4">Extra Services</h3>
//                                 <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
//                                     <li>Restaurant</li>
//                                     <li>Laundry</li>
//                                     <li>Paid Parking</li>
//                                 </ul>
//                             </div>
//                         </div>


//                         <div className="p-4">

//                             <h2 className="hidden md:block text-2xl font-bold">
//                                 {roomData?.roomName}
//                             </h2>
//                             <p className="text-gray-600 mt-2">
//                                 {roomData?.description}
//                             </p>
//                             <div className="mt-4">
//                                 <h3 className="text-lg font-semibold">Overview</h3>
//                                 <p className="text-sm text-gray-600">
//                                     Status: <span className="font-medium">{roomData?.roomStatus}</span>
//                                 </p>
//                                 <p className="text-sm text-gray-600">
//                                     Guest: <span className="font-medium">{roomData?.guestCount}</span>
//                                 </p>
//                                 <p className="text-sm text-gray-600">
//                                     Bed: <span className="font-medium">{roomData?.bedCount}</span>
//                                 </p>
//                             </div>
//                             <div className="mt-4">
//                                 <p className="text-2xl font-bold text-[#9A3D50]">
//                                     ₹{roomData?.rate}{" "}
//                                     <span className="text-lg font-normal text-black">
//                                         / Night + taxes & fees
//                                     </span>
//                                 </p>
//                                 <button
//                                     className="mt-4 px-4 py-2 bg-[#AB4459] text-white rounded-lg shadow hover:bg-red-600"
//                                     onClick={openForm}
//                                 >
//                                     Book Now
//                                 </button>
//                             </div>

//                             <RoomSelecter roomData={roomData} />
//                         </div>
//                     </div>


//                     <div className="mt-6 bg-white rounded-lg shadow-md p-4">
//                         <h3 className="text-lg font-semibold mb-2">Use this location</h3>
//                         <div className="w-full h-72 rounded-lg overflow-hidden">
//                             <iframe
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.2268462357038!2d78.0833388748108!3d30.451225299184497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d10033880bf7%3A0xa441c4f2cb76f975!2sThe%20Novello%20By%20Hotel%20Evergreen!5e1!3m2!1sen!2sin!4v1734286269475!5m2!1sen!2sin"
//                                 width="100%"
//                                 height="100%"
//                                 style={{ border: 0 }}
//                                 allowFullScreen=""
//                                 loading="lazy"
//                                 referrerPolicy="no-referrer-when-downgrade"
//                             ></iframe>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {isFormOpen && <BookingForm roomData={roomData} onClose={closeForm} />}
//         </div>
//     );
// };

// export default Page;

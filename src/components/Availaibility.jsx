"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DateGuestRoomSelector = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date().toISOString().split('T')[0]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Function to get the next day
  const getNextDay = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.toISOString().split('T')[0];
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  // Get the next day after check-in
  const nextDay = getNextDay(checkInDate);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-gray-100">
      {/* Date Input - Start Date */}
      <div className="w-full md:w-1/4">
        <label className="block mb-1 font-semibold" htmlFor="checkin-date">
          Check-in
        </label>
        <input
          type="date"
          min={today}
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          id="checkin-date"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Date Input - End Date */}
      <div className="w-full md:w-1/4">
        <label className="block mb-1 font-semibold" htmlFor="checkout-date">
          Check-out
        </label>
        <input
          type="date"
          min={nextDay}
          defaultValue={nextDay}
          id="checkout-date"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Dropdown Input */}
      <div className="relative w-full md:w-1/4">
        <label className="block mb-1 font-semibold">Guests & Rooms</label>
        <button
          onClick={toggleDropdown}
          className="w-full px-3 py-2 border rounded flex items-center justify-between"
        >
          {adults} Adults - {children} Children - {rooms} Room
          <span className="ml-2">&#9660;</span>
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 bg-white border mt-1 p-3 w-full rounded shadow-md">
            {/* Adults */}
            <div className="flex justify-between items-center mb-2">
              <span>Adults</span>
              <div className="flex items-center">
                <button
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="px-2 text-lg text-gray-500"
                >
                  -
                </button>
                <span className="px-3">{adults}</span>
                <button
                  onClick={() => setAdults(adults + 1)}
                  className="px-2 text-lg text-gray-500"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center mb-2">
              <span>Children</span>
              <div className="flex items-center">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="px-2 text-lg text-gray-500"
                >
                  -
                </button>
                <span className="px-3">{children}</span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="px-2 text-lg text-gray-500"
                >
                  +
                </button>
              </div>
            </div>

            {/* Rooms */}
            <div className="flex justify-between items-center">
              <span>Rooms</span>
              <div className="flex items-center">
                <button
                  onClick={() => setRooms(Math.max(1, rooms - 1))}
                  className="px-2 text-lg text-gray-500"
                >
                  -
                </button>
                <span className="px-3">{rooms}</span>
                <button
                  onClick={() => setRooms(rooms + 1)}
                  className="px-2 text-lg text-gray-500"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Check Availability Button */}
      <div className="w-full md:w-1/4 mt-7">
        <Link href="https://live.ipms247.com/booking/book-rooms-thenovelloglobehotel" target='_blank'>
          <button className="w-full bg-[#AB4459] text-white font-semibold px-4 py-2 rounded hover:bg-red-700">
            Check Availability
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DateGuestRoomSelector;

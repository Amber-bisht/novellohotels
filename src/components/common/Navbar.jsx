"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuState, setMenuState] = useState({
    isMobileMenuOpen: false,
    isDropdownOpen: false,
    isMobileRoomsDropdownOpen: false,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Change state if scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleState = useCallback((key) => {
    setMenuState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const closeAllMenus = useCallback(() => {
    setMenuState({
      isMobileMenuOpen: false,
      isDropdownOpen: false,
      isMobileRoomsDropdownOpen: false,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeAllMenus();
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuState(prev => ({
          ...prev,
          isDropdownOpen: false
        }));
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeAllMenus]);

  const handleLinkClick = useCallback(() => {
    closeAllMenus();
  }, [closeAllMenus]);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/restaurant", label: "Restaurant" },
    // Removed "Packages" from here since it's handled separately or duplicated
  ];

  const roomLinks = [
    { href: "https://live.ipms247.com/booking/book-rooms-thenovelloglobehotel", label: "Deluxe Room" },
    { href: "https://live.ipms247.com/booking/book-rooms-thenovelloglobehotel", label: "Executive With View" },
    { href: "https://live.ipms247.com/booking/book-rooms-thenovelloglobehotel", label: "Executive With Balcony And View" },
  ];

  // Dynamic classes for navbar
  const navClasses = `w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-navy shadow-lg py-2" : "bg-transparent py-4 bg-gradient-to-b from-black/70 to-transparent"
    }`;

  return (
    <nav className={navClasses}>
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/downloaded-webp/logo-white_yexdbw.webp"
            alt="Novello Hotels Logo"
            width={120}
            height={50}
            className={`h-auto transition-all duration-300 ${isScrolled ? "w-[100px]" : "w-[120px]"}`}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-white hover:text-gold transition-colors duration-200 uppercase text-xs tracking-widest font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Desktop Rooms Dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              className="flex items-center text-white hover:text-gold transition-colors duration-200 uppercase text-xs tracking-widest font-medium"
              onClick={() => toggleState("isDropdownOpen")}
            >
              Rooms
              <FaChevronDown className={`ml-2 text-[10px] transition-transform duration-200 ${menuState.isDropdownOpen ? "rotate-180" : ""
                }`} />
            </button>

            {menuState.isDropdownOpen && (
              <ul className="absolute top-full left-0 bg-white rounded-md shadow-xl py-2 mt-4 min-w-[240px] z-50 animate-in fade-in slide-in-from-top-2">
                {roomLinks.map((room, index) => (
                  <li key={index}>
                    <Link
                      href={room.href}
                      target="_blank"
                      className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-50 hover:text-brand transition-colors duration-200"
                      onClick={(e) => {
                        // Don't need to prevent default since it's external link mostly, but good practice if internal
                        handleLinkClick();
                      }}
                    >
                      {room.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/packages"
              className="text-white hover:text-gold transition-colors duration-200 uppercase text-xs tracking-widest font-medium"
            >
              Packages
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <button className="border border-white/30 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full hover:bg-brand hover:border-brand transition-all duration-300 text-xs tracking-widest uppercase font-bold">
                Contact
              </button>
            </Link>
          </li>
        </ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:text-gold transition-colors duration-200"
          onClick={() => toggleState("isMobileMenuOpen")}
          aria-label="Toggle mobile menu"
        >
          {menuState.isMobileMenuOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-navy shadow-lg transition-all duration-300 ease-in-out border-t border-white/10 ${menuState.isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <ul className="py-6 flex flex-col space-y-2">
            {navigationLinks.map((link, index) => (
              <li key={index} className="px-6">
                <Link
                  href={link.href}
                  className="block text-white hover:text-gold transition-colors duration-200 py-2 border-b border-white/5"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Mobile Rooms Dropdown */}
            <li className="px-6">
              <button
                className="flex items-center justify-between w-full text-white hover:text-gold transition-colors duration-200 py-2 border-b border-white/5"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleState("isMobileRoomsDropdownOpen");
                }}
              >
                Rooms
                <FaChevronDown className={`ml-2 transition-transform duration-200 ${menuState.isMobileRoomsDropdownOpen ? "rotate-180" : ""
                  }`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${menuState.isMobileRoomsDropdownOpen ? "max-h-56" : "max-h-0"
                }`}>
                <ul className="pl-4 py-2 bg-black/20 rounded mt-2">
                  {roomLinks.map((room, index) => (
                    <li key={index} className="py-2">
                      <Link
                        href={room.href}
                        target="_blank"
                        className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        onClick={(e) => {
                          handleLinkClick();
                        }}
                      >
                        {room.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="px-6">
              <Link
                href="/packages"
                className="block text-white hover:text-gold transition-colors duration-200 py-2 border-b border-white/5"
                onClick={handleLinkClick}
              >
                Packages
              </Link>
            </li>

            <li className="px-6 pt-4">
              <Link
                href="/contact"
                onClick={handleLinkClick}
              >
                <button className="w-full bg-brand text-white py-3 rounded text-center uppercase tracking-widest text-sm font-bold">
                  Contact Us
                </button>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

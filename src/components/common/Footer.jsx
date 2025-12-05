import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1B1833] text-gray-300 py-3 px-4  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Address</h3>
          <p>
            Bus Stand, Picture Palace Road, Near Kulri, Mussoorie, Uttarakhand,
            248179
          </p>
          <p>thenovellobyhotelevergreen@gmail.com</p>
          <p>Contact: +91 8445581177 , +91 8266966987</p>
          <p> </p>
          <div className="flex gap-4 mt-4">
          <Link
              href="https://www.instagram.com/thenovello_mussooriehotel?igsh=MTI3dmM4Mzd1d3Mydg=="
              target="_blank"
              aria-label="Visit Novello on Instagram"
            >
            <FaInstagram className="text-2xl cursor-pointer hover:text-red-500" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61567059387653"
              target="_blank"
              aria-label="Visit Novello on Facebook"
            >
              <FaFacebook className="text-2xl cursor-pointer hover:text-red-500" />
            </Link>
            {/* <FaWhatsapp className="text-2xl cursor-pointer hover:text-red-500" /> */}
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/rooms">Rooms</Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-red-500">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-red-500">
                Cancellation & Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-red-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Hours Section */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">
            Check in / Check Out
          </h3>
          <div className="flex flex-col items-start ">
            <p>Check in : 01:00 PM</p>
            <p>Check out: 11:00 AM</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p>Copyright 2025 by Novello</p>
      </div>
    </footer>
  );
};

export default Footer;

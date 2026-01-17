import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-navy text-gray-300 py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Address Section */}
        <div>
          <h3 className="text-xl font-serif text-white mb-6 tracking-wide">Contact Us</h3>

          <div className="space-y-4 text-sm font-light leading-relaxed">
            <p className="flex items-start gap-2">
              <span className="font-medium text-gold">Address:</span>
              Bus Stand, Picture Palace Road,<br /> Near Kulri, Mussoorie, Uttarakhand, 248179
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium text-gold">Email:</span>
              <a href="mailto:thenovellobyhotelevergreen@gmail.com" className="hover:text-gold transition-colors">thenovellobyhotelevergreen@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium text-gold">Phone:</span>
              <a href="tel:+918445581177" className="hover:text-gold transition-colors">+91 8445581177</a>,
              <a href="tel:+918266966987" className="hover:text-gold transition-colors ml-1">+91 8266966987</a>
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <Link
              href="https://www.instagram.com/thenovello_mussooriehotel?igsh=MTI3dmM4Mzd1d3Mydg=="
              target="_blank"
              aria-label="Visit Novello on Instagram"
            >
              <div className="p-2 rounded-full border border-white/20 hover:border-gold hover:text-gold transition-all duration-300">
                <FaInstagram className="text-lg" />
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61567059387653"
              target="_blank"
              aria-label="Visit Novello on Facebook"
            >
              <div className="p-2 rounded-full border border-white/20 hover:border-gold hover:text-gold transition-all duration-300">
                <FaFacebook className="text-lg" />
              </div>
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-serif text-white mb-6 tracking-wide">Quick Links</h3>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <Link href="/rooms" className="hover:text-gold hover:tracking-wider transition-all duration-300">Rooms & Suites</Link>
            </li>
            <li>
              <Link href="/restaurant" className="hover:text-gold hover:tracking-wider transition-all duration-300">Dining</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gold hover:tracking-wider transition-all duration-300">Gallery</Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-gold hover:tracking-wider transition-all duration-300">Offers & Packages</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold hover:tracking-wider transition-all duration-300">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-gold hover:tracking-wider transition-all duration-300">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-gold hover:tracking-wider transition-all duration-300">Cancellation Policy</Link>
            </li>
          </ul>
        </div>

        {/* Hours Section */}
        <div>
          <h3 className="text-xl font-serif text-white mb-6 tracking-wide">Stay Info</h3>
          <div className="bg-white/5 p-6 rounded-lg border border-white/5">
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
              <span className="text-gold font-medium">Check-in</span>
              <span className="font-light">01:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gold font-medium">Check-out</span>
              <span className="font-light">11:00 AM</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-500 font-light">
            Early check-in and late check-out are subject to availability.
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10 mt-12 pt-8 text-center">
        <p className="text-sm font-light text-gray-500">&copy; {new Date().getFullYear()} Novello Globe Hotels & Resorts. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

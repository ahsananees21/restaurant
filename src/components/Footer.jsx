import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#101828] text-gray-400">
      <div className="container mx-auto px-5 md:px-14 py-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-yellow-400 mb-3">Grill Yard</h1>
          <p className="text-gray-400 leading-relaxed max-w-xs">
            Bold flavors. Local ingredients. Real fire. Visit us and taste the difference.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-3">Quick Links</h2>
          <ul className="space-y-2">
           {['Home', 'About', 'Menu', 'Contact'].map((link) => (
  <li key={link}>
    <a
      href={`#${link.toLowerCase()}`}
      className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors"
    >
      {link}
    </a>
  </li>
))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-3">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400 shrink-0" />
              <span>123 Flavor St, Grill City</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400 shrink-0" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400 shrink-0" />
              <span>support@grillyard.com</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-3">Opening Hours</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="text-yellow-400 font-semibold">Mon-Fri:</span> 11:00 AM - 10:00 PM
            </li>
            <li>
              <span className="text-yellow-400 font-semibold">Sat:</span> 12:00 PM - 11:00 PM
            </li>
            <li>
              <span className="text-yellow-400 font-semibold">Sun:</span> Closed
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer
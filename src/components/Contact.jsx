import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="text-gray-600 bg-[#101828] body-font overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">

        {/* LEFT: Get in Touch (left se right) */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6">Get in Touch</h2>

          <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
            Whether you have a question, want to book a table, or just say hi — we’d love to hear from you.
          </p>

          <ul className="space-y-3">
            {/* Address */}
            <li className="flex items-center gap-4 text-white">
              <svg className="w-5 h-5 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
              <span>123 Flavor Street, Grill City</span>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-4 text-white">
              <svg className="w-5 h-5 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+1 (234) 567-890</span>
            </li>

            {/* Email */}
            <li className="flex items-center gap-4 text-white">
              <svg className="w-5 h-5 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>contact@grillyard.com</span>
            </li>
          </ul>
        </motion.div>

        {/* RIGHT: Form card (right se left) */}
        <motion.div
          className="w-full lg:w-5/12 bg-gray-800 rounded-2xl p-8 flex flex-col shadow-md"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative mb-6">
            <label htmlFor="name" className="block mb-1 text-lg text-yellow-400 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full bg-gray-700 rounded-lg border border-transparent focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-base outline-none text-white py-3 px-4 transition-colors duration-200 ease-in-out placeholder:text-gray-400"
            />
          </div>

          <div className="relative mb-6">
            <label htmlFor="email" className="block mb-1 text-lg text-yellow-400 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full bg-gray-700 rounded-lg border border-transparent focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-base outline-none text-white py-3 px-4 transition-colors duration-200 ease-in-out placeholder:text-gray-400"
            />
          </div>

          <div className="relative mb-6">
            <label htmlFor="message" className="block mb-1 text-lg text-yellow-400 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              className="w-full h-28 bg-gray-700 rounded-lg border border-transparent focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-base outline-none text-white py-3 px-4 transition-colors duration-200 ease-in-out placeholder:text-gray-400"
            ></textarea>
          </div>

          <button className="w-full bg-yellow-400 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-colors duration-200">
            Send Message
          </button>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
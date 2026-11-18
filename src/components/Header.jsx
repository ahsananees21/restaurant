import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { motion } from 'framer-motion'



const Header = () => {
  const [open, setOpen] = useState(false)

  const leftLinks = ['Home', 'Menu']
  const rightLinks = ['About', 'Contact']

  return (
    <motion.header
  initial={{ y: -100, opacity: 0 }}   // shuru mein 100px upar aur ghayab
  animate={{ y: 0, opacity: 1 }}      // phir apni jagah par aa jaye
  transition={{ duration: 1.2, ease: 'easeOut' }}
  className="sticky top-0 z-50 text-[#fdc700] bg-[#101828] body-font"
>
      <div className="container mx-auto flex items-center justify-between p-5">

        {/* Left side: hamburger (mobile) / links (desktop) */}
        <div className="flex flex-1 items-center">
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <nav className="hidden md:flex items-center gap-10 font-medium text-xl">
           {leftLinks.map((link) => (
  <a
    key={link}
    href={`#${link.toLowerCase()}`}
    className="hover:text-yellow-300 cursor-pointer"
  >
    {link}
  </a>
))}
          </nav>
        </div>

        {/* Center logo */}
       <motion.a
       href='#home'
  className="flex justify-center cursor-pointer"
  whileHover={{ scale: 1.1 }}   // cursor jaye to thora bara
  whileTap={{ scale: 0.9 }}     // click par dab jaye
  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
>
  <img src={logo} alt="logo" className="h-16 lg:h-20 w-auto" />
</motion.a>

        {/* Right side: links (desktop), mobile pe khali */}
        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex items-center gap-10 font-medium text-xl">
            {rightLinks.map((link) => (
  <a
    key={link}
    href={`#${link.toLowerCase()}`}
    className="hover:text-yellow-300 cursor-pointer"
  >
    {link}
  </a>
))}
          </nav>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="md:hidden flex flex-col items-center gap-5 pb-6 pt-5 font-medium text-xl border-t border-[#fdc700]/20">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
  key={link}
  href={`#${link.toLowerCase()}`}
  className="hover:text-yellow-300 cursor-pointer"
  onClick={() => setOpen(false)}
>
  {link}
</a>
          ))}
        </nav>
      )}
    </motion.header>
  )
}

export default Header
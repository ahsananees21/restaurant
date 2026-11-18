import React from 'react'
import heropic from '../assets/heroimg.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <section id='home' className="scroll-mt-28 text-white bg-gray-900 overflow-hidden">
        <div className="container mx-auto flex flex-col items-center px-5 py-12 sm:px-8 sm:py-20 md:flex-row md:px-12 md:py-28 lg:px-12 lg:py-40">

          {/* Text */}
          <div className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/2 md:items-start md:text-left md:pr-10 lg:flex-grow lg:pr-24">

            {/* Heading: upar se neeche */}
            <motion.h1
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="title-font mb-4 text-5xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 px-0 md:px-0 lg:px-4"
            >
              Grill Yard
              <br className="hidden lg:inline-block" /> Where Flavor
              <br className="hidden lg:inline-block" /> Meets Fire
            </motion.h1>

            {/* Paragraph: neeche se upar */}
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              className="mb-8 leading-relaxed text-sm sm:text-base px-0 lg:px-4 max-w-md lg:max-w-none"
            >
              Enjoy the best burgers, fries, and shakes in town with fresh ingredients and
              <br className="hidden lg:inline-block" /> sizzling taste.
            </motion.p>

            <div className="flex justify-center">
              <button className="inline-flex text-black bg-yellow-400 border-0 py-3 px-7 focus:outline-none hover:bg-yellow-300 rounded-full font-bold lg:ml-4">
                Order Now
              </button>
            </div>
          </div>

          {/* Image: right se left, phir up-down floating */}
         {/* Image: right se left, phir up-down floating */}
<motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
  className="w-full md:w-1/2 lg:max-w-xl lg:w-full"
>
  <motion.img
    className="w-full object-cover object-center rounded-xl"
    alt="hero"
    src={heropic}
    animate={{ y: [0, -20, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1.5,
    }}
  />
</motion.div>

        </div>
      </section>
    </div>
  )
}

export default Hero
import React, { useEffect, useRef, useState } from 'react'
import logo2 from '../assets/logo.png'
import { motion, useInView, animate } from 'framer-motion'

// Counter: jab screen par aaye tab 0 se number tak ginta hai
const Counter = ({ to, duration = 2 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.floor(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return <span ref={ref}>{value.toLocaleString('en-US')}</span>
}

// Left side ke liye: ek ke baad ek neeche se upar
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
}

const About = () => {
  return (
    <section id='about' className=" scroll-mt-28 relative overflow-hidden text-white bg-[#101828] body-font">

      <div className="relative container mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* LEFT SIDE */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 variants={item} className="title-font font-bold text-3xl sm:text-4xl mb-4 text-yellow-400">
            Our Story & Stats
          </motion.h1>

          <motion.p variants={item} className="leading-relaxed text-gray-300 mb-4">
            Founded in 2023, Grill Yard sprang from a love of bold flavors and community spirit. Every burger we grill is crafted with care—from selecting local ingredients to perfecting our secret sauces.
          </motion.p>

          <motion.p variants={item} className="leading-relaxed text-gray-300 mb-8">
            In our first year alone, we’ve served over 10,000 burgers and welcomed thousands of happy customers. Join us at the yard and experience the sizzle yourself!
          </motion.p>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-3 gap-2 sm:gap-4 text-center mb-10">
            <div>
              <h2 className="title-font font-bold text-2xl sm:text-3xl text-yellow-400">
                <Counter to={10000} />
              </h2>
              <p className="text-sm sm:text-base text-gray-400 sm:whitespace-nowrap">Burgers Served</p>
            </div>
            <div>
              <h2 className="title-font font-bold text-2xl sm:text-3xl text-yellow-400">
                <Counter to={5000} />
              </h2>
              <p className="text-sm sm:text-base text-gray-400 sm:whitespace-nowrap">Happy Customers</p>
            </div>
            <div>
              <h2 className="title-font font-bold text-2xl sm:text-3xl text-yellow-400">
                <Counter to={50} />
              </h2>
              <p className="text-sm sm:text-base text-gray-400 sm:whitespace-nowrap">Hours of Prep</p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.ul variants={item} className="border-l-2 border-yellow-400 pl-5 space-y-4">
            <li className="relative text-gray-300">
              <span className="absolute -left-[26px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="font-bold text-yellow-400">2023</span> — First Grill Yard opens its doors.
            </li>
            <li className="relative text-gray-300">
              <span className="absolute -left-[26px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="font-bold text-yellow-400">2024</span> — Launched our signature spicy wings.
            </li>
            <li className="relative text-gray-300">
              <span className="absolute -left-[26px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="font-bold text-yellow-400">2025</span> — Celebrated 10,000 burgers served!
            </li>
          </motion.ul>
        </motion.div>

        {/* RIGHT SIDE (logo card) */}
        {/* Bahar wala: neeche se upar entrance */}
        <motion.div
          className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-1/2"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Andar wala: continuous bounce */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          >
            <div className="group w-full cursor-pointer
              bg-[#0f172a] rounded-2xl p-4
              border border-yellow-400/20 border-b-2 border-b-yellow-400
              shadow-[0_6px_20px_rgba(250,204,21,0.45)]
              flex items-center justify-center
              transition-all duration-300">
              <img
                className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                src={logo2}
                alt="Grill Yard logo"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
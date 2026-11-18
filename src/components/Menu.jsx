import React, { useState } from 'react'
import { motion } from 'framer-motion'


import burgerImg from '../assets/burger.png'
import wingsImg from '../assets/wings.png'
import friesImg from '../assets/fries.png'
import shakesImg from '../assets/shakes.png'

const menuData = {
  Burgers: [
    { id: 1, name: 'Grilled Beef Burger', desc: 'Juicy beef patty with fresh lettuce, tomato, and cheese.', price: 9.99, img: burgerImg },
    { id: 2, name: 'Classic Cheese Burger', desc: 'Melted cheddar with pickles and special sauce.', price: 8.99, img: burgerImg },
    { id: 3, name: 'Bacon Double Burger', desc: 'Double beef patties topped with crispy bacon.', price: 11.99, img: burgerImg },
  ],
  Wings: [
    { id: 1, name: 'Spicy Chicken Wings', desc: 'Crispy wings tossed in our special hot sauce.', price: 7.99, img: wingsImg },
    { id: 2, name: 'BBQ Wings', desc: 'Sweet and smoky BBQ glazed wings.', price: 8.49, img: wingsImg },
    { id: 3, name: 'Garlic Parmesan Wings', desc: 'Wings coated in garlic butter and parmesan cheese.', price: 8.99, img: wingsImg },
  ],
  Fries: [
    { id: 1, name: 'French Fries', desc: 'Golden fries seasoned to perfection.', price: 3.99, img: friesImg },
    { id: 2, name: 'Cheese Fries', desc: 'Fries loaded with melted cheese and bacon bits.', price: 5.99, img: friesImg },
    { id: 3, name: 'Sweet Potato Fries', desc: 'Crispy sweet potato fries with a hint of cinnamon.', price: 4.99, img: friesImg },
  ],
  Shakes: [
    { id: 1, name: 'Chocolate Milkshake', desc: 'Rich chocolate shake topped with whipped cream.', price: 5.99, img: shakesImg },
    { id: 2, name: 'Vanilla Milkshake', desc: 'Creamy vanilla shake with a cherry on top.', price: 5.49, img: shakesImg },
    { id: 3, name: 'Strawberry Milkshake', desc: 'Fresh strawberry shake with real fruit chunks.', price: 6.49, img: shakesImg },
  ],
}

const categories = Object.keys(menuData)

const Menu = () => {
  const [active, setActive] = useState('Burgers')

  return (
    <section className="bg-[#101828] text-[#fdc700] py-14 sm:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-10 lg:px-15">

        {/* Heading: left se right */}
        <motion.h2
          className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Our Menu
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6">

          {/* Category sidebar: left se right */}
          <motion.aside
            className="flex justify-between lg:justify-start lg:flex-col gap-1 sm:gap-2 p-2 sm:p-3 bg-[#1e2939] rounded-2xl overflow-x-auto lg:overflow-visible lg:w-35 shrink-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
                className={`px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-xl font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  active === cat
                    ? 'bg-[#f0b100] text-[#101828]'
                    : 'hover:text-gray-900 hover:bg-yellow-600'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.aside>

          {/* Cards grid (pehle jaisa) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {menuData[active].map((item) => (
              <div
                key={item.id}
                className="relative bg-[#1e2939] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 lg:hover:scale-105 lg:hover:z-10 lg:hover:shadow-[-8px_10px_25px_-6px_rgba(253,199,0,0.3),8px_10px_25px_-6px_rgba(253,199,0,0.3),0_15px_30px_-8px_rgba(253,199,0,0.7)]"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{item.desc}</p>
                  <p className="text-lg sm:text-xl font-bold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Menu
 
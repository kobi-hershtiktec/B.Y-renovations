import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ["הכל", "מטבחים", "חדרי רחצה"];

const initialImages = [
  { id: 7, src: "./project1-after.jpg", category: "מטבחים" },
  { id: 8, src: "./project2-after.jpg", category: "חדרי רחצה" },
  { id: 9, src: "./project3-after.jpg", category: "חדרי רחצה" },
];

export default function FilteredGallery() {
  const [activeCategory, setActiveCategory] = useState("הכל");

  const filteredImages = initialImages.filter(img => 
    activeCategory === "הכל" || img.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-primary-dark mb-4"
          >
            פרויקטים נבחרים שיצרנו
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            אנו גאים בתוצאות שאנחנו מספקים. הנה טעימה מחללים שהיו ישנים וקודרים והפכו למודרניים, מוארים ומזמינים.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
             <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-accent text-white shadow-md" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
             >
                {category}
             </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     {img.category}
                   </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

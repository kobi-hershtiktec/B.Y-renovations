import { useState, useRef, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { motion } from 'motion/react';

interface SliderProps {
  beforeImg: string;
  afterImg: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
}

function SingleSlider({ beforeImg, afterImg, beforeAlt, afterAlt, title }: SliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (e.buttons === 1) { 
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: ReactTouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-center text-white">{title}</h3>
      <div 
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize group"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
      >
        <div className="absolute inset-0">
          <img 
            src={afterImg} 
            alt={afterAlt} 
            className="w-full h-full object-cover select-none"
            draggable="false"
          />
        </div>

        <div 
          className="absolute inset-0"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
            <img 
            src={beforeImg} 
            alt={beforeAlt} 
            className="w-full h-full object-cover select-none"
            draggable="false"
          />
        </div>

        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 box-border hover:bg-accent transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-accent">
              <div className="flex gap-1 justify-center items-center w-full">
                <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
              </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 bg-primary-dark/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold shadow opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none">
          לפני
        </div>
        <div className="absolute bottom-4 left-4 bg-primary-dark/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold shadow opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none">
          אחרי
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const projects = [
    {
      title: "פרויקט שיפוץ שלנו",
      beforeImg: "./project1-before.jpg",
      afterImg: "./project1-after.jpg",
      beforeAlt: "לפני השיפוץ",
      afterAlt: "אחרי השיפוץ"
    },
    {
      title: "עיצוב ושיפוץ סלון",
      beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000",
      afterImg: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000",
      beforeAlt: "סלון ישן לפני שיפוץ",
      afterAlt: "סלון מודרני אחרי שיפוץ"
    },
    {
      title: "עבודות צבע וגבס בחדר שינה",
      beforeImg: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?auto=format&fit=crop&q=80&w=2000",
      afterImg: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2000",
      beforeAlt: "חדר שינה מוזנח",
      afterAlt: "חדר שינה מעוצב וצבוע מחדש"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-bold border border-accent/20">
            לפני ואחרי
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            הקליקו וגררו לראות את ההבדל
          </h2>
          <p className="text-lg text-gray-400 font-light">
            הזז את מרכז התמונה ימינה ושמאלה כדי לגלות את השינוי שעשינו מן היסוד.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SingleSlider 
                title={project.title}
                beforeImg={project.beforeImg}
                afterImg={project.afterImg}
                beforeAlt={project.beforeAlt}
                afterAlt={project.afterAlt}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

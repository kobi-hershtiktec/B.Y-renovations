import { Phone, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] md:h-[85vh] md:min-h-[600px] flex items-center justify-center overflow-hidden pt-32 pb-20 md:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent z-10"></div>
        <img 
          src="./bg-01.png" 
          alt="Renovation site" 
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8 md:mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex md:inline-block flex-col md:flex-row md:bg-accent/20 md:border md:border-accent/30 text-accent md:text-accent-hover md:px-4 py-2 md:py-1.5 rounded-xl md:rounded-full text-base md:text-sm font-semibold mb-6 gap-2 md:gap-0 -mt-6 md:mt-0 items-center justify-center bg-transparent border-transparent px-0"
        >
          <span className="block md:inline drop-shadow-md">אמינות ללא פשרות</span>
          <span className="hidden md:inline"> • </span>
          <span className="block md:inline text-accent/90 md:text-accent-hover drop-shadow-md">עמידה בזמנים</span>
          <span className="hidden md:inline"> • </span>
          <span className="block md:inline text-accent/80 md:text-accent-hover drop-shadow-md">גימור מושלם</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          משפצים בראש שקט – <br />
          <span className="text-accent text-transparent bg-clip-text bg-gradient-to-l from-accent to-blue-200">
             צוות מילואימניקים
          </span> אמינים ומקצועיים לשדרוג הבית
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light"
        >
          מתמחים בעבודות גמר, צבע, גבס, וריצוף. אנו מתחייבים להצעת מחיר שקופה, עמידה קפדנית בלוחות הזמנים, והשארת אתר עבודה מבריק.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-accent/20"
          >
            <span>לקבלת הצעת מחיר חינם</span>
            <ArrowLeft size={20} />
          </a>
          <a 
            href="tel:0539211640" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <Phone size={20} />
            <span>חייגו עכשיו</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

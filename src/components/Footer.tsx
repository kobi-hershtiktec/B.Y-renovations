import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-24 md:pb-8 border-t-4 border-accent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:col-span-1"
          >
             <div className="flex justify-start items-center gap-2 relative">
              <img src="/logo.png" alt="ב.י שיפוצים - לוגו" className="h-10 w-auto object-contain brightness-0 invert opacity-90" />
              <span className="text-xl font-bold text-white mr-2">
                ב.י שיפוצים
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              הבית שלכם לידיים אמינות ומקצועיות. אנו דוגלים בעבודה קפדנית, שקיפות ויחס אישי לכל לקוח מתחילת הפרויקט ועד סופו.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">ניווט מהיר</h4>
             <ul className="space-y-3 font-light">
               <li><a href="#home" className="text-gray-400 hover:text-accent transition-colors">דף הבית</a></li>
               <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors">מי אנחנו</a></li>
               <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">השירותים שלנו</a></li>
               <li><a href="#gallery" className="text-gray-400 hover:text-accent transition-colors">העבודות שלנו</a></li>
             </ul>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
           >
             <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">שירותים</h4>
             <ul className="space-y-3 font-light">
               <li className="text-gray-400">חדרי רחצה</li>
               <li className="text-gray-400">עבודות גבס ועיצוב</li>
               <li className="text-gray-400">ריצוף וחיפוי</li>
               <li className="text-gray-400">צביעה וגמר</li>
             </ul>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500"
        >
           <p>© {new Date().getFullYear()} כל הזכויות שמורות לב.י שיפוצים.</p>
           
           <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors flex items-center gap-2 group"
            aria-label="חזור למעלה"
           >
             <span className="group-hover:text-accent transition-colors">לראש העמוד</span>
             <ArrowUp size={16} className="group-hover:text-accent transition-colors" />
           </button>
        </motion.div>
      </div>
    </footer>
  );
}

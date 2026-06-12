import { motion } from 'motion/react';
import { ClipboardList, HardHat, Home, FileSignature, PaintRoller } from 'lucide-react';

const processSteps = [
  {
    icon: <ClipboardList className="w-8 h-8 text-primary-dark" />,
    title: "פגישת ייעוץ והכרות",
    description: "מגיעים אליכם, מבינים את הצרכים והחלומות שלכם, ולוקחים מידות מדויקות כדי לתכנן את השיפוץ בצורה הטובה ביותר.",
  },
  {
    icon: <FileSignature className="w-8 h-8 text-primary-dark" />,
    title: "הצעת מחיר שקופה",
    description: "מגישים לכם הצעת מחיר מפורטת ושקופה, ללא אותיות קטנות או הפתעות בהמשך הדרך. יודעים מראש כמה משלמים.",
  },
  {
    icon: <HardHat className="w-8 h-8 text-primary-dark" />,
    title: "תכנון ולוחות זמנים",
    description: "אנו בונים תוכנית עבודה מסודרת עם לוחות זמנים ברורים שמתחייבים למסור את הדירה בזמן (ובד״כ אפילו לפני).",
  },
  {
    icon: <PaintRoller className="w-8 h-8 text-primary-dark" />,
    title: "ביצוע העבודה",
    description: "צוות המילואימניקים שלנו נכנס לעבודה במלוא המרץ, שומרים על סביבה נקייה כמה שאפשר ועובדים במקצוענות וירידה לפרטים.",
  },
  {
    icon: <Home className="w-8 h-8 text-primary-dark" />,
    title: "מסירת מפתח",
    description: "סיור משותף בדירה אחרי ניקיון יסודי. מוודאים שאתם מרוצים מכל פרט ופרט, ומוסרים לכם את הדירה החדשה שלכם.",
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-primary-dark mb-4"
          >
            איך זה עובד? <span className="text-accent">שלב אחרי שלב</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            התהליך שלנו נועד לתת לכם שקט נפשי מלא, מהפגישה הראשונה ועד שנכנסים לדירה המוכנה.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-accent/20 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} w-full`}>
                  <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md">
                    <h3 className="text-xl font-bold text-primary-dark mb-3 flex items-center gap-3">
                      <span className="text-accent font-black text-2xl">0{index + 1}.</span> {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative flex justify-center w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 z-10 hidden md:flex">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-50 text-accent">
                    {step.icon}
                  </div>
                </div>

                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

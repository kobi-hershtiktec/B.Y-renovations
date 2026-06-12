import { ShieldCheck, Clock, PaintRoller, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: 'אמינות ללא פשרות',
      description: 'המילה שלנו היא מילה. חתימה על חוזה שקוף ללא "הפתעות" ותוספות במחיר תוך כדי תנועה.'
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: 'עמידה בזמנים',
      description: 'משמעת של צבא. מתחייבים ללוחות זמנים ברורים מראש ומסיימים בדיוק בזמן שצויין.'
    },
    {
      icon: <PaintRoller className="w-8 h-8 text-accent" />,
      title: 'מקצועיות',
      description: 'סטנדרט עבודה הגבוה ביותר, שימוש בחומרי גלם איכותיים תוך ירידה לפרטים הקטנים ביותר.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: 'עבודה נקייה',
      description: 'כיבוד הבית שלכם. אנו מקפידים על כיסוי, מיגון וניקיון האתר בסיום כל יום עבודה.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block bg-primary/10 text-primary-dark px-4 py-1.5 rounded-full text-sm font-bold mb-2">
              מי אנחנו
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-dark">
              צוות של מילואימניקים.<br />
              <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                הלב של העסק הוא האמון.
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              אנחנו ב-״ב.י שיפוצים״ מאמינים ששיפוץ לא צריך להיות חוויה מלחיצה. כצוות המורכב מלוחמים במילואים, הבאנו את הערכים שלנו מהשטח ישירות אליכם לבית - אמינות ברזל, משמעת עצמית, ואחריות קולקטיבית.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              כשאתם מכניסים אותנו הביתה, אתם יודעים שאתם בידיים טובות. מתיקונים קטנים ועד שדרוג קומפלט לבית, אנחנו מנצחים על כל פרויקט במקצועיות, בשקט נפשי ובעבודה המדברת בעד עצמה.
            </p>


          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

import { Bath, Grid, Paintbrush, Hammer, Droplets, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const servicesList = [
    {
      icon: <Bath className="w-10 h-10 text-accent group-hover:text-white transition-colors" />,
      title: 'שיפוץ חדרי רחצה קומפלט',
      description: 'החלפה ותכנון מלא של תשתיות צנרת, איטום ביריעות, והרכבת כלים סניטריים וחיפויים עד לגימור יוקרתי.'
    },
    {
      icon: <Grid className="w-10 h-10 text-accent group-hover:text-white transition-colors" />,
      title: 'עבודות ריצוף וחיפוי',
      description: 'ריצוף מקצועי מכל הסוגים, הדבקה על ריצוף קיים או שבירת הקיים במקרה הצורך, חיפוי קירות פנים וחוץ בדיוק מירבי.'
    },
    {
      icon: <Paintbrush className="w-10 h-10 text-accent group-hover:text-white transition-colors" />,
      title: 'עבודות צבע ודקורציה',
      description: 'צביעת דירות ובתים פרטיים, הכנת קירות ושפכטל אמריקאי חלק למגע, צביעה דקורטיבית וחידוש חללים.'
    },
    {
      icon: <Hammer className="w-10 h-10 text-accent group-hover:text-white transition-colors" />,
      title: 'עבודות גבס שלד ופנים',
      description: 'בניית קירות תמך, הנמכות תקרה למזגנים וספוטים, נישות מעוצבות, ושינויי חללים בגבס איכותי ועמיד.'
    },
    {
      icon: <Droplets className="w-10 h-10 text-accent group-hover:text-white transition-colors" />,
      title: 'איטום ופתרון בעיות',
      description: 'איתור נזילות, תיקוני צנרת פנימית וחיצונית, איטום יסודי ושיקום נזקי מים מורכבים במקצועיות.'
    },
    {
      icon: <Wrench className="w-10 h-10 text-accent group-hover:text-white transition-colors" />,
      title: 'עבודות טיח גמר',
      description: 'עבודות טיח שחור ולבן פנים וחוץ, יישור קירות וגימורים ישרים ואסתטיים המהווים בסיס חזק לצבע.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block bg-primary/10 text-primary-dark px-4 py-1.5 rounded-full text-sm font-bold">
            השירותים שלנו
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-dark tracking-tight">
            הפתרון המלא <span className="text-accent">לבית שלכם.</span>
          </h2>
          <p className="text-lg text-gray-600">
            אנחנו מציעים קשת רחבה של עבודות גמר ושיפוץ פנים ברמת ביצוע של 100% ללא עיגול פינות.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

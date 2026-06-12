import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: 'האם אתם מציעים גם פתרונות אדריכליים/הנדסיים?',
      answer: 'אנו מתמחים בביצוע ובעבודות גמר לפי תוכניות. במידה ויש צורך בקונסטרוקטור או עיצוב פנים לייעוץ, נשמח להמליץ ולעבוד מול גורמים מוסמכים כדי להבטיח את בטיחות ויופי הבית.'
    },
    {
      question: 'איך עובד התשלום? האם צריך לשלם הכל מראש?',
      answer: 'בשום פנים ואופן לא. אנחנו מתנהלים בשקיפות מלאה מולכם. נחתום על חוזה מסודר עם הצעת מחיר מפורטת ואבני דרך ברורות. התשלום יתבצע בשלבים (פעימות) בהתאם להתקדמות הביצוע בפועל.'
    },
    {
      question: 'האם אתם שומרים על ניקיון המבנה בסוף יום העבודה?',
      answer: 'כן! הכלל הראשון שלנו הוא לכבד את המרחב שלכם. אנחנו עוטפים בציוד מגן ומנקים ומרכזים את כל הציוד בסוף יום העבודה למניעת תאונות וכדי לאפשר המשך שגרת חיים נעימה ככל האפשר, בפרט בעבודות המבוצעות בו זמנית עם אכלוס הנכס.'
    },
    {
      question: 'מה קורה אם יש מילואים/קריאת פתע אליכם תוך כדי פרויקט?',
      answer: 'כמו שעדכנו, אנחנו צוות גדול של מילואימניקים. יש לנו מגבי טווח ויכולת לגבות אחד את השני. הפרויקט שלכם מוגן ואנחנו מבטיחים עמידה בזמנים בלי תירוצים.'
    },
    {
      question: 'עם אילו חומרים אתם עובדים?',
      answer: 'אנו עובדים עם החומרים הטובים ביותר בשחקן הבנייה הישראלי, ללא פשרות, תקופות אחריות על חומרים, תו תקן ישראלי, ובחינה מדוקדקת של התאמת החומר. למשל שימוש בצבעי נירלט/טמבור מקוריים, דבקי ריצוף וחומרי איטום איכותיים.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark">
            שאלות נפוצות
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            כל מה שרציתם לדעת על עבודה מול צוות מקצועי של קבלנים.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md shadow-accent/5' : 'hover:shadow-sm'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 bg-gray-50/50 hover:bg-gray-50 focus:outline-none transition-colors"
                  onClick={() => toggleOpen(index)}
                >
                  <span className="text-lg font-bold text-primary-dark text-right pr-2">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-accent" />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 bg-white border-t border-gray-50 text-gray-600 leading-relaxed text-base font-light">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

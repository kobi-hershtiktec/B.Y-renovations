import { motion } from 'motion/react';
import { Target, CheckCircle2, Wrench, ShieldCheck, User, Phone, CheckSquare } from 'lucide-react';

const projectsDNA = [
  {
    id: "P-492",
    title: "שיפוץ קומפלט דירת 4 חדרים",
    location: "ראשון לציון, שכונת רמז",
    duration: "45 יום",
    client: "משפחת לוי",
    clientPhone: "052-874**51 (זמין לשיחת ממליצים)",
    verified: true,
    budgetStatus: "עמידה מלאה בתקציב שסוכם",
    challenge: "צנרת ישנה משנות ה-80 תחת ריצוף שחייב להישאר בשלמותו המקסימלית, זמן קצר לפני מעבר של משפחה.",
    solution: "שימוש בטכנולוגיות אל-הרס לאיתור ומיפוי התשתיות, החלפה סלקטיבית של מקטעי צנרת ובניית מערכת מים חדשה העוקפת אזורים רגישים.",
    result: "מסירת דירה במצב מושלם תוך 42 ימים בלבד, עמידה מלאה בתקציב שנקבע מראש וללא פגיעה בריצוף הישן."
  },
  {
    id: "P-805",
    title: "חידוש ושבירת קירות - חלל פתוח",
    location: "תל אביב, הצפון הישן",
    duration: "21 יום",
    client: "גיא ומיכל זוארץ",
    clientPhone: "054-663**90 (זמין לשיחת ממליצים)",
    verified: true,
    budgetStatus: "נמסר שבוע לפני הדד-ליין",
    challenge: "הפיכת דירת חדרים עמוסה וישנה לעיצוב אופן-ספייס מבלי לפגוע בקירות תמך מרכזיים, תוך שילוב תשתיות חשמל חכם.",
    solution: "התייעצות צמודה מול קונסטרוקטור מוסמך, חיזוק הקירות הנותרים והטמעת תעלות תקשורת חכמות בתוך קירות הגבס החדשים.",
    result: "חלל מרווח, מזמין, מואר טבעית עם הכנה מלאה לבית חכם, ובטיחות יסודות מובטחת במאה אחוז."
  }
];

export default function ProjectDNA() {
  return (
    <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            תעודת זהות פרויקטים <span className="text-accent">DNA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            הרבה קבלנים מראים רק תמונות יפות. אנחנו מראים עובדות, פתרונות ואנשים אמיתיים.
            מספרי טלפון מלאים של ממליצים יינתנו בפגישת ההכרות (מטעמי פרטיות).
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projectsDNA.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col"
            >
              <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">📍 {project.location}</span>
                    <span className="flex items-center gap-1">⏱️ {project.duration}</span>
                    {project.verified && (
                      <span className="flex items-center gap-1 text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">
                        <ShieldCheck size={14} /> פרויקט מאומת
                      </span>
                    )}
                  </div>
                </div>
                <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-mono border border-accent/30 whitespace-nowrap">
                  {project.id}
                </div>
              </div>

              {/* Client Authentication Details */}
              <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-accent">
                    <User size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">לקוח</div>
                    <div className="text-sm font-medium text-white">{project.client}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-accent">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">צור קשר עם הממליץ</div>
                    <div className="text-sm font-medium text-white">{project.clientPhone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:col-span-2 mt-2 pt-2 border-t border-white/5">
                   <CheckSquare size={16} className="text-green-400" />
                   <span className="text-sm text-gray-300">סטטוס מסירה: <strong className="text-white">{project.budgetStatus}</strong></span>
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="flex items-center gap-2 text-accent font-semibold mb-2">
                    <Target size={20} /> האתגר בשטח
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                    <Wrench size={20} /> הפתרון שלנו
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {project.solution}
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 mt-auto">
                  <h4 className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                    <CheckCircle2 size={20} /> תוצאה סופית
                  </h4>
                  <p className="text-white font-medium text-sm">
                    {project.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

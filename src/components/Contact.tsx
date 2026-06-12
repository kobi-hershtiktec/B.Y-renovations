import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('אנא מלאו שם מלא');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('אנא מלאו מספר טלפון ליצירת קשר');
      return;
    }
    
    setErrorMsg('');
    setStatus('sending');
    
    // Simulate sending client-side request
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-dark">
            דברו איתנו. אנחנו זמינים.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            הצעת מחיר חינם ללא עלות התחייבות - יעוץ מקצועי לפרויקט שלכם.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5 border border-gray-100 min-h-[450px] flex flex-col justify-center"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-8"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">הפנייה נשלחה בהצלחה!</h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  תודה שפנית אלינו, {formData.name}. צוות המילואימניקים שלנו יחזור אליך בהקדם האפשרי עם כל הפרטים.
                </p>
                <button 
                  onClick={() => {
                    setFormData({ name: '', phone: '', service: '', message: '' });
                    setStatus('idle');
                  }}
                  className="mt-4 px-6 py-2 border border-gray-200 hover:border-accent text-gray-600 hover:text-accent rounded-xl text-sm transition-all"
                >
                  שלח פנייה נוספת
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-primary-dark mb-6">מלאו פרטים ונחזור אליכם</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div className="bg-red-50 text-red-600 px-4 py-2.5 rounded-xl text-sm font-semibold">
                      {errorMsg}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">שם מלא</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="הזן שם מלא..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all text-right"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">טלפון</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05X-XXXXXXX"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all text-right"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">סוג העבודה</label>
                      <select 
                        id="service" 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                      >
                        <option value="">בחר משמאל...</option>
                        <option value="שיפוץ קומפלט">שיפוץ קומפלט</option>
                        <option value="חדר רחצה">חדר רחצה ואמבטיה</option>
                        <option value="צבע וגבס">עבודות צבע וגבס</option>
                        <option value="ריצוף">ריצוף וחיפוי</option>
                        <option value="אחר">אחר</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">הודעה / תיאור הפרויקט (אופציונלי)</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="ספר לנו קצת על מה שאתה צריך..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-lg shadow-accent/30 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        <span>שולח...</span>
                      </>
                    ) : (
                      <>
                        <span>שלח בקשה עכשיו</span>
                        <Send size={18} className="rotate-180" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10 lg:pl-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary-dark">התקשרו אלינו</h4>
                  <p className="text-gray-500 mt-1 mb-2">זמינים בימים א'-ה' בין 08:00 ל-18:00</p>
                  <a href="tel:0539211640" className="text-2xl font-extrabold text-accent hover:text-accent-hover transition-colors dir-ltr block text-right">053-921-1640</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary-dark">דואר אלקטרוני</h4>
                  <p className="text-gray-500 mt-1 mb-2">שלחו תוכניות ושרטוטים</p>
                  <a href="mailto:shalomcohenskali@gmail.com?subject=פניה מהאתר - ב.י שיפוצים&body=שלום, הגעתי דרך האתר ואשמח להתייעץ איתכם לגבי פרויקט שיפוץ:" className="text-lg font-bold text-primary-dark hover:text-accent transition-colors break-all">shalomcohenskali@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary-dark">אזורי שירות</h4>
                  <p className="text-gray-500 mt-1 font-medium">מרכז הארץ, השרון, שפלה וירושלים</p>
                  <p className="text-gray-500 mt-1">מגיעים עד לבית הלקוח לפגישת יעוץ באזור.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
               <h4 className="text-lg font-bold text-primary-dark mb-4">עקבו אחרינו לפרויקטים אחרונים</h4>
               <div className="flex gap-4">
                 <a href="#" className="w-12 h-12 bg-white shadow-sm border border-gray-100 hover:border-accent hover:text-accent rounded-full flex items-center justify-center text-primary-dark transition-all">
                    <Instagram size={20} />
                 </a>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

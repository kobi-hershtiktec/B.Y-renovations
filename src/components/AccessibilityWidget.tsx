import { useState, useEffect } from 'react';
import { Accessibility, X, ZoomIn, ZoomOut, Type, Contrast, EyeOff, RotateCcw, FileText } from 'lucide-react';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showStatement, setShowStatement] = useState(false);

  // States
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize * 100}%`;

    // Apply classes to body
    if (highContrast) {
      document.body.classList.add('a11y-high-contrast');
    } else {
      document.body.classList.remove('a11y-high-contrast');
    }

    if (grayscale) {
      document.body.classList.add('a11y-grayscale');
    } else {
      document.body.classList.remove('a11y-grayscale');
    }

    if (readableFont) {
      document.body.classList.add('a11y-readable-font');
    } else {
      document.body.classList.remove('a11y-readable-font');
    }
  }, [fontSize, highContrast, grayscale, readableFont]);

  const resetAll = () => {
    setFontSize(1);
    setHighContrast(false);
    setGrayscale(false);
    setReadableFont(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-[30%] left-0 z-50 bg-[#00509E] text-white p-3 rounded-r-xl shadow-lg hover:bg-[#003d7a] transition-colors"
        aria-label="פתח תפריט נגישות"
        title="הגדרות נגישות"
      >
        <Accessibility size={30} />
      </button>

      {/* Accessibility Menu */}
      {isOpen && (
        <div className="fixed top-20 left-4 z-50 w-80 bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
          <div className="bg-[#00509E] text-white p-4 flex justify-between items-center">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <Accessibility size={20} /> תפריט נגישות
            </h2>
            <button onClick={() => setIsOpen(false)} aria-label="סגור תפריט נגישות" className="hover:text-gray-200">
              <X size={24} />
            </button>
          </div>
          
          <div className="p-4 space-y-3 overflow-y-auto max-h-[60vh]">
            {/* Font Size */}
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setFontSize(prev => prev + 0.1)}
                className="flex flex-col items-center justify-center p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-colors focus:ring-2 focus:ring-[#00509E]"
              >
                <ZoomIn size={24} className="mb-2 text-[#00509E]" />
                הגדל טקסט
              </button>
              <button 
                onClick={() => setFontSize(prev => Math.max(0.5, prev - 0.1))}
                className="flex flex-col items-center justify-center p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-colors focus:ring-2 focus:ring-[#00509E]"
              >
                <ZoomOut size={24} className="mb-2 text-[#00509E]" />
                הקטן טקסט
              </button>
            </div>

            {/* Toggles */}
            <button 
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full flex items-center gap-3 p-3 text-sm rounded-xl border transition-colors focus:ring-2 focus:ring-[#00509E] ${
                highContrast ? 'bg-[#00509E] text-white border-[#00509E]' : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-800'
              }`}
            >
              <Contrast size={20} className={highContrast ? 'text-white' : 'text-[#00509E]'} />
             ניגודיות גבוהה
            </button>

            <button 
              onClick={() => setGrayscale(!grayscale)}
              className={`w-full flex items-center gap-3 p-3 text-sm rounded-xl border transition-colors focus:ring-2 focus:ring-[#00509E] ${
                grayscale ? 'bg-[#00509E] text-white border-[#00509E]' : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-800'
              }`}
            >
              <EyeOff size={20} className={grayscale ? 'text-white' : 'text-[#00509E]'} />
              גווני אפור
            </button>

            <button 
              onClick={() => setReadableFont(!readableFont)}
              className={`w-full flex items-center gap-3 p-3 text-sm rounded-xl border transition-colors focus:ring-2 focus:ring-[#00509E] ${
                readableFont ? 'bg-[#00509E] text-white border-[#00509E]' : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-800'
              }`}
            >
              <Type size={20} className={readableFont ? 'text-white' : 'text-[#00509E]'} />
              פונט קריא
            </button>

            <button 
              onClick={() => {
                setShowStatement(true);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-colors text-gray-800 focus:ring-2 focus:ring-[#00509E]"
            >
              <FileText size={20} className="text-[#00509E]" />
              הצהרת נגישות
            </button>
            
            <button 
              onClick={resetAll}
              className="w-full flex items-center gap-3 p-3 text-sm bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors text-red-700 mt-4 focus:ring-2 focus:ring-red-500"
            >
              <RotateCcw size={20} className="text-red-600" />
              איפוס הגדרות
            </button>
          </div>
        </div>
      )}

      {/* Accessibility Statement Modal */}
      {showStatement && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
            <div className="bg-[#00509E] p-4 text-white flex justify-between items-center">
               <h2 className="text-xl font-bold flex items-center gap-2"><FileText /> הצהרת נגישות</h2>
               <button onClick={() => setShowStatement(false)} className="hover:text-gray-200 p-1">
                 <X size={24} />
               </button>
            </div>
            <div className="p-6 overflow-y-auto outline-none" tabIndex={-1}>
              <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-4">
                <p>
                  אנו ב-<strong>ב.י שיפוצים</strong> רואים חשיבות עליונה בהנגשת האתר לאנשים עם מוגבלויות, על מנת לאפשר לכלל האוכלוסייה לגלוש בנוחות ובקלות. 
                </p>
                <h3 className="font-bold text-lg text-black mt-4">רמת נגישות</h3>
                <p>
                  אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013.
                  התאמות הנגישות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA, 
                  והמסמך הבינלאומי WCAG 2.0.
                </p>
                <h3 className="font-bold text-lg text-black mt-4">פעולות הנגישות שבוצעו באתר:</h3>
                <ul className="list-disc pr-5 space-y-2">
                  <li><strong>תפריט נגישות:</strong> הותקן תפריט נגישות המאפשר שליטה בגודל הפונט, שינוי ניגודיות, המרה לגווני אפור, והחלפה לפונט קריא במיוחד.</li>
                  <li><strong>ניווט מקלדת:</strong> האתר תומך בניווט על ידי שימוש במקש ה-Tab, כפתורי החצים, ומקש ה-Enter. כולל קישור ל"דילוג לתוכן המרכזי" בראש העמוד.</li>
                  <li><strong>התאמה לקורא מסך:</strong> בוצעו התאמות במבנה ה-HTML, תגיות ARIA וטקסט חלופי לתמונות (Alt) כדי לתמוך בתוכנות קורא מסך (כדוגמת NVDA / JAWS).</li>
                  <li><strong>עיצוב מותאם:</strong> שימוש בניגודיות צבעים מספקת, המנעות מהבהובים וטקסטים קריאים.</li>
                </ul>
                <h3 className="font-bold text-lg text-black mt-4">פרטי רכז/ת הנגישות ודרכי פנייה:</h3>
                <p>
                  מידה ונתקלתם בבעיית נגישות באתר, נשמח לסייע ולתקן. <br/>
                  פנו אלינו בטלפון: 053-9211640 או השאירו פנייה בטופס יצירת הקשר באתר.
                </p>
                <p className="text-sm text-gray-500 mt-6 border-t pt-4">
                  תאריך עדכון ההצהרה: {new Date().toLocaleDateString('he-IL')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

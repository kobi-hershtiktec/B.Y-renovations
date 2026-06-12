import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingCTAs() {
  return (
    <>
      {/* Desktop View - Floating Right */}
      <div className="hidden md:flex fixed bottom-6 right-6 flex-col gap-4 z-50">
        <a 
          href="https://wa.me/972539211640?text=שלום רב, אשמח לקבל הצעת מחיר בנוגע לשיפוץ"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center shadow-2xl hover:scale-105 transition-all overflow-hidden group shadow-[#25D366]/30 pr-1"
          aria-label="שלח הודעה בוואטסאפ"
        >
          <div className="w-12 h-full flex items-center justify-center flex-shrink-0">
            <MessageCircle size={28} className="fill-current" />
          </div>
          <span className="max-w-0 font-bold overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out pl-6">
            דברו איתנו בוואטסאפ
          </span>
        </a>
      </div>

      {/* Mobile View - Fixed Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 flex gap-3 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
        <a 
          href="tel:0539211640"
          className="flex-1 h-12 bg-accent hover:bg-accent-hover text-white rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-accent/20 transition-colors"
          aria-label="התקשר אלינו"
        >
          <Phone size={20} className="fill-current" />
          <span>חייגו עכשיו</span>
        </a>
        <a 
          href="https://wa.me/972539211640?text=שלום רב, אשמח לקבל הצעת מחיר בנוגע לשיפוץ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-[#25D366]/20 transition-colors"
          aria-label="שלח הודעה בוואטסאפ"
        >
          <MessageCircle size={22} className="fill-current" />
          <span>וואטסאפ</span>
        </a>
      </div>
    </>
  );
}

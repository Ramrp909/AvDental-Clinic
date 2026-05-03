import { Phone, Calendar } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href="tel:+1234567890"
          className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
        <a
          href="#appointment"
          className="flex items-center justify-center gap-2 bg-secondary text-white px-4 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium"
        >
          <Calendar className="w-5 h-5" />
          <span>Book</span>
        </a>
      </div>
    </div>
  );
}

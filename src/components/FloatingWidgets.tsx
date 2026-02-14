import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917715093113?text=hi', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-center">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 bg-white text-navy rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-navy/10 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </button>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function MobileStickyCTA({ onOpenICP }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#111216]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={onOpenICP}
          className="btn-orange flex-grow py-3 px-4 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 min-h-[44px] cursor-pointer"
        >
          <span>Fazer diagnóstico grátis</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsDismissed(true)}
          className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Dispensar barra fixa"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

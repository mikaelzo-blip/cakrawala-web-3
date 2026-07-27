'use client';

import React, { useState, useEffect } from 'react';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas halaman"
      className="fixed bottom-6 right-36 sm:right-44 z-40 p-3 rounded-full bg-[#0F2942] text-white shadow-xl hover:bg-[#15426B] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0E6BA8]"
    >
      <DynamicIcon name="ChevronRight" size={20} className="-rotate-90" />
    </button>
  );
}

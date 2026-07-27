'use client';

import React, { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { brandItems, brandDisclaimer } from '@/data/company';

export function BrandSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Optional performance & battery saver: pause animation when out of viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.animationPlayState = 'running';
          } else {
            el.style.animationPlayState = 'paused';
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#E2E8F0] overflow-hidden">
      {/* 1. Section Heading (Di dalam Container) */}
      <Container>
        <SectionHeading
          badge="Cakupan Komponen &amp; Suku Cadang"
          title="Merek Industri yang Biasa Ditangani"
          description="Tim teknis kami terbiasa melakukan penanganan, instalasi, dan perbaikan komponen dari berbagai manufaktur terkemuka."
        />
      </Container>

      {/* 2. Full-Bleed Running Marquee Track (Di Luar Container, Edge-to-Edge) */}
      <div className="w-full overflow-hidden marquee-mask py-4 mb-8">
        <div
          ref={containerRef}
          className="flex flex-nowrap w-max animate-marquee-track hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center motion-reduce:transform-none motion-reduce:animate-none"
          style={{ '--marquee-duration': '70s' } as React.CSSProperties}
        >
          {/* Copy 1: Set Pertama (Aman untuk Layar Pembaca / Screen Reader) */}
          <div className="flex flex-nowrap shrink-0 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-full">
            {brandItems.map((brand) => (
              <div
                key={`b1-${brand.id}`}
                className="inline-flex flex-col items-center justify-center w-[150px] sm:w-[170px] h-[80px] px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mr-6 shrink-0 text-center select-none opacity-65 hover:opacity-100 transition-opacity motion-reduce:mr-3 motion-reduce:mb-3"
              >
                <span className="font-black text-base sm:text-lg text-[#15426B] tracking-tight truncate max-w-full">
                  {brand.logoText}
                </span>
                <span className="text-[11px] text-[#475569] font-semibold mt-0.5 truncate max-w-full">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>

          {/* Copy 2: Duplikasi Pertama untuk Seamless Loop (-50% seam) */}
          <div className="flex flex-nowrap shrink-0 motion-reduce:hidden" aria-hidden="true">
            {brandItems.map((brand) => (
              <div
                key={`b2-${brand.id}`}
                className="inline-flex flex-col items-center justify-center w-[150px] sm:w-[170px] h-[80px] px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mr-6 shrink-0 text-center select-none opacity-65 hover:opacity-100 transition-opacity"
              >
                <span className="font-black text-base sm:text-lg text-[#15426B] tracking-tight truncate max-w-full">
                  {brand.logoText}
                </span>
                <span className="text-[11px] text-[#475569] font-semibold mt-0.5 truncate max-w-full">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>

          {/* Copy 3: Duplikasi Kedua (Memastikan viewport 1440px+ selalu terisi penuh) */}
          <div className="flex flex-nowrap shrink-0 motion-reduce:hidden" aria-hidden="true">
            {brandItems.map((brand) => (
              <div
                key={`b3-${brand.id}`}
                className="inline-flex flex-col items-center justify-center w-[150px] sm:w-[170px] h-[80px] px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mr-6 shrink-0 text-center select-none opacity-65 hover:opacity-100 transition-opacity"
              >
                <span className="font-black text-base sm:text-lg text-[#15426B] tracking-tight truncate max-w-full">
                  {brand.logoText}
                </span>
                <span className="text-[11px] text-[#475569] font-semibold mt-0.5 truncate max-w-full">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>

          {/* Copy 4: Duplikasi Ketiga (Pelengkap Seam 4-Unit) */}
          <div className="flex flex-nowrap shrink-0 motion-reduce:hidden" aria-hidden="true">
            {brandItems.map((brand) => (
              <div
                key={`b4-${brand.id}`}
                className="inline-flex flex-col items-center justify-center w-[150px] sm:w-[170px] h-[80px] px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mr-6 shrink-0 text-center select-none opacity-65 hover:opacity-100 transition-opacity"
              >
                <span className="font-black text-base sm:text-lg text-[#15426B] tracking-tight truncate max-w-full">
                  {brand.logoText}
                </span>
                <span className="text-[11px] text-[#475569] font-semibold mt-0.5 truncate max-w-full">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Disclaimer Hak Cipta Merek (Di dalam Container, Selalu Tetap & Terbaca) */}
      <Container>
        <div className="p-4 sm:p-5 rounded-xl bg-[#F0F7FD] border border-[#0E6BA8]/20 text-xs text-[#475569] leading-relaxed">
          <p>
            <strong className="text-[#0F2942] font-semibold">Pernyataan Batasan Hak Cipta &amp; Kerjasama:</strong> {brandDisclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}

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
      {/* 1. Section Heading (Di dalam Container, Poin 7: "berbagai manufaktur komponen industri") */}
      <Container>
        <SectionHeading
          badge="Cakupan Komponen &amp; Suku Cadang"
          title="Merek Industri yang Biasa Ditangani"
          description="Tim teknis kami terbiasa melakukan penanganan, instalasi, dan perbaikan komponen dari berbagai manufaktur komponen industri."
        />
      </Container>

      {/* 2. Full-Bleed Running Marquee Track (Di Luar Container, Edge-to-Edge) */}
      <div className="w-full overflow-hidden marquee-mask py-4 mb-8">
        <div
          ref={containerRef}
          className="flex flex-nowrap w-max animate-marquee-track hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center motion-reduce:transform-none motion-reduce:animate-none"
          style={{ '--marquee-duration': '70s' } as React.CSSProperties}
        >
          {/* Copy 1: Set Pertama (Aman untuk Screen Reader) */}
          <div className="flex flex-nowrap shrink-0 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-full">
            {brandItems.map((brand) => (
              <div
                key={`b1-${brand.id}`}
                className="inline-flex flex-col items-center justify-between w-[200px] h-[112px] p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs mr-6 shrink-0 text-center select-none opacity-70 hover:opacity-100 transition-opacity card-hover-lift motion-reduce:mr-3 motion-reduce:mb-3"
              >
                {/* Logo Box / Wordmark Box Presisi (Max 120px x 28px) */}
                <div className="w-[120px] h-[28px] flex items-center justify-center overflow-hidden">
                  {brand.logoPath ? (
                    <img
                      src={brand.logoPath}
                      alt={brand.name}
                      width={brand.logoWidth || 120}
                      height={brand.logoHeight || 28}
                      className="max-w-full max-h-full object-contain grayscale filter brightness-90 contrast-125"
                    />
                  ) : (
                    <span className="font-black text-lg sm:text-xl text-[#0F2942] tracking-tight truncate max-w-full leading-none">
                      {brand.logoText}
                    </span>
                  )}
                </div>

                {/* Category Sublabel (Warna #475569) */}
                <span className="text-xs text-[#475569] font-medium truncate max-w-full">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>

          {/* Copy 2: Duplikasi Pertama (-50% seam) */}
          <div className="flex flex-nowrap shrink-0 motion-reduce:hidden" aria-hidden="true">
            {brandItems.map((brand) => (
              <div
                key={`b2-${brand.id}`}
                className="inline-flex flex-col items-center justify-between w-[200px] h-[112px] p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs mr-6 shrink-0 text-center select-none opacity-70 hover:opacity-100 transition-opacity card-hover-lift"
              >
                <div className="w-[120px] h-[28px] flex items-center justify-center overflow-hidden">
                  {brand.logoPath ? (
                    <img
                      src={brand.logoPath}
                      alt={brand.name}
                      width={brand.logoWidth || 120}
                      height={brand.logoHeight || 28}
                      className="max-w-full max-h-full object-contain grayscale filter brightness-90 contrast-125"
                    />
                  ) : (
                    <span className="font-black text-lg sm:text-xl text-[#0F2942] tracking-tight truncate max-w-full leading-none">
                      {brand.logoText}
                    </span>
                  )}
                </div>

                <span className="text-xs text-[#475569] font-medium truncate max-w-full">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>

          {/* Copy 3: Duplikasi Kedua (Pelengkap 1440px+) */}
          <div className="flex flex-nowrap shrink-0 motion-reduce:hidden" aria-hidden="true">
            {brandItems.map((brand) => (
              <div
                key={`b3-${brand.id}`}
                className="inline-flex flex-col items-center justify-between w-[200px] h-[112px] p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs mr-6 shrink-0 text-center select-none opacity-70 hover:opacity-100 transition-opacity card-hover-lift"
              >
                <div className="w-[120px] h-[28px] flex items-center justify-center overflow-hidden">
                  {brand.logoPath ? (
                    <img
                      src={brand.logoPath}
                      alt={brand.name}
                      width={brand.logoWidth || 120}
                      height={brand.logoHeight || 28}
                      className="max-w-full max-h-full object-contain grayscale filter brightness-90 contrast-125"
                    />
                  ) : (
                    <span className="font-black text-lg sm:text-xl text-[#0F2942] tracking-tight truncate max-w-full leading-none">
                      {brand.logoText}
                    </span>
                  )}
                </div>

                <span className="text-xs text-[#475569] font-medium truncate max-w-full">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>

          {/* Copy 4: Duplikasi Ketiga (Seam 4-Unit) */}
          <div className="flex flex-nowrap shrink-0 motion-reduce:hidden" aria-hidden="true">
            {brandItems.map((brand) => (
              <div
                key={`b4-${brand.id}`}
                className="inline-flex flex-col items-center justify-between w-[200px] h-[112px] p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs mr-6 shrink-0 text-center select-none opacity-70 hover:opacity-100 transition-opacity card-hover-lift"
              >
                <div className="w-[120px] h-[28px] flex items-center justify-center overflow-hidden">
                  {brand.logoPath ? (
                    <img
                      src={brand.logoPath}
                      alt={brand.name}
                      width={brand.logoWidth || 120}
                      height={brand.logoHeight || 28}
                      className="max-w-full max-h-full object-contain grayscale filter brightness-90 contrast-125"
                    />
                  ) : (
                    <span className="font-black text-lg sm:text-xl text-[#0F2942] tracking-tight truncate max-w-full leading-none">
                      {brand.logoText}
                    </span>
                  )}
                </div>

                <span className="text-xs text-[#475569] font-medium truncate max-w-full">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Disclaimer Merek Dagang & Kerja Sama (Poin 7: Heading & Text Wajib) */}
      <Container>
        <div className="p-4 sm:p-5 rounded-xl bg-[#F0F7FD] border border-[#0E6BA8]/20 text-xs text-[#475569] leading-relaxed">
          <p>
            <strong className="text-[#0F2942] font-semibold">Pernyataan Batasan Merek Dagang &amp; Kerja Sama:</strong> {brandDisclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}

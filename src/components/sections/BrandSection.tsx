import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { brandItems, brandDisclaimer } from '@/data/company';

export function BrandSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#E2E8F0] overflow-hidden">
      {/* 1. Section Heading (Di dalam Container) */}
      <Container>
        <SectionHeading
          badge="Cakupan Komponen &amp; Suku Cadang"
          title="Merek Industri yang Biasa Ditangani"
          description="Tim teknis kami terbiasa melakukan penanganan, instalasi, dan perbaikan komponen dari berbagai manufaktur komponen industri."
        />
      </Container>

      {/* 2. Full-Bleed Running Marquee Track (Di Luar Container, Edge-to-Edge) */}
      <div className="w-full overflow-hidden marquee-mask py-4 mb-8">
        <div className="animate-marquee-track">
          {/* Copy 1: Set Pertama */}
          <div className="flex flex-nowrap shrink-0">
            {brandItems.map((brand) => (
              <div
                key={`b1-${brand.id}`}
                className="inline-flex flex-col items-center justify-between w-[200px] h-[112px] p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs mr-6 shrink-0 text-center select-none opacity-70 hover:opacity-100 transition-opacity card-hover-lift"
              >
                {/* Logo Box / Wordmark Box Presisi (Max 120px x 28px) */}
                <div className="w-[120px] h-[28px] flex items-center justify-center overflow-hidden">
                  {brand.logoPath ? (
                    <img
                      src={brand.logoPath}
                      alt={brand.name}
                      width={brand.logoWidth || 120}
                      height={brand.logoHeight || 28}
                      className="max-w-full max-h-full object-contain filter grayscale brightness-90 contrast-125"
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

          {/* Copy 2: Duplikasi Pertama untuk Seamless Loop (-50% seam) */}
          <div className="flex flex-nowrap shrink-0" aria-hidden="true">
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
                      className="max-w-full max-h-full object-contain filter grayscale brightness-90 contrast-125"
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
          <div className="flex flex-nowrap shrink-0" aria-hidden="true">
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
                      className="max-w-full max-h-full object-contain filter grayscale brightness-90 contrast-125"
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
          <div className="flex flex-nowrap shrink-0" aria-hidden="true">
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
                      className="max-w-full max-h-full object-contain filter grayscale brightness-90 contrast-125"
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

      {/* 3. Disclaimer Merek Dagang & Kerja Sama */}
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

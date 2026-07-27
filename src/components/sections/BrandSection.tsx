import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { brandItems, brandDisclaimer } from '@/data/company';

export function BrandSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge="Cakupan Komponen &amp; Suku Cadang"
          title="Merek Industri yang Biasa Ditangani"
          description="Tim teknis kami terbiasa melakukan penanganan, instalasi, dan perbaikan komponen dari berbagai manufaktur terkemuka."
        />

        {/* Grid Logo Abu-abu Netral */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {brandItems.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0E6BA8]/40 transition-colors text-center group"
            >
              <span className="font-black text-lg sm:text-xl text-[#15426B]/70 group-hover:text-[#0F2942] transition-colors tracking-tight">
                {brand.logoText}
              </span>
              <span className="text-xs text-[#475569] mt-1 font-medium">
                {brand.category}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer Wajib SPEC.md §6 */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#F0F7FD] border border-[#0E6BA8]/20 text-xs text-[#475569] leading-relaxed">
          <p>
            <strong className="text-[#0F2942] font-semibold">Pernyataan Batasan Hak Cipta &amp; Kerjasama:</strong> {brandDisclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}

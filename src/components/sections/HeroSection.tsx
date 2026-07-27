import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { companyInfo } from '@/data/company';

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-28 bg-gradient-to-b from-[#F0F7FD]/70 via-white to-white overflow-hidden border-b border-[#E2E8F0]">
      {/* Background Decorative SVG Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="45" height="45" patternUnits="userSpaceOnUse">
              <path d="M 45 0 L 0 0 0 45" fill="none" stroke="#0E6BA8" strokeWidth="0.5" strokeOpacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Status Badge 24/7 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F7FD] border border-[#0E6BA8]/20 text-[#0E6BA8] text-xs font-semibold mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Layanan Teknik & Penanganan Darurat 24 Jam / 7 Hari</span>
          </div>

          {/* Heading Utama */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F2942] tracking-tight leading-[1.15] mb-6">
            Penyedia Jasa Teknik Terpadu &amp; Otomasi Fasilitas Industri
          </h1>

          {/* Subtitle Deskriptif */}
          <p className="text-base sm:text-lg md:text-xl text-[#475569] leading-relaxed max-w-3xl mb-8">
            Penanganan profesional kelistrikan &amp; panel kontrol, migrasi sistem PLC/HMI, alignment mekanikal presisi, pendingin HVAC VRF/Chiller, otomatisasi pompa, hingga pencahayaan khusus gedung dan rekreasi.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <Button
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
                'Halo CBL, saya mau konsultasi kebutuhan teknik fasilitas kami.'
              )}`}
              external
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
            >
              <DynamicIcon name="MessageSquare" size={20} />
              <span>Konsultasi WhatsApp Fast Response</span>
            </Button>

            <Button
              href="#layanan"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <DynamicIcon name="Wrench" size={20} />
              <span>Jelajahi 6 Divisi Layanan</span>
            </Button>
          </div>

          {/* Grid Quick Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 w-full pt-8 border-t border-[#E2E8F0]">
            {[
              { label: 'Kelistrikan & Panel', icon: 'Zap' },
              { label: 'Otomasi & PLC', icon: 'Cpu' },
              { label: 'Mekanikal Presisi', icon: 'Wrench' },
              { label: 'HVAC & Refrigerasi', icon: 'Wind' },
              { label: 'Pompa & Perairan', icon: 'Droplets' },
              { label: 'Pencahayaan Show', icon: 'Lightbulb' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#0E6BA8]/40 transition-colors"
              >
                <DynamicIcon name={item.icon} size={22} className="text-[#0E6BA8] mb-1.5" />
                <span className="text-xs font-semibold text-[#0F2942] text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

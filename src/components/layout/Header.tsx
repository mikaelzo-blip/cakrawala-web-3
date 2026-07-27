'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { companyInfo, mainNavItems } from '@/data/company';
import { resolveSectionHref, cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md border-b',
          isScrolled ? 'border-[#E2E8F0] shadow-sm py-3' : 'border-transparent py-4'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo Perusahaan */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#0E6BA8] rounded-lg"
          >
            <div className="relative w-10 h-10 shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/logo/cbl-logo.png"
                alt="Logo CV Cakrawala Buana Lestari"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[#0F2942] tracking-tight text-base sm:text-lg leading-none">
                {companyInfo.legalName}
              </span>
              <span className="text-xs text-[#475569] font-medium tracking-wide mt-1">
                Jasa Teknik &amp; Otomasi Terpadu
              </span>
            </div>
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi Utama">
            {mainNavItems.map((item) => {
              const href = resolveSectionHref(item.href, pathname);
              const isActive = pathname === item.href || (item.href === '/' && pathname === '/');

              return (
                <Link
                  key={item.label}
                  href={href}
                  className={cn(
                    'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'text-[#0E6BA8] bg-[#F0F7FD] font-semibold'
                      : 'text-[#0F172A] hover:text-[#0E6BA8] hover:bg-[#F8FAFC]'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
                'Halo CBL, saya ingin konsultasi kebutuhan teknik fasilitas kami.'
              )}`}
              external
              variant="whatsapp"
              size="sm"
            >
              <DynamicIcon name="MessageSquare" size={16} />
              <span>{companyInfo.whatsappFormatted}</span>
            </Button>
          </div>

          {/* Tombol Hamburger Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#0F2942] hover:bg-[#F8FAFC] rounded-lg focus-visible:outline-[#0E6BA8]"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Buka menu navigasi"
          >
            <DynamicIcon name="Menu" size={24} />
          </button>
        </Container>
      </header>

      {/* Menu Mobile */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

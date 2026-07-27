# CV Cakrawala Buana Lestari (CBL) — Situs Web Perusahaan

Situs company profile B2B resmi untuk **CV Cakrawala Buana Lestari (CBL)**, penyedia jasa teknik terpadu: kelistrikan, otomatisasi PLC/HMI, mekanikal presisi, HVAC refrigerasi, sistem pompa, dan pencahayaan khusus.

---

## Stack Teknologi

- **Framework**: Next.js (App Router, TypeScript mode `strict`)
- **UI & Styling**: React 19, Tailwind CSS v4 (`@theme` directive), `lucide-react`, `clsx` + `tailwind-merge`
- **Deployment**: Static Site Generation (SSG / Static Export target)

---

## Panduan Memulai (Quick Start)

### 1. Prasyarat System
- Node.js versi 18+ atau 20+
- npm v9+

### 2. Memasang Dependensi
```bash
npm install
```

### 3. Membuka Mode Pengkodingan / Dev Server
```bash
npm run dev
```
Buka browser pada alamat [http://localhost:3000](http://localhost:3000).

### 4. Melakukan Uji Tipe & Build Produksi
```bash
# Typecheck
npx tsc --noEmit

# Linting
npm run lint

# Build Static Export / SSG
npm run build
```

---

## Peta Struktur Folder

```
src/
  app/
    layout.tsx            # Root layout: Header, Footer, font Inter, Metadata API, JSON-LD, Skip link
    page.tsx              # Beranda (Hero, Tentang, Layanan, Keahlian, Cara Kerja, Merek, Portofolio, WhyUs, CTA, Kontak)
    globals.css           # Design tokens via @theme, styling dasar & aksen gradient
    sitemap.ts            # Dynamic XML sitemap generator
    robots.ts             # Directives crawler & sitemap pointer
    manifest.ts           # Web App Manifest
    not-found.tsx         # Halaman 404
    proyek/
      page.tsx            # Indeks portofolio interaktif dengan filter kategori client-side
      [slug]/
        page.tsx          # Detail studi kasus proyek (statically generated via generateStaticParams)
  components/
    layout/               # Header, Footer, MobileMenu
    sections/             # Modular homepage sections
    cards/                # ServiceCard, ProcessCard, ProjectCard
    forms/                # ContactForm (validasi client & WhatsApp deep-link)
    ui/                   # Container, Button, SectionHeading, DynamicIcon, Badge, FloatingWhatsapp, BackToTop
  data/
    company.ts            # Seluruh konten naratif legal & kontak perusahaan
    projects.ts           # Dataset 9 entri studi kasus portofolio
  types/
    company.ts            # Interfaces data perusahaan & komponen UI
    project.ts            # Interface data proyek & kategori
  lib/
    utils.ts              # Class merging (cn) & resolveSectionHref helper
    whatsapp.ts           # Generator URL WhatsApp deep-link
    validation.ts         # Validasi formulir kontak
```

---

## Cara Menambah Studi Kasus Proyek Baru

Seluruh data portofolio tersimpan di `src/data/projects.ts`. Untuk menambah proyek baru:

1. Buka `src/data/projects.ts`.
2. Tambahkan objek proyek baru di dalam array `projects`:
   ```typescript
   {
     slug: 'judul-proyek-unik',
     title: 'Judul Pekerjaan Teknis',
     category: 'kelistrikan-panel', // Pilihan: kelistrikan-panel, otomasi-kontrol, mekanikal-presisi, hvac-refrigerasi, pompa-perairan, pencahayaan-show
     categoryLabel: 'Kelistrikan & Panel Kontrol',
     sector: 'Gedung Komersial & Perkantoran', // INGAT: DILARANG menulis nama klien resmi!
     summary: 'Ringkasan singkat pekerjaan...',
     challenge: 'Kondisi awal di lapangan...',
     phases: [
       { title: 'Langkah 1', description: 'Deskripsi langkah...' },
       { title: 'Langkah 2', description: 'Deskripsi langkah...' }
     ],
     results: [
       'Hasil pengerjaan 1',
       'Hasil pengerjaan 2'
     ],
     scope: [
       'Lingkup 1',
       'Lingkup 2'
     ],
     components: [
       'Komponen 1',
       'Komponen 2'
     ],
     icon: 'Zap',
     image: '/images/projects/nama-gambar.jpg',
     imageAlt: 'Deskripsi visual gambar',
     featured: true, // Set true jika ingin tampil di beranda (maksimal 6)
   }
   ```
3. Jalankan `npm run build` untuk memverifikasi bahwa halaman `/proyek/[slug]` baru berhasil ter-prerender secara otomatis.

---

## Daftar TODO Sebelum Go-Live Publik

- [ ] **Konfirmasi Domain Resmi**: Update variabel `seo.siteUrl` di `src/data/company.ts` jika domain publik resmi sudah dibeli.
- [ ] **Verifikasi Dokumen PO/BAST**: Cocokkan seluruh 9 entri draf di `src/data/projects.ts` dengan Surat Pesanan / Berita Acara Serah Terima fisik. Hapus entri yang tidak memiliki bukti fisik.
- [ ] **Dokumentasi Foto Lapangan Asli**: Ganti file gambar placeholder di `public/images/projects/` dengan foto hasil pengerjaan tim teknis CBL di lokasi.
- [ ] **Peninjauan Sertifikasi / Izin Legal**: Tambahkan dokumen pendukung legalitas jika diperlukan saat go-live.
# cakrawala-web-3

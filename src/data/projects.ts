/**
 * ============================================================================
 * CATATAN DRAF PORTOFOLIO — CV CAKRAWALA BUANA LESTARI (CBL)
 * ============================================================================
 * STATUS: DRAF DOKUMENTASI TEKNIS INTERNAL
 * 
 * ATURAN KERAHASIAAN & VERIFIKASI (STRIKT PATUHI SPEC.md §8):
 * 1. Seluruh entri studi kasus di bawah ini WAJIB dicocokkan terlebih dahulu dengan
 *    Surat Pesanan (PO) / Berita Acara Serah Terima (BAST) fisik sebelum publikasi go-live.
 * 2. HAPUS atau DRAFTKAN entri yang tidak memiliki bukti fisik pekerjaan di lapangan.
 * 3. DILARANG MENAMPILKAN NAMA KLIEN ATAU MEREK PEMILIK FASILITAS DALAM BENTUK APA PUN.
 *    Identitas klien diwakili secara objektif oleh field `sector`.
 * 4. DILARANG MENGARANG ANGKA PERFORMA ATAU TANGGAL PENGERJAAN (field `period` dan
 *    `metrics` bersifat opsional dan wajib dibiarkan kosong jika tidak ada data sah).
 * ============================================================================
 */

import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'panel-kontrol-mccb-distribusi',
    title: 'Perakitan & Modernisasi Panel Distribusi Utama MCCB',
    category: 'kelistrikan-panel',
    categoryLabel: 'Kelistrikan & Panel Kontrol',
    sector: 'Gedung Komersial & Pusat Perbelanjaan',
    summary: 'Peremajaan panel utama distribusi listrik (PUTR) dan penggantian unit MCCB proteksi arus berlebih untuk stabilitas pasokan energi.',
    challenge: 'Panel distribusi eksisting mengalami peningkatan suhu akibat keausan kontak utama dan ketidakseimbangan beban arus pada busbar utama, berisiko memicu trip mendadak pada jam operasional puncak.',
    phases: [
      {
        title: 'Inspeksi & Pemetaan Arus Beban',
        description: 'Pengukuran termografi inframerah untuk mengidentifikasi titik panas (hotspot) serta audit keseimbangan arus antar-fase pada busbar.',
      },
      {
        title: 'Perakitan & Re-Wiring Komponen Proteksi',
        description: 'Penggantian unit MCCB utama, pembersihan kontaktor daya, serta penataan ulang kabel sistem interlock otomatis.',
      },
      {
        title: 'Pengujian Uji Beban & Simulasi Trip',
        description: 'Pengujian pengoperasian pengaman arus hubung singkat dan simulasi perpindahan sumber daya darurat.',
      },
    ],
    results: [
      'Eliminasi kenaikan suhu abnormal pada panel utama distribusi',
      'Keseimbangan pembagian arus antar-fase terjaga sesuai ambang batas toleransi teknis',
      'Penerbitan diagram skema penataan kabel terbarukan untuk tim pemeliharaan gedung',
    ],
    scope: [
      'Penggantian Main MCCB & Molded Case Circuit Breaker cabang',
      'Pembersihan & pemantauan kekencangan busbar tembaga',
      'Instalasi meter pemantau digital Ampere / Volt / Hz',
      'Pengujian isolasi kabel utama (Megger Test)',
    ],
    components: [
      'Molded Case Circuit Breaker (MCCB)',
      'Digital Power Meter & Current Transformer',
      'Busbar Tembaga Murni berinsulasi',
      'Pilot Lamp & Push Button Industrial',
    ],
    icon: 'Zap',
    image: '/images/projects/panel-kontrol-mccb-distribusi/panel-distribusi-utama-01.webp',
    imageAlt: 'Panel distribusi utama dengan penataan busbar dan terminal kabel presisi',
    featured: true,
  },
  {
    slug: 'migrasi-plc-hmi-otomasi',
    title: 'Migrasi Modul PLC & Pembaruan Antarmuka Layar Sentuh HMI',
    category: 'otomasi-kontrol',
    categoryLabel: 'Otomasi & Sistem Kontrol',
    sector: 'Fasilitas Manufaktur & Pengolahan',
    summary: 'Pembaruan pengendali logika terpogram (PLC) versi terdahulu ke arsitektur modul terkini serta pembuatan antarmuka HMI interaktif.',
    challenge: 'Modul PLC lama mengalami kelangkaan suku cadang pengganti dan layar HMI mengalami penurunan kepekaan sentuh, mengganggu fleksibilitas perbaikan urutan kerja mesin produksi.',
    phases: [
      {
        title: 'Backup Logika Program & Konversi Kode',
        description: 'Penekstrakan logika ladder lama dan translasi alur perintah ke arsitektur perangkat lunak PLC terbarukan.',
      },
      {
        title: 'Penggantian Pengendali & Pengkabelan I/O',
        description: 'Pemasangan unit CPU PLC baru beserta rak modul masukan/keluaran (I/O) dan pengkabelan ulang terminal sensor.',
      },
      {
        title: 'Pengembangan Desain HMI & Uji Komisioning',
        description: 'Perancangan ulang tata letak grafik pemantauan pada layar HMI dan pengujian kendali otomatis secara berurutan.',
      },
    ],
    results: [
      'Kepastian ketersediaan suku cadang modul kendali dalam jangka panjang',
      'Kecepatan respon tanggap perintah antar-layar HMI dan mesin meningkat',
      'Kemudahan diagnosa pesan kesalahan (alarm code) oleh operator mesin',
    ],
    scope: [
      'Pemrograman logika Ladder Diagram PLC',
      'Desain antarmuka grafik Touchscreen HMI',
      'Pemasangan modul komunikasi Ethernet/IP',
      'Testing simulasi urutan instruksi kerja otomatis',
    ],
    components: [
      'Programmable Logic Controller (PLC)',
      'Human Machine Interface (HMI) Touchscreen',
      'Modul Digital & Analog Input/Output',
      'Power Supply Industrial 24VDC',
    ],
    icon: 'Cpu',
    image: '/images/projects/migrasi-plc-hmi-otomasi/migrasi-plc-hmi-01.webp',
    imageAlt: 'Layar antarmuka HMI dan modul kontrol otomatisasi industri',
    featured: true,
  },
  {
    slug: 'alignment-gearbox-bearing-presisi',
    title: 'Alignment Poros Transmisi & Penggantian Bearing Presisi',
    category: 'mekanikal-presisi',
    categoryLabel: 'Mekanikal & Komponen Presisi',
    sector: 'Infrastruktur Pengangkut & Konveyor',
    summary: 'Penyelarasan laser (laser alignment) poros penggerak gearbox dan pergantian bantalan bearing presisi untuk meredam getaran mekanikal.',
    challenge: 'Tingkat getaran (vibration level) pada unit reducer penggerak konveyor melebihi ambang batas teknis, menyebabkan keausan dini pada seal minyak dan risiko patah poros transmisi.',
    phases: [
      {
        title: 'Analisis Getaran & Pengukuran Defleksi',
        description: 'Deteksi frekuensi getaran pada rumah bearing serta pengukuran ketidaklurusan poros penggerak dengan dial indicator.',
      },
      {
        title: 'Pelepasan & Pemasangan Bearing Metode Termal',
        description: 'Pengangkatan bearing aus dan induksi pemanasan termal teratur untuk pemasangan bearing presisi baru tanpa merusak toleransi poros.',
      },
      {
        title: 'Penyelarasan Laser Poros & Test Run Beban',
        description: 'Penyetelan posisi gearbox terhadap motor penggerak menggunakan alat penyelarasan laser presisi tinggi.',
      },
    ],
    results: [
      'Penurunan tingkat getaran mekanikal kembali ke zona aman spesifikasi standar',
      'Pencegahan kebocoran minyak pelumas pada seal reducer gearbox',
      'Perpanjangan estimasi usia pakai komponen transmisi penggerak',
    ],
    scope: [
      'Laser Shaft Alignment dua sumbu (Horizontal & Vertikal)',
      'Penggantian bearing bola / rol presisi',
      'Pemeriksaan kepresisian coupling penghubung',
      'Pengisian pelumas sintetis khusus transmisi',
    ],
    components: [
      'Precision Ball / Tapered Roller Bearing',
      'Flexible Shaft Coupling',
      'Induction Bearing Heater tool',
      'Laser Alignment System Meter',
    ],
    icon: 'Wrench',
    image: '/images/projects/alignment-gearbox-bearing-presisi/alignment-bearing-presisi-01.webp',
    imageAlt: 'Pengukuran alignment dan perawatan komponen transmisi daya presisi',
    featured: true,
  },
  {
    slug: 'overhaul-hvac-vrf-chiller',
    title: 'Penanganan Overhaul & Pemeliharaan Sistem HVAC VRF',
    category: 'hvac-refrigerasi',
    categoryLabel: 'HVAC & Refrigerasi',
    sector: 'Fasilitas Rekreasi & Gedung Pertemuan',
    summary: 'Pembersihan kimiawi sistem perpipaan refrigeran, perbaikan unit kompresor outdoor, dan kalibrasi katup ekspansi HVAC VRF.',
    challenge: 'Sistem pengondisian udara mengalami penurunan efisiensi pendinginan dan tekanan tinggi abnormal pada siklus kondensasi akibat penumpukan kerak oli serta kerusakan sensor suhu.',
    phases: [
      {
        title: 'Recovery Refrigeran & Flushing Perpipaan',
        description: 'Penarikan gas freon menggunakan unit recovery dan pembersihan bagian dalam pipa tembaga dari kontaminasi sisa oli.',
      },
      {
        title: 'Penggantian Kompresor & Vacuum Test',
        description: 'Pemasangan unit kompresor penganti, penggantian filter drier, dan proses pengosongan vakum hingga kisaran micron rendah.',
      },
      {
        title: 'Pengisian Freon Presisi & Tuning Parameter',
        description: 'Pengisian kembali refrigeran sesuai timbangan spesifikasi pabrikan dan penyetelan respon katup ekspansi elektronik.',
      },
    ],
    results: [
      'Pencapaian temperatur pendinginan ruangan sesuai dengan setpoint yang ditentukan',
      'Stabilisasi arus daya kompresor outdoor pada nominal arus kerja normal',
      'Pengurangan kebisingan operasional dari unit kondensor outdoor',
    ],
    scope: [
      'Prosedur flushing & pembersihan sistem pendingin',
      'Pengantian kompresor hermetic / semi-hermetic',
      'Kalibrasi sensor tekanan tinggi/rendah & thermistor',
      'Pemeriksaan kerapatan perpipaan dengan uji nitrogen',
    ],
    components: [
      'Scroll / Rotary Inverter Compressor',
      'Electronic Expansion Valve (EEV)',
      'Filter Drier & Sight Glass',
      'Refrigerant R410A / R32 Spesifikasi Teknis',
    ],
    icon: 'Wind',
    image: '/images/projects/hvac-vrf.jpg',
    imageAlt: 'Visual ilustrasi perawatan unit kompresor outdoor dan pendingin HVAC VRF',
    featured: true,
  },
  {
    slug: 'sistem-pompa-booster-sirkulasi',
    title: 'Otomatisasi & Instalasi Paralel Sistem Pompa Booster',
    category: 'pompa-perairan',
    categoryLabel: 'Pompa & Sistem Perairan',
    sector: 'Gedung Operasional & Wahana Air',
    summary: 'Perancangan panel kendali pergantian otomatis (alternating control) tiga unit pompa booster bertekanan konstan.',
    challenge: 'Fluktuasi tekanan air pada jaringan distribusi puncak mengakibatkan kavitasi pada sirkulasi pompa tunggal dan lonjakan beban listrik start awal.',
    phases: [
      {
        title: 'Perhitungan Head Total & Instalasi Manifold',
        description: 'Pemasangan perpipaan manifold stainless steel lengkap dengan katup pengarah (check valve) dan pemutus getaran (flexible joint).',
      },
      {
        title: 'Perakitan Panel VFD & Pressure Transducer',
        description: 'Integrasi penggerak frekuensi variabel (VFD) dengan sensor tekanan 4-20mA untuk pengaturan kecepatan putar motor pompa.',
      },
      {
        title: 'Penyetelan PID Controller & Uji Sirkulasi',
        description: 'Kalibrasi parameter PID pada inverter untuk mempertahankan tekanan air konstan pada berbagai variasi pemakaian.',
      },
    ],
    results: [
      'Tekanan air pada seluruh titik luar terdistribusi secara konstan tanpa kejutan tekanan',
      'Pengurangan lonjakan arus kelistrikan saat pengoperasian awal pompa (soft acceleration)',
      'Pemerataan jam kerja operasional antar-pompa melalui sistem giliran otomatis',
    ],
    scope: [
      'Instalasi unit pompa sentrifugal / multi-stage',
      'Pemasangan VFD & PID Controller tekanan konstan',
      'Perakitan tangki tekan (pressure tank) & pressure switch',
      'Penyetelan perlindungan kavitasi & pemutus air kosong (dry-run protection)',
    ],
    components: [
      'Vertical Multistage Centrifugal Pump',
      'Variable Frequency Drive (VFD)',
      'Pressure Transducer Analogue 4-20mA',
      'Diaphragm Pressure Tank',
    ],
    icon: 'Droplets',
    image: '/images/projects/booster-pump.jpg',
    imageAlt: 'Visual ilustrasi otomatisasi rangkaian pompa booster bertekanan tinggi',
    featured: true,
  },
  {
    slug: 'underwater-lighting-stage-wahana',
    title: 'Instalasi Pencahayaan Underwater IP68 & Sistem Lampu Show',
    category: 'pencahayaan-show',
    categoryLabel: 'Pencahayaan & Sistem Show',
    sector: 'Fasilitas Rekreasi & Kolam Pertunjukan',
    summary: 'Pemasangan armatur lampu bawah air standar kedap air IP68 dan pengintegrasian sinyal kendali DMX untuk pencahayaan panggung rekreasi.',
    challenge: 'Armatur lampu bawah air eksisting mengalami kebocoran insulasi akibat korosi sambungan kabel, memicu pemutus arus ELCB sering trip dan menurunkan estetika pertunjukan.',
    phases: [
      {
        title: 'Pembersihan Kelenjar Pipa & Pengujian Proteksi Arus',
        description: 'Audit kebocoran arus listrik tanah (earth-leakage) dan penggantian transformator isolasi keselamatan tegangan rendah 12VAC/24VDC.',
      },
      {
        title: 'Pemasangan Lampu LED IP68 & Resin Sealing',
        description: 'Penempatan armatur lampu stainles steel kedap air dengan metode pelapisan resin penyekat khusus pada titik percabangan kabel.',
      },
      {
        title: 'Pengaturan Konsol DMX & Sinkronisasi Warna',
        description: 'Pemrograman urutan sinyal warna dan efek pencahayaan pada controller panggung untuk selaras dengan ritme fasilitas.',
      },
    ],
    results: [
      'Tingkat keamanan insulasi listrik bawah air teruji aman dari bahaya kebocoran arus',
      'Ketahanan penuh armatur terhadap tekanan air dan bahan kimia pengolahan kolam',
      'Kemudahan pembuatan skenario urutan lampu pertunjukan melalui konsol kendali utama',
    ],
    scope: [
      'Instalasi armatur LED Underwater IP68',
      'Pengkabelan tegangan ekstra rendah aman (SELV 12V/24V)',
      'Perakitan panel konsol kendali DMX512',
      'Pengujian proteksi ELCB / RCD 30mA',
    ],
    components: [
      'Stainless Steel IP68 Underwater LED Fixture',
      'Safety Isolation Transformer 230V to 12V/24V',
      'DMX512 Lighting Controller & Decoder',
      'Earth Leakage Circuit Breaker (ELCB) 30mA',
    ],
    icon: 'Lightbulb',
    image: '/images/projects/underwater-lighting.jpg',
    imageAlt: 'Visual ilustrasi instalasi pencahayaan lampu bawah air IP68 fasilitas rekreasi',
    featured: true,
  },
  {
    slug: 'starter-motor-vfd-inverter',
    title: 'Instalasi Soft Starter & Inverter Penggerak Motor Induksi',
    category: 'kelistrikan-panel',
    categoryLabel: 'Kelistrikan & Panel Kontrol',
    sector: 'Infrastruktur Komersial & Bangunan Gedung',
    summary: 'Pemasangan modul Soft Starter dan penggerak frekuensi inverter untuk penanganan akselerasi bertahap motor listrik daya besar.',
    challenge: 'Pengoperasian awal motor induksi pompa dan blower menggunakan metoda Direct-On-Line (DOL) menimbulkan kejutan lonjakan arus hingga 6 kali lipat dari arus nominal.',
    phases: [
      {
        title: 'Evaluasi Arus Beban & Penentuan Daya Inverter',
        description: 'Perhitungan besar daya kVA inverter dan kapasitas pelepasan panas (heat dissipation) pada ruang panel.',
      },
      {
        title: 'Pemasangan Komponen & Re-Wiring Kontrol',
        description: 'Instalasi unit inverter lengkap dengan line reactor pelindung harmonic dan penataan kabel daya berpelindung (shielded cable).',
      },
      {
        title: 'Penyetelan Ramp-Up Time & Uji Pengoperasian',
        description: 'Pengaturan parameter waktu akselerasi/deselerasi dan pembatasan arus maksimum saat motor dijalankan.',
      },
    ],
    results: [
      'Eliminasi kedipan tegangan listrik (voltage dip) pada jaringan distribusi gedung saat motor start',
      'Penyesuaian kecepatan putar motor sesuai dengan variasi kebutuhan beban aktual',
    ],
    scope: [
      'Pemasangan VFD & Soft Starter Heavy-Duty',
      'Instalasi Input/Output Line Reactor',
      'Pemrograman parameter frekuensi & proteksi beban lebih',
    ],
    components: [
      'Industrial Inverter / VFD Module',
      'AC Line / Load Reactor',
      'Braking Resistor Unit',
    ],
    icon: 'Zap',
    image: '/images/projects/vfd-starter.jpg',
    imageAlt: 'Visual perakitan modul inverter VFD dan starter motor induksi',
    featured: false,
  },
  {
    slug: 'integrasi-sensor-soft-starter',
    title: 'Integrasi Sensor Suhu & Otomatisasi Proteksi Blower',
    category: 'otomasi-kontrol',
    categoryLabel: 'Otomasi & Sistem Kontrol',
    sector: 'Fasilitas Utilitas & Operasional Gedung',
    summary: 'Pemasangan pemantau suhu permukaan motor (PT100) dan pengintegrasian sinyal mati-darurat ke modul kontrol otomatis.',
    challenge: 'Unit blower exhaust gedung beberapa kali mengalami overheating karena sumbatan filter udara tanpa ada sinyal peringatan dini kepada staf teknis.',
    phases: [
      {
        title: 'Pemasangan Sensor Suhu PT100',
        description: 'Penempatan modul transmiter temperatur pada kumparan stator motor dan rumah bearing blower.',
      },
      {
        title: 'Integrasi Sinyal ke Relay Kontrol Interlock',
        description: 'Pengkabelan sinyal pemutus otomatis apabila ambang batas suhu kerja terlampaui.',
      },
    ],
    results: [
      'Pencegahan kerusakan terbakar pada lilitan kumparan motor blower',
      'Peringatan dini alarm indikasi kenaikan suhu abnormal',
    ],
    scope: [
      'Pemasangan sensor suhu PT100 RTD',
      'Integrasi Temperature Transmitter 4-20mA',
      'Testing simulasi respon batas trip suhu',
    ],
    components: [
      'PT100 Temperature Sensor Element',
      'Digital Temperature Controller / Relay',
    ],
    icon: 'Cpu',
    image: '/images/projects/sensor-integration.jpg',
    imageAlt: 'Visual integrasi sensor temperatur dan instrumen otomatisasi proteksi',
    featured: false,
  },
  {
    slug: 'filtrasi-kolam-otomatisasi-pompa',
    title: 'Pembersihan & Otomatisasi Filtrasi Air Kolam Rekreasi',
    category: 'pompa-perairan',
    categoryLabel: 'Pompa & Sistem Perairan',
    sector: 'Fasilitas Rekreasi & Wahana Air',
    summary: 'Pembaruan sistem filtrasi pasir kuarsa dan pembuatan jadwal pencucian balik (backwash) otomatis berbasis timer interlock.',
    challenge: 'Kerapatan media filter lama mengalami penurunan efisiensi kejernihan air dan proses backwash manual sering terlambat dilaksanakan.',
    phases: [
      {
        title: 'Penggantian Media Filter & Checking Valve',
        description: 'Pengangkatan media penyaring lama dan pengisian kembali pasir kuarsa berspesifikasi gradasi teknis presisi.',
      },
      {
        title: 'Instalasi Valve Otomatis & Panel Waktu',
        description: 'Pemasangan katup solenoid bermotor dan penyesuaian waktu siklus pembersihan filter.',
      },
    ],
    results: [
      'Kualitas Kejernihan air fasilitas terpelihara stabil pada standar operasional',
      'Pelaksanaan pencucian balik filter berjalan otomatis tanpa mengganggu jadwal buka wahana',
    ],
    scope: [
      'Penggantian media pasir kuarsa & karbon aktif',
      'Pemasangan Motorized Butterfly Valve',
      'Pemrograman panel jadwal otomatisasi timer',
    ],
    components: [
      'Commercial Sand Filter Vessel',
      'Motorized Control Valve',
      'Digital Weekly Timer Switch',
    ],
    icon: 'Droplets',
    image: '/images/projects/filtration-system.jpg',
    imageAlt: 'Visual otomatisasi sistem filtrasi pasir dan pompa sirkulasi air',
    featured: false,
  },
];

export const projectCategories = [
  { id: 'all', label: 'Semua Kategori' },
  { id: 'kelistrikan-panel', label: 'Kelistrikan & Panel' },
  { id: 'otomasi-kontrol', label: 'Otomasi & PLC' },
  { id: 'mekanikal-presisi', label: 'Mekanikal Presisi' },
  { id: 'hvac-refrigerasi', label: 'HVAC & Refrigerasi' },
  { id: 'pompa-perairan', label: 'Pompa & Perairan' },
  { id: 'pencahayaan-show', label: 'Pencahayaan & Show' },
] as const;

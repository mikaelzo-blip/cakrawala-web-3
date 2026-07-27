import { CompanyInfo, ServiceDivision, ExpertiseItem, WorkProcessStep, BrandItem, WhyUsPoint, NavigationItem } from '@/types/company';

// TODO: konfirmasi domain sebelum go-live
export const companyInfo: CompanyInfo = {
  legalName: 'CV Cakrawala Buana Lestari',
  shortName: 'CBL',
  address: 'Jl Papanggo 2C No. 38, Kel. Papanggo, Kec. Tanjung Priok, Jakarta Utara 14340',
  phone: '02126063396',
  phoneRaw: '02126063396',
  whatsappNumber: '6285712342760',
  whatsappFormatted: '0857-1234-2760',
  email: 'cvcakrawala.market@gmail.com',
  serviceHours: '24 jam / 7 hari',
  seo: {
    siteUrl: 'https://cakrawala-buana-lestari.co.id', // TODO: konfirmasi domain sebelum go-live
    defaultTitle: 'CV Cakrawala Buana Lestari (CBL) — Penyedia Jasa Teknik Terpadu',
    defaultDescription: 'Penyedia layanan teknik industri & fasilitas terpadu: kelistrikan & panel kontrol, otomasi PLC/HMI, mekanikal presisi, HVAC refrigerasi, sistem pompa, dan pencahayaan khusus.',
    ogImage: '/images/og-cbl.jpg',
  },
};

export const mainNavItems: NavigationItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Portofolio', href: '/proyek' },
  { label: 'Mengapa CBL', href: '#mengapa-cbl' },
  { label: 'Kontak', href: '#kontak' },
];

export const serviceDivisions: ServiceDivision[] = [
  {
    id: 'kelistrikan-panel',
    title: 'Kelistrikan & Panel Kontrol',
    description: 'Perakitan, perbaikan, dan perawatan panel distribusi listrik industri serta sistem proteksi arus daya.',
    iconName: 'Zap',
    capabilities: [
      'Panel kontrol & distribusi utama',
      'MCCB & sistem proteksi kelistrikan',
      'Kontaktor & perakitan starter motor',
      'Inverter motor (VFD) & speed controller',
      'Panel view & instrumen pemantauan daya',
      'Troubleshooting kelistrikan & perbaikan darurat',
    ],
  },
  {
    id: 'otomasi-kontrol',
    title: 'Otomasi & Sistem Kontrol',
    description: 'Modernisasi sistem kendali otomatisasi proses, migrasi PLC, dan integrasi kendali terpusat.',
    iconName: 'Cpu',
    capabilities: [
      'Migrasi & pemrograman PLC',
      'Pengembangan antarmuka HMI',
      'Integrasi sensor & aktuator lapangan',
      'Pemasangan & penyetelan Soft Starter',
      'Kontrol motor terintegrasi',
      'Commissioning & kalibrasi kendali',
    ],
  },
  {
    id: 'mekanikal-presisi',
    title: 'Mekanikal & Komponen Presisi',
    description: 'Instalasi, penggantian, dan alignment unit mekanikal transmisi daya dan konveyor industri.',
    iconName: 'Wrench',
    capabilities: [
      'Pemasangan & penggantian bearing presisi',
      'Perawatan & perbaikan gearbox transmisi',
      'Coupling & shaft alignment',
      'Sistem konveyor & perbaikan rantai penggerak',
      'Laser alignment & penyelarasan mekanikal',
    ],
  },
  {
    id: 'hvac-refrigerasi',
    title: 'HVAC & Refrigerasi',
    description: 'Penanganan sistem pengondisian udara skala besar, pendingin proses, dan perpipaan ducting.',
    iconName: 'Wind',
    capabilities: [
      'Penanganan AC VRF & sistem chiller',
      'Instalasi & perbaikan AC split duct / ceiling',
      'Perancangan & perbaikan fabrikasi ducting',
      'Overhaul & perbaikan kompresor refrigerasi',
      'Sistem pendingin proses industri',
      'Preventive maintenance berkala',
    ],
  },
  {
    id: 'pompa-perairan',
    title: 'Pompa & Sistem Perairan',
    description: 'Instalasi, overhaul, dan pembuatan otomatisasi sistem pemompaan air gedung serta fasilitas rekreasi.',
    iconName: 'Droplets',
    capabilities: [
      'Pompa air transfer & submersible',
      'Sistem booster & peningkat tekanan',
      'Sistem sirkulasi pendingin & wahana',
      'Filtrasi kolam & pengolahan air bersih',
      'Panel kontrol otomatisasi pompa',
    ],
  },
  {
    id: 'pencahayaan-show',
    title: 'Pencahayaan & Sistem Show',
    description: 'Instalasi penerangan teknis area luas, pencahayaan panggung rekreasi, dan underwater lighting.',
    iconName: 'Lightbulb',
    capabilities: [
      'Area lighting & floodlight gedung',
      'Stage lighting & sistem lampu pertunjukan',
      'Underwater lighting untuk wahana air',
      'Control lighting & integrasi dimmer',
      'Pencahayaan arsitektural lanskap',
    ],
  },
];

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'distribusi-daya',
    title: 'Distribusi & Proteksi Daya',
    description: 'Perancangan dan pengujian sistem pembagi arus listrik dengan tingkat proteksi isolasi sesuai standar teknis keselamatan.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'pemrograman-plc',
    title: 'Program PLC & Logika Industri',
    description: 'Pengkodean logika kontrol PLC untuk efisiensi urutan kerja mesin dan pencegahan kecelakaan operasional.',
    iconName: 'Code',
  },
  {
    id: 'penyelarasan-mekanikal',
    title: 'Penyelarasan Shaft & Bearing',
    description: 'Toleransi pengukuran presisi tinggi pada pemasangan bearing dan poros untuk meminimalkan getaran dan aus.',
    iconName: 'Activity',
  },
  {
    id: 'termodinamika-hvac',
    title: 'Sirkulasi Termal & HVAC',
    description: 'Pengaturan kesetimbangan tekanan refrigeran dan aliran udara ducting untuk stabilitas suhu ruangan operasional.',
    iconName: 'Thermometer',
  },
  {
    id: 'dinamika-fluida-pompa',
    title: 'Otomatisasi Aliran Fluida',
    description: 'Penyetelan head total dan debit pompa berpasangan dengan pemantauan tekanan otomatis.',
    iconName: 'Gauge',
  },
  {
    id: 'pencahayaan-khusus',
    title: 'Pencahayaan Khusus & Outdoor',
    description: 'Pemasangan armatur lampu kedap air (IP68) dan penataan konsol pengendali ritme pencahayaan pertunjukan.',
    iconName: 'Sparkles',
  },
];

export const workProcessSteps: WorkProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Konsultasi & Survei Lapangan',
    description: 'Pemeriksaan teknis langsung di lokasi fasilitas untuk mengidentifikasi gejala kerusakan, mengukur spesifikasi eksisting, dan merumuskan lingkup penanganan.',
    details: [
      'Inspeksi fisik dan pengukuran parameter operasional',
      'Diskusi teknis dengan tim engineering / fasilitas',
      'Penyusunan laporan temuan dan opsi solutif',
    ],
  },
  {
    stepNumber: 2,
    title: 'Pengadaan & Pemasangan',
    description: 'Pemilihan suku cadang sesuai spesifikasi teknis dan pelaksanaan pekerjaan teknis dengan standar keselamatan kerja ketat.',
    details: [
      'Penyediaan komponen bermerek dan terverifikasi',
      'Pemasangan komponen presisi dan perakitan kabel/perpipaan',
      'Penerapan APD dan prosedur isolasi energi aman',
    ],
  },
  {
    stepNumber: 3,
    title: 'Commissioning & Pelatihan',
    description: 'Pengujian beban sistem secara bertahap untuk memastikan kesesuaian parameter teknis sebelum pengoperasian penuh.',
    details: [
      'Test run dan kalibrasi sensor / proteksi',
      'Pengujian simulasi kondisi darurat dan kendali',
      'Instruksi penggunaan kepada staf operasional setempat',
    ],
  },
  {
    stepNumber: 4,
    title: 'Dokumentasi & Serah Terima',
    description: 'Penyusunan berkas hasil pekerjaan secara transparan sebagai referensi perawatan fasilitas di masa mendatang.',
    details: [
      'Penerbitan Berita Acara Serah Terima (BAST)',
      'Penyerahan skema wiring / diagram sistem terbaru',
      'Rekomendasi jadwal perawatan preventif',
    ],
  },
];

export const brandItems: BrandItem[] = [
  { id: 'allen-bradley', name: 'Allen-Bradley', category: 'Otomasi & PLC', logoText: 'Allen-Bradley' },
  { id: 'schneider', name: 'Schneider Electric', category: 'Kelistrikan & Kontrol', logoText: 'Schneider' },
  { id: 'sew-eurodrive', name: 'SEW Eurodrive', category: 'Gearbox & Motor', logoText: 'SEW-Eurodrive' },
  { id: 'rexnord', name: 'Rexnord', category: 'Coupling & Transmisi', logoText: 'Rexnord' },
  { id: 'skf', name: 'SKF', category: 'Bearing Presisi', logoText: 'SKF' },
  { id: 'timken', name: 'Timken', category: 'Bearing Industri', logoText: 'Timken' },
  { id: 'grundfos', name: 'Grundfos', category: 'Pompa & Perairan', logoText: 'Grundfos' },
  { id: 'sta-rite', name: 'Sta-Rite', category: 'Pompa & Filtrasi', logoText: 'Sta-Rite' },
];

export const brandDisclaimer = 
  'Merek dan logo yang tercantum adalah milik dari masing-masing pemegang hak cipta. Ditampilkan semata-mata untuk menjelaskan cakupan spesifikasi suku cadang dan komponen teknis yang biasa ditangani oleh tim CBL. CV Cakrawala Buana Lestari bukan merupakan distributor resmi atau authorized partner dari merek-merek tersebut.';

export const portfolioConfidentialityNotice = 
  'Demi menjaga kerahasiaan dan privasi operasional mitra, nama spesifik perusahaan dan lokasi rinci tidak dipublikasikan. Studi kasus di atas menyajikan gambaran teknis objektif dari proyek penanganan yang telah direalisasikan oleh CBL.';

export const whyUsPoints: WhyUsPoint[] = [
  {
    id: 'multi-disiplin',
    title: 'Layanan Teknik Terpadu',
    description: 'Satu pintu penanganan untuk masalah kelistrikan, mekanikal, otomatisasi, dan HVAC tanpa perlu koordinasi banyak sub-kontraktor.',
    iconName: 'Layers',
  },
  {
    id: 'reaksi-cepat',
    title: 'Dukungan Siaga 24 Jam',
    description: 'Tim teknis siap merespon panggilan darurat kendala fasilitas operasional kapan pun terjadi downtime.',
    iconName: 'Clock',
  },
  {
    id: 'pendekatan-teknis',
    title: 'Pendekatan Berbasis Komponen SAH',
    description: 'Penggunaan suku cadang bermerek industri bereputasi untuk menjamin keandalan umur pakai sistem.',
    iconName: 'CheckCircle2',
  },
  {
    id: 'transparansi-kerja',
    title: 'Dokumentasi & Berita Acara Rinci',
    description: 'Setiap tahapan penanganan disertai laporan pengujian parameter teknis dan skema sistem terbarukan.',
    iconName: 'FileText',
  },
];

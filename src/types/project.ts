export type ProjectCategory = 
  | 'kelistrikan-panel'
  | 'otomasi-kontrol'
  | 'mekanikal-presisi'
  | 'hvac-refrigerasi'
  | 'pompa-perairan'
  | 'pencahayaan-show';

export interface ProjectPhase {
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  sector: string; // Misal: "Fasilitas Rekreasi & Wahana", "Gedung Perkantoran" - TANPA NAMA KLIEN
  summary: string;
  challenge: string;
  phases: ProjectPhase[];
  results: string[];
  scope: string[];
  components: string[];
  icon: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  period?: string; // opsional - biarkan kosong/undefined jika tak ada bukti
  metrics?: ProjectMetric[]; // opsional - biarkan kosong jika tak ada data sah
}

export interface CategoryOption {
  id: 'all' | ProjectCategory;
  label: string;
}

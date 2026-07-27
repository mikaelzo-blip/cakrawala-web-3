export interface CompanyInfo {
  legalName: string;
  shortName: string;
  address: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  email: string;
  serviceHours: string;
  seo: {
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
}

export interface ServiceDivision {
  id: string;
  title: string;
  description: string;
  iconName: string;
  capabilities: string[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WorkProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
}

export interface BrandItem {
  id: string;
  name: string;
  category: string;
  logoText: string;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

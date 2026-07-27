import { companyInfo } from '@/data/company';
import { ContactFormData } from './validation';

export function buildWhatsappUrl(data: ContactFormData): string {
  const targetNumber = companyInfo.whatsappNumber;

  const lines = [
    `*FORMULIR KONSULTASI TEKNIS — CBL*`,
    `--------------------------------------`,
    `*Nama:* ${data.name.trim()}`,
    `*Perusahaan/Fasilitas:* ${data.company.trim()}`,
    data.position ? `*Jabatan:* ${data.position.trim()}` : null,
    `*No. WhatsApp:* ${data.whatsapp.trim()}`,
    data.email ? `*Email:* ${data.email.trim()}` : null,
    `*Jenis Layanan:* ${data.serviceInterest}`,
    `*Lokasi Pekerjaan:* ${data.location.trim()}`,
    `--------------------------------------`,
    `*Pesan / Deskripsi Kebutuhan:*`,
    `${data.message.trim()}`,
  ].filter(Boolean);

  const text = lines.join('\n');
  const encodedText = encodeURIComponent(text);

  return `https://wa.me/${targetNumber}?text=${encodedText}`;
}

export function buildProjectWhatsappUrl(projectTitle: string): string {
  const targetNumber = companyInfo.whatsappNumber;
  const text = `Halo CBL, saya berminat berkonsultasi mengenai studi kasus penanganan teknis: *${projectTitle}*. Mohon informasi ketersediaan peninjauan di lokasi kami.`;
  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
}
